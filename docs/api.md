# auro-accordion

auro-accordion provides users a way to have collapsible content on a page.
Use auro-accordion-group if you want to have auto closing accordion components when others are selected.

## Attributes

| Attribute      | Type      | Description                                      |
|----------------|-----------|--------------------------------------------------|
| `error`        | `Boolean` | Dependent on shade; error styling                |
| `fixed`        | `Boolean` | Uses px values instead of rem                    |
| `information`  | `Boolean` | Dependent on shade; informational styling        |
| `justifyLeft`  | `Boolean` | Places trigger content to the Left of the accordion |
| `justifyRight` | `Boolean` | Places trigger content to the Right of the accordion |
| `lowProfile`   | `Boolean` | Thinner version of auro-accordion w/o borders    |
| `noProfile`    | `Boolean` | Thinner version of auro-accordion w/0 padding    |
| `noanimation`  | `Boolean` | (deprecated) Removes the animated opening and closing effect of the accordion |
| `shade`        | `Boolean` | (deprecated) Accordion style with shade dropdown |
| `showOverflow` | `Boolean` | (deprecated) Allow `.details` content to overflow out of the accordion |
| `warning`      | `Boolean` | Dependent on shade; warning styling              |

## Properties

| Property   | Attribute  | Type      | Default | Description                                      |
|------------|------------|-----------|---------|--------------------------------------------------|
| `expanded` | `expanded` | `Boolean` | false   | Toggles the panel on and off                     |
| `id`       | `id`       | `String`  |         | Used to generate the ID for the elements inside the component |

## Events

| Event            | Type               |
|------------------|--------------------|
| `toggleExpanded` | `CustomEvent<any>` |

## Slots

| Name         | Description                                      |
|--------------|--------------------------------------------------|
|              | Provide text for accordion details display       |
| `header`     | Used to provide the header text of the Accordion |
| `subTrigger` | Use to provide subtext to trigger header         |

## CSS Shadow Parts

| Part      | Description                                      |
|-----------|--------------------------------------------------|
| `content` | The details content container (inner padding)    |
| `details` | Supports the outermost container of the content (animation and overflow) |
