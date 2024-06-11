# `/team`
Create and manage a team for a PvP leaderboard
*Module: [[Pvplb]]*
## `/team create`
Create a new team
#### leaderboard
Pick a leaderboard to create a team for
- Type: `Autocomplete Selection`
- Required: `true`
#### name
Team name
- Type: `STRING`
- Required: `true`
#### members
List of members to invite to team (@member)
- Type: `STRING`
- Required: `true`
## `/team update`
Update
#### leaderboard
Leaderboard of team to update
- Type: `Autocomplete Selection`
- Required: `true`
#### name
Team name of team to update
- Type: `Autocomplete Selection`
- Required: `true`
#### new_name
New team name
- Type: `STRING`
- Required: `false`
#### new_leader
New team leader
- Type: `USER`
- Required: `false`
#### add_members
List of members to invite to team (@member)
- Type: `STRING`
- Required: `false`
#### remove_members
List of members to remove from team (@member)
- Type: `STRING`
- Required: `false`
## `/team disband`
Disband an existing team
#### leaderboard
Pick the leaderboard your team is for
- Type: `Autocomplete Selection`
- Required: `true`
#### name
Team name
- Type: `Autocomplete Selection`
- Required: `true`