# `/ticketer`
Create a Ticketer message, allowing users to submit tickets
*Module: [[Ticket]]*
## `/ticketer create`
Create a new Ticketer
#### send_to_channel
Channel to send submitted tickets to
- Type: `CHANNEL`
- Required: `true`
## `/ticketer attach`
Attach another ticketer button onto an existing ticketer
#### ticketer_id
Discord message ID of Ticketer
- Type: `Autocomplete Selection`
- Required: `true`
#### send_to_channel
Channel to send submitted tickets to
- Type: `CHANNEL`
- Required: `true`
## `/ticketer remove`
Remove an existing ticketer
#### ticketer_id
ID of Ticketer
- Type: `Autocomplete Selection`
- Required: `true`
## `/ticketer move`
Move ticketer to a different channel or message
#### ticketer_id
ID of Ticketer
- Type: `Autocomplete Selection`
- Required: `true`
#### channel
Channel to move ticketer to
- Type: `CHANNEL`
- Required: `true`
#### message_id
Optional SlugBot message ID to replace with this ticketer
- Type: `STRING`
- Required: `false`
## `/ticketer update`
Update properties of a Ticketer message
#### ticketer_id
ID of Ticketer
- Type: `Autocomplete Selection`
- Required: `true`
#### send_to_channel
Channel to send submitted tickets to
- Type: `CHANNEL`
- Required: `undefined`
#### title
Title to set for Ticketer
- Type: `STRING`
- Required: `undefined`
#### description
Description to add to Ticketer. Use \n to denote line-breaks
- Type: `STRING`
- Required: `undefined`
#### button
Button label to set for Ticketer
- Type: `STRING`
- Required: `undefined`
#### button_colour
Button colour to set for Ticketer
- Type: `INTEGER`
- Required: `undefined`
#### colour
Hexcode of colour to use for the Ticketer embed
- Type: `STRING`
- Required: `undefined`
#### is_anonymous
Should the username be submitted with the ticket?
- Type: `BOOLEAN`
- Required: `undefined`
#### is_private
Create a private thread and send the ticket there instead
- Type: `BOOLEAN`
- Required: `undefined`
#### whitelist_role
Role a user must have to use the Ticketer
- Type: `ROLE`
- Required: `undefined`
#### blacklist_role
Role a user must not have to use the Ticketer
- Type: `ROLE`
- Required: `undefined`
#### hide_extra_info
Hide info in the ticketer embed such as blacklist roles
- Type: `BOOLEAN`
- Required: `undefined`
#### give_role
Role to give to the user on creating a ticket
- Type: `ROLE`
- Required: `undefined`
#### do_feedback
Users will receive an ephemeral message notifying them that their ticket was submitted
- Type: `BOOLEAN`
- Required: `undefined`
#### do_thread
If true, a thread will be created on the submitted ticket
- Type: `BOOLEAN`
- Required: `undefined`
#### init_message
Message to be sent in the accompanying thread
- Type: `STRING`
- Required: `undefined`
#### content_message
Message to be sent before the sent ticket embed
- Type: `STRING`
- Required: `undefined`
## `/ticketer add_field`
Add a question field to a Ticketer
#### ticketer_id
Discord message ID of Ticketer
- Type: `Autocomplete Selection`
- Required: `true`
#### question
Field header
- Type: `STRING`
- Required: `true`
#### max_length
Max response length
- Type: `INTEGER`
- Required: `undefined`
#### is_required
Is the field required?
- Type: `BOOLEAN`
- Required: `undefined`
#### style
Field style
- Type: `STRING`
- Required: `undefined`
## `/ticketer remove_field`
Remove a question field from a Ticketer
#### ticketer_id
Discord message ID of Ticketer
- Type: `Autocomplete Selection`
- Required: `true`
#### question
Question to remove
- Type: `Autocomplete Selection`
- Required: `true`