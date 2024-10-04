# `/permissions`
*Module: [[Setup]]*<br>
Customise user permissions for SlugBot, Command Groups, Commands, and Sub-Commands
## /permissions command_group view
`/permissions command_group view <command_group>`<br>
View permissions for a given Command_Group
#### command_group
Command_Group to view permissions
- Type: `AUTOCOMPLETE SELECTION`
- Required: `TRUE`
## /permissions command_group disable
`/permissions command_group disable <command_group>`<br>
Disable all commands in a given Command_Group
#### command_group
Command_Group to set permissions for
- Type: `AUTOCOMPLETE SELECTION`
- Required: `TRUE`
## /permissions command_group enable
`/permissions command_group enable <command_group>`<br>
Enable all commands in a given Command_Group
#### command_group
Command_Group to set permissions for
- Type: `AUTOCOMPLETE SELECTION`
- Required: `TRUE`
## /permissions command_group whitelist
`/permissions command_group whitelist <command_group> [channel] [role]`<br>
Add a role/channel to whitelist
#### command_group
Command_Group to set permissions for
- Type: `AUTOCOMPLETE SELECTION`
- Required: `TRUE`
#### channel
Whitelist a channel
- Type: `CHANNEL`
- Required: `FALSE`
#### role
Whitelist a role
- Type: `ROLE`
- Required: `FALSE`
## /permissions command_group blacklist
`/permissions command_group blacklist <command_group> [channel] [role]`<br>
Add a role/channel to Blacklist
#### command_group
Command_Group to set permissions for
- Type: `AUTOCOMPLETE SELECTION`
- Required: `TRUE`
#### channel
Blacklist a channel
- Type: `CHANNEL`
- Required: `FALSE`
#### role
Blacklist a role
- Type: `ROLE`
- Required: `FALSE`
## /permissions command_group remove
`/permissions command_group remove <command_group> [channel] [role]`<br>
remove a role/channel from a whitelist or blacklist
#### command_group
Command_Group to set permissions for
- Type: `AUTOCOMPLETE SELECTION`
- Required: `TRUE`
#### channel
Remove a channel
- Type: `CHANNEL`
- Required: `FALSE`
#### role
Remove a role
- Type: `ROLE`
- Required: `FALSE`
## /permissions command view
`/permissions command view <command>`<br>
View permissions for a given Command
#### command
Command to view permissions
- Type: `AUTOCOMPLETE SELECTION`
- Required: `TRUE`
## /permissions command disable
`/permissions command disable <command>`<br>
Disable a given command
#### command
Command to set permissions for
- Type: `AUTOCOMPLETE SELECTION`
- Required: `TRUE`
## /permissions command enable
`/permissions command enable <command>`<br>
Enable a given command
#### command
Command to set permissions for
- Type: `AUTOCOMPLETE SELECTION`
- Required: `TRUE`
## /permissions command whitelist
`/permissions command whitelist <command> [channel] [role]`<br>
Add a role/channel to whitelist
#### command
Command to set permissions for
- Type: `AUTOCOMPLETE SELECTION`
- Required: `TRUE`
#### channel
Whitelist a channel
- Type: `CHANNEL`
- Required: `FALSE`
#### role
Whitelist a role
- Type: `ROLE`
- Required: `FALSE`
## /permissions command blacklist
`/permissions command blacklist <command> [channel] [role]`<br>
Add a role/channel to Blacklist
#### command
Command to set permissions for
- Type: `AUTOCOMPLETE SELECTION`
- Required: `TRUE`
#### channel
Blacklist a channel
- Type: `CHANNEL`
- Required: `FALSE`
#### role
Blacklist a role
- Type: `ROLE`
- Required: `FALSE`
## /permissions command remove
`/permissions command remove <command> [channel] [role]`<br>
remove a role/channel from a whitelist or blacklist
#### command
Command to set permissions for
- Type: `AUTOCOMPLETE SELECTION`
- Required: `TRUE`
#### channel
Remove a channel
- Type: `CHANNEL`
- Required: `FALSE`
#### role
Remove a role
- Type: `ROLE`
- Required: `FALSE`
## /permissions behaviour view
`/permissions behaviour view <behaviour>`<br>
View permissions for a given Command
#### behaviour
Behaviour to view permissions
- Type: `AUTOCOMPLETE SELECTION`
- Required: `TRUE`
## /permissions behaviour disable
`/permissions behaviour disable <behaviour>`<br>
Disable a given behaviour
#### behaviour
Behaviour to set permissions for
- Type: `AUTOCOMPLETE SELECTION`
- Required: `TRUE`
## /permissions behaviour enable
`/permissions behaviour enable <behaviour>`<br>
Enable a given behaviour
#### behaviour
Behaviour to set permissions for
- Type: `AUTOCOMPLETE SELECTION`
- Required: `TRUE`
## /permissions behaviour whitelist
`/permissions behaviour whitelist <behaviour> [channel] [role]`<br>
Add a role/channel to whitelist
#### behaviour
Behaviour to set permissions for
- Type: `AUTOCOMPLETE SELECTION`
- Required: `TRUE`
#### channel
Whitelist a channel
- Type: `CHANNEL`
- Required: `FALSE`
#### role
Whitelist a role
- Type: `ROLE`
- Required: `FALSE`
## /permissions behaviour blacklist
`/permissions behaviour blacklist <behaviour> [channel] [role]`<br>
Add a role/channel to Blacklist
#### behaviour
Behaviour to set permissions for
- Type: `AUTOCOMPLETE SELECTION`
- Required: `TRUE`
#### channel
Blacklist a channel
- Type: `CHANNEL`
- Required: `FALSE`
#### role
Blacklist a role
- Type: `ROLE`
- Required: `FALSE`
## /permissions behaviour remove
`/permissions behaviour remove <behaviour> [channel] [role]`<br>
remove a role/channel from a whitelist or blacklist
#### behaviour
Behaviour to set permissions for
- Type: `AUTOCOMPLETE SELECTION`
- Required: `TRUE`
#### channel
Remove a channel
- Type: `CHANNEL`
- Required: `FALSE`
#### role
Remove a role
- Type: `ROLE`
- Required: `FALSE`