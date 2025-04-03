
import { AuroAccordionButton } from '../../src/auro-accordion-button.js';

/**
 * Auro-accordion-button is the trigger element for Auro-accordion.
 */
class AuroAccordionButtonWCA extends AuroAccordionButton {}

if (!customElements.get("auro-accordion-button")) {
  customElements.define("auro-accordion-button", AuroAccordionButtonWCA);
}
