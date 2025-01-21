// Copyright (c) 2023 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

/* eslint-disable lit/binding-positions, lit/no-invalid-html */

// If using litElement base class
import { LitElement, nothing } from "lit";
import { html } from 'lit/static-html.js';
import { classMap } from 'lit/directives/class-map.js';

import AuroLibraryRuntimeUtils from '@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs';

import { AuroDependencyVersioning } from '@aurodesignsystem/auro-library/scripts/runtime/dependencyTagVersioning.mjs';

import { AuroIcon } from '@aurodesignsystem/auro-icon/src/auro-icon.js';
import iconVersion from './iconVersion.js';

import chevronUp from "@alaskaairux/icons/dist/icons/interface/chevron-up.mjs";
import chevronDown from "@alaskaairux/icons/dist/icons/interface/chevron-down.mjs";

import styleCss from "./style-css.js";
import colorCss from "./color-css.js";
import tokensCss from "./tokens-css.js";

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * Auro-accordion provides users a way to have collapsible content on a page.
 * Use auro-accordion-group if you want to have auto closing accordion components when others are selected.
 *
 * @attr {Boolean} alignRight - If set, the trigger content will align right.
 * @attr {Boolean} expanded - If set, the accordion is expanded.
 * @attr {Boolean} emphasis - If set, emphasis styles will be applied to the auro-accordions.
 * @attr {Boolean} grouped - Attribute will be set on accordion when it appears in an accordion group.
 * @attr {String} chevron - Sets chevron variant option. Possible values are: `none`, `right`.
 * @attr {String} variant - Sets accordion variant option. Possible values are: `sm`, `lg`.
 * @slot - Default slot for the accordion content.
 * @slot trigger - Defines the content of the trigger element.
 * @csspart accordion - Apply CSS to Accordion wrapper.
 * @csspart trigger - Apply CSS to trigger element.
 * @csspart chevron - Apply CSS to chevron icon.
 * @csspart content - Apply CSS to the accordion content.
 * @event toggleExpanded - Notifies that the accordion has been expanded or closed.
 */

// build the component class
export class AuroAccordion extends LitElement {
  constructor() {
    super();

    const versioning = new AuroDependencyVersioning();

    /**
     * @private
     */
    this.iconTag = versioning.generateTag('auro-icon', iconVersion, AuroIcon);

    /**
     * @private
     */
    this.runtimeUtils = new AuroLibraryRuntimeUtils();

    this.expanded = false;
  }

  // This function is to define props used within the scope of this component
  // Be sure to review  https://lit.dev/docs/components/properties/
  // to understand how to use reflected attributes with your property settings.
  static get properties() {
    return {
      // ...super.properties,

      alignRight: {
        type: Boolean,
        reflect: true,
      },
      expanded: {
        type: Boolean,
        reflect: true,
      },
      emphasis: {
        type: Boolean,
        reflect: true
      },
      grouped: {
        type: Boolean,
        reflect: true
      },
      chevron: {
        type: String,
        reflect: true
      },
      variant: {
        type: String,
        reflect: true
      }
    };
  }

  static get styles() {
    return [
      colorCss,
      styleCss,
      tokensCss
    ];
  }

  /**
   * This will register this element with the browser.
   * @param {string} [name="auro-accordion"] - The name of element that you want to register to.
   *
   * @example
   * AuroAccordion.register("custom-accordion") // this will register this element to <custom-accordion/>
   *
   */
  static register(name = "auro-accordion") {
    AuroLibraryRuntimeUtils.prototype.registerComponent(name, AuroAccordion);
  }

  firstUpdated() {
    // Add the tag name as an attribute if it is different than the component name
    this.runtimeUtils.handleComponentTagRename(this, 'auro-accordion');

    this.accordionButton = this.shadowRoot.querySelector('auro-accordion-button');

    this.accordionButton.addEventListener('click', () => {
      this.toggle();
    });
  }

  /**
   * Internal function to generate the HTML for the icon to use.
   * @private
   * @param {string} svgContent - The imported svg icon.
   * @returns {TemplateResult} - The html template for the icon.
   */
  generateIconHtml(svgContent) {
    const dom = new DOMParser().parseFromString(svgContent, 'text/html');
    const svg = dom.body.firstChild;

    svg.setAttribute('slot', 'svg');

    return html`${svg}`;
  }

  /**
   * Toggles the visibility of the accordion content.
   */
  toggle() {
    console.log('button clicked, toggling.......')
    this.expanded = !this.expanded;

    this.dispatchEvent(new CustomEvent('toggleExpanded', {
      bubbles: true,
      composed: true,
      detail: {
        expanded: this.expanded
      }
    }));
  }

  // function that renders the HTML and CSS into  the scope of the component
  render() {
    const buttonClasses = {
      "trigger": true,
      "iconRight": this.getAttribute('chevron') === 'right',
      "sm": this.getAttribute('variant') === 'sm',
      "lg": this.getAttribute('variant') === 'lg',
    };

    return html`
      <div class="componentWrapper" part="accordion">
        <auro-accordion-button
          ?fluid="${this.emphasis}"
          class="${classMap(buttonClasses)}"
          id="accordionTrigger"
          aria-controls="accordionContent"
          aria-expanded="${this.expanded}"
          part="trigger">
          ${this.chevron === 'none' ? undefined : html`
            <${this.iconTag} slot="icon" customSvg customColor ?hidden="${!this.expanded}">
              ${this.generateIconHtml(chevronUp.svg)}
            </${this.iconTag}>
            <${this.iconTag} slot="icon" customSvg customColor ?hidden="${this.expanded}">
              ${this.generateIconHtml(chevronDown.svg)}
            </${this.iconTag}>
          `}
          <slot name="trigger" part="triggerSlot"></slot>
        </auro-accordion-button>
        <div class="content" id="accordionContent" aria-labelledby="accordionTrigger" inert="${!this.expanded || nothing}" part="content">
          <div class="contentWrapper" part="contentWrapper">
            <slot></slot>
          </div>
        </div>
      </div>
    `;
  }
}
