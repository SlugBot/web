# `/rolereact`
*Module: [[Roles]]*<br>
Create a RoleReact message, allowing users to self-assign roles using the reactions on the message
## `/rolereact create [message_id]`
Create a new RoleReact
#### message_id
Discord message ID of message to use for RoleReact
- Type: `STRING`
- Required: `FALSE`
## `/rolereact add <rolereact_id> <reaction> <primary_role> [secondary_role] [tertiary_role]`
Add a reaction role to a RoleReact
#### rolereact_id
Discord message ID of RoleReact
- Type: `AUTOCMPLETE SELECTION`
- Required: `TRUE`
#### reaction
Emoji to use
- Type: `STRING`
- Required: `TRUE`
#### primary_role
Role to use
- Type: `ROLE`
- Required: `TRUE`
#### secondary_role
Optional secondary role to use
- Type: `ROLE`
- Required: `FALSE`
#### tertiary_role
Optional tertiary role to use
- Type: `ROLE`
- Required: `FALSE`
## `/rolereact remove <rolereact_id> <primary_role>`
Remove a reaction role from a RoleReact
#### rolereact_id
Discord message ID of RoleReact
- Type: `AUTOCMPLETE SELECTION`
- Required: `TRUE`
#### primary_role
Primary role of RoleReact option
- Type: `AUTOCMPLETE SELECTION`
- Required: `TRUE`
## `/rolereact move <rolereact_id> <channel> [message_id]`
Move RoleReact to a different channel or message
#### rolereact_id
Discord message ID of RoleReact
- Type: `AUTOCMPLETE SELECTION`
- Required: `TRUE`
#### channel
Channel to move RoleReact to
- Type: `CHANNEL`
- Required: `TRUE`
#### message_id
Optional SlugBot message ID to replace with this RoleReact
- Type: `STRING`
- Required: `FALSE`
## `/rolereact update <rolereact_id> [title] [description] [colour] [required_role] [is_mutually_exclusive] [is_toggle] [clear_option] [display_mode] [do_feedback]`
Update properties of a RoleReact
#### rolereact_id
Discord message ID of RoleReact
- Type: `AUTOCMPLETE SELECTION`
- Required: `TRUE`
#### title
Title to set for RoleReact
- Type: `STRING`
- Required: `FALSE`
#### description
Description to add to RoleReact. Use \n to denote line-breaks
- Type: `STRING`
- Required: `FALSE`
#### colour
Hexcode of colour to use for the RoleReact embed
- Type: `STRING`
- Required: `FALSE`
#### required_role
Role a user must have to use the RoleReact
- Type: `ROLE`
- Required: `FALSE`
#### is_mutually_exclusive
If true, only one role can be taken at a time
- Type: `BOOLEAN`
- Required: `FALSE`
#### is_toggle
Reacting adds and removes roles. Reactions are automatically removed
- Type: `BOOLEAN`
- Required: `FALSE`
#### clear_option
Add a 'remove all roles' option to the RoleReact
- Type: `BOOLEAN`
- Required: `FALSE`
#### display_mode
Set how the selectable roles will be displayed
- Type: `SELECTION`
  - `Select Menu`
  - `Buttons`
  - `Reactions`
- Required: `FALSE`
#### do_feedback
Users will receive an ephemeral message notifying them of the roles assigned/removed
- Type: `BOOLEAN`
- Required: `FALSE`