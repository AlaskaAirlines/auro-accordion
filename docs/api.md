# auro-accordion

auro-accordion provides users a way to have collapsible content on a page.
Use auro-accordion-group if you want to have auto closing accordion components when others are selected.

## Properties

| Property     | Attribute    | Type      | Default | Description                                      |
|--------------|--------------|-----------|---------|--------------------------------------------------|
| `alignRight` | `alignRight` | `Boolean` |         | If set, the trigger content will align right.    |
| `emphasis`   | `emphasis`   | `Boolean` |         | If set, emphasis styles will be applied to the auro-accordions. |
| `expanded`   | `expanded`   | `Boolean` | false   | If set, the accordion is expanded.               |
| `fluid`      | `fluid`      | `Boolean` |         | If set, the trigger and content will be 100% width. |
| `iconRight`  | `iconRight`  | `Boolean` |         | If set, the chevron icon will render to the right of the trigger. |
| `lg`         | `lg`         | `Boolean` |         | If set, the auro-accordion elements will appear larger than normal. |
| `sm`         | `sm`         | `Boolean` |         | If set, the auro-accordion elements will appear smaller than normal. |

## Methods

| Method   | Type                    | Description                                      |
|----------|-------------------------|--------------------------------------------------|
| `toggle` | `(event: object): void` | Toggles the visibility of the accordion content.<br /><br />**event**: Standard event parameter |

## Events

| Event            | Type               | Description                                      |
|------------------|--------------------|--------------------------------------------------|
| `toggleExpanded` | `CustomEvent<any>` | Notifies that the accordion has been expanded or closed. |

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
