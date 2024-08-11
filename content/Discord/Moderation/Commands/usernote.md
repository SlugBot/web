# `/usernote`
*Module: [[Moderation]]*<br>
Add or remove a private note about a user. Only mods can see these notes.
## `/usernote add <member> <note>`
Add a note to a member. Only mods can see these notes.
#### member
Member to add note to
- Type: `USER`
- Required: `TRUE`
#### note
The note to add
- Type: `STRING`
- Required: `TRUE`
## `/usernote remove <member> <note>`
remove an existing user note
#### member
Member to add note to
- Type: `USER`
- Required: `TRUE`
#### note
Note to remove
- Type: `AUTOCMPLETE SELECTION`
- Required: `TRUE`