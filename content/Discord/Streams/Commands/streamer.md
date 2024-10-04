# `/streamer`
*Module: [[Streams]]*<br>
Manage the server's twitch stream notification list
## /streamer add
`/streamer add <streamer>`<br>
Add a streamer to the streamer list
#### streamer
Twitch username of streamer to add
- Type: `STRING`
- Required: `TRUE`
## /streamer remove
`/streamer remove <streamer>`<br>
Remove a streamer from the streamer list
#### streamer
Twitch username of streamer to remove
- Type: `AUTOCOMPLETE SELECTION`
- Required: `TRUE`
## /streamer list
`/streamer list`<br>
List all streamers currently in the streamer list

## /streamer set_role
`/streamer set_role <role>`<br>
Members with this role will be shown in the streams channel when they go live
#### role
Members with this role will be shown in the streams channel when they go live
- Type: `ROLE`
- Required: `TRUE`
## /streamer set_channel
`/streamer set_channel <channel>`<br>
Stream notifications will be sent to this channel
#### channel
Stream notifications will be sent to this channel.
- Type: `CHANNEL`
- Required: `TRUE`