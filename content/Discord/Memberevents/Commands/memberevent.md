# `/memberevent`
*Module: [[Memberevents]]*<br>
Create an event notification for others to participate in.
## `/memberevent start <game> <platform> [location] [event_type] [character] [level] [upgrade_level] [password]`
Start a new member event.
#### game
The game the event will take place on.
- Type: `SELECTION`
  - `Dark Souls 1`
  - `Dark Souls 2`
  - `Dark Souls 3`
  - `Bloodborne`
  - `Elden Ring`
- Required: `TRUE`
#### platform
The platform the event will be on.
- Type: `AUTOCMPLETE SELECTION`
- Required: `TRUE`
#### location
Where the event will take place.
- Type: `AUTOCMPLETE SELECTION`
- Required: `FALSE`
#### event_type
Type of event to host.
- Type: `AUTOCMPLETE SELECTION`
- Required: `FALSE`
#### character
The name of build you will be using.
- Type: `AUTOCMPLETE SELECTION`
- Required: `FALSE`
#### level
The soul level (or equivalent) of your character.
- Type: `INTEGER`
- Required: `FALSE`
#### upgrade_level
The weapon upgrade level of your character.
- Type: `AUTOCMPLETE SELECTION`
- Required: `FALSE`
#### password
Password for multiplayer.
- Type: `STRING`
- Required: `FALSE`
## `/memberevent update [game] [platform] [location] [event_type] [character] [level] [upgrade_level] [password] [cross_server]`
Update your member event.
#### game
The game the event will take place on.
- Type: `SELECTION`
  - `Dark Souls 1`
  - `Dark Souls 2`
  - `Dark Souls 3`
  - `Bloodborne`
  - `Elden Ring`
- Required: `FALSE`
#### platform
The platform the event will be on.
- Type: `AUTOCMPLETE SELECTION`
- Required: `FALSE`
#### location
Where the event will take place.
- Type: `AUTOCMPLETE SELECTION`
- Required: `FALSE`
#### event_type
Type of event to host.
- Type: `AUTOCMPLETE SELECTION`
- Required: `FALSE`
#### character
The name of build you will be using.
- Type: `AUTOCMPLETE SELECTION`
- Required: `FALSE`
#### level
The soul level (or equivalent) of your character.
- Type: `INTEGER`
- Required: `FALSE`
#### upgrade_level
The weapon upgrade level of your character.
- Type: `AUTOCMPLETE SELECTION`
- Required: `FALSE`
#### password
Password for multiplayer.
- Type: `STRING`
- Required: `FALSE`
#### cross_server
Should the event be displayed in all servers you share with slugbot?
- Type: `BOOLEAN`
- Required: `FALSE`
## `/memberevent end`
End your member event.
