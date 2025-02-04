# `/usernote`
*Module: [[Moderation]]*<br>
Add or remove a private note about a user. Only mods can see these notes.
## /usernote add
`/usernote add [member] [user_id]`<br>
Add a note to a member. Only mods can see these notes.
#### member
Member to add note to
- Type: `USER`
- Required: `FALSE`
#### user_id
User ID of user to add note to
- Type: `STRING`
- Required: `FALSE`
## /usernote remove
`/usernote remove <member> <note>`<br>
remove an existing user note
#### member
Member to add note to
- Type: `USER`
- Required: `TRUE`
#### note
Note to remove
- Type: `AUTOCOMPLETE SELECTION`
- Required: `TRUE`