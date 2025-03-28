// Copyright (c) 2022 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import styleButtonCss from "./style-button-css.js";
import styleCssAuroButton from "@aurodesignsystem/auro-button/src/style-css.js";

import { AuroButton } from "@aurodesignsystem/auro-button/src/auro-button.js";

import * as RuntimeUtils from '@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs';

/**
 * Auro-accordion-button is the trigger element for Auro-accordion.
 */

// build the component class
export class AuroAccordionButton extends AuroButton {
  constructor() {
    super();

    this.ariaexpanded = false;
  }

  static get styles() {
    return [
      styleCssAuroButton,
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
}
