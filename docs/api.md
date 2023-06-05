# auro-accordian

The auro-accordian element provides users a way to ... (it would be great if you fill this out).

## Attributes

| Attribute    | Type      | Description                                   |
|--------------|-----------|-----------------------------------------------|
| `alignRight` | `Boolean` | If set, the trigger content will align right. |

## Properties

| Property   | Attribute  | Type      | Default | Description                                      |
|------------|------------|-----------|---------|--------------------------------------------------|
| `expanded` | `expanded` | `Boolean` | false   | If set, the accordian is expanded.               |
| `fluid`    | `fluid`    | `Boolean` |         | If set, the trigger and content will be 100% width. |

## Methods

| Method   | Type       | Description                                      |
|----------|------------|--------------------------------------------------|
| `toggle` | `(): void` | Toggles the visibility of the accordian content. |

## Slots

| Name      | Description                                 |
|-----------|---------------------------------------------|
|           | Default slot for the accordian content.     |
| `trigger` | Defines the content of the trigger element. |
