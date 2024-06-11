# `/allocatestatsds3`
Find the optimal stat spread for a given weapon
*Module: [[Darksouls]]*
#### weapon
Weapon to allocate stats for
- Type: `Autocomplete Selection`
- Required: `true`
#### spend
How many stat levels allowed to allocate
- Type: `INTEGER`
- Required: `true`
#### upgrade
Upgrade level of the weapon. Use equivalent standard upgrade for special weapons
- Type: `STRING`
- Required: `false`
#### stats
Initial str dex int faith luck levels. e.g. "10 18 9 30 7"
- Type: `STRING`
- Required: `false`