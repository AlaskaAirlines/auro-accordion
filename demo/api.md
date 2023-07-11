<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../api.md) -->
<!-- The below content is automatically added from ./../api.md -->

# auro-accordion

auro-accordion provides users a way to have collapsible content on a page.
Use auro-accordion-group if you want to have auto closing accordion components when others are selected.

## Attributes

| Attribute    | Type      | Description                                   |
|--------------|-----------|-----------------------------------------------|
| [alignRight](#alignRight) | `Boolean` | If set, the trigger content will align right. |

## Properties

| Property  | Attribute | Type      | Description                                      |
|-----------|-----------|-----------|--------------------------------------------------|
| [chevron](#chevron) | `chevron` | `boolean` |                                                  |
| [fluid](#fluid)   | `fluid`   | `Boolean` | If set, the trigger and content will be 100% width. |

## Methods

| Method   | Type       | Description                                      |
|----------|------------|--------------------------------------------------|
| [toggle](#toggle) | `(): void` | Toggles the visibility of the accordion content. |

## Slots

| Name      | Description                                 |
|-----------|---------------------------------------------|
|           | Default slot for the accordion content.     |
| [trigger](#trigger) | Defines the content of the trigger element. |
<!-- AURO-GENERATED-CONTENT:END -->

## API Examples

### Basic

<div class="twoColDemoRow">
  <div>
    <div class="exampleWrapper">
      <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/basic.html) -->
      <!-- The below content is automatically added from ./../../apiExamples/basic.html -->
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
<auro-accordion alignRight chevron>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/basic.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/basic.html -->

```html
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
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Attribute Examples

#### alignRight

Using the `alignRight` attribute will cause the trigger to align to the right edge of the accordion.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/alignRight.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/alignRight.html -->
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
<auro-accordion alignRight chevron>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/alignRight.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/alignRight.html -->

```html
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
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### expanded

The accordion can be programatically expanded or collapsed by setting the `expanded` attribute to `true` or `false`.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/expanded.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/expanded.html -->
  <auro-button id="auroaccordionExpandedExampleBtnTrue">Set expanded = `true`</auro-button>
  <auro-button id="auroaccordionExpandedExampleBtnFalse">Set expanded = `false`</auro-button>
  <auro-accordion id="auroaccordionExpandedExample">
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
<auro-accordion alignRight chevron>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/expanded.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/expanded.html -->

```html
<auro-button id="auroaccordionExpandedExampleBtnTrue">Set expanded = `true`</auro-button>
<auro-button id="auroaccordionExpandedExampleBtnFalse">Set expanded = `false`</auro-button>
<auro-accordion id="auroaccordionExpandedExample">
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
```
<!-- AURO-GENERATED-CONTENT:END -->
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/expanded.js) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/expanded.js -->

```js
export function expandedExample() {
  const expandedExampleElem = document.querySelector('#auroaccordionExpandedExample');

  document.querySelector('#auroaccordionExpandedExampleBtnTrue').addEventListener('click', () => {
    expandedExampleElem.expanded = true;
  })

  document.querySelector('#auroaccordionExpandedExampleBtnFalse').addEventListener('click', () => {
    expandedExampleElem.expanded = false;
  })
}
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### fluid

The accordion trigger can be set to consume 100% of available width by using the `fluid` attribute.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/fluid.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/fluid.html -->
  <auro-accordion fluid>
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
<auro-accordion alignRight chevron>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/fluid.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/fluid.html -->

```html
<auro-accordion fluid>
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
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### chevron

The `chevron` attribute can be used to add a chevron that toggles between expanded and collapsed states. It can also be styled and positioned using a `chevron` CSS part.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/chevron.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/chevron.html -->
  <style>
    #chevronAccordion::part(chevron) {
      padding-left: 10px;
      height: 50px;
    }
  </style>
  <auro-accordion id="chevronAccordion" chevron>
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
<auro-accordion alignRight chevron>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/chevron.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/chevron.html -->

```html
<style>
  #chevronAccordion::part(chevron) {
    padding-left: 10px;
    height: 50px;
  }
</style>
<auro-accordion id="chevronAccordion" chevron>
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
```
<!-- AURO-GENERATED-CONTENT:END -->

### Slot Examples

#### default

Slot contains all content inside the collapsable portion of the accordion.

<div class="twoColDemoRow">
  <div>
    <div class="exampleWrapper">
      <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/basic.html) -->
      <!-- The below content is automatically added from ./../../apiExamples/basic.html -->
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
<auro-accordion alignRight chevron>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/basic.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/basic.html -->

```html
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
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### trigger

This slot is used for content that may be clicked on to toggle visibility of the accordion content.

<div class="twoColDemoRow">
  <div>
    <div class="exampleWrapper">
      <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/basic.html) -->
      <!-- The below content is automatically added from ./../../apiExamples/basic.html -->
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
<auro-accordion alignRight chevron>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/basic.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/basic.html -->

```html
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
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
