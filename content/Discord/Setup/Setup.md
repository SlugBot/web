## Permissions
The [[Discord/Setup/Commands/permissions|permissions]] command allows admins to customise who can use which commands and where. by default, no moderator or setup command can be used by anyone except those with `ADMINISTRATOR` Discord permissions.

### Command Groups
Command groups are a collection of commands that can have their permissions controlled as a group. e.g. whitelisting a `@moderator` role for the [[Moderation]] Command Group would allow any member with the `@moderator` role to use the commands in the group such as [[ban]] or [[mute]].

Setting permissions for individual commands will override any conflicting permissions given by the parent Command Group. if `@moderator`s where whitelisted for the [[Moderation]] Command Group, but [[ban]] had `@moderator`s blacklisted, the command-level permissions would take precedence.

All command groups are listed in [[Discord/Modules|here]].
### Behaviours
Behaviours are elements that can have their permissions customised but are not commands or Command Groups. e.g. who can earn [[ActivityExp|Activity Exp]] and in which channels.
#### BuildEmbed
Governs which members and channels will have [[Discord/Soulsborne/Soulsborne|Soulsborne]] builds embedded.
#### Censor
Governs who will be filtered by [[filter]]s and which channels the filters will be active in.
#### Exp
Governs the permissions for earning [[ActivityExp|Activity Exp]].
#### Logging
Governs which members and channels will have their events logged by [[Logging]].
#### SlugboardFlag
Governs which members and channels can have their messages [[slugboard|slugboarded]].

# Commands
- [[permissions|/permissions]]
- [[welcomemessage|/welcomemessage]]