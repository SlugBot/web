# `/tourney`
*Module: [[Pvplb]]*<br>
Host a tourney for the top ranking members on the leaderboard
## `/tourney set_organising_category <category>`
Set a category where channels will be created for tourney organisation
#### category
Category where tourney organisation channels will be created
- Type: `CHANNEL`
- Required: `TRUE`
## `/tourney create <leaderboard> <name> <player_count> <start_in> [begin_invites_in] [reserve_count] [participant_role] [reserve_role]`
Host a new tourney
#### leaderboard
Pick a leaderboard to select participants from
- Type: `AUTOCMPLETE SELECTION`
- Required: `TRUE`
#### name
Title of the tourney
- Type: `STRING`
- Required: `TRUE`
#### player_count
Number of tourney participants
- Type: `INTEGER`
- Required: `TRUE`
#### start_in
Time before tourney will commence; e.g. "4 days 12 hours"
- Type: `STRING`
- Required: `TRUE`
#### begin_invites_in
Time before invites will begin sending; e.g. "4 days 12 hours"
- Type: `STRING`
- Required: `FALSE`
#### reserve_count
Number of reserve players needed
- Type: `INTEGER`
- Required: `FALSE`
#### participant_role
Role to be given to participants who have accepted their invite
- Type: `ROLE`
- Required: `FALSE`
#### reserve_role
Role to be given to reserves who have accepted their invite
- Type: `ROLE`
- Required: `FALSE`
## `/tourney invite <name> <member> [reserve]`
Manually invite member to tournament
#### name
Title of the tourney
- Type: `AUTOCMPLETE SELECTION`
- Required: `TRUE`
#### member
Member to invite
- Type: `USER`
- Required: `TRUE`
#### reserve
Invite member as reserve?
- Type: `BOOLEAN`
- Required: `FALSE`
## `/tourney revoke <name> <member> [reason]`
Manually revoke invite sent out to a member
#### name
Title of the tourney
- Type: `AUTOCMPLETE SELECTION`
- Required: `TRUE`
#### member
Member to revoke invite from
- Type: `AUTOCMPLETE SELECTION`
- Required: `TRUE`
#### reason
Reason for revoking invite. Will be to DMed to member
- Type: `STRING`
- Required: `FALSE`
## `/tourney abort <name>`
Abort an existing tourney
#### name
Title of the tourney to abort
- Type: `AUTOCMPLETE SELECTION`
- Required: `TRUE`
## `/tourney status <name>`
Get the current status of a tourney
#### name
Title of the tourney
- Type: `AUTOCMPLETE SELECTION`
- Required: `TRUE`