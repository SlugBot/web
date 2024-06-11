# `/ladder`
Create and configure PvP leaderboard
*Module: [[Pvplb]]*
## `/ladder create leaderboard`
Ranked PvP leaderboard
#### title
leaderboard title
- Type: `STRING`
- Required: `true`
#### channel
Channel to display the leaderboard
- Type: `CHANNEL`
- Required: `true`
## `/ladder create swiss`
Swiss tournament manager
#### title
leaderboard title
- Type: `STRING`
- Required: `true`
#### participant_role
Any user with this role will be considered a participant.
- Type: `ROLE`
- Required: `true`
#### channel
Channel to display the leaderboard
- Type: `CHANNEL`
- Required: `true`
## `/ladder remove`
Delete an existing leaderboard
#### ladder
Name of leaderboard to be deleted
- Type: `Autocomplete Selection`
- Required: `true`
## `/ladder rename`
Rename an existing ladder
#### ladder
Original name of ladder to be renamed
- Type: `Autocomplete Selection`
- Required: `true`
#### new_ladder_name
New name for ladder
- Type: `STRING`
- Required: `true`
## `/ladder reset`
Reset all scores in ladder
#### ladder
Ladder name of ladder to be reset
- Type: `Autocomplete Selection`
- Required: `true`
#### reset_points
Reset all participant's points
- Type: `BOOLEAN`
- Required: `false`
#### reset_matches_played
Reset all participant's matches played
- Type: `BOOLEAN`
- Required: `false`
#### reset_elo
Reset all participant's ELO
- Type: `BOOLEAN`
- Required: `false`
## `/ladder set`
Set a user's points or wins in a ladder
#### ladder
Ladder name of ladder to set user's points/wins in
- Type: `Autocomplete Selection`
- Required: `true`
#### player_or_team
user or team to set points/wins for
- Type: `Autocomplete Selection`
- Required: `true`
#### property
either POINTS or WINS
- Type: `STRING`
- Required: `true`
#### value
New value for user's points/wins in specified ladder
- Type: `INTEGER`
- Required: `true`
## `/ladder undo`
Undo a completed match, reverting player states back to before the match
#### msg_id
Message ID of challenge message to identify match
- Type: `STRING`
- Required: `true`
## `/ladder view_settings`
View the current parameter settings for a ladder
#### ladder
Ladder name of ladder to settings of
- Type: `Autocomplete Selection`
- Required: `true`
## `/ladder point_settings`
Modify various paramters of the ladder
#### ladder
Ladder name of ladder to modify
- Type: `Autocomplete Selection`
- Required: `true`
#### param
Parameter to modify
- Type: `Autocomplete Selection`
- Required: `true`
#### value
New parameter value
- Type: `NUMBER`
- Required: `true`
## `/ladder ladder_settings`
Modify various paramters of the ladder
#### ladder
Ladder name of ladder to modify
- Type: `Autocomplete Selection`
- Required: `true`
#### param
Parameter to modify
- Type: `Autocomplete Selection`
- Required: `true`
#### value
New parameter value
- Type: `NUMBER`
- Required: `true`
## `/ladder string_settings`
Modify various strings displayed on the ladder
#### ladder
Ladder name of ladder to modify
- Type: `Autocomplete Selection`
- Required: `true`
#### param
Parameter to modify
- Type: `STRING`
- Required: `true`
## `/ladder pick_options set_phases`
Pick/ban phases. Alternating between pick and ban, starting with ban
#### ladder
Ladder name of ladder to modify
- Type: `Autocomplete Selection`
- Required: `true`
#### phases
list of phase rounds, starting with ban (e.g "2 3" for 2 ban rounds then 2 pick rounds per team)
- Type: `STRING`
- Required: `true`
## `/ladder pick_options add`
Add a pick/ban option
#### ladder
Ladder name of ladder to modify
- Type: `Autocomplete Selection`
- Required: `true`
#### pick_option
Name of pick/ban option
- Type: `STRING`
- Required: `true`
#### pick_option_icon
Optional emoji icon for pick option
- Type: `STRING`
- Required: `false`
## `/ladder pick_options remove`
Remove a pick/ban option
#### ladder
Ladder name of ladder to modify
- Type: `Autocomplete Selection`
- Required: `true`
#### pick_option
Name of pick/ban option
- Type: `Autocomplete Selection`
- Required: `true`
## `/ladder pick_options list`
list all current pick/ban options
#### ladder
Ladder name of ladder to view
- Type: `Autocomplete Selection`
- Required: `true`
## `/ladder player_override iwon`
Run the /iwon command as a given player
#### player
Player to override
- Type: `Autocomplete Selection`
- Required: `true`
#### rounds_won
Number of rounds won
- Type: `INTEGER`
- Required: `true`
#### rounds_lost
Number of rounds lost
- Type: `INTEGER`
- Required: `true`
## `/ladder player_override ilost`
Run the /ilost command as a given player
#### player
Player to override
- Type: `Autocomplete Selection`
- Required: `true`
#### rounds_won
Number of rounds won
- Type: `INTEGER`
- Required: `true`
#### rounds_lost
Number of rounds lost
- Type: `INTEGER`
- Required: `true`
## `/ladder player_override cancel`
Run [/challenge cancel] command as a given player
#### player
Player to override
- Type: `Autocomplete Selection`
- Required: `true`
## `/ladder player_override force`
Force create and complete a match between two players
#### ladder
Ladder name of ladder to force match in
- Type: `Autocomplete Selection`
- Required: `true`
#### player_or_team1
Host player or team
- Type: `Autocomplete Selection`
- Required: `true`
#### player_or_team2
opponent player or team
- Type: `Autocomplete Selection`
- Required: `true`
#### rounds_won
Number of rounds won by team1
- Type: `INTEGER`
- Required: `false`
#### rounds_lost
Number of rounds lost by team1
- Type: `INTEGER`
- Required: `false`
## `/ladder roleatrank add`
Add or update a role to be given/removed at rank
#### ladder
Ladder name of ladder to modify
- Type: `Autocomplete Selection`
- Required: `true`
#### role
Role to be given
- Type: `ROLE`
- Required: `true`
#### rank_add
Minimum rank needed to receive the role
- Type: `INTEGER`
- Required: `true`
#### rank_remove
Minimum rank needed to remove the role
- Type: `INTEGER`
- Required: `false`
## `/ladder roleatrank remove`
Remove an existing role given at rank
#### ladder
Ladder name of ladder to modify
- Type: `Autocomplete Selection`
- Required: `true`
#### role
Role to be removed
- Type: `ROLE`
- Required: `true`
## `/ladder roleatrank list`
List all roles given at leaderboard rank and their requirements
#### ladder
Ladder name of ladder to modify
- Type: `Autocomplete Selection`
- Required: `true`
## `/ladder info`
Get activity info on a leaderboard
#### ladder
Ladder name of ladder to view info for
- Type: `Autocomplete Selection`
- Required: `true`
#### start_time
Ignore matches before this time
- Type: `STRING`
- Required: `undefined`
#### end_time
Ignore matches after this time
- Type: `STRING`
- Required: `undefined`
#### ignore_resets
Don't clamp time period to within reset periods
- Type: `BOOLEAN`
- Required: `undefined`