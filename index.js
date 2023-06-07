import { AuroAccordion } from './src/auro-accordion';

/**
 * Register Custom Element.
 * @param {Object} name - Name to use for custom element.
 * @returns {void}
 */
 const registerComponent = (name = 'custom-accordion') => {
  // alias definition
  if (!customElements.get(name)) {
    customElements.define(name, class extends AuroAccordion {});
  }
}

export { registerComponent }
