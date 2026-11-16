// Copyright (c) 2023 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

/* eslint-disable lit/binding-positions, lit/no-invalid-html */

import { LitElement, nothing } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { html } from "lit/static-html.js";

import { AuroDependencyVersioning } from "@aurodesignsystem/auro-library/scripts/runtime/dependencyTagVersioning.mjs";
import AuroLibraryRuntimeUtils from "@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs";
import chevronDown from "@alaskaairux/icons/dist/icons/interface/chevron-down.mjs";
import chevronUp from "@alaskaairux/icons/dist/icons/interface/chevron-up.mjs";
import { AuroIcon } from "@aurodesignsystem/auro-icon/class";

import { AuroAccordionButton } from "./auro-accordion-button.js";
import { AuroAccordionGroup } from "./auro-accordion-group.js";

import iconVersion from "./iconVersion.js";

import colorCss from "./styles/color.scss";
import styleCss from "./styles/style.scss";
import tokensCss from "./styles/tokens.scss";

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * An accordion that shows or hides a section of content when someone selects its trigger.
 *
 * **Key capabilities:**
 * - **Chevron placement**: Use `chevron="right"` to move the chevron to the right end of the trigger or `chevron="none"` to hide it.
 * - **Trigger size**: Set `variant` to `sm`, `lg`, or `min` to change the trigger size.
 * - **Expand upward**: Set `expandUp` to reveal the content above the trigger.
 * - **Grouping**: Wrap accordions in `auro-accordion-group` so opening one closes the others.
 *
 * **Example:**
 * ```html
 * <auro-accordion>
 *   <span slot="trigger">Trigger</span>
 *   <p>Content</p>
 * </auro-accordion>
 * ```
 *
 * @summary An accessible accordion with chevron, size, and expand-up options.
 * @customElement auro-accordion
 *
 * @slot - The content revealed when the accordion expands.
 * @slot trigger - The text or content shown in the trigger, such as a short heading. Use presentational content only, because the trigger is a native `<button>`.
 * @csspart accordion - The wrapper around the trigger and the content.
 * @csspart trigger - The button that expands and collapses the accordion.
 * @csspart chevron - The chevron icon in the trigger. Doesn't exist when `chevron="none"`.
 * @csspart content - The container that holds the expanded content.
 * @csspart contentWrapper - The inner container around the expanded content that sets its padding.
 * @csspart triggerSlot - The element that holds the content slotted into `trigger`.
 * @cssprop --ds-auro-accordion-content-border-color - Color of the left border beside the expanded content. Applies only when `emphasis` is set.
 * @cssprop --ds-auro-accordion-group-border-color - Color of the divider below each accordion in a group. Applies only inside `auro-accordion-group`.
 * @cssprop --ds-auro-accordion-trigger-border-color - Color of the trigger's border, including the ring shown when the trigger has keyboard focus.
 * @cssprop --ds-auro-accordion-trigger-color - Color of the trigger text.
 * @cssprop --ds-auro-accordion-trigger-icon-color - Color of the chevron icon.
 * @event toggleExpanded - Fires when someone expands or collapses the accordion, or when `toggle()` is called. Doesn't fire when `expanded` is set directly. `detail.expanded` holds the new state.
 */

// build the component class
export class AuroAccordion extends LitElement {
  /**
   * @private
   * @type {ShadowRootInit}
   */
  static shadowRootOptions = {
    ...LitElement.shadowRootOptions,
    delegatesFocus: true,
  };

  constructor() {
    super();

    const versioning = new AuroDependencyVersioning();

    /**
     * @private
     */
    this.iconTag = versioning.generateTag("auro-icon", iconVersion, AuroIcon);

    /**
     * @private
     */
    this.buttonNameHash = this.generateRandomLetters(4); //eslint-disable-line

    /**
     * @private
     */
    this.buttonTag = versioning.generateTag(
      "auro-accordion-button",
      this.buttonNameHash,
      AuroAccordionButton,
    );

    /**
     * @private
     */
    this.runtimeUtils = new AuroLibraryRuntimeUtils();

    this.expanded = false;
  }

  // This function is to define props used within the scope of this component
  // Be sure to review  https://lit.dev/docs/components/properties/
  // to understand how to use reflected attributes with your property settings.
  static get properties() {
    return {
      // ...super.properties,

      /**
       * Aligns the trigger to the right edge of the accordion's container.
       */
      alignRight: {
        type: Boolean,
        reflect: true,
        attribute: "alignright",
      },

      /** 
       * Sets where the chevron appears. Use `right` to place it at the right end of the trigger, or `none` to hide it. When not set, the chevron appears before the trigger text.
       * @type {'none' | 'right'}
       */
      chevron: {
        type: String,
        reflect: true,
      },

      /** 
       * Turns the accordion off. A disabled trigger is shown in a muted color and can't be selected to expand or collapse the content. Calling `toggle()` or setting `expanded` still works.
       */
      disabled: {
        type: Boolean,
        reflect: true,
      },

      /** 
       * Adds a highlighted left border to the trigger and the expanded content. Set `emphasis` on `auro-accordion-group` instead to also move each chevron to the right.
       */
      emphasis: {
        type: Boolean,
        reflect: true,
      },

      /**
       * Expands the accordion to show its content.
       */
      expanded: {
        type: Boolean,
        reflect: true,
      },

      /**
       * Reveals the expanded content above the trigger instead of below it.
       */
      expandUp: {
        type: Boolean,
        reflect: true,
        attribute: "expandup",
      },

      /**
       * Marks the accordion as part of a group and adds a divider below it. The group sets this automatically.
       */
      grouped: {
        type: Boolean,
        reflect: true,
      },

      /**
       * Sets the size of the trigger. Use `sm` for a smaller trigger, `lg` for a larger one, or `min` to remove all trigger padding so the slotted content sets the size, ideally with `chevron="none"`. Omit it for the default, medium size.
       * @type {'sm' | 'lg' | 'min'}
       */
      variant: {
        type: String,
        reflect: true,
      },
    };
  }

  static get styles() {
    return [colorCss, styleCss, tokensCss];
  }

  /**
   * Registers the element with the browser under a tag name. Also registers the group element as that name plus `-group`.
   * @param {string} [name="auro-accordion"] - The tag name to register the element under.
   *
   * @example
   * AuroAccordion.register("custom-accordion") // registers <custom-accordion> and <custom-accordion-group>
   *
   */
  static register(name = "auro-accordion") {
    const nameGroup = `${name}-group`;
    AuroLibraryRuntimeUtils.prototype.registerComponent(name, AuroAccordion);
    AuroAccordionGroup.register(nameGroup);
  }

  firstUpdated() {
    // Add the tag name as an attribute if it is different than the component name
    this.runtimeUtils.handleComponentTagRename(this, "auro-accordion");
  }

  updated(changedProperties) {
    // Update button when ariaexpanded changes
    if (changedProperties.has("expanded")) {
      const button = this.shadowRoot.querySelector("#accordionTrigger");
      if (button) {
        button.ariaExpanded = this.expanded;
      }

      // Announce state changes that assistive tech wouldn't otherwise voice. A
      // manual activation focuses the trigger, whose aria-expanded change is
      // already announced — so only announce when the trigger is NOT the
      // focused element (programmatic set, programmatic toggle(), or group
      // auto-close) to avoid a double announcement.
      const isInitialRender = changedProperties.get("expanded") === undefined;
      const triggerFocused = button && this.shadowRoot.activeElement === button;
      if (!isInitialRender && !triggerFocused) {
        const announcer = this.shadowRoot.querySelector(".srAnnouncer");
        if (announcer) {
          announcer.textContent = this.expanded ? "Expanded" : "Collapsed";
        }
      }
    }
  }

  /**
   * Renders the chevron icons.
   * @private
   * @returns {TemplateResult} - The html template for the chevron icons.
   */
  renderChevronIcons() {
    if (this.chevron === "none") {
      return nothing;
    }

    const iconSvg = this.expanded ? chevronUp.svg : chevronDown.svg;

    return html`
      <${this.iconTag} 
        customSvg 
        customColor 
        ?disabled="${this.disabled}"
        part="chevron">
        <div slot="svg">${unsafeHTML(iconSvg)}</div>
      </${this.iconTag}>
    `;
  }

  /**
   * Generates a random string of letters.
   * @private
   * @param {number} length - The number of characters to generate in the string.
   * @returns {string} - The generated string.
   */
  generateRandomLetters(length) {
    let result = "";
    const characters = "abcdefghijklmnopqrstuvwxyz";
    const charactersLength = characters.length;
    for (let index = 0; index < length; index += 1) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
  }

  /**
   * Expands the accordion if it's collapsed, or collapses it if it's expanded, and fires `toggleExpanded`. Works even when the accordion is disabled.
   */
  toggle() {
    this.expanded = !this.expanded;

    this.dispatchEvent(
      new CustomEvent("toggleExpanded", {
        bubbles: true,
        composed: true,
        detail: {
          expanded: this.expanded,
        },
      }),
    );
  }

  /**
   * Moves keyboard focus to the accordion's trigger (the header that expands/collapses the accordion).
   */
  focus() {
    this.shadowRoot?.querySelector("#accordionTrigger")?.focus();
  }

  /**
   * Toggles the visibility of the accordion content when button gets clicked.
   * @private
   * @param {Event} event - The event object.
   */
  handleButtonClick(event) {
    if (this.disabled) {
      event.preventDefault();
      return;
    }
    this.toggle();
  }

  // function that renders the HTML and CSS into  the scope of the component
  render() {
    const buttonClasses = {
      trigger: true,
      iconRight: this.getAttribute("chevron") === "right",
      iconNone: this.getAttribute("chevron") === "none",
      sm: this.getAttribute("variant") === "sm",
      lg: this.getAttribute("variant") === "lg",
      min: this.getAttribute("variant") === "min",
    };

    const variantClassMap = {
      sm: "body-default",
      lg: "heading-xs",
    };

    const triggerSlotClass = variantClassMap[this.variant] || "heading-2xs";

    // Generate unique ID & apply aria-controls
    const accordionContentId = `accordionContent-${this.buttonNameHash}`;

    return html`
      <div class="componentWrapper" part="accordion">
        <${this.buttonTag}
          ?fluid="${this.emphasis}"
          class="${classMap(buttonClasses)}"
          id="accordionTrigger"
          aria-controls="${accordionContentId}"
          aria-expanded="${this.expanded}"
          ?aria-disabled="${this.disabled}"
          ?disabled="${this.disabled}"
          @click="${this.handleButtonClick}"
          part="trigger">
          ${this.chevron === "right" ? nothing : this.renderChevronIcons()}
          <slot name="trigger" part="triggerSlot" class="${triggerSlotClass}"></slot>
          ${this.chevron === "right" ? this.renderChevronIcons() : nothing}
        </${this.buttonTag}>
        
        <div class="content body-default" id="${accordionContentId}" inert="${!this.expanded || nothing}" part="content">
          <div class="contentWrapper" part="contentWrapper">
            <slot></slot>
          </div>
        </div>

        <div class="srAnnouncer" aria-live="polite" aria-atomic="true"></div>
      </div>
    `;
  }
}
