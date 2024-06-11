# `/memberevent`
Create an event notification for others to participate in.
*Module: [[Memberevents]]*
## `/memberevent start`
Start a new member event.
#### game
The game the event will take place on.
- Type: `STRING`
- Required: `true`
#### platform
The platform the event will be on.
- Type: `Autocomplete Selection`
- Required: `true`
#### location
Where the event will take place.
- Type: `Autocomplete Selection`
- Required: `false`
#### event_type
Type of event to host.
- Type: `Autocomplete Selection`
- Required: `false`
#### character
The name of build you will be using.
- Type: `Autocomplete Selection`
- Required: `false`
#### level
The soul level (or equivalent) of your character.
- Type: `INTEGER`
- Required: `false`
#### upgrade_level
The weapon upgrade level of your character.
- Type: `Autocomplete Selection`
- Required: `false`
#### password
Password for multiplayer.
- Type: `STRING`
- Required: `false`
## `/memberevent update`
Update your member event.
#### game
The game the event will take place on.
- Type: `STRING`
- Required: `false`
#### platform
The platform the event will be on.
- Type: `Autocomplete Selection`
- Required: `false`
#### location
Where the event will take place.
- Type: `Autocomplete Selection`
- Required: `false`
#### event_type
Type of event to host.
- Type: `Autocomplete Selection`
- Required: `false`
#### character
The name of build you will be using.
- Type: `Autocomplete Selection`
- Required: `false`
#### level
The soul level (or equivalent) of your character.
- Type: `INTEGER`
- Required: `false`
#### upgrade_level
The weapon upgrade level of your character.
- Type: `Autocomplete Selection`
- Required: `false`
#### password
Password for multiplayer.
- Type: `STRING`
- Required: `false`
#### cross_server
Should the event be displayed in all servers you share with slugbot?
- Type: `BOOLEAN`
- Required: `false`
## `/memberevent end`
End your member event.
