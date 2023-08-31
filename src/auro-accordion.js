// Copyright (c) 2023 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

// If using litElement base class
import { LitElement, html, nothing } from "lit";

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
 * @attr {Boolean} alignRight - If set, the trigger content will align right.
 * @attr {Boolean} expanded - If set, the accordion is expanded.
 * @attr {Boolean} fluid - If set, the trigger and content will be 100% width.
 * @attr {Boolean} iconRight - If set, the chevron icon will render to the right of the trigger.
 * @slot - Default slot for the accordion content.
 * @slot trigger - Defines the content of the trigger element.
 * @csspart trigger - Apply CSS to trigger element.
 * @csspart chevron - Apply CSS to chevron icon.
 * @csspart content - Apply CSS to the accordion content.
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

      alignRight: {
        type: Boolean,
        reflect: true,
      },
      expanded: {
        type: Boolean,
        reflect: true,
      },
      fluid: {
        type: Boolean,
        reflect: true,
      }
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

  // function that renders the HTML and CSS into  the scope of the component
  render() {

    const chevronHtml =
      html`
        <div class="iconWrapper" part="chevron">
          ${this.generateIconHtml(this.expanded ? chevronUp.svg : chevronDown.svg)}
        </div>
      `;

    return html`
      <div class="componentWrapper">
        <button class="trigger" id="accordionTrigger" aria-controls="accordionContent" aria-expanded="${this.expanded}" @click="${this.toggle}" part="trigger">
          ${this.hasAttribute('iconRight') ? undefined : html`${chevronHtml}`} 
          <slot name="trigger"></slot>
          ${this.hasAttribute('iconRight') ? html`${chevronHtml}` : undefined}
        </button>
        <div class="content" id="accordionContent" aria-labelledby="accordionTrigger" inert="${!this.expanded || nothing}" part="content">
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
