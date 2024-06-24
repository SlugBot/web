# `/allocatestatsds3`
*Module: [[Darksouls]]*<br>
Find the optimal stat spread for a given weapon
## `/allocatestatsds3 <weapon> <spend> [upgrade] [stats]`
#### weapon
Weapon to allocate stats for
- Type: `Autocomplete Selection`
- Required: `true`
## `/allocatestatsds3 <weapon> <spend> [upgrade] [stats]`
#### spend
How many stat levels allowed to allocate
- Type: `INTEGER`
- Required: `true`
## `/allocatestatsds3 <weapon> <spend> [upgrade] [stats]`
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
## `/allocatestatsds3 <weapon> <spend> [upgrade] [stats]`
#### stats
Initial str dex int faith luck levels. e.g. "10 18 9 30 7"
- Type: `STRING`
- Required: `false`