# `/ladder`
*Module: [[Pvplb]]*<br>
Create and configure PvP leaderboard
## `/ladder create leaderboard <title> <channel>`
Ranked PvP leaderboard
#### title
leaderboard title
- Type: `STRING`
- Required: `TRUE`
#### channel
Channel to display the leaderboard
- Type: `CHANNEL`
- Required: `TRUE`
## `/ladder create swiss <title> <participant_role> <channel>`
Swiss tournament manager
#### title
leaderboard title
- Type: `STRING`
- Required: `TRUE`
#### participant_role
Any user with this role will be considered a participant.
- Type: `ROLE`
- Required: `TRUE`
#### channel
Channel to display the leaderboard
- Type: `CHANNEL`
- Required: `TRUE`
## `/ladder remove <ladder>`
Delete an existing leaderboard
#### ladder
Name of leaderboard to be deleted
- Type: `AUTOCMPLETE SELECTION`
- Required: `TRUE`
## `/ladder rename <ladder> <new_ladder_name>`
Rename an existing ladder
#### ladder
Original name of ladder to be renamed
- Type: `AUTOCMPLETE SELECTION`
- Required: `TRUE`
#### new_ladder_name
New name for ladder
- Type: `STRING`
- Required: `TRUE`
## `/ladder reset <ladder> [reset_points] [reset_matches_played] [reset_elo]`
Reset all scores in ladder
#### ladder
Ladder name of ladder to be reset
- Type: `AUTOCMPLETE SELECTION`
- Required: `TRUE`
#### reset_points
Reset all participant's points
- Type: `BOOLEAN`
- Required: `FALSE`
#### reset_matches_played
Reset all participant's matches played
- Type: `BOOLEAN`
- Required: `FALSE`
#### reset_elo
Reset all participant's ELO
- Type: `BOOLEAN`
- Required: `FALSE`
## `/ladder set <ladder> <player_or_team> <property> <value>`
Set a user's points or wins in a ladder
#### ladder
Ladder name of ladder to set user's points/wins in
- Type: `AUTOCMPLETE SELECTION`
- Required: `TRUE`
#### player_or_team
user or team to set points/wins for
- Type: `AUTOCMPLETE SELECTION`
- Required: `TRUE`
#### property
either POINTS or WINS
- Type: `SELECTION`
  - `POINTS`
  - `WINS`
  - `MATCHES PLAYED`
- Required: `TRUE`
#### value
New value for user's points/wins in specified ladder
- Type: `INTEGER`
- Required: `TRUE`
## `/ladder undo <msg_id>`
Undo a completed match, reverting player states back to before the match
#### msg_id
Message ID of challenge message to identify match
- Type: `STRING`
- Required: `TRUE`
## `/ladder view_settings <ladder>`
View the current parameter settings for a ladder
#### ladder
Ladder name of ladder to settings of
- Type: `AUTOCMPLETE SELECTION`
- Required: `TRUE`
## `/ladder point_settings <ladder> <param> <value>`
Modify various paramters of the ladder
#### ladder
Ladder name of ladder to modify
- Type: `AUTOCMPLETE SELECTION`
- Required: `TRUE`
#### param
Parameter to modify
- Type: `AUTOCMPLETE SELECTION`
- Required: `TRUE`
#### value
New parameter value
- Type: `NUMBER`
- Required: `TRUE`
## `/ladder ladder_settings <ladder> <param> <value>`
Modify various paramters of the ladder
#### ladder
Ladder name of ladder to modify
- Type: `AUTOCMPLETE SELECTION`
- Required: `TRUE`
#### param
Parameter to modify
- Type: `AUTOCMPLETE SELECTION`
- Required: `TRUE`
#### value
New parameter value
- Type: `NUMBER`
- Required: `TRUE`
## `/ladder string_settings <ladder> <param>`
Modify various strings displayed on the ladder
#### ladder
Ladder name of ladder to modify
- Type: `AUTOCMPLETE SELECTION`
- Required: `TRUE`
#### param
Parameter to modify
- Type: `SELECTION`
  - `openChalPrefix`
  - `LBDescription`
  - `featuredMatchString`
- Required: `TRUE`
## `/ladder pick_options set_phases <ladder> <phases>`
Pick/ban phases. Alternating between pick and ban, starting with ban
#### ladder
Ladder name of ladder to modify
- Type: `AUTOCMPLETE SELECTION`
- Required: `TRUE`
#### phases
list of phase rounds, starting with ban (e.g "2 3" for 2 ban rounds then 2 pick rounds per team)
- Type: `STRING`
- Required: `TRUE`
## `/ladder pick_options add <ladder> <pick_option> [pick_option_icon]`
Add a pick/ban option
#### ladder
Ladder name of ladder to modify
- Type: `AUTOCMPLETE SELECTION`
- Required: `TRUE`
#### pick_option
Name of pick/ban option
- Type: `STRING`
- Required: `TRUE`
#### pick_option_icon
Optional emoji icon for pick option
- Type: `STRING`
- Required: `FALSE`
## `/ladder pick_options remove <ladder> <pick_option>`
Remove a pick/ban option
#### ladder
Ladder name of ladder to modify
- Type: `AUTOCMPLETE SELECTION`
- Required: `TRUE`
#### pick_option
Name of pick/ban option
- Type: `AUTOCMPLETE SELECTION`
- Required: `TRUE`
## `/ladder pick_options list <ladder>`
list all current pick/ban options
#### ladder
Ladder name of ladder to view
- Type: `AUTOCMPLETE SELECTION`
- Required: `TRUE`
## `/ladder player_override iwon <player> <rounds_won> <rounds_lost>`
Run the /iwon command as a given player
#### player
Player to override
- Type: `AUTOCMPLETE SELECTION`
- Required: `TRUE`
#### rounds_won
Number of rounds won
- Type: `INTEGER`
- Required: `TRUE`
#### rounds_lost
Number of rounds lost
- Type: `INTEGER`
- Required: `TRUE`
## `/ladder player_override ilost <player> <rounds_won> <rounds_lost>`
Run the /ilost command as a given player
#### player
Player to override
- Type: `AUTOCMPLETE SELECTION`
- Required: `TRUE`
#### rounds_won
Number of rounds won
- Type: `INTEGER`
- Required: `TRUE`
#### rounds_lost
Number of rounds lost
- Type: `INTEGER`
- Required: `TRUE`
## `/ladder player_override cancel <player>`
Run [/challenge cancel] command as a given player
#### player
Player to override
- Type: `AUTOCMPLETE SELECTION`
- Required: `TRUE`
## `/ladder player_override force <ladder> <player_or_team1> <player_or_team2> [rounds_won] [rounds_lost]`
Force create and complete a match between two players
#### ladder
Ladder name of ladder to force match in
- Type: `AUTOCMPLETE SELECTION`
- Required: `TRUE`
#### player_or_team1
Host player or team
- Type: `AUTOCMPLETE SELECTION`
- Required: `TRUE`
#### player_or_team2
opponent player or team
- Type: `AUTOCMPLETE SELECTION`
- Required: `TRUE`
#### rounds_won
Number of rounds won by team1
- Type: `INTEGER`
- Required: `FALSE`
#### rounds_lost
Number of rounds lost by team1
- Type: `INTEGER`
- Required: `FALSE`
## `/ladder roleatrank add <ladder> <role> <rank_add> [rank_remove]`
Add or update a role to be given/removed at rank
#### ladder
Ladder name of ladder to modify
- Type: `AUTOCMPLETE SELECTION`
- Required: `TRUE`
#### role
Role to be given
- Type: `ROLE`
- Required: `TRUE`
#### rank_add
Minimum rank needed to receive the role
- Type: `INTEGER`
- Required: `TRUE`
#### rank_remove
Minimum rank needed to remove the role
- Type: `INTEGER`
- Required: `FALSE`
## `/ladder roleatrank remove <ladder> <role>`
Remove an existing role given at rank
#### ladder
Ladder name of ladder to modify
- Type: `AUTOCMPLETE SELECTION`
- Required: `TRUE`
#### role
Role to be removed
- Type: `ROLE`
- Required: `TRUE`
## `/ladder roleatrank list <ladder>`
List all roles given at leaderboard rank and their requirements
#### ladder
Ladder name of ladder to modify
- Type: `AUTOCMPLETE SELECTION`
- Required: `TRUE`
## `/ladder info <ladder> [start_time] [end_time] [ignore_resets]`
Get activity info on a leaderboard
#### ladder
Ladder name of ladder to view info for
- Type: `AUTOCMPLETE SELECTION`
- Required: `TRUE`
#### start_time
Ignore matches before this time
- Type: `STRING`
- Required: `FALSE`
#### end_time
Ignore matches after this time
- Type: `STRING`
- Required: `FALSE`
#### ignore_resets
Don't clamp time period to within reset periods
- Type: `BOOLEAN`
- Required: `FALSE`