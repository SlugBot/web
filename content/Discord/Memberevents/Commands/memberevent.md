# `/memberevent`
*Module: [[Memberevents]]*<br>
Create an event notification for others to participate in.
## /memberevent start
`/memberevent start <game> <platform> [location] [event_type] [character] [level] [upgrade_level] [password] [instructions] [cross_server]`<br>
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
- Type: `AUTOCOMPLETE SELECTION`
- Required: `TRUE`
#### location
Where the event will take place.
- Type: `AUTOCOMPLETE SELECTION`
- Required: `FALSE`
#### event_type
Type of event to host.
- Type: `AUTOCOMPLETE SELECTION`
- Required: `FALSE`
#### character
The name of build you will be using.
- Type: `AUTOCOMPLETE SELECTION`
- Required: `FALSE`
#### level
The soul level (or equivalent) of your character.
- Type: `INTEGER`
- Required: `FALSE`
#### upgrade_level
The weapon upgrade level of your character.
- Type: `AUTOCOMPLETE SELECTION`
- Required: `FALSE`
#### password
Password for multiplayer.
- Type: `STRING`
- Required: `FALSE`
#### instructions
Extra information to display in the Member Event notification.
- Type: `STRING`
- Required: `FALSE`
#### cross_server
Should the event be displayed in all servers you share with SlugBot?
- Type: `BOOLEAN`
- Required: `FALSE`
## /memberevent update
`/memberevent update [game] [platform] [location] [event_type] [character] [level] [upgrade_level] [password] [instructions] [cross_server]`<br>
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
- Type: `AUTOCOMPLETE SELECTION`
- Required: `FALSE`
#### location
Where the event will take place.
- Type: `AUTOCOMPLETE SELECTION`
- Required: `FALSE`
#### event_type
Type of event to host.
- Type: `AUTOCOMPLETE SELECTION`
- Required: `FALSE`
#### character
The name of build you will be using.
- Type: `AUTOCOMPLETE SELECTION`
- Required: `FALSE`
#### level
The soul level (or equivalent) of your character.
- Type: `INTEGER`
- Required: `FALSE`
#### upgrade_level
The weapon upgrade level of your character.
- Type: `AUTOCOMPLETE SELECTION`
- Required: `FALSE`
#### password
Password for multiplayer.
- Type: `STRING`
- Required: `FALSE`
#### instructions
Extra information to display in the Member Event notification.
- Type: `STRING`
- Required: `FALSE`
#### cross_server
Should the event be displayed in all servers you share with SlugBot?
- Type: `BOOLEAN`
- Required: `FALSE`
## /memberevent end
`/memberevent end`<br>
End your member event.

## /memberevent setup
`/memberevent setup [channel] [content_message]`<br>
Configure server Member Event module. (Admins only)
#### channel
Set channel to be used for Member Event notifications
- Type: `CHANNEL`
- Required: `FALSE`
#### content_message
Set message to be sent with Member Event notifications
- Type: `STRING`
- Required: `FALSE`