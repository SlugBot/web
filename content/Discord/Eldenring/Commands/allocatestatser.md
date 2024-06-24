# `/allocatestatser`
*Module: [[Eldenring]]*<br>
Find the optimal stat spread for a given Elden Ring weapon
## `/allocatestatser <weapon> <spend> [upgrade] [stats] [calc_against]`
#### weapon
Weapon to allocate stats for
- Type: `Autocomplete Selection`
- Required: `true`
## `/allocatestatser <weapon> <spend> [upgrade] [stats] [calc_against]`
#### spend
How many stat levels allowed to allocate
- Type: `INTEGER`
- Required: `true`
## `/allocatestatser <weapon> <spend> [upgrade] [stats] [calc_against]`
#### upgrade
Upgrade level of the weapon
- Type: `Autocomplete Selection`
- Required: `false`
## `/allocatestatser <weapon> <spend> [upgrade] [stats] [calc_against]`
#### stats
Initial str dex int faith arc levels. e.g. "10 18 9 30 7"
- Type: `STRING`
- Required: `false`
## `/allocatestatser <weapon> <spend> [upgrade] [stats] [calc_against]`
#### calc_against
er-build-planner link to calculate damage against
- Type: `STRING`
- Required: `false`