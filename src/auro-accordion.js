// Copyright (c) 2023 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

// If using litElement base class
import { LitElement, html, nothing } from "lit";
import { classMap } from 'lit/directives/class-map.js';

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
 * @attr {Boolean} emphasis - If set, emphasis styles will be applied to the auro-accordions.
 * @attr {Boolean} group - Attribute will be set on accordion when it appears in an accordion group.
 * @attr {Boolean} noChevron - If set, the chevron icon will not appear inside the trigger of the accordion.
 * @attr {Boolean} sm - If set, the auro-accordion elements will appear smaller than normal.
 * @attr {Boolean} lg - If set, the auro-accordion elements will appear larger than normal.
 * @slot - Default slot for the accordion content.
 * @slot trigger - Defines the content of the trigger element.
 * @csspart accordion - Apply CSS to Accordion wrapper.
 * @csspart trigger - Apply CSS to trigger element.
 * @csspart chevron - Apply CSS to chevron icon.
 * @csspart content - Apply CSS to the accordion content.
 * @fires toggleExpanded - Notifies that the accordion has been expanded or closed.
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
      },
      iconRight: {
        type: Boolean,
        reflect: true
      },
      emphasis: {
        type: Boolean,
        reflect: true
      },
      group: {
        type: Boolean,
        reflect: true
      },
      noChevron: {
        type: Boolean,
        reflect: true
      },
      sm: {
        type: Boolean,
        reflect: true
      },
      lg: {
        type: Boolean,
        reflect: true
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
   */
  toggle() {
    this.expanded = !this.expanded;

    this.dispatchEvent(new CustomEvent('toggleExpanded', {
      bubbles: true,
      composed: true,
      detail: {
        expanded: this.expanded
      }
    }));
  }

  /**
   * Used to generate inline style heights of content so it animates correctly.
   * @private
   * @returns {void}
  //  */
  handleContentSlotChanges() {
    const content = this.shadowRoot.querySelector(".content");
    const container = this.shadowRoot.querySelector(".contentWrapper");
    const height = container.offsetHeight;

    content.style.height = `${height}px`;
  }

  updated(changedProperties) {
    if (changedProperties.has('iconRight')) {
      this.requestUpdate();
    }
  }

  // function that renders the HTML and CSS into  the scope of the component
  render() {

    const buttonClasses = {
      "trigger": true,
      "iconRight": this.iconRight
    }

    const chevronHtml = this.noChevron
      ? html``
      : html`
        <div class="iconWrapper" part="chevron" slot="icon">
          ${this.generateIconHtml(this.expanded ? chevronUp.svg : chevronDown.svg)}
        </div>
      `;

    return html`
      <div class="componentWrapper" part="accordion">
        <auro-accordionbutton 
          ?fluid="${this.fluid || this.emphasis}" 
          class="${classMap(buttonClasses)}" 
          id="accordionTrigger" 
          aria-controls="accordionContent" 
          aria-expanded="${this.expanded}" 
          @click="${this.toggle}" 
          part="trigger">
          
          ${chevronHtml}
          <slot name="trigger" part="triggerSlot"></slot>
        </auro-accordionbutton>
        <div class="content" id="accordionContent" aria-labelledby="accordionTrigger" inert="${!this.expanded || nothing}" part="content">
          <div class="contentWrapper" part="contentWrapper">
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
