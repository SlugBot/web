# allocatestatser
*Module: [[Eldenring]]*
Find the optimal stat spread for a given Elden Ring weapon
#### weapon
Weapon to allocate stats for
- Type: `Autocomplete Selection`
- Required: `true`
#### spend
How many stat levels allowed to allocate
- Type: `INTEGER`
- Required: `true`
#### upgrade
Upgrade level of the weapon
- Type: `Autocomplete Selection`
- Required: `false`
#### stats
Initial str dex int faith arc levels. e.g. "10 18 9 30 7"
- Type: `STRING`
- Required: `false`
#### calc_against
er-build-planner link to calculate damage against
- Type: `STRING`
- Required: `false`