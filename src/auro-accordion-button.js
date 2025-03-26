// Copyright (c) 2022 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import styleButtonCss from "./style-button-css.js";
import styleCssAuroButton from "@aurodesignsystem/auro-button/src/style-css.js";

import { AuroButton } from "@aurodesignsystem/auro-button/src/auro-button.js";

import * as RuntimeUtils from '@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs';

// build the component class
export class AuroAccordionButton extends AuroButton {
  constructor() {
    super();

    this.expanded = false;
  }

  static get styles() {
    return [
      styleCssAuroButton,
      styleButtonCss
    ];
  }

  // This function is to define props used within the scope of this component
  // Be sure to review  https://lit.dev/docs/components/properties/
  // to understand how to use reflected attributes with your property settings.
  static get properties() {
    return {
      ...super.properties,

      expanded: {
        type: Boolean,
        reflect: true
      },
    };
  }

  firstUpdated() {
    this.shadowButton = this.shadowRoot.querySelector('button');
    this.setAriaExpanded();
  }

  updated(changedProperties) {
    if (changedProperties.has('expanded')) {
      this.setAriaExpanded();
    }
  }

  /**
   * Sets the aria-expanded value on the button element in the shadow DOM
   * for screen reader accessibility.
   */
  setAriaExpanded() {
    this.shadowButton.setAttribute('aria-expanded', this.expanded);
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
}
