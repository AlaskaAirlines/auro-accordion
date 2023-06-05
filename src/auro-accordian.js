// Copyright (c) 2023 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

// If using litElement base class
import { LitElement, html } from "lit";

// Import touch detection lib
import styleCss from "./style-css.js";

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * The auro-accordian element provides users a way to ... (it would be great if you fill this out).
 *
 * @attr {Boolean} expanded - If set, the accordian is expanded.
 * @attr {Boolean} fluid - If set, the trigger and content will be 100% width.
 * @attr {Boolean} alignRight - If set, the trigger content will align right.
 * @slot - Default slot for the accordian content.
 * @slot trigger - Defines the content of the trigger element.
 */

// build the component class
export class AuroAccordian extends LitElement {
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

      fluid:   {
        type: Boolean,
        reflect: true
      },

      /**
       * @private
       */
      expanded: { type: Object }
    };
  }

  static get styles() {
    return [styleCss];
  }

  /**
   * Toggles the visibility of the accordian content.
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
    const content = this.shadowRoot.querySelector('.content');
    const container = this.shadowRoot.querySelector('.contentWrapper');
    const height = container.offsetHeight;

    content.style.height = `${height}px`;
  }

  updated(changedProperties) {
    if (changedProperties.has('expanded')) {
      this.setAttribute('aria-expanded', this.expanded);
    }
  }

  // function that renders the HTML and CSS into  the scope of the component
  render() {
    return html`
      <div class="componentWrapper">
        <div
          class="trigger"
          @click="${this.toggle}">
          <slot name="trigger"></slot>
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
if (!customElements.get("auro-accordian")) {
  customElements.define("auro-accordian", AuroAccordian);
}
