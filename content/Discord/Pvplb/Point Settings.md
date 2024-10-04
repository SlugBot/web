
### scalingRate
The fraction of the difference of points between the winner and the loser awarded to the winner when the winner is lower rank.
Default: 0.4
### downwardScalingRate
The fraction of the difference of points between the winner and the loser subtracted from the winner when the winner is higher rank.
Default: 0.4
### maxPointScale
Value of which rank #1 point total is scaled to. All other player's point totals are scaled proportionally. (set to -1 for no max point scaling)
Default: -1
### pointsPerRound
Flat amount of points given per round won. Any rounds won beyond the given [[Leaderboard Settings#maxRounds|maxRounds]] will not award any more points. 
Default: 1
### pointsPerWin
Flat amount of points given to the winner.
Default: 5
### pointsPerDraw
Flat amount of points given on draw. (set to -1 to disallow draws)
Default: -1
### pointWinCap
Maximum points a single match can reward. (set to -1 for uncapped point reward)
Default: -1
### pointLossCap
Maximum points a a player can lose in a single match. (set to -1 for uncapped point loss)
Default: -1
### pointLossRange
Maximum point difference between players where point-loss will occur. (set to -1 for unlimited range)
Default: -1
### pointLossMult
Value negative points will be scaled by
Default: 0
### repeatChallengeDecay
The fraction of repeated challenges within [[Point Settings#repeatChallengeMemory|repeatChallengeMemory]] needed for a 0x point multiplier.
Default: 0.9
### repeatChallengeMemory
The number of previous matches checked for repeat challenges.
Default: 10
### pointDecayRate
Fraction of total points decayed in a day.
Default: 0
### pointDecayGracePeriod
Number of days before points start decaying
Default: 7
### pointRegenRate
Fraction of decayed points regenerated on completing a match.
Default: 0.5
### startingPoints
The number of points a player will start with
Default: 0
### eloBlend
Factor using player's relative ELO to modify point reward. (e.g. A player with low points and high ELO will get larger rewards)
Default: 0
### eloChangeFactor
The maximum ELO loss/gain from a match
Default: 32