# `/weaponds3`
*Module: [[Darksouls]]*<br>
Get info on a given weapon, or get the top 10 weapons of each class
## `/weaponds3 info <weapon> [upgrade] [stats]`
Get info on a weapon or list of weapons separated by commas
#### weapon
Weapon name or list of weapon names
- Type: `Autocomplete Selection`
- Required: `true`
#### upgrade
Upgrade level of the weapon. Use equivalent standard upgrade for special weapons
  - +0
  - +1
  - +2
  - +3
  - +4
  - +5
  - +6
  - +7
  - +8
  - +9
  - +10
- Required: `false`
#### stats
str dex int faith luck levels. e.g. "10 18 9 30 7"
- Type: `STRING`
- Required: `false`
## `/weaponds3 bestinclass [upgrade] [stats]`
Get the top 10 weapons of each class
#### upgrade
Upgrade level of the weapon. Use equivalent standard upgrade for special weapons
  - +0
  - +1
  - +2
  - +3
  - +4
  - +5
  - +6
  - +7
  - +8
  - +9
  - +10
- Required: `false`
#### stats
str dex int faith luck levels. e.g. "10 18 9 30 7"
- Type: `STRING`
- Required: `false`