# `/rolereact`
Create a RoleReact message, allowing users to self-assign roles using the reactions on the message
*Module: [[Roles]]*
## `/rolereact create`
Create a new RoleReact
#### message_id
Discord message ID of message to use for RoleReact
- Type: `STRING`
- Required: `undefined`
## `/rolereact add`
Add a reaction role to a RoleReact
#### rolereact_id
Discord message ID of RoleReact
- Type: `Autocomplete Selection`
- Required: `true`
#### reaction
Emoji to use
- Type: `STRING`
- Required: `true`
#### primary_role
Role to use
- Type: `ROLE`
- Required: `true`
#### secondary_role
Optional secondary role to use
- Type: `ROLE`
- Required: `false`
#### tertiary_role
Optional tertiary role to use
- Type: `ROLE`
- Required: `false`
## `/rolereact remove`
Remove a reaction role from a RoleReact
#### rolereact_id
Discord message ID of RoleReact
- Type: `Autocomplete Selection`
- Required: `true`
#### primary_role
Primary role of RoleReact option
- Type: `Autocomplete Selection`
- Required: `true`
## `/rolereact move`
Move RoleReact to a different channel or message
#### rolereact_id
Discord message ID of RoleReact
- Type: `Autocomplete Selection`
- Required: `true`
#### channel
Channel to move RoleReact to
- Type: `CHANNEL`
- Required: `true`
#### message_id
Optional SlugBot message ID to replace with this RoleReact
- Type: `STRING`
- Required: `false`
## `/rolereact update`
Update properties of a RoleReact
#### rolereact_id
Discord message ID of RoleReact
- Type: `Autocomplete Selection`
- Required: `true`
#### title
Title to set for RoleReact
- Type: `STRING`
- Required: `undefined`
#### description
Description to add to RoleReact. Use \n to denote line-breaks
- Type: `STRING`
- Required: `undefined`
#### colour
Hexcode of colour to use for the RoleReact embed
- Type: `STRING`
- Required: `undefined`
#### required_role
Role a user must have to use the RoleReact
- Type: `ROLE`
- Required: `undefined`
#### is_mutually_exclusive
If true, only one role can be taken at a time
- Type: `BOOLEAN`
- Required: `undefined`
#### is_toggle
Reacting adds and removes roles. Reactions are automatically removed
- Type: `BOOLEAN`
- Required: `undefined`
#### clear_option
Add a 'remove all roles' option to the RoleReact
- Type: `BOOLEAN`
- Required: `undefined`
#### display_mode
Set how the selectable roles will be displayed
- Type: `STRING`
- Required: `undefined`
#### do_feedback
Users will receive an ephemeral message notifying them of the roles assigned/removed
- Type: `BOOLEAN`
- Required: `undefined`