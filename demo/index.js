import { AuroAccordion } from '../src/auro-accordion.js';
import { AuroAccordionGroup } from '../src/auro-accordion-group.js';

AuroAccordion.register();
AuroAccordionGroup.register();

AuroAccordion.register('custom-accordion');
AuroAccordionGroup.register('custom-accordion-group');

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
