# `/weaponds3`
*Module: [[Soulsborne]]*<br>
Get info on a given weapon, or get the top 10 weapons of each class
## `/weaponds3 info <weapon> [upgrade] [stats]`
Get info on a weapon or list of weapons separated by commas
#### weapon
Weapon name or list of weapon names
- Type: `AUTOCMPLETE SELECTION`
- Required: `TRUE`
#### upgrade
Upgrade level of the weapon. Use equivalent standard upgrade for special weapons
- Type: `SELECTION`
  - `+0`
  - `+1`
  - `+2`
  - `+3`
  - `+4`
  - `+5`
  - `+6`
  - `+7`
  - `+8`
  - `+9`
  - `+10`
- Required: `FALSE`
#### stats
str dex int faith luck levels. e.g. "10 18 9 30 7"
- Type: `STRING`
- Required: `FALSE`
## `/weaponds3 bestinclass [upgrade] [stats]`
Get the top 10 weapons of each class
#### upgrade
Upgrade level of the weapon. Use equivalent standard upgrade for special weapons
- Type: `SELECTION`
  - `+0`
  - `+1`
  - `+2`
  - `+3`
  - `+4`
  - `+5`
  - `+6`
  - `+7`
  - `+8`
  - `+9`
  - `+10`
- Required: `FALSE`
#### stats
str dex int faith luck levels. e.g. "10 18 9 30 7"
- Type: `STRING`
- Required: `FALSE`