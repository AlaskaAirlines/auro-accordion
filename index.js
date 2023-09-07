import { AuroAccordion } from './src/auro-accordion';
import {  AuroAccordionGroup } from './src/auro-accordion-group';

/**
 * Register Custom Element.
 * @param {Object} name - Name to use for custom element.
 * @returns {void}
 */
const registerComponent = (name = 'custom-accordion') => {
  const groupName = name + '-group';

  // alias definition
  if (!customElements.get(name)) {
    customElements.define(name, class extends AuroAccordion {});
  }

  if (!customElements.get(groupName)) {
    customElements.define(groupName, class extends AuroAccordionGroup {});
  }
}

export { registerComponent }
