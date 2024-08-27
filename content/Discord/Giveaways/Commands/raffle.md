# `/raffle`
*Module: [[Giveaways]]*<br>
create a raffle, allowing users to enter for a chance of being selected as a winner
## /raffle start
`/raffle start <duration> [description] [required_role]`<br>
Start a new raffle
#### duration
Duration the raffle will stay open for before drawing a winner; e.g. "2 days"
- Type: `STRING`
- Required: `TRUE`
#### description
Message to be shown with the raffle
- Type: `STRING`
- Required: `FALSE`
#### required_role
Role required to enter the raffle
- Type: `ROLE`
- Required: `FALSE`
## /raffle update
`/raffle update <raffle_id> [description] [duration] [required_role]`<br>
Update an existing raffle
#### raffle_id
Identifier of existing raffle
- Type: `AUTOCMPLETE SELECTION`
- Required: `TRUE`
#### description
New message to be shown with the raffle
- Type: `STRING`
- Required: `FALSE`
#### duration
New duration for the raffle; e.g. "5 days"
- Type: `STRING`
- Required: `FALSE`
#### required_role
New required role to enter the raffle. Will not apply retroactively
- Type: `ROLE`
- Required: `FALSE`
## /raffle draw
`/raffle draw <raffle_id>`<br>
End the raffle and draw a winner. Use the command again to draw a new winner
#### raffle_id
Identifier of existing raffle
- Type: `AUTOCMPLETE SELECTION`
- Required: `TRUE`
## /raffle abort
`/raffle abort <raffle_id>`<br>
End the raffle and DO NOT draw a winner
#### raffle_id
Identifier of existing raffle
- Type: `AUTOCMPLETE SELECTION`
- Required: `TRUE`