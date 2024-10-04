Reminders are set messages that will be sent periodically in the specified channel.
## Behaviour
SlugBot will avoid sending a reminder if the previous one is still visible in the chat **unless [[reminder#always_send|always_send]] is set to true**, in which case a new reminder will always be sent at the scheduled time. The previous reminder is deleted regardless of if [[reminder#always_send|always_send]] is set to `TRUE` or not.

It may be desired to have a message always be shown at the very bottom of a channel, sent after any other message. To achieve this, set the reminder time to less than 1 minute, and SlugBot will attempt to send the reminder after every new message in the channel. The previous reminder will be deleted so the channel will not fill up with reminder messages.

Supplying valid [[Embed JSON]] as the reminder message with [[reminder#do_embed|do_embed]] set to `TRUE` will allow for custom Discord embeds.
## Attaching Components
[[Ticketer]] and [[Rolereact]] components can be attached to reminders, displaying functional [[ticketer]] buttons or [[rolereact]] selections under the reminder. This can be useful for keeping [[ticketer]] sign-ups or role selections at the bottom of channels or appear regularly in active chats.
Copy the message ID of the original [[ticketer]] or [[Rolereact]] message and supply it to a reminder as an [[reminder#attach_component|attach_component]].

# Commands
- [[reminder|/reminder]]