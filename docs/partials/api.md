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

  <!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/basic.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Property and attribute examples

### Align trigger right

Use `alignRight` to align the trigger to the right edge of the accordion's container.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/align-right.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/align-right.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Expand up

Use `expandUp` to reveal the expanded content above the trigger instead of below it. This is useful when the accordion sits near the bottom of a layout or should push existing content upward. Reading order is unchanged: the trigger still comes before its content in the DOM.

> Note: `expandUp` isn't supported on `auro-accordion-group`.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/expand-up.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/expand-up.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Chevron right

Use `chevron="right"` to move the chevron to the right end of the trigger.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/chevron-right.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/chevron-right.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### No chevron

Use `chevron="none"` to hide the chevron icon in the trigger.

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

Use the `disabled` attribute to stop people from expanding or collapsing the accordion. The trigger is shown in a muted color.

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

Set the `expanded` property to `true` or `false` in JavaScript to expand or collapse the accordion. As an HTML attribute, `expanded` is on whenever it's present.

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

`variant="min"` strips all padding from the trigger so the slotted trigger content controls its size. This lets the accordion sit flush against adjacent content. Best paired with `chevron="none"`.

Keep the slotted trigger content **presentational only** (for example, a styled `<span>`). The trigger is a native `<button>`, so don't nest interactive or focusable elements (links, buttons, inputs, `tabindex`) inside it, and ensure the trigger still has a discernible accessible name.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/variant-min.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/variant-min.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

Because `variant="min"` hands sizing to the slotted trigger content, style that content to set a custom trigger size and appearance, such as the full-width, fixed-height block below.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/variant-min-custom.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/variant-min-custom.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Method examples

### Toggle

Call `toggle()` to expand a collapsed accordion or collapse an expanded one.

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

## Common usage patterns

### Align chevron and trigger right

Use `alignRight` with `chevron="right"` to align the trigger to the right edge of the accordion, with the chevron at the right end of the trigger.

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

## Property and attribute examples

### Disabled

Use the `disabled` attribute to stop people from expanding or collapsing any accordion in the group. The triggers are shown in a muted color.

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

### No toggle expanded

Use `noToggleExpanded` to let several accordions in a group stay open at the same time.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/no-toggle-expanded.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/no-toggle-expanded.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Variant examples

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

## Restyle with CSS custom properties

Restyle the component by changing the values of the following tokens.

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../src/styles/tokens.scss) -->
<!-- AURO-GENERATED-CONTENT:END -->
