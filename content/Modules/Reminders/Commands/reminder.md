# `/reminder`
*Module: [[Reminders]]*<br>
Create repeating reminders sent to channels
## `/reminder add`
Add a new reminder
#### channel
Channel to send reminder to
- Type: `CHANNEL`
- Required: `true`
#### do_embed
Should the message be put inside an embed?
- Type: `BOOLEAN`
- Required: `false`
#### always_send
Reminder will be sent even if the last reminder is in the channel's recent messages
- Type: `BOOLEAN`
- Required: `false`
## `/reminder update`
Update an existing reminder
#### reminder
Reminder to update
- Type: `Autocomplete Selection`
- Required: `true`
## `/reminder remove`
Remove an existing reminder
#### reminder
Reminder to remove
- Type: `Autocomplete Selection`
- Required: `true`
## `/reminder list`
View all existing reminders in this server
