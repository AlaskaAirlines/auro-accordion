# auro-accordion-group

auro-accordion-group provides users a way to group auro-accordion components so they auto collapse when one is selected.

## Attributes

| Attribute | Type    | Description                                      |
|-----------|---------|--------------------------------------------------|
| `items`   | `Array` | Array of auro-accordion objects to collapse on toggle event |

## Methods

| Method                 | Type                       | Description                                      |
|------------------------|----------------------------|--------------------------------------------------|
| `handleToggleExpanded` | `(event: object): nothing` | Internal function to toggle any expanded panels if it is not the one selected<br /><br />**event**: Standard event parameter |


# auro-accordion

auro-accordion provides users a way to have collapsable content on a page.
Use auro-accordion-group if you want to have auto closing accordion components when others are selected.

## Properties

| Property   | Attribute  | Type      | Description                                      |
|------------|------------|-----------|--------------------------------------------------|
| `expanded` | `expanded` | `Boolean` | toggles the panel on and off                     |
| `header`   | `header`   | `String`  | used to provide the header text of the Accordion |
| `id`       | `id`       | `String`  | used to generate the ID for the elements inside the component |

## Methods

| Method             | Type                                   | Description                                      |
|--------------------|----------------------------------------|--------------------------------------------------|
| `generateIconHtml` | `(svgContent: string): TemplateResult` | Internal function to generate the HTML for the icon to use<br /><br />**svgContent**: The imported svg icon |
| `handleClick`      | `(event: object): nothing`             | Internal function to handle the click event to trigger the expansion of the accordion<br /><br />**event**: Standard event parameter |

## Events

| Event            | Type               |
|------------------|--------------------|
| `toggleExpanded` | `CustomEvent<any>` |
