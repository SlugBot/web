# `/streamer`
*Module: [[Streams]]*<br>
Manage the server's twitch stream notification list
## `/streamer add <streamer>`
Add a streamer to the streamer list
#### streamer
Twitch username of streamer to add
- Type: `STRING`
- Required: `TRUE`
## `/streamer remove <streamer>`
Remove a streamer from the streamer list
#### streamer
Twitch username of streamer to remove
- Type: `AUTOCMPLETE SELECTION`
- Required: `TRUE`
## `/streamer list`
List all streamers currently in the streamer list
