// Copyright (c) 2023 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

// If using litElement base class
import { LitElement, html } from "lit";

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * auro-accordion provides users a way to have collapsible content on a page.
 * Use auro-accordion-group if you want to have auto closing accordion components when others are selected.
 *
 * @attr {Boolean} emphasis - If set, emphasis styles will be applied to the auro-accordions.
 * @attr {String} variant - Sets accordion variant option. Possible values are: `sm`, `lg`.
 * @attr {Boolean} noToggleExpanded - If set, multiple accordions can be open at the same time.
 */

// build the component class
export class AuroAccordionGroup extends LitElement {
  // This function is to define props used within the scope of this component
  // Be sure to review  https://lit.dev/docs/components/properties/
  // to understand how to use reflected attributes with your property settings.
  static get properties() {
    return {
      // ...super.properties,

      emphasis: {
        type: Boolean,
        reflect: true
      },
      variant: {
        type: String,
        reflect: true
      }
    }
  }

  handleSlotContentChange() {
    this.addEventListener('toggleExpanded', this.handleToggleExpanded);

    this.handleItems();

    this.items.forEach((item) => {
      if (this.hasAttribute('emphasis')) {
        item.setAttribute('chevron', 'right');
        item.emphasis = true;
      }

      if (this.hasAttribute('variant') && this.getAttribute('variant') === 'sm') {
        item.setAttribute('variant', 'sm');
      }

      if (this.hasAttribute('variant') && this.getAttribute('variant') === 'lg') {
        item.setAttribute('variant', 'lg');
      }

      item.grouped = true;
    });
  }

  /**
   * @private Internal function to toggle any expanded panels if it is not the one selected
   * @param {object} event - Standard event parameter
   */
  handleToggleExpanded(event) {
    if (!this.hasAttribute('noToggleExpanded')) {
      this.items.forEach((item) => {
        if (item !== event.target && item.expanded) {
          item.expanded = false;
        }
      });

      this.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }

  /**
   * @private Internal function to add all accordions into an array
   */
  handleItems() {
    const groupTagName = this.tagName.toLowerCase();
    const accordionTagName = groupTagName.substring(0, groupTagName.indexOf('-group')); // eslint-disable-line no-magic-numbers

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

// default internal definition
if (!customElements.get("auro-accordion-group")) {
  customElements.define("auro-accordion-group", AuroAccordionGroup);
}
