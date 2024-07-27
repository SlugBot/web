---
tags:
  - research
topics:
  - "[[gaming]]"
  - "[[mathematics]]"
dateAdded: 2024-03-14
dateCompleted: 2024-03-20
progress: complete
---

A Swiss-system tournament is a non-eliminating tournament format that features a fixed number of rounds of competition, but considerably fewer than for a Round-Robin Tournament Structure; thus each competitor (team or individual) does not play all the other competitors.

# Pairing
 Competitors are paired using a set of rules designed to ensure that each competitor plays opponents with a similar running score, but does not play the same opponent more than once.

In practice, pairing is handled as follows:
1. Competitors are ranked on their score. [[#Tie-breakers]] accounted for.
2. Competitor #1 is checked against the next highest rank. if they have played before, the next highest rank after that is checked, and so on until a valid pairing is made
3. The next competitor who has not already been paired is then checked.
4. If there is an odd number of competitors, the lowest rank gets a "Bye" and is put through to the next round with an automatic win in most cases.

# Tie-breakers
It is very likely competitors will end up with the same score during and at the end of the tourney. Tie-breakers are resolved using the following three metrics - the first one that is not equal is used a the tie-breaker.
1. `Opponent match win %`
	- The average percentage of match wins this player's opponents have got.
	- This is rating the player based on how good their opponents have been.
2. `Your game win %`
	- The player's win rate
3. `Opponent's game win %`
	- The average percentage of game wins this player's opponents have got.
	- This is very similar to `Opponent match win %` but taking into account the individual games within each match.

# Round count
The number of rounds in a Swiss Tourney is equal to $\log_2(roundCount)$

