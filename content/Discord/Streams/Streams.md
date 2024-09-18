SlugBot can send notifications when Twitch streamers go live. The notification will be deleted when the streamer goes offline.

## Setup Channel
First set a channel where you'd like the stream notifications to be sent using [[streamer#/streamer set_channel|/streamer set_channel]]. This channel should ideally only have `view_channel` permissions for members and should not be used for discussion.

## Setup Role
A streamer role can be set using [[streamer#/streamer set_role]]. This role, when given to a member, will automatically add their twitch account to the streamer list. **The member must have used the [[twitch|/twitch]] command to first link their Discord and Twitch accounts.** If they have not linked their accounts, SlugBot will be unable to find their Twitch account.

## Adding Streamers Manually
To add streamers to the server's streamer list, use [[streamer#/streamer add|/streamer add]], specifying the Twitch channel name. Any Twitch channel can be added to the streamer list - not just streamers in the server.

## Removing Streamers
Use [[streamer#/streamer remove|/streamer remove]] to remove a streamer from the list. Their streams will no longer be advertised in the streams channel when they go live.

# Commands
- [[streamer|/streamer]]