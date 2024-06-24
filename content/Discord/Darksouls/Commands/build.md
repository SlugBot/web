# `/build`
*Module: [[Darksouls]]*<br>
Manage your builds or view the builds of another member
## `/build add [name] [level] [upgrade_level] [game] [planner_link] [image_link]`
Add a build to your buid list
#### name
Character name
- Type: `STRING`
- Required: `FALSE`
#### level
Character level
- Type: `INTEGER`
- Required: `FALSE`
#### upgrade_level
Weapon upgrade level
- Type: `INTEGER`
- Required: `FALSE`
#### game
Game
- Type: `SELECTION`
  - `BB`
  - `DS1`
  - `DS2`
  - `DS3`
  - `ER`
- Required: `FALSE`
#### planner_link
Extract build info from a build planner link
- Type: `STRING`
- Required: `FALSE`
#### image_link
Add a character portrait by providing a direct image link
- Type: `STRING`
- Required: `FALSE`
## `/build remove <name>`
Remove a build from your build list
#### name
Name of build to remove
- Type: `AUTOCMPLETE SELECTION`
- Required: `TRUE`
## `/build set <name>`
Set a current build
#### name
Name of build to set as current
- Type: `AUTOCMPLETE SELECTION`
- Required: `TRUE`
## `/build list [member]`
View your build list or the build list of another member
#### member
View builds by this member
- Type: `USER`
- Required: `FALSE`