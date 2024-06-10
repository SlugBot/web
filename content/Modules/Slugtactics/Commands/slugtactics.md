# slugtactics
*Module: [[Slugtactics]]*
create, start, join, play, or view a SlugTactics game
## `/slugtactics create`
Start a new SlugTactics game
#### buy_in
Set buy-in amount
- Type: `INTEGER`
- Required: `true`
#### grid_size
Set grid dimensions
- Type: `INTEGER`
- Required: `false`
#### max_players
Set max player count
- Type: `INTEGER`
- Required: `false`
#### turn_timeout
Amount of time players get to submit a turn (in minutes)
- Type: `INTEGER`
- Required: `false`
## `/slugtactics start`
Start a SlugTactics game you have created
#### game_id
Game ID of game you created
- Type: `Autocomplete Selection`
- Required: `true`
## `/slugtactics join`
Pick a SlugTactics game to join

## `/slugtactics play`
Make your move in a current game
#### game_id
Game ID of game to play
- Type: `Autocomplete Selection`
- Required: `true`
## `/slugtactics view`
View an on-going or past game
#### game_id
Game ID of game to view
- Type: `Autocomplete Selection`
- Required: `true`