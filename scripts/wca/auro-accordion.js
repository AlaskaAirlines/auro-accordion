
import { AuroAccordion } from '../../src/auro-accordion.js';

/**
 * Auro-accordion provides users a way to have collapsible content on a page.
 * Use auro-accordion-group if you want to have auto closing accordion components when others are selected.
 */
class AuroAccordionWCA extends AuroAccordion {}

if (!customElements.get("auro-accordion")) {
  customElements.define("auro-accordion", AuroAccordionWCA);
}
