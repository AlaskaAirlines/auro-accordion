# auro-accordion

auro-accordion provides users a way to have collapsible content on a page.
Use auro-accordion-group if you want to have auto closing accordion components when others are selected.

## Properties

| Property     | Attribute    | Type      | Default | Description                                      |
|--------------|--------------|-----------|---------|--------------------------------------------------|
| `alignRight` | `alignRight` | `Boolean` |         | If set, the trigger content will align right.    |
| `chevron`    | `chevron`    | `String`  |         | Sets chevron variant option. Possible values are: `none`, `right`. |
| `emphasis`   | `emphasis`   | `Boolean` |         | If set, emphasis styles will be applied to the auro-accordions. |
| `expanded`   | `expanded`   | `Boolean` | false   | If set, the accordion is expanded.               |
| `grouped`    | `grouped`    | `Boolean` |         | Attribute will be set on accordion when it appears in an accordion group. |
| `variant`    | `variant`    | `String`  |         | Sets accordion variant option. Possible values are: `sm`, `lg`. |

## Methods

| Method   | Type       | Description                                      |
|----------|------------|--------------------------------------------------|
| `toggle` | `(): void` | Toggles the visibility of the accordion content. |

## Events

| Event            | Type                                  | Description                                      |
|------------------|---------------------------------------|--------------------------------------------------|
| `toggleExpanded` | `CustomEvent<{ expanded: boolean; }>` | Notifies that the accordion has been expanded or closed. |

## Slots

| Name      | Description                                 |
|-----------|---------------------------------------------|
|           | Default slot for the accordion content.     |
| `trigger` | Defines the content of the trigger element. |

## CSS Shadow Parts

| Part        | Description                         |
|-------------|-------------------------------------|
| `accordion` | Apply CSS to Accordion wrapper.     |
| `chevron`   | Apply CSS to chevron icon.          |
| `content`   | Apply CSS to the accordion content. |
| `trigger`   | Apply CSS to trigger element.       |
