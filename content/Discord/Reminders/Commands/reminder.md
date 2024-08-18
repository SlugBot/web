# `/reminder`
*Module: [[Reminders]]*<br>
Create repeating reminders sent to channels
## /reminder add
`/reminder add <channel> [do_embed] [always_send] [attach_component]`<br>
Add a new reminder
#### channel
Channel to send reminder to
- Type: `CHANNEL`
- Required: `TRUE`
#### do_embed
Should the message be put inside an embed?
- Type: `BOOLEAN`
- Required: `FALSE`
#### always_send
Reminder will be sent even if the last reminder is in the channel's recent messages
- Type: `BOOLEAN`
- Required: `FALSE`
#### attach_component
Attach a Ticketer or RoleReact component to the reminder by supplying its message ID
- Type: `STRING`
- Required: `FALSE`
## /reminder update
`/reminder update <reminder>`<br>
Update an existing reminder
#### reminder
Reminder to update
- Type: `AUTOCMPLETE SELECTION`
- Required: `TRUE`
## /reminder remove
`/reminder remove <reminder>`<br>
Remove an existing reminder
#### reminder
Reminder to remove
- Type: `AUTOCMPLETE SELECTION`
- Required: `TRUE`
## /reminder list
`/reminder list`<br>
View all existing reminders in this server
