# `/weaponer`
*Module: [[Soulsborne]]*<br>
Get info on a given Elden Ring weapon, or get the top 10 weapons of each class
## `/weaponer info <weapon> [upgrade] [stats] [calc_against]`
Get info on a weapon or list of weapons separated by commas
#### weapon
Weapon name or list of weapon names
- Type: `AUTOCMPLETE SELECTION`
- Required: `TRUE`
#### upgrade
Upgrade level of the weapon
- Type: `AUTOCMPLETE SELECTION`
- Required: `FALSE`
#### stats
str dex int faith arc levels. e.g. "10 18 9 30 7"
- Type: `STRING`
- Required: `FALSE`
#### calc_against
er-build-planner link to calculate damage against
- Type: `STRING`
- Required: `FALSE`
## `/weaponer bestinclass [upgrade] [stats] [calc_against]`
Get the top 10 weapons of each class
#### upgrade
Upgrade level of the weapon. Use equivalent standard upgrade for special weapons
- Type: `AUTOCMPLETE SELECTION`
- Required: `FALSE`
#### stats
str dex int faith arc levels. e.g. "10 18 9 30 7"
- Type: `STRING`
- Required: `FALSE`
#### calc_against
er-build-planner link to calculate damage against
- Type: `STRING`
- Required: `FALSE`