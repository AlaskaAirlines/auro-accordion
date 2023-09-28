// Copyright (c) 2022 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import styleButtonCss from "./style-button-css.js";
import styleCssAuroButton from "@aurodesignsystem/auro-button/src/style-css.js";

import { AuroButton } from "@aurodesignsystem/auro-button/src/auro-button.js";

// build the component class
export class AuroAccordionButton extends AuroButton {
  static get styles() {
    return [
      styleCssAuroButton,
      styleButtonCss
    ];
  }
}
