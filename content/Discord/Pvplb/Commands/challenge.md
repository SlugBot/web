# `/challenge`
*Module: [[Pvplb]]*<br>
Challenge another member to a ranked fight or put out an open invitation to be challenged
## `/challenge cancel`
Abort your existing challenge

## `/challenge anyone <leaderboard> [region] [platform] [rank_range] [automatch]`
Put out an open challenge anyone can accept
#### leaderboard
Pick a leaderboard to participate in
- Type: `AUTOCMPLETE SELECTION`
- Required: `TRUE`
#### region
Limit opponents to only ones in the given region
- Type: `AUTOCMPLETE SELECTION`
- Required: `FALSE`
#### platform
Limit opponents to only ones on the given platforms
- Type: `AUTOCMPLETE SELECTION`
- Required: `FALSE`
#### rank_range
Only those within this rank range can accept your challenge
- Type: `INTEGER`
- Required: `FALSE`
#### automatch
Should this open challenge automatically match with other valid open challenges?
- Type: `BOOLEAN`
- Required: `FALSE`
## `/challenge someone <opponent> <leaderboard>`
Challenge a specific member
#### opponent
Member to challenge
- Type: `USER`
- Required: `TRUE`
#### leaderboard
Pick a leaderboard to participate in
- Type: `AUTOCMPLETE SELECTION`
- Required: `TRUE`
## `/challenge team <leaderboard> [your_team] [opponent_team] [region] [platform]`
Challenge a team or use a specific team, or both
#### leaderboard
Pick a leaderboard to participate in
- Type: `AUTOCMPLETE SELECTION`
- Required: `TRUE`
#### your_team
Team name of your team
- Type: `AUTOCMPLETE SELECTION`
- Required: `FALSE`
#### opponent_team
Team name of opponent
- Type: `AUTOCMPLETE SELECTION`
- Required: `FALSE`
#### region
Limit opponents to only ones in the given regions
- Type: `AUTOCMPLETE SELECTION`
- Required: `FALSE`
#### platform
Limit opponents to only ones on the given platforms
- Type: `AUTOCMPLETE SELECTION`
- Required: `FALSE`