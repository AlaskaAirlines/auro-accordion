# auro-accordion

The `auro-accordion` element provides users a way to have collapsible content on a page.

### Properties & Attributes

| Properties | Attributes | Modifiers | Type              | Default | Description                                                                                                                     |
| ---------- | ---------- | --------- | ----------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------- |
| alignRight | alignRight |           | boolean           |         | If set, the trigger content will align right.                                                                                   |
| chevron    | chevron    |           | `none` \| `right` |         | Sets chevron variant option.                                                                                                    |
| disabled   | disabled   |           | boolean           |         | If set, the accordion is disabled and have reduced opacity.                                                                     |
| emphasis   | emphasis   |           | boolean           |         | If set, emphasis styles will be applied to the auro-accordion. This feature is best used on the auro-accordion-group component. |
| expanded   | expanded   |           | boolean           | `false` | If set, the accordion is expanded.                                                                                              |
| grouped    | grouped    |           | boolean           |         | Attribute will be set on accordion when it appears in an accordion group.                                                       |
| variant    | variant    |           | `sm` \| `lg`      |         | Sets accordion variant option.                                                                                                  |

### Methods

| Name     | Parameters                                                           | Return | Description                                       |
| -------- | -------------------------------------------------------------------- | ------ | ------------------------------------------------- |
| register | `name` (string) - The name of the element that you want to register. |        | This will register this element with the browser. |
| toggle   | None                                                                 |        | Toggles the visibility of the accordion content.  |

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

| Properties | Attributes | Modifiers | Type         | Default | Description                                                                         |
| ---------- | ---------- | --------- | ------------ | ------- | ----------------------------------------------------------------------------------- |
| disabled   | disabled   |           | boolean      |         | If set, the whole accordion inside the group are disabled and have reduced opacity. |
| emphasis   | emphasis   |           | boolean      |         | If set, emphasis styles will be applied to the auro-accordions.                     |
| variant    | variant    |           | `sm` \| `lg` |         | Sets accordion variant option.                                                      |

### Methods

| Name     | Parameters                                                           | Return | Description                                       |
| -------- | -------------------------------------------------------------------- | ------ | ------------------------------------------------- |
| register | `name` (string) - The name of the element that you want to register. |        | This will register this element with the browser. |