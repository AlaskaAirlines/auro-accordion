// Copyright (c) 2022 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import { AuroButton } from "@aurodesignsystem/auro-button/class";
import * as RuntimeUtils from "@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs";

import styleButtonCss from "./styles/style-button.scss";

/**
 * Auro-accordion-button is the trigger element for Auro-accordion.
 */

// build the component class
export class AuroAccordionButton extends AuroButton {
  constructor() {
    super();

    this.ariaexpanded = false;
  }

  static get properties() {
    return {
      ...AuroButton.properties,
      ariaexpanded: {
        type: Boolean,
        reflect: true,
      },
    };
  }

  static get styles() {
    return [styleButtonCss];
  }

  // Sync aria-expanded changes
  updated(changedProperties) {
    super.updated(changedProperties);

    if (changedProperties.has("ariaexpanded")) {
      const button = this.shadowRoot.querySelector("button");
      if (button) {
        button.setAttribute(
          "aria-expanded",
          this.ariaexpanded ? "true" : "false",
        );
      }
    }
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
