# auro-accordion

auro-accordion provides users a way to have collapsible content on a page.
Use auro-accordion-group if you want to have auto closing accordion components when others are selected.

## Attributes

| Attribute      | Type      | Description                                      |
|----------------|-----------|--------------------------------------------------|
| `fixed`        | `Boolean` | Uses px values instead of rem                    |
| `justifyLeft`  | `Boolean` | Places trigger content to the Left of the accordion |
| `justifyRight` | `Boolean` | Places trigger content to the Right of the accordion |
| `lowProfile`   | `Boolean` | Thinner version of auro-accordion w/o borders    |
| `noProfile`    | `Boolean` | Thinner version of auro-accordion w/0 padding    |

## Properties

| Property | Attribute | Type     | Description                                      |
|----------|-----------|----------|--------------------------------------------------|
| `id`     | `id`      | `String` | Used to generate the ID for the elements inside the component |

## Events

| Event            | Type               |
|------------------|--------------------|
| `toggleExpanded` | `CustomEvent<any>` |

## Slots

| Name     | Description                                      |
|----------|--------------------------------------------------|
|          | Provide text for accordion details display       |
| `header` | Used to provide the header text of the Accordion |
