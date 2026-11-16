// Copyright (c) 2023 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import { html, LitElement } from "lit";

import AuroLibraryRuntimeUtils from "@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs";

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * Groups accordions so that opening one closes the others.
 *
 * **Key capabilities:**
 * - **Several open at once**: Set `noToggleExpanded` to let more than one accordion stay open.
 * - **Disable all**: Set `disabled` to turn off every accordion in the group.
 * - **Emphasis**: Set `emphasis` to add the emphasis border to every accordion and move each chevron to the right.
 * - **Trigger size**: Set `variant` to `sm`, `lg`, or `min` to size every trigger.
 *
 * **Example:**
 * ```html
 * <auro-accordion-group>
 *   <auro-accordion>
 *     <span slot="trigger">Trigger</span>
 *     <p>Content</p>
 *   </auro-accordion>
 * </auro-accordion-group>
 * ```
 *
 * @summary A wrapper that closes other accordions when one opens and shares size, emphasis, and disabled settings.
 * @customElement auro-accordion-group
 *
 * @slot - The `auro-accordion` elements to group.
 */
export class AuroAccordionGroup extends LitElement {
  constructor() {
    super();

    /**
     * @private
     */
    this.runtimeUtils = new AuroLibraryRuntimeUtils();

    this.noToggleExpanded = false;
  }

  // This function is to define props used within the scope of this component
  // Be sure to review  https://lit.dev/docs/components/properties/
  // to understand how to use reflected attributes with your property settings.
  static get properties() {
    return {
      // ...super.properties,

      /** 
       * Turns off every accordion in the group. Disabled triggers are shown in a muted color and can't be selected.
       */
      disabled: {
        type: Boolean,
        reflect: true,
      },

      /**
       * Adds the emphasis border to every accordion in the group and moves each chevron to the right.
       */
      emphasis: {
        type: Boolean,
        reflect: true,
      },

      /**
       * Lets several accordions in the group stay open at the same time. By default, opening one accordion closes the others.
       */
      noToggleExpanded: {
        type: Boolean,
        reflect: true,
        attribute: "notoggleexpanded",
      },

      /**
       * Sets the trigger size for every accordion in the group. Use `sm` for smaller triggers, `lg` for larger ones, or `min` to remove all trigger padding so the slotted content sets each size.
       * @type {'sm' | 'lg' | 'min'}
       */
      variant: {
        type: String,
        reflect: true,
      },
    };
  }

  /**
   * Registers the element with the browser under a tag name. Register the group as the accordion's tag name plus `-group`, so the group can find its accordions.
   * @param {string} [name="auro-accordion-group"] - The tag name to register the element under.
   *
   * @example
   * AuroAccordionGroup.register("custom-accordion-group") // registers <custom-accordion-group>
   *
   */
  static register(name = "auro-accordion-group") {
    AuroLibraryRuntimeUtils.prototype.registerComponent(
      name,
      AuroAccordionGroup,
    );
  }

  firstUpdated() {
    // Add the tag name as an attribute if it is different than the component name
    this.runtimeUtils.handleComponentTagRename(this, "auro-accordion-group");
  }

  updated(changedProperties) {
    if (changedProperties.has("disabled")) {
      this.updateDisabledState();
    }

    if (changedProperties.has("emphasis")) {
      this.updateEmphasisState(changedProperties.get("emphasis"));
    }

    if (changedProperties.has("variant")) {
      this.updateVariantState();
    }
  }

  /**
   * Applies or removes the emphasis styles on all child `<auro-accordion>` elements
   * to match the emphasis state of the `<auro-accordion-group>` element.
   * @private
   * @param {boolean} [previous] - The previous value of `emphasis`.
   */
  updateEmphasisState(previous) {
    this.handleItems();
    this.items.forEach((accordion) => {
      if (this.emphasis) {
        accordion.setAttribute("chevron", "right");
        accordion.emphasis = true;
      } else if (previous) {
        accordion.emphasis = false;

        if (accordion.getAttribute("chevron") === "right") {
          accordion.removeAttribute("chevron");
        }
      }
    });
  }

  /**
   * Updates the variant of all child `<auro-accordion>` elements
   * to match the variant of the `<auro-accordion-group>` element.
   * @private
   */
  updateVariantState() {
    this.handleItems();
    this.items.forEach((accordion) => {
      if (this.variant) {
        accordion.setAttribute("variant", this.variant);
      } else {
        accordion.removeAttribute("variant");
      }
    });
  }

  /**
   * Updates the disabled state of all child `<auro-accordion>` elements
   * to match the disabled state of the `<auro-accordion-group>` element.
   * @private
   */
  updateDisabledState() {
    this.handleItems();
    this.items.forEach((accordion) => {
      accordion.disabled = this.disabled;
    });
  }

  /**
   * Called when the slotted accordions change. Applies the group's emphasis and variant settings to each accordion and marks each as grouped.
   * @private
   */
  handleSlotContentChange() {
    this.addEventListener("toggleExpanded", this.handleToggleExpanded);

    this.handleItems();

    this.items.forEach((item) => {
      if (this.hasAttribute("emphasis")) {
        item.setAttribute("chevron", "right");
        item.emphasis = true;
      }

      if (this.hasAttribute("variant")) {
        item.setAttribute("variant", this.getAttribute("variant"));
      }

      item.grouped = true;
    });
  }

  /**
   * Internal function to toggle any expanded panels if it is not the one selected.
   * @private
   * @param {object} event - Standard event parameter.
   */
  handleToggleExpanded(event) {
    if (!this.noToggleExpanded) {
      this.items.forEach((item) => {
        if (item !== event.target && item.expanded) {
          item.expanded = false;
        }
      });

      // Treat the group as "in view" when any part of it intersects the
      // viewport so we only scroll when it is entirely above or below the fold.
      const rect = this.getBoundingClientRect();
      const inView = rect.bottom > 0 && rect.top < window.innerHeight;

      if (!inView) {
        this.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        });
      }
    }
  }

  /**
   * Internal function to add all accordions into an array.
   * @private
   */
  handleItems() {
    // Derive the child tag from our own tag so renamed/custom-registered groups resolve their accordions.
    const groupTagName = this.tagName.toLowerCase();
    const accordionTagName = groupTagName.substring(
      0,
      groupTagName.indexOf("-group"),
    );

    this.items = Array.from(this.querySelectorAll(accordionTagName));
  }

  // function that renders the HTML and CSS into  the scope of the component
  render() {
    return html`
      <div>
        <slot @slotchange="${this.handleSlotContentChange}"></slot>
      </div>
    `;
  }
}
