// Copyright (c) 2023 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

// If using litElement base class
import { LitElement, html } from "lit";

// Import Icons
import chevronUp from "@alaskaairux/icons/dist/icons/interface/chevron-up_es6.js";
import chevronDown from "@alaskaairux/icons/dist/icons/interface/chevron-down_es6.js";

// Import touch detection lib
import styleCss from "./style-css.js";

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * auro-accordion provides users a way to have collapsible content on a page.
 * Use auro-accordion-group if you want to have auto closing accordion components when others are selected.
 *
 * @attr {Boolean} expanded - If set, the accordion is expanded.
 * @attr {Boolean} fluid - If set, the trigger and content will be 100% width.
 * @attr {Boolean} alignRight - If set, the trigger content will align right.
 * @slot - Default slot for the accordion content.
 * @slot trigger - Defines the content of the trigger element.
 */

// build the component class
export class AuroAccordion extends LitElement {
  constructor() {
    super();

    this.expanded = false;
  }

  // This function is to define props used within the scope of this component
  // Be sure to review  https://lit.dev/docs/components/properties/
  // to understand how to use reflected attributes with your property settings.
  static get properties() {
    return {
      // ...super.properties,

      fluid: {
        type: Boolean,
        reflect: true,
      },

      chevron: {
        type: Boolean,
        reflect: true,
      },

      /**
       * @private
       */
      expanded: { type: Object },
    };
  }

  static get styles() {
    return [styleCss];
  }

  /**
   * @private Internal function to generate the HTML for the icon to use
   * @param {string} svgContent - The imported svg icon
   * @returns {TemplateResult} - The html template for the icon
   */
  generateIconHtml(svgContent) {
    const dom = new DOMParser().parseFromString(svgContent, 'text/html'),
    svg = dom.body.firstChild;

   return html`${svg}`;
  }

  /**
   * Toggles the visibility of the accordion content.
   * @returns {void}
   */
  toggle() {
    this.expanded = !this.expanded;
  }

  /**
   * Used to generate inline style heights of content so it animates correctly.
   * @private
   * @returns {void}
   */
  handleContentSlotChanges() {
    const content = this.shadowRoot.querySelector(".content");
    const container = this.shadowRoot.querySelector(".contentWrapper");
    const height = container.offsetHeight;

    content.style.height = `${height}px`;
  }

  updated(changedProperties) {
    if (changedProperties.has("expanded")) {
      this.setAttribute("aria-expanded", this.expanded);
    }
  }

  // function that renders the HTML and CSS into  the scope of the component
  render() {

    const chevronHtml = this.chevron
      ? html`
          <div class="iconWrapper" part="chevron">
            ${this.generateIconHtml(this.expanded ? chevronUp.svg : chevronDown.svg)}
          </div>`
      : html``

    return html`
      <div class="componentWrapper">
        <div class="trigger" @click="${this.toggle}">
          <slot name="trigger"></slot>
          ${chevronHtml}
        </div>
        <div class="content">
          <div class="contentWrapper">
            <slot @slotchange="${this.handleContentSlotChanges}"></slot>
          </div>
        </div>
      </div>
    `;
  }
}

// default internal definition
if (!customElements.get("auro-accordion")) {
  customElements.define("auro-accordion", AuroAccordion);
}
