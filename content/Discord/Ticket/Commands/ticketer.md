# `/ticketer`
*Module: [[Ticket]]*<br>
Create a Ticketer message, allowing users to submit tickets
## `/ticketer create <send_to_channel>`
Create a new Ticketer
#### send_to_channel
Channel to send submitted tickets to
- Type: `CHANNEL`
- Required: `true`
## `/ticketer attach <ticketer_id> <send_to_channel>`
Attach another ticketer button onto an existing ticketer
#### ticketer_id
Discord message ID of Ticketer
- Type: `Autocomplete Selection`
- Required: `true`
#### send_to_channel
Channel to send submitted tickets to
- Type: `CHANNEL`
- Required: `true`
## `/ticketer remove <ticketer_id>`
Remove an existing ticketer
#### ticketer_id
ID of Ticketer
- Type: `Autocomplete Selection`
- Required: `true`
## `/ticketer move <ticketer_id> <channel> [message_id]`
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
## `/ticketer update <ticketer_id> [send_to_channel] [title] [description] [button] [button_colour] [colour] [is_anonymous] [is_private] [whitelist_role] [blacklist_role] [hide_extra_info] [hide_response_embed] [give_role] [do_feedback] [do_thread] [init_message] [content_message]`
Update properties of a Ticketer message
#### ticketer_id
ID of Ticketer
- Type: `Autocomplete Selection`
- Required: `true`
#### send_to_channel
Channel to send submitted tickets to
- Type: `CHANNEL`
- Required: `false`
#### title
Title to set for Ticketer
- Type: `STRING`
- Required: `false`
#### description
Description to add to Ticketer. Use \n to denote line-breaks
- Type: `STRING`
- Required: `false`
#### button
Button label to set for Ticketer
- Type: `STRING`
- Required: `false`
#### button_colour
Button colour to set for Ticketer
  - Grey
  - Blue
  - Green
  - Red
- Required: `false`
#### colour
Hexcode of colour to use for the Ticketer embed
- Type: `STRING`
- Required: `false`
#### is_anonymous
Should the username be submitted with the ticket?
- Type: `BOOLEAN`
- Required: `false`
#### is_private
Create a private thread and send the ticket there instead
- Type: `BOOLEAN`
- Required: `false`
#### whitelist_role
Role a user must have to use the Ticketer
- Type: `ROLE`
- Required: `false`
#### blacklist_role
Role a user must not have to use the Ticketer
- Type: `ROLE`
- Required: `false`
#### hide_extra_info
Hide info in the ticketer embed such as blacklist roles
- Type: `BOOLEAN`
- Required: `false`
#### hide_response_embed
Hide the default ticketer response embed (create your own with 'content_message')
- Type: `BOOLEAN`
- Required: `false`
#### give_role
Role to give to the user on creating a ticket
- Type: `ROLE`
- Required: `false`
#### do_feedback
Users will receive an ephemeral message notifying them that their ticket was submitted
- Type: `BOOLEAN`
- Required: `false`
#### do_thread
If true, a thread will be created on the submitted ticket
- Type: `BOOLEAN`
- Required: `false`
#### init_message
Message to be sent in the accompanying thread
- Type: `STRING`
- Required: `false`
#### content_message
Message to be sent before the sent ticket embed
- Type: `STRING`
- Required: `false`
## `/ticketer add_field <ticketer_id> <question> [max_length] [is_required] [style]`
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
- Required: `false`
#### is_required
Is the field required?
- Type: `BOOLEAN`
- Required: `false`
#### style
Field style
  - SHORT
  - PARAGRAPH
- Required: `false`
## `/ticketer remove_field <ticketer_id> <question>`
Remove a question field from a Ticketer
#### ticketer_id
Discord message ID of Ticketer
- Type: `Autocomplete Selection`
- Required: `true`
#### question
Question to remove
- Type: `Autocomplete Selection`
- Required: `true`