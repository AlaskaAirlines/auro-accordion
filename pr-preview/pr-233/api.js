import { expandedExample } from "../apiExamples/expanded";
import { toggleExample } from "../apiExamples/toggle";
import "../src/registered.js";

export function initExamples(initCount) {
  // biome-ignore lint/style/noParameterAssign: recursion, just for demos
  initCount = initCount || 0;

  try {
    expandedExample();
    toggleExample();
  } catch {
    if (initCount <= 20) {
      // setTimeout handles issue where content is sometimes loaded after the functions get called
      setTimeout(() => {
        initExamples(initCount + 1);
      }, 100);
    }
  }
}
