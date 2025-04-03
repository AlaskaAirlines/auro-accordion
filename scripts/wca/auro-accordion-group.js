
import { AuroAccordionGroup } from '../../src/auro-accordion-group.js';

/**
 * Auro-accordion provides users a way to have collapsible content on a page.
 * Use auro-accordion-group if you want to have auto closing accordion components when others are selected.
 */
class AuroAccordionGroupWCA extends AuroAccordionGroup {}

if (!customElements.get("auro-accordion-group")) {
  customElements.define("auro-accordion-group", AuroAccordionGroupWCA);
}
