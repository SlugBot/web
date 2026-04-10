# `/ticketer`
*Module: [[Ticket]]*<br>
Create a Ticketer message, allowing users to submit tickets
## /ticketer create
`/ticketer create <send_to_channel>`<br>
Create a new Ticketer
#### send_to_channel
Channel to send submitted tickets to
- Type: `CHANNEL`
- Required: `TRUE`
## /ticketer attach
`/ticketer attach <ticketer_id> <send_to_channel>`<br>
Attach another ticketer button onto an existing ticketer
#### ticketer_id
Discord message ID of Ticketer
- Type: `AUTOCOMPLETE SELECTION`
- Required: `TRUE`
#### send_to_channel
Channel to send submitted tickets to
- Type: `CHANNEL`
- Required: `TRUE`
## /ticketer remove
`/ticketer remove <ticketer_id>`<br>
Remove an existing ticketer
#### ticketer_id
ID of Ticketer
- Type: `AUTOCOMPLETE SELECTION`
- Required: `TRUE`
## /ticketer move
`/ticketer move <ticketer_id> <channel> [message_id]`<br>
Move ticketer to a different channel or message
#### ticketer_id
ID of Ticketer
- Type: `AUTOCOMPLETE SELECTION`
- Required: `TRUE`
#### channel
Channel to move ticketer to
- Type: `CHANNEL`
- Required: `TRUE`
#### message_id
Optional SlugBot message ID to replace with this ticketer
- Type: `STRING`
- Required: `FALSE`
## /ticketer update
`/ticketer update <ticketer_id> [send_to_channel] [title] [description] [button] [button_colour] [colour] [is_anonymous] [is_private] [whitelist_role] [blacklist_role] [hide_extra_info] [hide_response_embed] [skip_user_inputs] [give_role] [do_feedback] [do_thread] [init_message] [content_message] [thread_title]`<br>
Update properties of a Ticketer message
#### ticketer_id
ID of Ticketer
- Type: `AUTOCOMPLETE SELECTION`
- Required: `TRUE`
#### send_to_channel
Channel to send submitted tickets to
- Type: `CHANNEL`
- Required: `FALSE`
#### title
Title to set for Ticketer
- Type: `STRING`
- Required: `FALSE`
#### description
Description to add to Ticketer. Use \n to denote line-breaks
- Type: `STRING`
- Required: `FALSE`
#### button
Button label to set for Ticketer
- Type: `STRING`
- Required: `FALSE`
#### button_colour
Button colour to set for Ticketer
- Type: `SELECTION`
  - `Grey`
  - `Blue`
  - `Green`
  - `Red`
- Required: `FALSE`
#### colour
Hexcode of colour to use for the Ticketer embed
- Type: `STRING`
- Required: `FALSE`
#### is_anonymous
Should the username be submitted with the ticket?
- Type: `BOOLEAN`
- Required: `FALSE`
#### is_private
Create a private thread and send the ticket there instead
- Type: `BOOLEAN`
- Required: `FALSE`
#### whitelist_role
Role a user must have to use the Ticketer
- Type: `ROLE`
- Required: `FALSE`
#### blacklist_role
Role a user must not have to use the Ticketer
- Type: `ROLE`
- Required: `FALSE`
#### hide_extra_info
Hide info in the ticketer embed such as blacklist roles
- Type: `BOOLEAN`
- Required: `FALSE`
#### hide_response_embed
Hide the default ticketer response embed (create your own with 'content_message')
- Type: `BOOLEAN`
- Required: `FALSE`
#### skip_user_inputs
Skips the user input modal and will send the ticket instantly when the ticket button is pressed
- Type: `BOOLEAN`
- Required: `FALSE`
#### give_role
Role to give to the user on creating a ticket
- Type: `ROLE`
- Required: `FALSE`
#### do_feedback
Users will receive an ephemeral message notifying them that their ticket was submitted
- Type: `BOOLEAN`
- Required: `FALSE`
#### do_thread
If true, a thread will be created on the submitted ticket
- Type: `BOOLEAN`
- Required: `FALSE`
#### init_message
Message to be sent in the accompanying thread. Can include [[Flag Replacers]]
- Type: `STRING`
- Required: `FALSE`
#### content_message
Message to be sent before the sent ticket embed. Can include [[Flag Replacers]]
- Type: `STRING`
- Required: `FALSE`
#### thread_title
Title of accompanying thread if 'do_thread' set to true. Can include [[Flag Replacers]]
- Type: `STRING`
- Required: `FALSE`
## /ticketer add_field
`/ticketer add_field <ticketer_id> <question> [max_length] [is_required] [style]`<br>
Add a question field to a Ticketer
#### ticketer_id
Discord message ID of Ticketer
- Type: `AUTOCOMPLETE SELECTION`
- Required: `TRUE`
#### question
Field header
- Type: `STRING`
- Required: `TRUE`
#### max_length
Max response length
- Type: `INTEGER`
- Required: `FALSE`
#### is_required
Is the field required?
- Type: `BOOLEAN`
- Required: `FALSE`
#### style
Field style
- Type: `SELECTION`
  - `SHORT`
  - `PARAGRAPH`
- Required: `FALSE`
## /ticketer remove_field
`/ticketer remove_field <ticketer_id> <question>`<br>
Remove a question field from a Ticketer
#### ticketer_id
Discord message ID of Ticketer
- Type: `AUTOCOMPLETE SELECTION`
- Required: `TRUE`
#### question
Question to remove
- Type: `AUTOCOMPLETE SELECTION`
- Required: `TRUE`