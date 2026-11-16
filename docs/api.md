# auro-accordion

An accordion that shows or hides a section of content when someone selects its trigger.

**Key capabilities:**
- **Chevron placement**: Use `chevron="right"` to move the chevron to the right end of the trigger or `chevron="none"` to hide it.
- **Trigger size**: Set `variant` to `sm`, `lg`, or `min` to change the trigger size.
- **Expand upward**: Set `expandUp` to reveal the content above the trigger.
- **Grouping**: Wrap accordions in `auro-accordion-group` so opening one closes the others.

**Example:**
```html
<auro-accordion>
  <span slot="trigger">Trigger</span>
  <p>Content</p>
</auro-accordion>
```

### Properties and attributes

| Properties | Attributes | Modifiers | Type                  | Default | Description                                                                                                                                                                                                                            |
| ---------- | ---------- | --------- | --------------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| alignRight | alignright |           | boolean               |         | Aligns the trigger to the right edge of the accordion's container.                                                                                                                                                                     |
| chevron    | chevron    |           | `none` \| `right`     |         | Sets where the chevron appears. Use `right` to place it at the right end of the trigger, or `none` to hide it. When not set, the chevron appears before the trigger text.                                                              |
| disabled   | disabled   |           | boolean               |         | Turns the accordion off. A disabled trigger is shown in a muted color and can't be selected to expand or collapse the content. Calling `toggle()` or setting `expanded` still works.                                                   |
| emphasis   | emphasis   |           | boolean               |         | Adds a highlighted left border to the trigger and the expanded content. Set `emphasis` on `auro-accordion-group` instead to also move each chevron to the right.                                                                       |
| expanded   | expanded   |           | boolean               | `false` | Expands the accordion to show its content.                                                                                                                                                                                             |
| expandUp   | expandup   |           | boolean               |         | Reveals the expanded content above the trigger instead of below it.                                                                                                                                                                    |
| grouped    | grouped    |           | boolean               |         | Marks the accordion as part of a group and adds a divider below it. The group sets this automatically.                                                                                                                                 |
| variant    | variant    |           | `sm` \| `lg` \| `min` |         | Sets the size of the trigger. Use `sm` for a smaller trigger, `lg` for a larger one, or `min` to remove all trigger padding so the slotted content sets the size, ideally with `chevron="none"`. Omit it for the default, medium size. |

### Methods

| Name     | Parameters                                                    | Return | Description                                                                                                                                       |
| -------- | ------------------------------------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| focus    | None                                                          |        | Moves keyboard focus to the accordion's trigger (the header that expands/collapses the accordion).                                                |
| register | `name` (string) - The tag name to register the element under. |        | Registers the element with the browser under a tag name. Also registers the group element as that name plus `-group`.                             |
| toggle   | None                                                          |        | Expands the accordion if it's collapsed, or collapses it if it's expanded, and fires `toggleExpanded`. Works even when the accordion is disabled. |

### Events

| Name           | Description                                                                                                                                                               |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| toggleExpanded | Fires when someone expands or collapses the accordion, or when `toggle()` is called. Doesn't fire when `expanded` is set directly. `detail.expanded` holds the new state. |

### Slots

| Name      | Description                                                                                                                                     |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| (default) | The content revealed when the accordion expands.                                                                                                |
| trigger   | The text or content shown in the trigger, such as a short heading. Use presentational content only, because the trigger is a native `<button>`. |

### CSS shadow parts

| Name      | Description                                                           |
| --------- | --------------------------------------------------------------------- |
| accordion | The wrapper around the trigger and the content.                       |
| chevron   | The chevron icon in the trigger. Doesn't exist when `chevron="none"`. |
| content   | The container that holds the expanded content.                        |
| trigger   | The button that expands and collapses the accordion.                  |

### CSS custom properties

| Name                                     | Description                                                                                       |
| ---------------------------------------- | ------------------------------------------------------------------------------------------------- |
| --ds-auro-accordion-content-border-color | Color of the left border beside the expanded content. Applies only when `emphasis` is set.        |
| --ds-auro-accordion-group-border-color   | Color of the divider below each accordion in a group. Applies only inside `auro-accordion-group`. |
| --ds-auro-accordion-trigger-border-color | Color of the trigger's border, including the ring shown when the trigger has keyboard focus.      |
| --ds-auro-accordion-trigger-color        | Color of the trigger text.                                                                        |
| --ds-auro-accordion-trigger-icon-color   | Color of the chevron icon.                                                                        |

# auro-accordion-group

Groups accordions so that opening one closes the others.

**Key capabilities:**
- **Several open at once**: Set `noToggleExpanded` to let more than one accordion stay open.
- **Disable all**: Set `disabled` to turn off every accordion in the group.
- **Emphasis**: Set `emphasis` to add the emphasis border to every accordion and move each chevron to the right.
- **Trigger size**: Set `variant` to `sm`, `lg`, or `min` to size every trigger.

**Example:**
```html
<auro-accordion-group>
  <auro-accordion>
    <span slot="trigger">Trigger</span>
    <p>Content</p>
  </auro-accordion>
</auro-accordion-group>
```

### Properties and attributes

| Properties       | Attributes       | Modifiers | Type                  | Default | Description                                                                                                                                                                                |
| ---------------- | ---------------- | --------- | --------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| disabled         | disabled         |           | boolean               |         | Turns off every accordion in the group. Disabled triggers are shown in a muted color and can't be selected.                                                                                |
| emphasis         | emphasis         |           | boolean               |         | Adds the emphasis border to every accordion in the group and moves each chevron to the right.                                                                                              |
| noToggleExpanded | notoggleexpanded |           | boolean               | `false` | Lets several accordions in the group stay open at the same time. By default, opening one accordion closes the others.                                                                      |
| variant          | variant          |           | `sm` \| `lg` \| `min` |         | Sets the trigger size for every accordion in the group. Use `sm` for smaller triggers, `lg` for larger ones, or `min` to remove all trigger padding so the slotted content sets each size. |

### Methods

| Name     | Parameters                                                    | Return | Description                                                                                                                                                  |
| -------- | ------------------------------------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| register | `name` (string) - The tag name to register the element under. |        | Registers the element with the browser under a tag name. Register the group as the accordion's tag name plus `-group`, so the group can find its accordions. |