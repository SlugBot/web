# `/tourney`
*Module: [[Pvplb]]*<br>
Host a tourney for the top ranking members on the leaderboard
## `/tourney set_organising_category <category>`
Set a category where channels will be created for tourney organisation
#### category
Category where tourney organisation channels will be created
- Type: `CHANNEL`
- Required: `true`
## `/tourney create <leaderboard> <name> <player_count> <start_in> [begin_invites_in] [reserve_count] [participant_role] [reserve_role]`
Host a new tourney
#### leaderboard
Pick a leaderboard to select participants from
- Type: `Autocomplete Selection`
- Required: `true`
#### name
Title of the tourney
- Type: `STRING`
- Required: `true`
#### player_count
Number of tourney participants
- Type: `INTEGER`
- Required: `true`
#### start_in
Time before tourney will commence; e.g. "4 days 12 hours"
- Type: `STRING`
- Required: `true`
#### begin_invites_in
Time before invites will begin sending; e.g. "4 days 12 hours"
- Type: `STRING`
- Required: `false`
#### reserve_count
Number of reserve players needed
- Type: `INTEGER`
- Required: `false`
#### participant_role
Role to be given to participants who have accepted their invite
- Type: `ROLE`
- Required: `false`
#### reserve_role
Role to be given to reserves who have accepted their invite
- Type: `ROLE`
- Required: `false`
## `/tourney invite <name> <member> [reserve]`
Manually invite member to tournament
#### name
Title of the tourney
- Type: `Autocomplete Selection`
- Required: `true`
#### member
Member to invite
- Type: `USER`
- Required: `true`
#### reserve
Invite member as reserve?
- Type: `BOOLEAN`
- Required: `false`
## `/tourney revoke <name> <member> [reason]`
Manually revoke invite sent out to a member
#### name
Title of the tourney
- Type: `Autocomplete Selection`
- Required: `true`
#### member
Member to revoke invite from
- Type: `Autocomplete Selection`
- Required: `true`
#### reason
Reason for revoking invite. Will be to DMed to member
- Type: `STRING`
- Required: `false`
## `/tourney abort <name>`
Abort an existing tourney
#### name
Title of the tourney to abort
- Type: `Autocomplete Selection`
- Required: `true`
## `/tourney status <name>`
Get the current status of a tourney
#### name
Title of the tourney
- Type: `Autocomplete Selection`
- Required: `true`