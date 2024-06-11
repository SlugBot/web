# `/weaponds3`
Get info on a given weapon, or get the top 10 weapons of each class
*Module: [[Darksouls]]*
## `/weaponds3 info`
Get info on a weapon or list of weapons separated by commas
#### weapon
Weapon name or list of weapon names
- Type: `Autocomplete Selection`
- Required: `true`
#### upgrade
Upgrade level of the weapon. Use equivalent standard upgrade for special weapons
- Type: `STRING`
- Required: `false`
#### stats
str dex int faith luck levels. e.g. "10 18 9 30 7"
- Type: `STRING`
- Required: `false`
## `/weaponds3 bestinclass`
Get the top 10 weapons of each class
#### upgrade
Upgrade level of the weapon. Use equivalent standard upgrade for special weapons
- Type: `STRING`
- Required: `false`
#### stats
str dex int faith luck levels. e.g. "10 18 9 30 7"
- Type: `STRING`
- Required: `false`