# `/allocatestatser`
*Module: [[Soulsborne]]*<br>
Find the optimal stat spread for a given Elden Ring weapon
## `/allocatestatser <weapon> <spend> [upgrade] [stats] [calc_against]`
#### weapon
Weapon to allocate stats for
- Type: `AUTOCMPLETE SELECTION`
- Required: `TRUE`
#### spend
How many stat levels allowed to allocate
- Type: `INTEGER`
- Required: `TRUE`
#### upgrade
Upgrade level of the weapon
- Type: `AUTOCMPLETE SELECTION`
- Required: `FALSE`
#### stats
Initial str dex int faith arc levels. e.g. "10 18 9 30 7"
- Type: `STRING`
- Required: `FALSE`
#### calc_against
er-build-planner link to calculate damage against
- Type: `STRING`
- Required: `FALSE`