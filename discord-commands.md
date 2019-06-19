---
layout: info
Title: Discord Commands
type: 'discord_commands'
---

# Discord commands

This page provides an easy reference for all of the available SlugBot commands for Discord.

## `!setchannel`

```
!setchannel <channel to set> [reset]
```

Set channels for SlugBot to use. `!setchannel` with no arguments will show information on which channels have been set. __This command requires moderator permissions.__

Parameter `<channel to set>` allows the following values:
- `default` for the main channel
- `leaderboard` for the channel with the Leaderboard
- `streams` for the channel for live notifications about streams
- `memberevents` for the cannel for active Member Events
- `log` for logging


Examples:
* `!setchannel default` This will set the current channel to be used as the default channel by slugbot. This will produce the following message:
![dummy-screenshot](images/dummy.png)

* `!setchannel default reset` This will unset the default channel, disabling any slugbot functionality that uses the default channel.
![dummy-screenshot](images/dummy2.png)

---

## `!setrole`

```
!setrole <role to set> <reset | role name>
```

Set roles for SlugBot to use. `!setrole` with no arguments will show information on which roles have been set.

The `mute` role will be created and set automatically on the first use of a mute command if a role was not already set beforehand. __This command requires moderator permissions.__

Examples:
* `!setrole totalTopRank Top Sleg` This will set totalTopRank to use a server role called 'Top Sleg'.

* `!setrole weeklyTopRank reset` This will unset the weeklyTopRank role, disabling any slugbot functionality that uses the weeklyTopRank role.
![dummy-screenshot](images/dummy.png)

---

## `!setwelcomemessage`

```
!setwelcomemessage <welcome message>
```

Use this command to customise the welcome message sent when a new member joins the server. __This command requires moderator permissions.__

Example: 
* `!setwelcomemessage welcome ${member} to the server!` - `${member}` will be replaced with the new member's display name.


---

## `!streamer`

```
!streamer <add | remove | list> <streamer_name>
```

Use this command to add a streamer to the streams notification list or remove a streamer from the list. A notification message will be sent to the '#streams' channel (if set) when a streamer in the list goes live on twitch.tv. The notification gets deleted when the streamer goes offline again.

Examples:
* `!streamer add Florador` This will add twitch streamer 'Florador' to the notification list.
* `!streamer remove Florador` This will remove twitch streamer 'Florador' from the notification list.
* `!streamer list` This will list all streamers currently set to display when they go live.

---

## `!mute`

```
!mute <member> [duration] [reason]
```


This command is used to mute members. Giving a `duration` and `reason` are optional. Not giving a duration will mute the user until they are manually unmuted. The member can be specified by ping, user ID or name. __This command requires moderator permissions.__

Example: 
* `!mute 2340287340287 10 For reasons and stuff.` This will mute the member with ID `2340287340287` for 10 minutes and DM them the reason 'For reasons and stuff'.
![dummy-screenshot](images/dummy.png)

---

## `!unmute`

```
!unmute <member>
```

Use this command to unmute a muted member. __This command requires moderator permissions.__

Example: 
* `!unmute Alex_` This will unmute member 'Alex_' if they are muted.