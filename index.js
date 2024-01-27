import { AuroAccordion } from './src/auro-accordion.js';
import { AuroAccordionGroup } from './src/auro-accordion-group.js';
import { AuroAccordionButton } from './src/auro-accordionbutton.js';

/**
 * Register Custom Element.
 * @param {Object} name - Name to use for custom element.
 * @param {Function} className - Class name to use for custom element.
 * @returns {void}
 */
export function registerComponent(name, className) {
  // alias definition
  if (!customElements.get(name)) {
    customElements.define(name, class extends className {});
  }
}

registerComponent('auro-accordion', AuroAccordion);
registerComponent('auro-accordion-group', AuroAccordionGroup);
registerComponent('auro-accordionbutton', AuroAccordionButton);
