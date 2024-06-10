# build
*Module: [[Darksouls]]*
Manage your builds or view the builds of another member
## `/build add`
Add a build to your buid list
#### name
Character name
- Type: `STRING`
- Required: `false`
#### level
Character level
- Type: `INTEGER`
- Required: `false`
#### upgrade_level
Weapon upgrade level
- Type: `INTEGER`
- Required: `false`
#### game
Game
- Type: `STRING`
- Required: `false`
#### planner_link
Extract build info from a build planner link
- Type: `STRING`
- Required: `false`
#### image_link
Add a character portrait by providing a direct image link
- Type: `STRING`
- Required: `false`
## `/build remove`
Remove a build from your build list
#### name
Name of build to remove
- Type: `Autocomplete Selection`
- Required: `true`
## `/build set`
Set a current build
#### name
Name of build to set as current
- Type: `Autocomplete Selection`
- Required: `true`
## `/build list`
View your build list or the build list of another member
#### member
View builds by this member
- Type: `USER`
- Required: `false`