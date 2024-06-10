# usernote
*Module: [[Moderation]]*
Add or remove a private note about a user. Only mods can see these notes.
## `/usernote add`
Add a note to a member. Only mods can see these notes.
#### member
Member to add note to
- Type: `USER`
- Required: `true`
#### note
The note to add
- Type: `STRING`
- Required: `true`
## `/usernote remove`
remove an existing user note
#### member
Member to add note to
- Type: `USER`
- Required: `true`
#### note
Note to remove
- Type: `Autocomplete Selection`
- Required: `true`