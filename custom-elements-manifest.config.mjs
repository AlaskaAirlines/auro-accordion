// Copyright (c) 2025 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

// Custom Elements Manifest analyzer configuration.
//
// This mirrors the config auro-formkit publishes so auro-accordion owns and
// version-controls its own CEM generation instead of relying on whichever
// config the installed auro-cli happens to bundle. The globs are adapted to
// this standalone repo's `src/` layout, and the plugin stack reproduces the
// behavior auro-cli applies today so the generated manifest does not regress:
//   - deprecated-prose  — auro-library shared plugin: promotes deprecation prose
//                         on @event/@slot tags into the CEM `deprecated` field
//   - cem-sorter        — deterministic ordering (deprecated members last)
//   - jsx-types         — emits dist/index.d.ts for framework JSX/IntelliSense
//   - add-dts-exports   — appends the svelteHTML global + re-exports to the d.ts
//   - force-private     — honors `@forcePrivate` JSDoc to hide members/attrs

import { deprecatedProseToFieldPlugin } from "@aurodesignsystem/auro-library/scripts/build/deprecatedProseToFieldPlugin.mjs";
import { cemSorterPlugin } from "@wc-toolkit/cem-sorter";
import { jsxTypesPlugin } from "@wc-toolkit/jsx-types";
import { toCamelCase } from "@wc-toolkit/cem-utilities";
import { appendFileSync } from "node:fs";

/**
 * Appends the svelteHTML global augmentation and re-export statements to the
 * generated `dist/index.d.ts` so Svelte consumers pick up the custom elements.
 * @returns {import("@custom-elements-manifest/analyzer").Plugin}
 */
function addDtsExportsPlugin() {
  return {
    name: "add-dts-exports-plugin",
    packageLinkPhase({ customElementsManifest }) {
      const indexModules = customElementsManifest.modules.filter((module) =>
        module.path.endsWith("src/index.js"),
      );

      if (indexModules.length === 0) {
        console.warn(
          "No module found with path ending in 'src/index.js'. Skipping export statement addition.",
        );
        return;
      }

      const indexModule = indexModules[0];
      if (!indexModule.exports || indexModule.exports.length === 0) {
        console.warn(
          "No exports found for 'src/index.js'. Skipping export statement addition.",
        );
        return;
      }

      const exportNames = indexModule.exports.map((entry) => entry.name);

      const dtsAddition = `declare global {
  namespace svelteHTML {
    interface IntrinsicElements extends CustomElements {}
  }
}


export { ${exportNames.join(", ")} } from "./index.js";
`;

      // Synchronous write: CEM analyzer plugin phases have no async contract,
      // so an awaited/fire-and-forget append could land after the analyzer
      // finishes or race jsxTypesPlugin's own write to this same file.
      try {
        appendFileSync("dist/index.d.ts", dtsAddition);
        console.info("Appended export statements to index.d.ts");
      } catch (error) {
        console.error(`Error appending to index.d.ts: ${error.message}`);
      }
    },
  };
}

/**
 * Reads `@forcePrivate` JSDoc tags (whose comment lists quoted member/attribute
 * names) and marks those members private / removes those attributes from the
 * manifest, letting a component hide internals that Lit would otherwise expose.
 * @returns {import("@custom-elements-manifest/analyzer").Plugin}
 */
function forcePrivatePlugin() {
  return {
    name: "force-private-plugin",
    analyzePhase({ ts, node, context }) {
      if (node.kind !== ts.SyntaxKind.ClassDeclaration) {
        return;
      }

      const className = node.name?.getText();
      if (!className) {
        return;
      }

      const collect = (jsDoc) => {
        jsDoc?.forEach((doc) => {
          doc?.tags?.forEach((tag) => {
            if (tag.tagName.getText() !== "forcePrivate") {
              return;
            }

            const { comment } = tag;
            let names = [];
            if (typeof comment === "string") {
              const matches = comment.match(/['"]([^'"]+)['"]/g);
              if (matches) {
                names = matches.map((match) => match.replace(/['"]/g, ""));
              }
            }

            if (!context.forcePrivateProperties) {
              context.forcePrivateProperties = new Map();
            }
            const existing = context.forcePrivateProperties.get(className) || [];
            context.forcePrivateProperties.set(className, [...existing, ...names]);
          });
        });
      };

      collect(node?.jsDoc);
      node.members?.forEach((member) => collect(member?.jsDoc));
    },
    packageLinkPhase({ customElementsManifest, context }) {
      if (!context.forcePrivateProperties || context.forcePrivateProperties.size === 0) {
        return;
      }

      customElementsManifest.modules?.forEach((module) => {
        module.declarations?.forEach((declaration) => {
          const forced = context.forcePrivateProperties.get(declaration.name);
          if (!forced || forced.length === 0) {
            return;
          }

          if ("members" in declaration && declaration.members) {
            declaration.members.forEach((member) => {
              if (forced.includes(member.name)) {
                console.log(
                  `\rFound member '${member.name}' in ${declaration.name}, marking as private`,
                );
                member.privacy = "private";
              }
            });
          }

          if (
            "attributes" in declaration &&
            declaration.attributes &&
            "customElement" in declaration &&
            declaration.customElement
          ) {
            declaration.attributes = declaration.attributes.filter((attribute) => {
              // Match a forced name against the attribute three ways so a
              // camelCase property name resolves to its lowercase attribute:
              // `toCamelCase` recovers hyphenated names (align-right ->
              // alignRight), while the case-insensitive compare covers
              // single-word attributes where toCamelCase is a no-op
              // (alignright stays alignright, never alignRight).
              const camel = toCamelCase(attribute.name);
              const attrLower = attribute.name.toLowerCase();
              const isForced = forced.some(
                (name) =>
                  name === camel ||
                  name === attribute.name ||
                  name.toLowerCase() === attrLower,
              );
              if (isForced) {
                console.log(
                  `\rFound attribute '${attribute.name}' in ${declaration.name}, removing from manifest`,
                );
                return false;
              }
              return true;
            });
          }
        });
      });
    },
  };
}

export default {
  globs: ["src/**/*.js"],
  exclude: ["src/**/*.stories.js", "dist/**/*.js"],
  litelement: true,
  packagejson: true,
  quiet: true,
  plugins: [
    // Runs before cem-sorter so promoted `deprecated` events/slots sort last.
    deprecatedProseToFieldPlugin(),
    cemSorterPlugin({ deprecatedLast: true }),
    jsxTypesPlugin({
      fileName: "index.d.ts",
      outdir: "dist",
      excludeCssCustomProperties: true,
    }),
    addDtsExportsPlugin(),
    forcePrivatePlugin(),
  ],
};
