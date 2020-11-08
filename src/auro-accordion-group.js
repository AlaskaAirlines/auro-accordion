// Copyright (c) 2020 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import { LitElement, html } from "lit-element";

// Import touch detection lib
import "focus-visible/dist/focus-visible.min.js";

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * auro-accordion-group provides users a way to group auro-accordion components so they auto collapse when one is selected.
 * @attr {Array} items - Array of auro-accordion objects to collapse on toggle event
 */

// build the component class
class AuroAccordionGroup extends LitElement {
  constructor() {
    super();

    this.zero = 0;
    this.short = 20;
    this.long = 500;
  }

  connectedCallback() {
    super.connectedCallback();
    this.items = Array.from(this.querySelectorAll('auro-accordion'));

    this.addEventListener('toggleExpanded', this.handleToggleExpanded);
  }

  /**
   * @private Internal function to toggle any expanded panels if it is not the one selected
   * @param {object} event - Standard event parameter
   * @returns {nothing} - Returns nothing
   */
  handleToggleExpanded(event) {
    this.index = this.items.indexOf(event.target);

    this.items.forEach((item) => {
      if (item !== event.target) {
        const isOpen = item.classList.contains('details--isOpen');

        item.expanded = false;

        if (!isOpen) {
          setTimeout(() => {
            item.shadowRoot.querySelectorAll('[id*=Panel]')[this.zero].style.height = `0px`;
          }, this.short);
          setTimeout(() => {
            item.shadowRoot.querySelectorAll('[id*=Panel]')[this.zero].classList.add('details--hidden');
          }, this.long);
        }
      }
    });
  }

  // function that renders the HTML and CSS into  the scope of the component
  render() {
    return html`
        <slot></slot>
    `;
  }
}

/* istanbul ignore else */
// define the name of the custom component
if (!customElements.get("auro-accordion-group")) {
  customElements.define("auro-accordion-group", AuroAccordionGroup);
}
