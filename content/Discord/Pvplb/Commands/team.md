# `/team`
*Module: [[Pvplb]]*<br>
Create and manage a team for a PvP leaderboard
## /team create
`/team create <leaderboard> <name> <members>`<br>
Create a new team
#### leaderboard
Pick a leaderboard to create a team for
- Type: `AUTOCOMPLETE SELECTION`
- Required: `TRUE`
#### name
Team name
- Type: `STRING`
- Required: `TRUE`
#### members
List of members to invite to team (@member)
- Type: `STRING`
- Required: `TRUE`
## /team update
`/team update <leaderboard> <name> [new_name] [new_leader] [add_members] [remove_members]`<br>
Update
#### leaderboard
Leaderboard of team to update
- Type: `AUTOCOMPLETE SELECTION`
- Required: `TRUE`
#### name
Team name of team to update
- Type: `AUTOCOMPLETE SELECTION`
- Required: `TRUE`
#### new_name
New team name
- Type: `STRING`
- Required: `FALSE`
#### new_leader
New team leader
- Type: `USER`
- Required: `FALSE`
#### add_members
List of members to invite to team (@member)
- Type: `STRING`
- Required: `FALSE`
#### remove_members
List of members to remove from team (@member)
- Type: `STRING`
- Required: `FALSE`
## /team disband
`/team disband <leaderboard> <name>`<br>
Disband an existing team
#### leaderboard
Pick the leaderboard your team is for
- Type: `AUTOCOMPLETE SELECTION`
- Required: `TRUE`
#### name
Team name
- Type: `AUTOCOMPLETE SELECTION`
- Required: `TRUE`