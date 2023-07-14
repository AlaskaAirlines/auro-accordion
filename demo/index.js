// import { expandedExample } from "../apiExamples/expanded";

export function initAccordionIndexExamples(initCount) {
  initCount = initCount || 0;

  try {
    // expandedExample();
  } catch {
    if (initCount <= 20) {
      // setTimeout handles issue where content is sometimes loaded after the functions get called
      setTimeout(() => {
        initAccordionIndexExamples(initCount + 1);
      }, 100);
    }
  }
}
