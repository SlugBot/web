# `/reminder`
*Module: [[Reminders]]*<br>
Create repeating reminders sent to channels
## `/reminder add <channel> [do_embed] [always_send]`
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
## `/reminder update <reminder>`
Update an existing reminder
#### reminder
Reminder to update
- Type: `AUTOCMPLETE SELECTION`
- Required: `TRUE`
## `/reminder remove <reminder>`
Remove an existing reminder
#### reminder
Reminder to remove
- Type: `AUTOCMPLETE SELECTION`
- Required: `TRUE`
## `/reminder list`
View all existing reminders in this server
