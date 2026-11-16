<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/api.md) -->
<!-- The below content is automatically added from ./../docs/api.md -->

# auro-accordion

An accordion that shows or hides a section of content when someone selects its trigger.

**Key capabilities:**
- **Chevron placement**: Use `chevron="right"` to move the chevron to the right end of the trigger or `chevron="none"` to hide it.
- **Trigger size**: Set `variant` to `sm`, `lg`, or `min` to change the trigger size.
- **Expand upward**: Set `expandUp` to reveal the content above the trigger.
- **Grouping**: Wrap accordions in `auro-accordion-group` so opening one closes the others.

**Example:**
<pre class="language-html"><code class="language-html">&lt;auro-accordion&gt;
  &lt;span slot="trigger"&gt;Trigger&lt;/span&gt;
  &lt;p&gt;Content&lt;/p&gt;
&lt;/auro-accordion&gt;</code></pre>

### Properties and attributes

| Properties | Attributes | Modifiers | Type                  | Default | Description                                                                                                                                                                                                                            |
| ---------- | ---------- | --------- | --------------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| alignRight | alignright |           | boolean               |         | Aligns the trigger to the right edge of the accordion's container.                                                                                                                                                                     |
| chevron    | chevron    |           | `none` \| `right`     |         | Sets where the chevron appears. Use `right` to place it at the right end of the trigger, or `none` to hide it. When not set, the chevron appears before the trigger text.                                                              |
| disabled   | disabled   |           | boolean               |         | Turns the accordion off. A disabled trigger is shown in a muted color and can't be selected to expand or collapse the content. Calling `toggle()` or setting `expanded` still works.                                                   |
| emphasis   | emphasis   |           | boolean               |         | Adds a highlighted left border to the trigger and the expanded content. Set `emphasis` on `auro-accordion-group` instead to also move each chevron to the right.                                                                       |
| expanded   | expanded   |           | boolean               | `false` | Expands the accordion to show its content.                                                                                                                                                                                             |
| expandUp   | expandup   |           | boolean               |         | Reveals the expanded content above the trigger instead of below it.                                                                                                                                                                    |
| grouped    | grouped    |           | boolean               |         | Marks the accordion as part of a group and adds a divider below it. The group sets this automatically.                                                                                                                                 |
| variant    | variant    |           | `sm` \| `lg` \| `min` |         | Sets the size of the trigger. Use `sm` for a smaller trigger, `lg` for a larger one, or `min` to remove all trigger padding so the slotted content sets the size, ideally with `chevron="none"`. Omit it for the default, medium size. |

### Methods

| Name     | Parameters                                                    | Return | Description                                                                                                                                       |
| -------- | ------------------------------------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| focus    | None                                                          |        | Moves keyboard focus to the accordion's trigger (the header that expands/collapses the accordion).                                                |
| register | `name` (string) - The tag name to register the element under. |        | Registers the element with the browser under a tag name. Also registers the group element as that name plus `-group`.                             |
| toggle   | None                                                          |        | Expands the accordion if it's collapsed, or collapses it if it's expanded, and fires `toggleExpanded`. Works even when the accordion is disabled. |

### Events

| Name           | Description                                                                                                                                                               |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| toggleExpanded | Fires when someone expands or collapses the accordion, or when `toggle()` is called. Doesn't fire when `expanded` is set directly. `detail.expanded` holds the new state. |

### Slots

| Name      | Description                                                                                                                                     |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| (default) | The content revealed when the accordion expands.                                                                                                |
| trigger   | The text or content shown in the trigger, such as a short heading. Use presentational content only, because the trigger is a native `<button>`. |

### CSS shadow parts

| Name           | Description                                                            |
| -------------- | ---------------------------------------------------------------------- |
| accordion      | The wrapper around the trigger and the content.                        |
| chevron        | The chevron icon in the trigger. Doesn't exist when `chevron="none"`.  |
| content        | The container that holds the expanded content.                         |
| contentWrapper | The inner container around the expanded content that sets its padding. |
| trigger        | The button that expands and collapses the accordion.                   |
| triggerSlot    | The element that holds the content slotted into `trigger`.             |

### CSS custom properties

| Name                                     | Description                                                                                       |
| ---------------------------------------- | ------------------------------------------------------------------------------------------------- |
| --ds-auro-accordion-content-border-color | Color of the left border beside the expanded content. Applies only when `emphasis` is set.        |
| --ds-auro-accordion-group-border-color   | Color of the divider below each accordion in a group. Applies only inside `auro-accordion-group`. |
| --ds-auro-accordion-trigger-border-color | Color of the trigger's border, including the ring shown when the trigger has keyboard focus.      |
| --ds-auro-accordion-trigger-color        | Color of the trigger text.                                                                        |
| --ds-auro-accordion-trigger-icon-color   | Color of the chevron icon.                                                                        |

# auro-accordion-group

Groups accordions so that opening one closes the others.

**Key capabilities:**
- **Several open at once**: Set `noToggleExpanded` to let more than one accordion stay open.
- **Disable all**: Set `disabled` to turn off every accordion in the group.
- **Emphasis**: Set `emphasis` to add the emphasis border to every accordion and move each chevron to the right.
- **Trigger size**: Set `variant` to `sm`, `lg`, or `min` to size every trigger.

**Example:**
<pre class="language-html"><code class="language-html">&lt;auro-accordion-group&gt;
  &lt;auro-accordion&gt;
    &lt;span slot="trigger"&gt;Trigger&lt;/span&gt;
    &lt;p&gt;Content&lt;/p&gt;
  &lt;/auro-accordion&gt;
&lt;/auro-accordion-group&gt;</code></pre>

### Properties and attributes

| Properties       | Attributes       | Modifiers | Type                  | Default | Description                                                                                                                                                                                |
| ---------------- | ---------------- | --------- | --------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| disabled         | disabled         |           | boolean               |         | Turns off every accordion in the group. Disabled triggers are shown in a muted color and can't be selected.                                                                                |
| emphasis         | emphasis         |           | boolean               |         | Adds the emphasis border to every accordion in the group and moves each chevron to the right.                                                                                              |
| noToggleExpanded | notoggleexpanded |           | boolean               | `false` | Lets several accordions in the group stay open at the same time. By default, opening one accordion closes the others.                                                                      |
| variant          | variant          |           | `sm` \| `lg` \| `min` |         | Sets the trigger size for every accordion in the group. Use `sm` for smaller triggers, `lg` for larger ones, or `min` to remove all trigger padding so the slotted content sets each size. |

### Methods

| Name     | Parameters                                                    | Return | Description                                                                                                                                                  |
| -------- | ------------------------------------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| register | `name` (string) - The tag name to register the element under. |        | Registers the element with the browser under a tag name. Register the group as the accordion's tag name plus `-group`, so the group can find its accordions. |

### Slots

| Name      | Description                             |
| --------- | --------------------------------------- |
| (default) | The `auro-accordion` elements to group. |
<!-- AURO-GENERATED-CONTENT:END -->

# auro-accordion

## Basic

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/basic.html) -->
<!-- The below content is automatically added from ./../apiExamples/basic.html -->
<auro-accordion>
<span slot="trigger">Trigger</span>
<p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</p>
<p>
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</p>
<p>
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
</p>
<p>
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
</auro-accordion>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/basic.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/basic.html -->
<pre class="language-html"><code class="language-html">&lt;auro-accordion&gt;
  &lt;span slot="trigger"&gt;Trigger&lt;/span&gt;
  &lt;p&gt;
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  &lt;/p&gt;
  &lt;p&gt;
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  &lt;/p&gt;
  &lt;p&gt;
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
  &lt;/p&gt;
  &lt;p&gt;
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  &lt;/p&gt;
&lt;/auro-accordion&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Property and attribute examples

### Align trigger right

Use `alignRight` to align the trigger to the right edge of the accordion's container.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/align-right.html) -->
<!-- The below content is automatically added from ./../apiExamples/align-right.html -->
<auro-accordion alignRight>
<span slot="trigger">Trigger</span>
<p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</p>
<p>
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</p>
<p>
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
</p>
<p>
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
</auro-accordion>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/align-right.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/align-right.html -->

<pre class="language-html"><code class="language-html">&lt;auro-accordion alignRight&gt;
  &lt;span slot="trigger"&gt;Trigger&lt;/span&gt;
  &lt;p&gt;
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  &lt;/p&gt;
  &lt;p&gt;
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  &lt;/p&gt;
  &lt;p&gt;
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
  &lt;/p&gt;
  &lt;p&gt;
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  &lt;/p&gt;
&lt;/auro-accordion&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Expand up

Use `expandUp` to reveal the expanded content above the trigger instead of below it. This is useful when the accordion sits near the bottom of a layout or should push existing content upward. Reading order is unchanged: the trigger still comes before its content in the DOM.

> Note: `expandUp` isn't supported on `auro-accordion-group`.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/expand-up.html) -->
<!-- The below content is automatically added from ./../apiExamples/expand-up.html -->
<auro-accordion expandUp>
<span slot="trigger">Trigger</span>
<p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</p>
<p>
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</p>
<p>
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
</p>
<p>
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
</auro-accordion>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/expand-up.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/expand-up.html -->

<pre class="language-html"><code class="language-html">&lt;auro-accordion expandUp&gt;
  &lt;span slot="trigger"&gt;Trigger&lt;/span&gt;
  &lt;p&gt;
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  &lt;/p&gt;
  &lt;p&gt;
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  &lt;/p&gt;
  &lt;p&gt;
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
  &lt;/p&gt;
  &lt;p&gt;
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  &lt;/p&gt;
&lt;/auro-accordion&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Chevron right

Use `chevron="right"` to move the chevron to the right end of the trigger.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/chevron-right.html) -->
<!-- The below content is automatically added from ./../apiExamples/chevron-right.html -->
<auro-accordion chevron="right">
<span slot="trigger">Trigger</span>
<p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</p>
<p>
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</p>
<p>
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
</p>
<p>
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
</auro-accordion>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/chevron-right.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/chevron-right.html -->

<pre class="language-html"><code class="language-html">&lt;auro-accordion chevron="right"&gt;
  &lt;span slot="trigger"&gt;Trigger&lt;/span&gt;
  &lt;p&gt;
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  &lt;/p&gt;
  &lt;p&gt;
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  &lt;/p&gt;
  &lt;p&gt;
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
  &lt;/p&gt;
  &lt;p&gt;
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  &lt;/p&gt;
&lt;/auro-accordion&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### No chevron

Use `chevron="none"` to hide the chevron icon in the trigger.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/chevron-none.html) -->
<!-- The below content is automatically added from ./../apiExamples/chevron-none.html -->
<auro-accordion chevron="none">
<span slot="trigger">Trigger</span>
<p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</p>
<p>
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</p>
<p>
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
</p>
<p>
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
</auro-accordion>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/chevron-none.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/chevron-none.html -->

<pre class="language-html"><code class="language-html">&lt;auro-accordion chevron="none"&gt;
  &lt;span slot="trigger"&gt;Trigger&lt;/span&gt;
  &lt;p&gt;
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  &lt;/p&gt;
  &lt;p&gt;
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  &lt;/p&gt;
  &lt;p&gt;
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
  &lt;/p&gt;
  &lt;p&gt;
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  &lt;/p&gt;
&lt;/auro-accordion&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Disabled

Use the `disabled` attribute to stop people from expanding or collapsing the accordion. The trigger is shown in a muted color.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/disabled.html) -->
<!-- The below content is automatically added from ./../apiExamples/disabled.html -->
<auro-accordion disabled>
<span slot="trigger">Trigger</span>
<p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</p>
<p>
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</p>
<p>
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
</p>
<p>
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
</auro-accordion>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/disabled.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/disabled.html -->

<pre class="language-html"><code class="language-html">&lt;auro-accordion disabled&gt;
  &lt;span slot="trigger"&gt;Trigger&lt;/span&gt;
  &lt;p&gt;
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  &lt;/p&gt;
  &lt;p&gt;
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  &lt;/p&gt;
  &lt;p&gt;
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
  &lt;/p&gt;
  &lt;p&gt;
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  &lt;/p&gt;
&lt;/auro-accordion&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Expanded

Set the `expanded` property to `true` or `false` in JavaScript to expand or collapse the accordion. As an HTML attribute, `expanded` is on whenever it's present.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/expanded.html) -->
<!-- The below content is automatically added from ./../apiExamples/expanded.html -->
<auro-button id="accordionExpandedExampleBtnTrue">Expand accordion</auro-button>
<auro-button id="accordionExpandedExampleBtnFalse">Collapse accordion</auro-button>
<auro-accordion id="accordionExpandedExample">
<span slot="trigger">Trigger</span>
<p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</p>
<p>
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</p>
<p>
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
</p>
<p>
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
</auro-accordion>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/expanded.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/expanded.html -->

<pre class="language-html"><code class="language-html">&lt;auro-button id="accordionExpandedExampleBtnTrue"&gt;Expand accordion&lt;/auro-button&gt;
&lt;auro-button id="accordionExpandedExampleBtnFalse"&gt;Collapse accordion&lt;/auro-button&gt;
&lt;auro-accordion id="accordionExpandedExample"&gt;
  &lt;span slot="trigger"&gt;Trigger&lt;/span&gt;
  &lt;p&gt;
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  &lt;/p&gt;
  &lt;p&gt;
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  &lt;/p&gt;
  &lt;p&gt;
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
  &lt;/p&gt;
  &lt;p&gt;
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  &lt;/p&gt;
&lt;/auro-accordion&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/expanded.js) -->
<!-- The below code snippet is automatically added from ./../apiExamples/expanded.js -->

<pre class="language-js"><code class="language-js">export function expandedExample() {
  const expandedExampleElem = document.querySelector(
    "#accordionExpandedExample",
  );
&#10;  document
    .querySelector("#accordionExpandedExampleBtnTrue")
    .addEventListener("click", () =&gt; {
      expandedExampleElem.expanded = true;
    });
&#10;  document
    .querySelector("#accordionExpandedExampleBtnFalse")
    .addEventListener("click", () =&gt; {
      expandedExampleElem.expanded = false;
    });
}</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Variants

The `variant` attribute sets the size and spacing of the accordion trigger. Omit it for the default (medium) trigger, or use one of the options below.

#### Small

`variant="sm"` renders a smaller trigger with reduced padding.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/variant-sm.html) -->
<!-- The below content is automatically added from ./../apiExamples/variant-sm.html -->
<auro-accordion variant="sm">
<span slot="trigger">Trigger</span>
<p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</p>
<p>
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</p>
<p>
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
</p>
<p>
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
</auro-accordion>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/variant-sm.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/variant-sm.html -->

<pre class="language-html"><code class="language-html">&lt;auro-accordion variant="sm"&gt;
  &lt;span slot="trigger"&gt;Trigger&lt;/span&gt;
  &lt;p&gt;
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  &lt;/p&gt;
  &lt;p&gt;
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  &lt;/p&gt;
  &lt;p&gt;
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
  &lt;/p&gt;
  &lt;p&gt;
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  &lt;/p&gt;
&lt;/auro-accordion&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Large

`variant="lg"` renders a larger trigger with increased padding.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/variant-lg.html) -->
<!-- The below content is automatically added from ./../apiExamples/variant-lg.html -->
<auro-accordion variant="lg">
<span slot="trigger">Trigger</span>
<p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</p>
<p>
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</p>
<p>
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
</p>
<p>
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
</auro-accordion>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/variant-lg.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/variant-lg.html -->

<pre class="language-html"><code class="language-html">&lt;auro-accordion variant="lg"&gt;
  &lt;span slot="trigger"&gt;Trigger&lt;/span&gt;
  &lt;p&gt;
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  &lt;/p&gt;
  &lt;p&gt;
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  &lt;/p&gt;
  &lt;p&gt;
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
  &lt;/p&gt;
  &lt;p&gt;
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  &lt;/p&gt;
&lt;/auro-accordion&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Minimal

`variant="min"` strips all padding from the trigger so the slotted trigger content controls its size. This lets the accordion sit flush against adjacent content. Best paired with `chevron="none"`.

Keep the slotted trigger content **presentational only** (for example, a styled `<span>`). The trigger is a native `<button>`, so don't nest interactive or focusable elements (links, buttons, inputs, `tabindex`) inside it, and ensure the trigger still has a discernible accessible name.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/variant-min.html) -->
<!-- The below content is automatically added from ./../apiExamples/variant-min.html -->
<auro-accordion variant="min" chevron="none">
<span slot="trigger">Trigger</span>
<p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</p>
<p>
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</p>
</auro-accordion>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/variant-min.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/variant-min.html -->

<pre class="language-html"><code class="language-html">&lt;auro-accordion variant="min" chevron="none"&gt;
  &lt;span slot="trigger"&gt;Trigger&lt;/span&gt;
  &lt;p&gt;
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  &lt;/p&gt;
  &lt;p&gt;
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  &lt;/p&gt;
&lt;/auro-accordion&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
Because `variant="min"` hands sizing to the slotted trigger content, style that content to set a custom trigger size and appearance, such as the full-width, fixed-height block below.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/variant-min-custom.html) -->
<!-- The below content is automatically added from ./../apiExamples/variant-min-custom.html -->
<auro-accordion variant="min" chevron="none">
<span slot="trigger" style="display: flex; align-items: center; justify-content: center; width: 100%; height: 96px; background: #0074c8; color: #fff; font-weight: 700; font-size: 1.25rem; border-radius: 8px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);">
      Custom-sized trigger
</span>
<p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</p>
<p>
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</p>
</auro-accordion>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/variant-min-custom.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/variant-min-custom.html -->

<pre class="language-html"><code class="language-html">&lt;auro-accordion variant="min" chevron="none"&gt;
  &lt;span slot="trigger" style="display: flex; align-items: center; justify-content: center; width: 100%; height: 96px; background: #0074c8; color: #fff; font-weight: 700; font-size: 1.25rem; border-radius: 8px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);"&gt;
    Custom-sized trigger
  &lt;/span&gt;
  &lt;p&gt;
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  &lt;/p&gt;
  &lt;p&gt;
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  &lt;/p&gt;
&lt;/auro-accordion&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Method examples

### Toggle

Call `toggle()` to expand a collapsed accordion or collapse an expanded one.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/toggle.html) -->
<!-- The below content is automatically added from ./../apiExamples/toggle.html -->
<auro-button id="accordionToggleExampleBtn">Toggle accordion</auro-button>
<auro-accordion id="accordionToggleExample">
<span slot="trigger">Trigger</span>
<p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</p>
<p>
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</p>
<p>
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
</p>
<p>
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
</auro-accordion>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/toggle.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/toggle.html -->

<pre class="language-html"><code class="language-html">&lt;auro-button id="accordionToggleExampleBtn"&gt;Toggle accordion&lt;/auro-button&gt;
&lt;auro-accordion id="accordionToggleExample"&gt;
  &lt;span slot="trigger"&gt;Trigger&lt;/span&gt;
  &lt;p&gt;
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  &lt;/p&gt;
  &lt;p&gt;
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  &lt;/p&gt;
  &lt;p&gt;
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
  &lt;/p&gt;
  &lt;p&gt;
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  &lt;/p&gt;
&lt;/auro-accordion&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/toggle.js) -->
<!-- The below code snippet is automatically added from ./../apiExamples/toggle.js -->

<pre class="language-js"><code class="language-js">export function toggleExample() {
  const expandedExampleElem = document.querySelector(
    "#accordionToggleExample",
  );
&#10;  document
    .querySelector("#accordionToggleExampleBtn")
    .addEventListener("click", () =&gt; {
      expandedExampleElem.toggle();
    });
}</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Common usage patterns

### Align chevron and trigger right

Use `alignRight` with `chevron="right"` to align the trigger to the right edge of the accordion, with the chevron at the right end of the trigger.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/align-chevron-right.html) -->
<!-- The below content is automatically added from ./../apiExamples/align-chevron-right.html -->
<auro-accordion chevron="right" alignRight>
<span slot="trigger">Trigger</span>
<p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</p>
<p>
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</p>
<p>
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
</p>
<p>
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
</auro-accordion>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/align-chevron-right.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/align-chevron-right.html -->

<pre class="language-html"><code class="language-html">&lt;auro-accordion chevron="right" alignRight&gt;
  &lt;span slot="trigger"&gt;Trigger&lt;/span&gt;
  &lt;p&gt;
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  &lt;/p&gt;
  &lt;p&gt;
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  &lt;/p&gt;
  &lt;p&gt;
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
  &lt;/p&gt;
  &lt;p&gt;
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  &lt;/p&gt;
&lt;/auro-accordion&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

# auro-accordion-group 

## Property and attribute examples

### Disabled

Use the `disabled` attribute to stop people from expanding or collapsing any accordion in the group. The triggers are shown in a muted color.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/disabled-group.html) -->
<!-- The below content is automatically added from ./../apiExamples/disabled-group.html -->
<auro-accordion-group disabled>
<auro-accordion>
<span slot="trigger">Trigger</span>
<p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</p>
<p>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</p>
<p>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
</p>
<p>
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
</auro-accordion>
<auro-accordion>
<span slot="trigger">Trigger</span>
<p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</p>
<p>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</p>
<p>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
</p>
<p>
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
</auro-accordion>
<auro-accordion>
<span slot="trigger">Trigger</span>
<p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</p>
<p>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</p>
<p>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
</p>
<p>
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
</auro-accordion>
</auro-accordion-group>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/disabled-group.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/disabled-group.html -->

<pre class="language-html"><code class="language-html">&lt;auro-accordion-group disabled&gt;
  &lt;auro-accordion&gt;
    &lt;span slot="trigger"&gt;Trigger&lt;/span&gt;
    &lt;p&gt;
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    &lt;/p&gt;
    &lt;p&gt;
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    &lt;/p&gt;
    &lt;p&gt;
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    &lt;/p&gt;
    &lt;p&gt;
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    &lt;/p&gt;
  &lt;/auro-accordion&gt;
  &lt;auro-accordion&gt;
    &lt;span slot="trigger"&gt;Trigger&lt;/span&gt;
    &lt;p&gt;
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    &lt;/p&gt;
    &lt;p&gt;
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    &lt;/p&gt;
    &lt;p&gt;
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    &lt;/p&gt;
    &lt;p&gt;
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    &lt;/p&gt;
  &lt;/auro-accordion&gt;
  &lt;auro-accordion&gt;
    &lt;span slot="trigger"&gt;Trigger&lt;/span&gt;
    &lt;p&gt;
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    &lt;/p&gt;
    &lt;p&gt;
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    &lt;/p&gt;
    &lt;p&gt;
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    &lt;/p&gt;
    &lt;p&gt;
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    &lt;/p&gt;
  &lt;/auro-accordion&gt;
&lt;/auro-accordion-group&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Emphasis

Use the `emphasis` attribute to add a border highlight to each accordion when it's hovered, focused, or expanded, and to move each chevron to the right end of the trigger.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/emphasis-group.html) -->
<!-- The below content is automatically added from ./../apiExamples/emphasis-group.html -->
<auro-accordion-group emphasis>
<auro-accordion>
<span slot="trigger">Trigger</span>
<p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</p>
<p>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</p>
<p>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
</p>
<p>
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
</auro-accordion>
<auro-accordion>
<span slot="trigger">Trigger</span>
<p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</p>
<p>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</p>
<p>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
</p>
<p>
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
</auro-accordion>
<auro-accordion>
<span slot="trigger">Trigger</span>
<p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</p>
<p>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</p>
<p>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
</p>
<p>
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
</auro-accordion>
</auro-accordion-group>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/emphasis-group.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/emphasis-group.html -->

<pre class="language-html"><code class="language-html">&lt;auro-accordion-group emphasis&gt;
  &lt;auro-accordion&gt;
    &lt;span slot="trigger"&gt;Trigger&lt;/span&gt;
    &lt;p&gt;
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    &lt;/p&gt;
    &lt;p&gt;
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    &lt;/p&gt;
    &lt;p&gt;
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    &lt;/p&gt;
    &lt;p&gt;
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    &lt;/p&gt;
  &lt;/auro-accordion&gt;
  &lt;auro-accordion&gt;
    &lt;span slot="trigger"&gt;Trigger&lt;/span&gt;
    &lt;p&gt;
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    &lt;/p&gt;
    &lt;p&gt;
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    &lt;/p&gt;
    &lt;p&gt;
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    &lt;/p&gt;
    &lt;p&gt;
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    &lt;/p&gt;
  &lt;/auro-accordion&gt;
  &lt;auro-accordion&gt;
    &lt;span slot="trigger"&gt;Trigger&lt;/span&gt;
    &lt;p&gt;
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    &lt;/p&gt;
    &lt;p&gt;
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    &lt;/p&gt;
    &lt;p&gt;
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    &lt;/p&gt;
    &lt;p&gt;
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    &lt;/p&gt;
  &lt;/auro-accordion&gt;
&lt;/auro-accordion-group&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### No toggle expanded

Use `noToggleExpanded` to let several accordions in a group stay open at the same time.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/no-toggle-expanded.html) -->
<!-- The below content is automatically added from ./../apiExamples/no-toggle-expanded.html -->
<auro-accordion-group noToggleExpanded>
<auro-accordion>
<span slot="trigger">Trigger</span>
<p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</p>
<p>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</p>
<p>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
</p>
<p>
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
</auro-accordion>
<auro-accordion>
<span slot="trigger">Trigger</span>
<p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</p>
<p>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</p>
<p>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
</p>
<p>
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
</auro-accordion>
<auro-accordion>
<span slot="trigger">Trigger</span>
<p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</p>
<p>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</p>
<p>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
</p>
<p>
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
</auro-accordion>
</auro-accordion-group>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/no-toggle-expanded.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/no-toggle-expanded.html -->

<pre class="language-html"><code class="language-html">&lt;auro-accordion-group noToggleExpanded&gt;
  &lt;auro-accordion&gt;
    &lt;span slot="trigger"&gt;Trigger&lt;/span&gt;
    &lt;p&gt;
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    &lt;/p&gt;
    &lt;p&gt;
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    &lt;/p&gt;
    &lt;p&gt;
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    &lt;/p&gt;
    &lt;p&gt;
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    &lt;/p&gt;
  &lt;/auro-accordion&gt;
  &lt;auro-accordion&gt;
    &lt;span slot="trigger"&gt;Trigger&lt;/span&gt;
    &lt;p&gt;
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    &lt;/p&gt;
    &lt;p&gt;
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    &lt;/p&gt;
    &lt;p&gt;
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    &lt;/p&gt;
    &lt;p&gt;
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    &lt;/p&gt;
  &lt;/auro-accordion&gt;
  &lt;auro-accordion&gt;
    &lt;span slot="trigger"&gt;Trigger&lt;/span&gt;
    &lt;p&gt;
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    &lt;/p&gt;
    &lt;p&gt;
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    &lt;/p&gt;
    &lt;p&gt;
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    &lt;/p&gt;
    &lt;p&gt;
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    &lt;/p&gt;
  &lt;/auro-accordion&gt;
&lt;/auro-accordion-group&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Variant examples

Setting `variant` on the group applies the same trigger size and spacing to every accordion it contains. Omit it for the default (medium) trigger, or use one of the options below.

#### Small

`variant="sm"` renders smaller triggers with reduced padding across the group.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/variant-sm-group.html) -->
<!-- The below content is automatically added from ./../apiExamples/variant-sm-group.html -->
<auro-accordion-group variant="sm">
<auro-accordion>
<span slot="trigger">Trigger</span>
<p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</p>
<p>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</p>
<p>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
</p>
<p>
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
</auro-accordion>
<auro-accordion>
<span slot="trigger">Trigger</span>
<p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</p>
<p>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</p>
<p>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
</p>
<p>
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
</auro-accordion>
<auro-accordion>
<span slot="trigger">Trigger</span>
<p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</p>
<p>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</p>
<p>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
</p>
<p>
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
</auro-accordion>
</auro-accordion-group>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/variant-sm-group.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/variant-sm-group.html -->

<pre class="language-html"><code class="language-html">&lt;auro-accordion-group variant="sm"&gt;
  &lt;auro-accordion&gt;
    &lt;span slot="trigger"&gt;Trigger&lt;/span&gt;
    &lt;p&gt;
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    &lt;/p&gt;
    &lt;p&gt;
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    &lt;/p&gt;
    &lt;p&gt;
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    &lt;/p&gt;
    &lt;p&gt;
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    &lt;/p&gt;
  &lt;/auro-accordion&gt;
  &lt;auro-accordion&gt;
    &lt;span slot="trigger"&gt;Trigger&lt;/span&gt;
    &lt;p&gt;
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    &lt;/p&gt;
    &lt;p&gt;
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    &lt;/p&gt;
    &lt;p&gt;
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    &lt;/p&gt;
    &lt;p&gt;
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    &lt;/p&gt;
  &lt;/auro-accordion&gt;
  &lt;auro-accordion&gt;
    &lt;span slot="trigger"&gt;Trigger&lt;/span&gt;
    &lt;p&gt;
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    &lt;/p&gt;
    &lt;p&gt;
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    &lt;/p&gt;
    &lt;p&gt;
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    &lt;/p&gt;
    &lt;p&gt;
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    &lt;/p&gt;
  &lt;/auro-accordion&gt;
&lt;/auro-accordion-group&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Large

`variant="lg"` renders larger triggers with increased padding across the group.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/variant-lg-group.html) -->
<!-- The below content is automatically added from ./../apiExamples/variant-lg-group.html -->
<auro-accordion-group variant="lg">
<auro-accordion>
<span slot="trigger">Trigger</span>
<p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</p>
<p>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</p>
<p>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
</p>
<p>
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
</auro-accordion>
<auro-accordion>
<span slot="trigger">Trigger</span>
<p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</p>
<p>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</p>
<p>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
</p>
<p>
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
</auro-accordion>
<auro-accordion>
<span slot="trigger">Trigger</span>
<p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</p>
<p>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</p>
<p>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
</p>
<p>
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
</auro-accordion>
</auro-accordion-group>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/variant-lg-group.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/variant-lg-group.html -->

<pre class="language-html"><code class="language-html">&lt;auro-accordion-group variant="lg"&gt;
  &lt;auro-accordion&gt;
    &lt;span slot="trigger"&gt;Trigger&lt;/span&gt;
    &lt;p&gt;
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    &lt;/p&gt;
    &lt;p&gt;
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    &lt;/p&gt;
    &lt;p&gt;
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    &lt;/p&gt;
    &lt;p&gt;
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    &lt;/p&gt;
  &lt;/auro-accordion&gt;
  &lt;auro-accordion&gt;
    &lt;span slot="trigger"&gt;Trigger&lt;/span&gt;
    &lt;p&gt;
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    &lt;/p&gt;
    &lt;p&gt;
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    &lt;/p&gt;
    &lt;p&gt;
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    &lt;/p&gt;
    &lt;p&gt;
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    &lt;/p&gt;
  &lt;/auro-accordion&gt;
  &lt;auro-accordion&gt;
    &lt;span slot="trigger"&gt;Trigger&lt;/span&gt;
    &lt;p&gt;
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    &lt;/p&gt;
    &lt;p&gt;
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    &lt;/p&gt;
    &lt;p&gt;
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    &lt;/p&gt;
    &lt;p&gt;
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    &lt;/p&gt;
  &lt;/auro-accordion&gt;
&lt;/auro-accordion-group&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Minimal

`variant="min"` strips all trigger padding across the group so slotted trigger content controls each trigger's size. Best paired with `chevron="none"` on each accordion.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/variant-min-group.html) -->
<!-- The below content is automatically added from ./../apiExamples/variant-min-group.html -->
<auro-accordion-group variant="min">
<auro-accordion chevron="none">
<span slot="trigger">Trigger</span>
<p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</p>
<p>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</p>
</auro-accordion>
<auro-accordion chevron="none">
<span slot="trigger">Trigger</span>
<p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</p>
<p>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</p>
</auro-accordion>
<auro-accordion chevron="none">
<span slot="trigger">Trigger</span>
<p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</p>
<p>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</p>
</auro-accordion>
</auro-accordion-group>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/variant-min-group.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/variant-min-group.html -->

<pre class="language-html"><code class="language-html">&lt;auro-accordion-group variant="min"&gt;
  &lt;auro-accordion chevron="none"&gt;
    &lt;span slot="trigger"&gt;Trigger&lt;/span&gt;
    &lt;p&gt;
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    &lt;/p&gt;
    &lt;p&gt;
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    &lt;/p&gt;
  &lt;/auro-accordion&gt;
  &lt;auro-accordion chevron="none"&gt;
    &lt;span slot="trigger"&gt;Trigger&lt;/span&gt;
    &lt;p&gt;
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    &lt;/p&gt;
    &lt;p&gt;
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    &lt;/p&gt;
  &lt;/auro-accordion&gt;
  &lt;auro-accordion chevron="none"&gt;
    &lt;span slot="trigger"&gt;Trigger&lt;/span&gt;
    &lt;p&gt;
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    &lt;/p&gt;
    &lt;p&gt;
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    &lt;/p&gt;
  &lt;/auro-accordion&gt;
&lt;/auro-accordion-group&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Restyle with CSS custom properties

Restyle the component by changing the values of the following tokens.

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../src/styles/tokens.scss) -->
<!-- The below code snippet is automatically added from ./../src/styles/tokens.scss -->

<pre class="language-scss"><code class="language-scss">@use "@aurodesignsystem/design-tokens/dist/themes/alaska/SCSSVariables--alaska" as v;
&#10;:host {
  --ds-auro-accordion-content-border-color: transparent;
  --ds-auro-accordion-group-border-color: var(--ds-basic-color-border-divider, #{v.$ds-basic-color-border-divider});
  --ds-auro-accordion-trigger-border-color: transparent;
  --ds-auro-accordion-trigger-color: var(--ds-basic-color-texticon-default, #{v.$ds-basic-color-texticon-default});
  --ds-auro-accordion-trigger-icon-color: var(--ds-basic-color-texticon-default, #{v.$ds-basic-color-texticon-default});
}</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
