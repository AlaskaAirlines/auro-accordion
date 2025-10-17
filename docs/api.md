# auro-accordion

Auro-accordion provides users a way to have collapsible content on a page.
Use auro-accordion-group if you want to have auto closing accordion components when others are selected.


### Properties & Attributes

| Properties | Attributes | Type | Default | Description  |
| --- | --- | --- | --- | --- |
expanded | expanded | boolean | false | If set, the accordion is expanded.
alignRight | alignRight | boolean |  | If set, the trigger content will align right.
emphasis | emphasis | boolean |  | If set, emphasis styles will be applied to the auro-accordions.
grouped | grouped | boolean |  | Attribute will be set on accordion when it appears in an accordion group.
chevron | chevron | string |  | Sets chevron variant option. Possible values are: `none`, `right`.
variant | variant | string |  | Sets accordion variant option. Possible values are: `sm`, `lg`.
disabled | disabled | boolean |  | If set, the accordion is disabled and have reduced opacity.


### Methods

| Name | Parameters | Return | Description |
| --- | --- | --- | --- |
register | `name` (string) - The name of element that you want to register to. |  | This will register this element with the browser.
toggle | None |  | Toggles the visibility of the accordion content.


### Events

| Name | Description |
| --- | --- |
toggleExpanded | Notifies that the accordion has been expanded or closed.


### Slots

| Name | Description |
| --- | --- |
(default) | Default slot for the accordion content.
trigger | Defines the content of the trigger element.


### CSS Shadow Parts

| Name | Description |
| --- | --- |
accordion | Apply CSS to Accordion wrapper.
trigger | Apply CSS to trigger element.
chevron | Apply CSS to chevron icon.
content | Apply CSS to the accordion content.


    