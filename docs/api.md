# auro-accordion-group

auro-accordion-group provides users a way to group auro-accordion components so they auto collapse when one is selected.

## Attributes

| Attribute | Type    | Description                                      |
|-----------|---------|--------------------------------------------------|
| `items`   | `Array` | Array of auro-accordion objects to collapse on toggle event |

## Properties

| Property | Type     | Default |
|----------|----------|---------|
| `long`   | `number` | 500     |
| `short`  | `number` | 20      |
| `zero`   | `number` | 0       |


# auro-accordion

auro-accordion provides users a way to have collapsible content on a page.
Use auro-accordion-group if you want to have auto closing accordion components when others are selected.

## Attributes

| Attribute | Type      | Description                   |
|-----------|-----------|-------------------------------|
| `fixed`   | `Boolean` | Uses px values instead of rem |

## Properties

| Property   | Attribute  | Type      | Default | Description                                      |
|------------|------------|-----------|---------|--------------------------------------------------|
| `expanded` | `expanded` | `Boolean` | false   | Toggles the panel on and off                     |
| `id`       | `id`       | `String`  |         | Used to generate the ID for the elements inside the component |
| `long`     |            | `number`  | 500     |                                                  |
| `short`    |            | `number`  | 20      |                                                  |

## Events

| Event            | Type               |
|------------------|--------------------|
| `toggleExpanded` | `CustomEvent<any>` |

## Slots

| Name     | Description                                      |
|----------|--------------------------------------------------|
|          | Provide text for accordion details display       |
| `header` | Used to provide the header text of the Accordion |
