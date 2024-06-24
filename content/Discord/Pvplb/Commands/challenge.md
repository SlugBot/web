# `/challenge`
*Module: [[Pvplb]]*<br>
Challenge another member to a ranked fight or put out an open invitation to be challenged
## `/challenge cancel`
Abort your existing challenge

## `/challenge anyone <leaderboard> [region] [platform] [rank_range] [automatch]`
Put out an open challenge anyone can accept
#### leaderboard
Pick a leaderboard to participate in
- Type: `Autocomplete Selection`
- Required: `true`
#### region
Limit opponents to only ones in the given region
- Type: `Autocomplete Selection`
- Required: `false`
#### platform
Limit opponents to only ones on the given platforms
- Type: `Autocomplete Selection`
- Required: `false`
#### rank_range
Only those within this rank range can accept your challenge
- Type: `INTEGER`
- Required: `false`
#### automatch
Should this open challenge automatically match with other valid open challenges?
- Type: `BOOLEAN`
- Required: `false`
## `/challenge someone <opponent> <leaderboard>`
Challenge a specific member
#### opponent
Member to challenge
- Type: `USER`
- Required: `true`
#### leaderboard
Pick a leaderboard to participate in
- Type: `Autocomplete Selection`
- Required: `true`
## `/challenge team <leaderboard> [your_team] [opponent_team] [region] [platform]`
Challenge a team or use a specific team, or both
#### leaderboard
Pick a leaderboard to participate in
- Type: `Autocomplete Selection`
- Required: `true`
#### your_team
Team name of your team
- Type: `Autocomplete Selection`
- Required: `false`
#### opponent_team
Team name of opponent
- Type: `Autocomplete Selection`
- Required: `false`
#### region
Limit opponents to only ones in the given regions
- Type: `Autocomplete Selection`
- Required: `false`
#### platform
Limit opponents to only ones on the given platforms
- Type: `Autocomplete Selection`
- Required: `false`