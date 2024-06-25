# `/allocatestatsds3`
*Module: [[Soulsborne]]*<br>
Find the optimal stat spread for a given weapon
## `/allocatestatsds3 <weapon> <spend> [upgrade] [stats]`
#### weapon
Weapon to allocate stats for
- Type: `AUTOCMPLETE SELECTION`
- Required: `TRUE`
#### spend
How many stat levels allowed to allocate
- Type: `INTEGER`
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
Initial str dex int faith luck levels. e.g. "10 18 9 30 7"
- Type: `STRING`
- Required: `FALSE`