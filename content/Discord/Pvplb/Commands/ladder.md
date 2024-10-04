# `/ladder`
*Module: [[Pvplb]]*<br>
Create and configure PvP leaderboard
## /ladder create leaderboard
`/ladder create leaderboard <title> <channel>`<br>
Ranked PvP leaderboard
#### title
leaderboard title
- Type: `STRING`
- Required: `TRUE`
#### channel
Channel to display the leaderboard
- Type: `CHANNEL`
- Required: `TRUE`
## /ladder create swiss
`/ladder create swiss <title> <participant_role> <channel>`<br>
Tournament manager using a [[Swiss Tournament Structure]]
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
## /ladder remove
`/ladder remove <leaderboard>`<br>
Delete an existing leaderboard
#### leaderboard
Name of leaderboard to be deleted
- Type: `AUTOCOMPLETE SELECTION`
- Required: `TRUE`
## /ladder rename
`/ladder rename <leaderboard> <new_lb_name>`<br>
Rename an existing leaderboard
#### leaderboard
Original name of leaderboard to be renamed
- Type: `AUTOCOMPLETE SELECTION`
- Required: `TRUE`
#### new_lb_name
New name for leaderboard
- Type: `STRING`
- Required: `TRUE`
## /ladder reset
`/ladder reset <leaderboard> [reset_points] [reset_matches_played] [reset_elo]`<br>
Reset all scores in leaderboard
#### leaderboard
title of leaderboard to be reset
- Type: `AUTOCOMPLETE SELECTION`
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
## /ladder set
`/ladder set <leaderboard> <player_or_team> <property> <value>`<br>
Set a user's points or wins in a leaderboard
#### leaderboard
title of leaderboard to set user's points/wins in
- Type: `AUTOCOMPLETE SELECTION`
- Required: `TRUE`
#### player_or_team
user or team to set points/wins for
- Type: `AUTOCOMPLETE SELECTION`
- Required: `TRUE`
#### property
either POINTS or WINS
- Type: `SELECTION`
  - `POINTS`
  - `WINS`
  - `MATCHES PLAYED`
- Required: `TRUE`
#### value
New value for user's points/wins in specified leaderboard
- Type: `INTEGER`
- Required: `TRUE`
## /ladder undo
`/ladder undo <msg_id>`<br>
Undo a completed match, reverting player states back to before the match
#### msg_id
Message ID of challenge message to identify match
- Type: `STRING`
- Required: `TRUE`
## /ladder view_settings
`/ladder view_settings <leaderboard>`<br>
View the current parameter settings for a leaderboard
#### leaderboard
title of leaderboard to view settings of
- Type: `AUTOCOMPLETE SELECTION`
- Required: `TRUE`
## /ladder point_settings
`/ladder point_settings <leaderboard> <param> <value>`<br>
Modify various paramters of the leaderboard
#### leaderboard
Title of leaderboard to modify
- Type: `AUTOCOMPLETE SELECTION`
- Required: `TRUE`
#### param
Parameter to modify
- Type: `AUTOCOMPLETE SELECTION`
- Required: `TRUE`
#### value
New parameter value
- Type: `NUMBER`
- Required: `TRUE`
## /ladder lb_settings
`/ladder lb_settings <leaderboard> <param> <value>`<br>
Modify various paramters of the leaderboard
#### leaderboard
Title of leaderboard to modify
- Type: `AUTOCOMPLETE SELECTION`
- Required: `TRUE`
#### param
Parameter to modify
- Type: `AUTOCOMPLETE SELECTION`
- Required: `TRUE`
#### value
New parameter value
- Type: `NUMBER`
- Required: `TRUE`
## /ladder string_settings
`/ladder string_settings <leaderboard> <param>`<br>
Modify various strings displayed on the leaderboard. Can include [[Flag Replacers]]
#### leaderboard
Title of leaderboard to modify
- Type: `AUTOCOMPLETE SELECTION`
- Required: `TRUE`
#### param
Parameter to modify
- Type: `SELECTION`
  - `openChalPrefix`
  - `LBDescription`
  - `featuredMatchString`
- Required: `TRUE`
## /ladder pick_options set_phases
`/ladder pick_options set_phases <leaderboard> <phases>`<br>
Pick/ban phases. Alternating between pick and ban, starting with ban
#### leaderboard
Title of leaderboard to modify
- Type: `AUTOCOMPLETE SELECTION`
- Required: `TRUE`
#### phases
list of phase rounds, starting with ban (e.g "2 3" for 2 ban rounds then 2 pick rounds per team)
- Type: `STRING`
- Required: `TRUE`
## /ladder pick_options add
`/ladder pick_options add <leaderboard> <pick_option> [pick_option_icon]`<br>
Add a pick/ban option
#### leaderboard
Title of leaderboard to modify
- Type: `AUTOCOMPLETE SELECTION`
- Required: `TRUE`
#### pick_option
Name of pick/ban option
- Type: `STRING`
- Required: `TRUE`
#### pick_option_icon
Optional emoji icon for pick option
- Type: `STRING`
- Required: `FALSE`
## /ladder pick_options remove
`/ladder pick_options remove <leaderboard> <pick_option>`<br>
Remove a pick/ban option
#### leaderboard
Title of leaderboard to modify
- Type: `AUTOCOMPLETE SELECTION`
- Required: `TRUE`
#### pick_option
Name of pick/ban option
- Type: `AUTOCOMPLETE SELECTION`
- Required: `TRUE`
## /ladder pick_options list
`/ladder pick_options list <leaderboard>`<br>
list all current pick/ban options
#### leaderboard
Title of leaderboard to view
- Type: `AUTOCOMPLETE SELECTION`
- Required: `TRUE`
## /ladder player_override iwon
`/ladder player_override iwon <player> <rounds_won> <rounds_lost>`<br>
Run the /iwon command as a given player
#### player
Player to override
- Type: `AUTOCOMPLETE SELECTION`
- Required: `TRUE`
#### rounds_won
Number of rounds won
- Type: `INTEGER`
- Required: `TRUE`
#### rounds_lost
Number of rounds lost
- Type: `INTEGER`
- Required: `TRUE`
## /ladder player_override ilost
`/ladder player_override ilost <player> <rounds_won> <rounds_lost>`<br>
Run the /ilost command as a given player
#### player
Player to override
- Type: `AUTOCOMPLETE SELECTION`
- Required: `TRUE`
#### rounds_won
Number of rounds won
- Type: `INTEGER`
- Required: `TRUE`
#### rounds_lost
Number of rounds lost
- Type: `INTEGER`
- Required: `TRUE`
## /ladder player_override cancel
`/ladder player_override cancel <player>`<br>
Run [/challenge cancel] command as a given player
#### player
Player to override
- Type: `AUTOCOMPLETE SELECTION`
- Required: `TRUE`
## /ladder player_override force
`/ladder player_override force <leaderboard> <player_or_team1> <player_or_team2> [rounds_won] [rounds_lost]`<br>
Force create and complete a match between two players
#### leaderboard
Title of leaderboard to force match in
- Type: `AUTOCOMPLETE SELECTION`
- Required: `TRUE`
#### player_or_team1
Host player or team
- Type: `AUTOCOMPLETE SELECTION`
- Required: `TRUE`
#### player_or_team2
opponent player or team
- Type: `AUTOCOMPLETE SELECTION`
- Required: `TRUE`
#### rounds_won
Number of rounds won by team1
- Type: `INTEGER`
- Required: `FALSE`
#### rounds_lost
Number of rounds lost by team1
- Type: `INTEGER`
- Required: `FALSE`
## /ladder roleatrank add
`/ladder roleatrank add <leaderboard> <role> <rank_add> [rank_remove]`<br>
Add or update a role to be given/removed at rank
#### leaderboard
Title of leaderboard to modify
- Type: `AUTOCOMPLETE SELECTION`
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
## /ladder roleatrank remove
`/ladder roleatrank remove <leaderboard> <role>`<br>
Remove an existing role given at rank
#### leaderboard
Title of leaderboard to modify
- Type: `AUTOCOMPLETE SELECTION`
- Required: `TRUE`
#### role
Role to be removed
- Type: `ROLE`
- Required: `TRUE`
## /ladder roleatrank list
`/ladder roleatrank list <leaderboard>`<br>
List all roles given at leaderboard rank and their requirements
#### leaderboard
Title of leaderboard to modify
- Type: `AUTOCOMPLETE SELECTION`
- Required: `TRUE`
## /ladder info
`/ladder info <leaderboard> [start_time] [end_time] [ignore_resets]`<br>
Get activity info on a leaderboard
#### leaderboard
Title of leaderboard to view info for
- Type: `AUTOCOMPLETE SELECTION`
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