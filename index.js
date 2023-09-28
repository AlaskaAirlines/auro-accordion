import { AuroAccordion } from './src/auro-accordion';
import { AuroAccordionGroup } from './src/auro-accordion-group';
import { AuroAccordionButton } from './src/auro-accordionbutton';

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
