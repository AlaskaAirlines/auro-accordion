// Copyright (c) 2025 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import { LitElement } from "lit";
import { html } from 'lit/static-html.js';

import { ifDefined } from 'lit/directives/if-defined.js';

import * as RuntimeUtils from '@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs';

import styleButtonCss from "./style-button-css.js";

// build the component class
export class AuroAccordionButton extends LitElement {
  // constructor() {
  //   super();
  // }

  static get styles() {
    return [
      styleButtonCss
    ];
  }

  /**
   * This will register this element with the browser.
   * @param {string} [name="auro-accordion-button"] - The name of element that you want to register to.
   *
   * @example
   * AuroAccordionButton.register("custom-accordion-button") // this will register this element to <custom-accordion-button/>
   *
   */
  static register(name = "auro-accordion-button") {
    RuntimeUtils.default.prototype.registerComponent(name, AuroAccordionButton);
  }

  render() {
    return html`
      <button
        part="button"
        aria-label="${ifDefined(this.arialabel ? this.arialabel : undefined)}"
        aria-labelledby="${ifDefined(this.arialabelledby ? this.arialabelledby : undefined)}"
        ?autofocus="${this.autofocus}"
        ?disabled="${this.disabled || this.loading}"
        ?onDark="${this.onDark}"
        title="${ifDefined(this.title ? this.title : undefined)}"
        name="${ifDefined(this.name ? this.name : undefined)}"
        type="${ifDefined(this.type ? this.type : undefined)}"
        variant="${ifDefined(this.variant ? this.variant : undefined)}"
        .value="${ifDefined(this.value ? this.value : undefined)}"
      >
        ${ifDefined(this.loading ? html`<${this.loaderTag} pulse part="loader"></${this.loaderTag}>` : undefined)}

        <span class="contentWrapper">
          <span class="textSlot" part="text">
            ${this.iconOnly ? undefined : html`<slot></slot>`}
          </span>

          <span part="icon">
            <slot name="icon"></slot>
          </span>
        </span>
      </button>
    `;
  }
}
