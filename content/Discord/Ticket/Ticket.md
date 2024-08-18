Ticketers provide a method for users to submit forms. The form can be configured with up to 5 fields, and the submission will be sent to the specified channel.

Use [[ticketer#/ticketer create|ticketer create]] to create a ticketer component. This is a message in the channel the command was used in with a button. Every element of this message can be customised using [[ticketer#/ticketer update|ticketer update]].

The form input fields can be customised with [[ticketer#/ticketer add_field|ticketer add_field]] to add a field, and [[ticketer#/ticketer remove_field|ticketer remove_field]] to remove a field.

## Attaching
It is possible to add multiple buttons to a single ticketer message using [[ticketer#/ticketer attach|ticketer attach]]. This works by specifying an existing ticketer to attach a new ticketer too. The original and sub-ticketers can be customised as normal using [[ticketer#/ticketer update|ticketer update]] and selecting their ID from the select menu. The settings of the ticketer with a sub ID of `1`(will appear as `x.1` in the select menu) will be used when modifying the appearance of the ticketer message.

## Moving
It is possible to move an existing ticketer to a different channel using [[ticketer#/ticketer move|ticketer move]]. This will preserve all settings. It is also possible to specify the message ID of another SlugBot message to replace that message with the ticketer. **This will destroy the original message**. If another ticketer message ID is specified, it will instead merge them - Attaching the moved ticketer to the specified ticketer message.

## Ticketers on Reminders
Ticketers can be referenced by reminders. This allows repeating reminders to display ticketer buttons under them. The original ticketer is not modified or moved. More on this in [[Reminders]]

# Commands
- [[ticketer]]