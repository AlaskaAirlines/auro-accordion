<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/api.md) -->
<!-- The below content is automatically added from ./../docs/api.md -->

# auro-accordion

The `auro-accordion` element provides users a way to have collapsible content on a page.

### Properties & Attributes

| Properties | Attributes | Modifiers | Type              | Default | Description                                                                                                                                            |
| ---------- | ---------- | --------- | ----------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| alignRight | alignRight |           | boolean           |         | If set, the trigger content will align right.                                                                                                          |
| chevron    | chevron    |           | `none` \| `right` |         | Sets chevron variant option.                                                                                                                           |
| disabled   | disabled   |           | boolean           |         | If set, the accordion is disabled and have reduced opacity.                                                                                            |
| emphasis   | emphasis   |           | boolean           |         | If set, emphasis styles will be applied to the auro-accordion. This feature is best used on the auro-accordion-group component.                        |
| expanded   | expanded   |           | boolean           | `false` | If set, the accordion is expanded.                                                                                                                     |
| grouped    | grouped    |           | boolean           |         | Attribute will be set on accordion when it appears in an accordion group.                                                                              |
| noSpacing  | no-spacing |           | boolean           |         | If set, removes all trigger padding so slotted trigger content controls the trigger size. Best paired with `chevron="none"` for a fully flush trigger. |
| variant    | variant    |           | `sm` \| `lg`      |         | Sets accordion variant option.                                                                                                                         |

### Methods

| Name     | Parameters                                                           | Return | Description                                                                                        |
| -------- | -------------------------------------------------------------------- | ------ | -------------------------------------------------------------------------------------------------- |
| focus    | None                                                                 |        | Moves keyboard focus to the accordion's trigger (the header that expands/collapses the accordion). |
| register | `name` (string) - The name of the element that you want to register. |        | This will register this element with the browser.                                                  |
| toggle   | None                                                                 |        | Toggles the visibility of the accordion content.                                                   |

### Events

| Name           | Description                                              |
| -------------- | -------------------------------------------------------- |
| toggleExpanded | Notifies that the accordion has been expanded or closed. |

### Slots

| Name      | Description                                 |
| --------- | ------------------------------------------- |
| (default) | Default slot for the accordion content.     |
| trigger   | Defines the content of the trigger element. |

### CSS Shadow Parts

| Name      | Description                         |
| --------- | ----------------------------------- |
| accordion | Apply CSS to Accordion wrapper.     |
| chevron   | Apply CSS to chevron icon.          |
| content   | Apply CSS to the accordion content. |
| trigger   | Apply CSS to trigger element.       |

# auro-accordion-group

The `auro-accordion-group` element allows users to group accordions together and give them an auto closing functionality when others are selected.

### Properties & Attributes

| Properties | Attributes | Modifiers | Type         | Default | Description                                                                                                                |
| ---------- | ---------- | --------- | ------------ | ------- | -------------------------------------------------------------------------------------------------------------------------- |
| disabled   | disabled   |           | boolean      |         | If set, the whole accordion inside the group are disabled and have reduced opacity.                                        |
| emphasis   | emphasis   |           | boolean      |         | If set, emphasis styles will be applied to the auro-accordions.                                                            |
| noSpacing  | no-spacing |           | boolean      |         | If set, removes all trigger padding for every accordion in the group so slotted trigger content controls the trigger size. |
| variant    | variant    |           | `sm` \| `lg` |         | Sets accordion variant option.                                                                                             |

### Methods

| Name     | Parameters                                                           | Return | Description                                       |
| -------- | -------------------------------------------------------------------- | ------ | ------------------------------------------------- |
| register | `name` (string) - The name of the element that you want to register. |        | This will register this element with the browser. |
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
</auro-accordion>

## Property & Attribute Examples

### Align Trigger Right

Using the `alignRight` attribute will cause the trigger to align to the right edge of the accordion container.

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

### Chevron Right

Using the `chevron="right"` will cause the chevron to appear on the right side of the accordion label.

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

### No Chevron

The chevron icon within the trigger of the `auro-accordion` will not render when `chevron="none"` is present on the element.

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

### No Spacing

Use the `no-spacing` attribute to remove all padding from the trigger so that slotted trigger content controls the trigger's size. This lets the accordion sit flush against adjacent content and produce even spacing when several are stacked together. Best paired with `chevron="none"` for a fully flush trigger.

The slotted trigger content must be **presentational only** (for example a `<span>` styled as a block/flex container). Do not place interactive or focusable elements (links, buttons, inputs, or anything with `tabindex`) inside the trigger — the trigger is a native `<button>`, so nested interactive content is invalid and breaks keyboard and screen-reader behavior. Ensure the trigger still has a discernible accessible name.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/no-spacing.html) -->
<!-- The below content is automatically added from ./../apiExamples/no-spacing.html -->
<auro-accordion no-spacing chevron="none">
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
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/no-spacing.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/no-spacing.html -->

<pre class="language-html"><code class="language-html">&lt;auro-accordion no-spacing chevron="none"&gt;
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

### Disabled

Use the `disabled` attribute to disable the expand/collapse function and reduce the opacity of the element.

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

The accordion can be programatically expanded or collapsed by setting the `expanded` attribute to `true` or `false`.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/expanded.html) -->
<!-- The below content is automatically added from ./../apiExamples/expanded.html -->
<auro-button id="accordionExpandedExampleBtnTrue">Set expanded = "true"</auro-button>
<auro-button id="accordionExpandedExampleBtnFalse">Set expanded = "false"</auro-button>
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

<pre class="language-html"><code class="language-html">&lt;auro-button id="accordionExpandedExampleBtnTrue"&gt;Set expanded = "true"&lt;/auro-button&gt;
&lt;auro-button id="accordionExpandedExampleBtnFalse"&gt;Set expanded = "false"&lt;/auro-button&gt;
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
​
  document
    .querySelector("#accordionExpandedExampleBtnTrue")
    .addEventListener("click", () =&gt; {
      expandedExampleElem.expanded = true;
    });
​
  document
    .querySelector("#accordionExpandedExampleBtnFalse")
    .addEventListener("click", () =&gt; {
      expandedExampleElem.expanded = false;
    });
}</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Large Variant

Using the `variant="lg"` attribute will cause the size of the accordion trigger to render larger.

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

### Small Variant

Using the `variant="sm"` attribute will cause the size of the accordion trigger to render smaller.

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

## Method Examples

### Toggle

Using the `toggle()` method will change the state of the accordion from expanded to collapsed, or from collapsed to expanded.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/toggle.html) -->
<!-- The below content is automatically added from ./../apiExamples/toggle.html -->
<auro-button id="accordionToggleExampleBtn">Toggle Accordion</auro-button>
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

<pre class="language-html"><code class="language-html">&lt;auro-button id="accordionToggleExampleBtn"&gt;Toggle Accordion&lt;/auro-button&gt;
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
​
  document
    .querySelector("#accordionToggleExampleBtn")
    .addEventListener("click", () =&gt; {
      expandedExampleElem.toggle();
    });
}</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Common Usage Patterns & Functional Examples

### Align Chevron & Trigger Right

Using the `alignRight` attribute in conjuction with the `chevron="right"` attribute will cause the trigger to align to the right edge of the accordion, with the chevron appearing on the right side of the trigger.

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

## Property & Attribute Examples

### Disabled

Use the `disabled` attribute to disable the expand/collapse function and reduce the opacity for all accordions inside of the group.

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

Use the `emphasis` attribute to apply border highlights to the `auro-accordion` on hover and move the chevron to the right side of the trigger.

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

### No Toggle Expanded

Using the `noToggleExpanded` attribute will allow for multiple accordions in an group to be open at the same time.

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

### Large Variant

Using the `variant="lg"` attribute will cause the size of all accordion triggers within the group to render larger.

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

### Small Variant

Using the `variant="sm"` attribute will cause the size of all accordion triggers in the group to render smaller.

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

## Restyle Component with CSS Variables

The component may be restyled by changing the values of the following token(s).

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../src/styles/tokens.scss) -->
<!-- The below code snippet is automatically added from ./../src/styles/tokens.scss -->

<pre class="language-scss"><code class="language-scss">@use "@aurodesignsystem/design-tokens/dist/themes/alaska/SCSSVariables--alaska" as v;
​
:host {
  --ds-auro-accordion-content-border-color: transparent;
  --ds-auro-accordion-group-border-color: var(--ds-basic-color-border-divider, #{v.$ds-basic-color-border-divider});
  --ds-auro-accordion-trigger-border-color: transparent;
  --ds-auro-accordion-trigger-color: var(--ds-basic-color-texticon-default, #{v.$ds-basic-color-texticon-default});
  --ds-auro-accordion-trigger-icon-color: var(--ds-basic-color-texticon-default, #{v.$ds-basic-color-texticon-default});
}</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
