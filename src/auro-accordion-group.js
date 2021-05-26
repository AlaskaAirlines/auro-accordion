// Copyright (c) 2020 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import { LitElement, html } from "lit-element";

// Import touch detection lib
import "focus-visible/dist/focus-visible.min.js";

// build the component class
class AuroAccordionGroup extends LitElement {
  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('toggleExpanded', this.handleToggleExpanded);
  }

  /**
   * @private Internal function to toggle any expanded panels if it is not the one selected
   * @param {object} event - Standard event parameter
   */
  handleToggleExpanded(event) {
    this.index = this.items.indexOf(event.target);
    this.items.forEach((item) => {
      if (item !== event.target && item.expanded) {
        item.transitionHeight(false);
        item.expanded = false;
      }
    });
  }

  /**
   * @private Internal function to update items when items are added or removed from the slot
   */
  handleSlotChange() {
    this.items = Array.from(this.querySelectorAll('auro-accordion'));
  }

  // function that renders the HTML and CSS into  the scope of the component
  render() {
    return html`
        <slot @slotchange=${this.handleSlotChange}></slot>
    `;
  }
}

/* istanbul ignore else */
// define the name of the custom component
if (!customElements.get("auro-accordion-group")) {
  customElements.define("auro-accordion-group", AuroAccordionGroup);
}
