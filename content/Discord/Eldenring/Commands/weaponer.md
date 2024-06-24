# `/weaponer`
*Module: [[Eldenring]]*<br>
Get info on a given Elden Ring weapon, or get the top 10 weapons of each class
## `/weaponer info <weapon> [upgrade] [stats] [calc_against]`
Get info on a weapon or list of weapons separated by commas
#### weapon
Weapon name or list of weapon names
- Type: `Autocomplete Selection`
- Required: `true`
#### upgrade
Upgrade level of the weapon
- Type: `Autocomplete Selection`
- Required: `false`
#### stats
str dex int faith arc levels. e.g. "10 18 9 30 7"
- Type: `STRING`
- Required: `false`
#### calc_against
er-build-planner link to calculate damage against
- Type: `STRING`
- Required: `false`
## `/weaponer bestinclass [upgrade] [stats] [calc_against]`
Get the top 10 weapons of each class
#### upgrade
Upgrade level of the weapon. Use equivalent standard upgrade for special weapons
- Type: `Autocomplete Selection`
- Required: `false`
#### stats
str dex int faith arc levels. e.g. "10 18 9 30 7"
- Type: `STRING`
- Required: `false`
#### calc_against
er-build-planner link to calculate damage against
- Type: `STRING`
- Required: `false`