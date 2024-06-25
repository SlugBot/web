# `/roleatlevel`
*Module: [[ActivityExp]]*<br>
Give/remove a role to/from members once they reach a certain level
## `/roleatlevel add <role> <level_add> [level_remove] [do_notification] [is_weekly]`
Create a new role-at-level
#### role
Role to be given
- Type: `ROLE`
- Required: `TRUE`
#### level_add
Minimum level needed to receive the role
- Type: `INTEGER`
- Required: `TRUE`
#### level_remove
Minimum level needed to remove the role
- Type: `INTEGER`
- Required: `FALSE`
#### do_notification
Should a message in chat be sent when a member earns a role?
- Type: `BOOLEAN`
- Required: `FALSE`
#### is_weekly
Should weekly activity be used instead?
- Type: `BOOLEAN`
- Required: `FALSE`
## `/roleatlevel remove <role>`
Remove an existing role-at-level
#### role
Role to be removed
- Type: `ROLE`
- Required: `TRUE`
## `/roleatlevel list [is_weekly]`
List all role-at-levels
#### is_weekly
Display weekly activity role-at-levels
- Type: `BOOLEAN`
- Required: `FALSE`
## `/roleatlevel set_image <image_url>`
Set the image on the 'earned role' notification
#### image_url
Direct image link to a png/gif
- Type: `STRING`
- Required: `TRUE`