import { AuroAccordian } from './src/auro-accordian';

/**
 * Register Custom Element.
 * @param {Object} name - Name to use for custom element.
 * @returns {void}
 */
 const registerComponent = (name = 'custom-accordian') => {
  // alias definition
  if (!customElements.get(name)) {
    customElements.define(name, class extends AuroAccordian {});
  }
}

export { registerComponent }
