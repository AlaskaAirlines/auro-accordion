```js
// Import the class only
import { AuroAccordion, AuroAccordionGroup } from '@aurodesignsystem/auro-accordion/class';

// Register with a custom name if desired
AuroAccordion.register('custom-accordion');
AuroAccordionGroup.register('custom-accordion-group');
```

This creates the custom elements `<custom-accordion>` and `<custom-accordion-group>`, which behave exactly like `<auro-accordion>` and `<auro-accordion-group>`, allowing both sets of components to coexist on the same page without interfering with each other.
