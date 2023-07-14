# auro-accordion

auro-accordion provides users a way to have collapsible content on a page.
Use auro-accordion-group if you want to have auto closing accordion components when others are selected.

## Properties

| Property     | Attribute    | Type      | Default | Description                                      |
|--------------|--------------|-----------|---------|--------------------------------------------------|
| `alignRight` | `alignRight` | `Boolean` |         | If set, the trigger content will align right.    |
| `chevron`    | `chevron`    | `Boolean` |         | If set, the accordion trigger will have a chevron showing expanded/collapsed state. |
| `expanded`   | `expanded`   | `Boolean` | false   | If set, the accordion is expanded.               |
| `fluid`      | `fluid`      | `Boolean` |         | If set, the trigger and content will be 100% width. |

## Methods

| Method   | Type       | Description                                      |
|----------|------------|--------------------------------------------------|
| `toggle` | `(): void` | Toggles the visibility of the accordion content. |

## Slots

| Name      | Description                                 |
|-----------|---------------------------------------------|
|           | Default slot for the accordion content.     |
| `trigger` | Defines the content of the trigger element. |

## CSS Shadow Parts

| Part      | Description                         |
|-----------|-------------------------------------|
| `chevron` | Apply CSS to chevron icon.          |
| `content` | Apply CSS to the accordion content. |
| `trigger` | Apply CSS to trigger element.       |
