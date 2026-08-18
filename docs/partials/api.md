<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/api.md) -->
<!-- AURO-GENERATED-CONTENT:END -->

# auro-accordion

## Basic

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/basic.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/basic.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Property & Attribute Examples

### Align Trigger Right

Using the `alignRight` attribute will cause the trigger to align to the right edge of the accordion container.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/align-right.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/align-right.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Chevron Right

Using the `chevron="right"` will cause the chevron to appear on the right side of the accordion label.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/chevron-right.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/chevron-right.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### No Chevron

The chevron icon within the trigger of the `auro-accordion` will not render when `chevron="none"` is present on the element.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/chevron-none.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/chevron-none.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Disabled

Use the `disabled` attribute to disable the expand/collapse function and reduce the opacity of the element.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/disabled.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/disabled.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Expanded

The accordion can be programatically expanded or collapsed by setting the `expanded` attribute to `true` or `false`.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/expanded.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/expanded.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/expanded.js) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Variants

The `variant` attribute sets the size and spacing of the accordion trigger. Omit it for the default (medium) trigger, or use one of the options below.

#### Small

`variant="sm"` renders a smaller trigger with reduced padding.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/variant-sm.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/variant-sm.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### Large

`variant="lg"` renders a larger trigger with increased padding.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/variant-lg.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/variant-lg.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### Minimal

`variant="min"` strips all padding from the trigger so the slotted trigger content controls its size — letting the accordion sit flush against adjacent content. Best paired with `chevron="none"`.

Keep the slotted trigger content **presentational only** (e.g. a styled `<span>`). The trigger is a native `<button>`, so do not nest interactive or focusable elements (links, buttons, inputs, `tabindex`) inside it, and ensure the trigger still has a discernible accessible name.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/variant-min.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/variant-min.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

Because `variant="min"` hands sizing to the slotted trigger content, you can style that content to give the trigger a custom size and appearance — here a full-width, fixed-height block.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/variant-min-custom.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/variant-min-custom.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Method Examples

### Toggle

Using the `toggle()` method will change the state of the accordion from expanded to collapsed, or from collapsed to expanded.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/toggle.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/toggle.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/toggle.js) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Common Usage Patterns & Functional Examples

### Align Chevron & Trigger Right

Using the `alignRight` attribute in conjuction with the `chevron="right"` attribute will cause the trigger to align to the right edge of the accordion, with the chevron appearing on the right side of the trigger.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/align-chevron-right.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/align-chevron-right.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

# auro-accordion-group 

## Property & Attribute Examples

### Disabled

Use the `disabled` attribute to disable the expand/collapse function and reduce the opacity for all accordions inside of the group.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/disabled-group.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/disabled-group.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Emphasis

Use the `emphasis` attribute to apply border highlights to the `auro-accordion` on hover and move the chevron to the right side of the trigger.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/emphasis-group.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/emphasis-group.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### No Toggle Expanded

Using the `noToggleExpanded` attribute will allow for multiple accordions in an group to be open at the same time.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/no-toggle-expanded.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/no-toggle-expanded.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Variant Examples

Setting `variant` on the group applies the same trigger size and spacing to every accordion it contains. Omit it for the default (medium) trigger, or use one of the options below.

#### Small

`variant="sm"` renders smaller triggers with reduced padding across the group.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/variant-sm-group.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/variant-sm-group.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### Large

`variant="lg"` renders larger triggers with increased padding across the group.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/variant-lg-group.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/variant-lg-group.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### Minimal

`variant="min"` strips all trigger padding across the group so slotted trigger content controls each trigger's size. Best paired with `chevron="none"` on each accordion.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/variant-min-group.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/variant-min-group.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Restyle Component with CSS Variables

The component may be restyled by changing the values of the following token(s).

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../src/styles/tokens.scss) -->
<!-- AURO-GENERATED-CONTENT:END -->
