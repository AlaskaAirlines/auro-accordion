import { AuroAccordion } from './src/auro-accordion.js';
import { AuroAccordionGroup } from './src/auro-accordion-group.js';
import { AuroAccordionButton } from './src/auro-accordion-button.js';

import * as RuntimeUtils from '@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs';

RuntimeUtils.default.prototype.registerComponent('custom-accordion', AuroAccordion);
RuntimeUtils.default.prototype.registerComponent('custom-accordion-group', AuroAccordionGroup);
RuntimeUtils.default.prototype.registerComponent('custom-accordion-button', AuroAccordionButton);
