// Copyright (c) 2023 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import { html, LitElement } from "lit";

import AuroLibraryRuntimeUtils from "@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs";

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * The `auro-accordion-group` element allows users to group accordions together and give them an auto closing functionality when others are selected.
 * @customElement auro-accordion-group
 */
export class AuroAccordionGroup extends LitElement {
  constructor() {
    super();

    /**
     * @private
     */
    this.runtimeUtils = new AuroLibraryRuntimeUtils();
  }

  // This function is to define props used within the scope of this component
  // Be sure to review  https://lit.dev/docs/components/properties/
  // to understand how to use reflected attributes with your property settings.
  static get properties() {
    return {
      // ...super.properties,

      /** 
       * If set, the whole accordion inside the group are disabled and have reduced opacity.
       */
      disabled: {
        type: Boolean,
        reflect: true,
      },

      /**
       * If set, emphasis styles will be applied to the auro-accordions.
       */
      emphasis: {
        type: Boolean,
        reflect: true,
      },

      /** 
       * Sets accordion variant option.
       * @type {'sm' | 'lg'}
       */
      variant: {
        type: String,
        reflect: true,
      },
    };
  }

  /**
   * This will register this element with the browser.
   * @param {string} [name="auro-accordion-group"] - The name of the element that you want to register.
   *
   * @example
   * AuroAccordionGroup.register("custom-accordion-button") // this will register this element to <custom-accordion-group/>
   *
   */
  static register(name = "auro-accordion-group") {
    AuroLibraryRuntimeUtils.prototype.registerComponent(
      name,
      AuroAccordionGroup,
    );
  }

  firstUpdated() {
    // Add the tag name as an attribute if it is different than the component name
    this.runtimeUtils.handleComponentTagRename(this, "auro-accordion-group");
  }

  updated(changedProperties) {
    if (changedProperties.has("disabled")) {
      this.updateDisabledState();
    }
  }

  /**
   * Updates the disabled state of all child `<auro-accordion>` elements
   * to match the disabled state of the `<auro-accordion-group>` element.
   * @private
   */
  updateDisabledState() {
    const accordions = this.querySelectorAll("auro-accordion");
    accordions.forEach((accordion) => {
      accordion.disabled = this.disabled;
    });
  }

  handleSlotContentChange() {
    this.addEventListener("toggleExpanded", this.handleToggleExpanded);

    this.handleItems();

    this.items.forEach((item) => {
      if (this.hasAttribute("emphasis")) {
        item.setAttribute("chevron", "right");
        item.emphasis = true;
      }

      if (
        this.hasAttribute("variant") &&
        this.getAttribute("variant") === "sm"
      ) {
        item.setAttribute("variant", "sm");
      }

      if (
        this.hasAttribute("variant") &&
        this.getAttribute("variant") === "lg"
      ) {
        item.setAttribute("variant", "lg");
      }

      item.grouped = true;
    });
  }

  /**
   * Internal function to toggle any expanded panels if it is not the one selected.
   * @private
   * @param {object} event - Standard event parameter.
   */
  handleToggleExpanded(event) {
    if (!this.hasAttribute("noToggleExpanded")) {
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
   * Internal function to add all accordions into an array.
   * @private
   */
  handleItems() {
    const groupTagName = this.tagName.toLowerCase();
    const accordionTagName = groupTagName.substring(
      0,
      groupTagName.indexOf("-group"),
    );

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
