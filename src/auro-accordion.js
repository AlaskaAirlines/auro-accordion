// Copyright (c) 2020 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import { LitElement, html } from "lit-element";
import { classMap } from 'lit-html/directives/class-map';

// Import Icons
import chevronUp from '@alaskaairux/icons/dist/icons/interface/chevron-up_es6.js';
import chevronDown from '@alaskaairux/icons/dist/icons/interface/chevron-down_es6.js';

// Import touch detection lib
import "focus-visible/dist/focus-visible.min.js";
import styleCss from "./style-css.js";
import styleCssFixed from "./style-fixed-css.js";

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * auro-accordion provides users a way to have collapsible content on a page.
 * Use auro-accordion-group if you want to have auto closing accordion components when others are selected.
 *
 * @element auro-accordion
 *
 * @attr {String} id - Used to generate the ID for the elements inside the component
 * @attr {Boolean} expanded - Toggles the panel on and off
 * @attr {Boolean} fixed - Uses px values instead of rem
 * @attr {Boolean} lowProfile - Thinner version of auro-accordion w/o borders
 * @attr {Boolean} justifyRight - Places trigger content to the right of the accordion
 * @slot header - Used to provide the header text of the Accordion
 * @slot - Provide text for accordion details display
 */

// build the component class
class AuroAccordion extends LitElement {
  constructor() {
    super();

    /**
     * @private
     */
    this.expanded = false;

    /**
     * @private
     */
    this.short = 20;

    /**
     * @private
     */
    this.long = 500;
  }

  // function to define props used within the scope of this component
  static get properties() {
    return {
      id: { type: String },
      expanded: {
        type: Boolean,
        reflect: true
      }
    };
  }

  static get styles() {
    return [
      styleCss,
      styleCssFixed
    ]
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
   * @private Internal function to handle the click event to trigger the expansion of the accordion
   * @param {object} event - Standard event parameter
   * @returns {nothing} - Returns nothing
   */
  handleClick(event) {
    this.expanded = !this.expanded;

    this.scrollIntoView({
      behavior: "smooth",
      block: "nearest"
    });

    this.dispatchEvent(new CustomEvent('toggleExpanded', {
      bubbles: true,
      composed: true,
      target: event.target
    }));

    this.display();
  }

 /**
   * @private Internal function to address Aria state
   * @returns {string} - Returns true or false to be used as attribute value
   */
  ariaExpanded() {
    return this.expanded ? 'true' : 'false';
  }

  /**
   * @private Internal function to determine open state
   * @returns {string} - Returns CSS Class on DOM
   */
  display() {
    const toggle = this.shadowRoot.getElementById(`${this.id}Panel`);
    const isOpen = toggle.classList.contains('details--isOpen');

    if (!isOpen) {
      toggle.classList.remove('details--hidden');

      setTimeout(() => {
        toggle.style.height = `${toggle.scrollHeight}px`;
      }, this.short);
    }

    if (isOpen) {
      toggle.style.height = `0px`;

      setTimeout(() => {
        toggle.classList.add('details--hidden');
      }, this.long);
    }
  }

  // function that renders the HTML and CSS into  the scope of the component
  render() {

    const triggerStyles = {
      'detailsTrigger': true,
      'expanded': this.expanded
    }

    const detailStyles = {
      'details': true,
      'details--hidden': true,
      'details--isOpen': this.expanded,
    }

    return html`
      <button
        id="${this.id}Heading"
        class="${classMap(triggerStyles)}"
        aria-expanded="${this.ariaExpanded()}"
        aria-controls="${this.id}Panel"
        @click=${this.handleClick}
      >
        <div><slot name="trigger">Details trigger</slot></div>
        <div>${this.generateIconHtml(this.expanded ? chevronUp.svg : chevronDown.svg)}</div>
      </button>

      <div
        id="${this.id}Panel"
        aria-labelledby="${this.id}Heading"
        aria-live="assertive"
        role="region"
        class="${classMap(detailStyles)}"
      >
        <div class="details-slot">
          <slot></slot>
        </div>
      </div>
    `;
  }
}

/* istanbul ignore else */
// define the name of the custom component
if (!customElements.get("auro-accordion")) {
  customElements.define("auro-accordion", AuroAccordion);
}
