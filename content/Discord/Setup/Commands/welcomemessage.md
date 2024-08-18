# `/welcomemessage`
*Module: [[Setup]]*<br>
Set a welcome message for new members
## /welcomemessage disable
`/welcomemessage disable`<br>
Disable welcome messages

## /welcomemessage set_message
`/welcomemessage set_message`<br>
Set a welcome message. Can include [[Flag Replacers]]

## /welcomemessage settings
`/welcomemessage settings [channel] [show_profile]`<br>
Modify welcome message settings
#### channel
Channel to send welcome messages to
- Type: `CHANNEL`
- Required: `FALSE`
#### show_profile
Show member's profile banner with the welcome message?
- Type: `BOOLEAN`
- Required: `FALSE`
## /welcomemessage view
`/welcomemessage view`<br>
View current welcome message and settings
