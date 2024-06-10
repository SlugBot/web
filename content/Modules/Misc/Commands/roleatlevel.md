# roleatlevel
Give/remove a role to/from members once they reach a certain level
## `/roleatlevel add`
Create a new role-at-level
#### role
Role to be given
- Type: `ROLE`
- Required: `true`
#### level_add
Minimum level needed to receive the role
- Type: `INTEGER`
- Required: `true`
#### level_remove
Minimum level needed to remove the role
- Type: `INTEGER`
- Required: `false`
#### do_notification
Should a message in chat be sent when a member earns a role?
- Type: `BOOLEAN`
- Required: `false`
#### is_weekly
Should weekly activity be used instead?
- Type: `BOOLEAN`
- Required: `false`
## `/roleatlevel remove`
Remove an existing role-at-level
#### role
Role to be removed
- Type: `ROLE`
- Required: `true`
## `/roleatlevel list`
List all role-at-levels
#### is_weekly
Display weekly activity role-at-levels
- Type: `BOOLEAN`
- Required: `false`
## `/roleatlevel set_image`
Set the image on the 'earned role' notification
#### image_url
Direct image link to a png/gif
- Type: `STRING`
- Required: `true`