# `/challenge`
*Module: [[Pvplb]]*<br>
Challenge another member to a ranked fight or put out an open invitation to be challenged
## /challenge cancel
`/challenge cancel`<br>
Abort your existing challenge

## /challenge anyone
`/challenge anyone <leaderboard> [region] [platform] [rank_range] [automatch]`<br>
Put out an open challenge anyone can accept
#### leaderboard
Pick a leaderboard to participate in
- Type: `AUTOCOMPLETE SELECTION`
- Required: `TRUE`
#### region
Limit opponents to only ones in the given region
- Type: `AUTOCOMPLETE SELECTION`
- Required: `FALSE`
#### platform
Limit opponents to only ones on the given platforms
- Type: `AUTOCOMPLETE SELECTION`
- Required: `FALSE`
#### rank_range
Only those within this rank range can accept your challenge
- Type: `INTEGER`
- Required: `FALSE`
#### automatch
Should this open challenge automatically match with other valid open challenges?
- Type: `BOOLEAN`
- Required: `FALSE`
## /challenge someone
`/challenge someone <opponent> <leaderboard>`<br>
Challenge a specific member
#### opponent
Member to challenge
- Type: `USER`
- Required: `TRUE`
#### leaderboard
Pick a leaderboard to participate in
- Type: `AUTOCOMPLETE SELECTION`
- Required: `TRUE`
## /challenge team
`/challenge team <leaderboard> [your_team] [opponent_team] [region] [platform]`<br>
Challenge a team or use a specific team, or both
#### leaderboard
Pick a leaderboard to participate in
- Type: `AUTOCOMPLETE SELECTION`
- Required: `TRUE`
#### your_team
Team name of your team
- Type: `AUTOCOMPLETE SELECTION`
- Required: `FALSE`
#### opponent_team
Team name of opponent
- Type: `AUTOCOMPLETE SELECTION`
- Required: `FALSE`
#### region
Limit opponents to only ones in the given regions
- Type: `AUTOCOMPLETE SELECTION`
- Required: `FALSE`
#### platform
Limit opponents to only ones on the given platforms
- Type: `AUTOCOMPLETE SELECTION`
- Required: `FALSE`