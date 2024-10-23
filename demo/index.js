import { AuroAccordion } from '../src/auro-accordion.js';
import { AuroAccordionGroup } from '../src/auro-accordion-group.js';
import { AuroAccordionButton } from '../src/auro-accordion-button.js';

AuroAccordion.register();
AuroAccordionGroup.register();
AuroAccordionButton.register();

AuroAccordion.register('custom-accordion');
AuroAccordionGroup.register('custom-accordion-group');
AuroAccordionButton.register('custom-accordion-button');

export function initExamples(initCount) {
  initCount = initCount || 0;

  try {
  } catch {
    if (initCount <= 20) {
      // setTimeout handles issue where content is sometimes loaded after the functions get called
      setTimeout(() => {
        initExamples(initCount + 1);
      }, 100);
    }
  }
}
