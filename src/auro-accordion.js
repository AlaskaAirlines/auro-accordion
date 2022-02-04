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
 * @attr {Boolean} shade - (deprecated) Accordion style with shade dropdown
 * @attr {Boolean} information - Dependent on shade; informational styling
 * @attr {Boolean} warning - Dependent on shade; warning styling
 * @attr {Boolean} error - Dependent on shade; error styling
 * @attr {Boolean} fixed - Uses px values instead of rem
 * @attr {Boolean} showOverflow - (deprecated) Allow `.details` content to overflow out of the accordion
 * @attr {Boolean} noanimation - (deprecated) Removes the animated opening and closing effect of the accordion
 * @attr {Boolean} noProfile - Thinner version of auro-accordion w/0 padding
 * @attr {Boolean} lowProfile - Thinner version of auro-accordion w/o borders
 * @attr {Boolean} justifyLeft - Places trigger content to the Left of the accordion
 * @attr {Boolean} justifyRight - Places trigger content to the Right of the accordion
 * @attr {Boolean secondaryType - Sets accordion details to secondary type style
 * @slot header - Used to provide the header text of the Accordion
 * @slot subTrigger - Use to provide subtext to trigger header
 * @slot - Provide text for accordion details display
 * @csspart details - Supports the outermost container of the content (animation and overflow)
 * @csspart content - The details content container (inner padding)
 */

// build the component class
class AuroAccordion extends LitElement {
  constructor() {
    super();
    this.expanded = false;
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
   */
  handleClick(event) {
    const nextState = !this.expanded;

    this.transitionHeight(nextState);
    this.expanded = nextState;

    this.dispatchEvent(new CustomEvent('toggleExpanded', {
      bubbles: true,
      composed: true,
      target: event.target
    }));
  }

  /**
   * @private Internal function to transition the accordion's height when opening or closing
   * @param {boolean} opening - whether the accordion is opening or closing
   */
  transitionHeight(opening) {
    const HEIGHT_TIMEOUT = 10,
      toggle = this.shadowRoot.getElementById(`${this.id}Panel`);

    toggle.style.height = `${toggle.scrollHeight}px`;

    if (!opening) {
      // set height to 0, triggering the CSS transition
      setTimeout(() => {
        toggle.style.height = '0px';
      }, HEIGHT_TIMEOUT);
    }
  }

  /**
   * @private Removes inline height once transition has completed
   * @param {object} event - event object
   */
  removeInlineHeight({ target }) {
    target.style.height = null;
  }

  // function that renders the HTML and CSS into  the scope of the component
  render() {
    const triggerStyles = {
      'detailsTrigger': true,
      'detailsTrigger--isExpanded': this.expanded
    }

    const detailStyles = {
      'details': true,
      'details--isExpanded': this.expanded,
    }

    return html`
      <button
        id="${this.id}Heading"
        class="${classMap(triggerStyles)}"
        aria-expanded="${this.expanded ? 'true' : 'false'}"
        aria-controls="${this.id}Panel"
        @click=${this.handleClick}
      >
        <div class="triggerContentWrapper">
          <div>
            <slot name="trigger" class="trigger"></slot>
            <br>
            <slot class="subTrigger" name="subTrigger"></slot>
          </div>
          <div>
            ${this.generateIconHtml(this.expanded ? chevronUp.svg : chevronDown.svg)}
          </div>
        </div>
      </button>

      <div
        id="${this.id}Panel"
        aria-labelledby="${this.id}Heading"
        aria-live="assertive"
        role="region"
        class="${classMap(detailStyles)}"
        @transitionend=${this.removeInlineHeight}
        part="details"
      >
        <div class="detailsSlot" part="content">
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
