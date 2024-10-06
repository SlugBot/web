Create a PvP leaderboard using SlugBot - Allowing members to challenge others and declare the outcome, with point rewards and ranking handled automatically. The leaderboard system can support any 2 team game where players/teams can play distinct matches against each other - e.g. Chess or R6 Siege. It can also support asymmetrical team sizes, ranking by individual player or teams as a whole.

![[pvplb lb demo.png]]

## Creating a Leaderboard
Use [[ladder#/ladder create leaderboard|/ladder create leaderboard]] to create a new PvP leaderboard. This form of leaderboard allows members to freely create and accept challenges. Specify a title and a channel to use for the leaderboard and challenge messages. This channel should be read-only for members but they should have permission to chat in threads.
## Creating a Swiss Tournament
Use [[ladder#/ladder create swiss|/ladder create swiss]] to create a new Swiss Tournament leaderboard. This form of leaderboard automatically handles the pairing and scoring of a [[Swiss Tournament Structure|Swiss Tournament]]. A participant role must be provided; Any member with this role will be considered a participant in the Swiss Tournament.

Before each round, a thread is created for Leaderboard Admins to view the up-coming pairings, and if a [[String Settings#FeaturedMatchString|FeaturedMatchString]] has been set, the ability to select matches to have the players notified with the [[String Settings#FeaturedMatchString|FeaturedMatchString]].
## Settings
Leaderboards are fully customisable, allowing Leaderboard Admins to modify how matches behave and how points are awarded to players. Use [[ladder#/ladder lb_settings|/ladder lb_settings]] to modify [[Leaderboard Settings|leaderboard parameters]], and [[ladder#/ladder point_settings|/ladder point_settings]] to modify [[Point Settings|point parameters]] that control the points rewards. [[String Settings|Certain strings]] can also be customised with [[ladder#/ladder string_settings|/ladder string_settings]].
### Pick-Ban
The leaderboard supports a [[Pick-Ban system]], allowing both parties in a challenge to run through the pick-ban process before playing out the match. use [[ladder#/ladder pick_options set_phases|/ladder pick_options]] to setup the pick-ban phases and add pick options to the list.
## Player Input
### Creating a Challenge
Members can freely put out challenges on leaderboards they have access to. [[challenge#/challenge someone|/challenge someone]] to challenge a specific player, or [[challenge#/challenge anyone|/challenge anyone]] to put out a challenge that anyone who meets the requirements can accept. 

![[pvplb open challenge demo.png]]

#### Region Limit
The challenger can set a region limit, only allowing members with one of the specified region roles to accept. Note: Region roles are automatically detected by SlugBot. 
#### Rank Range
The challenger can set a rank range. This is an integer specifying the maximum difference in leaderboard rank between the challenger and the prospective opponent. e.g. a rank range of `10` would only allow opponents of rank less than 10 ranks above or below.
#### Automatch
By default, a challenger's challenge will be auto-matched with an existing challenge if they both meet the same criteria. The challenger can optionally disable auto-matching if they would like to create a new challenge of their own.
### Accepting Challenges
Members can click the `Accept Challenge` button under valid challenges to accept them. Note: members will need permissions to use [[challenge]] to be able to accept challenges as well as create them.
### Declaring results
After players have completed their match, they must both declare the results using [[iwon]] or [[ilost]]. Only when both players declare matching results will the challenge be completed. 

![[pvplb challenge demo.png]]
### Viewing Match History
players can use [[elo]] to view their points, Elo, and match history.
### Betting
Members can bet on challenges using their Slugs from the [[Economy|SlugBot Economy]]. The pot is distributed among the winners proportionally to how much they bet - The more you bet, the larger portion of the pot you receive.
## Admin Control
### Player Override
Any member with permissions to use the [[ladder]] command have the ability to abort or override active challenges. Only Leaderboard Admins should be given these permissions.
### Cancelling a Match
To abort an existing match, a Leaderboard Admin can simply delete the challenge message, or press the red `Cancel` button. 
### Overriding a Player
It may be necessary for a Leaderboard Admin to input the results for a player. Use [[ladder#/ladder player_override iwon|/ladder player_override iwon]] or [[ladder#/ladder player_override ilost|/ladder player_override ilost]] to declare results of any player in an active challenge.

It is also possible to remove a player from a match using [[ladder#/ladder player_override cancel|/ladder player_override cancel]]. In a Team vs Team match, this will remove a specific player without aborting the match, freeing up a slot.
### Forcing a Match
A Leaderboard Admin can create matches between any member using [[ladder#/ladder player_override force|/ladder player_override force]]. This can be useful for creating manually handled tourneys. Optionally an outcome can be provided to instantly create and resolve a match.
### Undoing a Match
It may be necessary to undo a completed match and revert the players back to the state they were in before the match. use [[ladder#/ladder undo|/ladder undo]] and provide the message ID of the challenge to do so. This will delete the match, and undo any Elo and point changes caused by the match. 

# Commands
- [[challenge|/challenge]]
- [[elo|/elo]]
- [[ilost|/ilost]]
- [[iwon|/iwon]]
- [[ladder|/ladder]]
- [[team|/team]]
- [[tourney|/tourney]]