---
layout: info
Title: SlugBot Docs
type: 'docs'
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

---

# Twitch commands

This pages provides a succulet reference for everything SlugBot can do in Twitch chat.

## `!activate`

```
!activate <module>
```

Used to activate twitch.tv SlugBot modules.

Example: `!activate builds`
This will activate the builds module. 

Multiple modules can be activated at once by listing them after the command.

Example: `!activate builds follows igot` This will activate the builds, follows, and igot modules.

All modules can be activated using !activate slugbot.

- __This command requires moderator permissions.__

---

## `!deactivate`

```
!deactivate <module>
```

Used to deactivate twitch.tv SlugBot modules.

Example: `!deactivate builds` This will deactivate the builds module.

Multiple modules can be deactivated at once by listing them after the command.

Example: `!deactivate builds follows igot`
This will deactivate the builds, follows, and igot modules.

All modules can be deactivated using !deactivate slugbot.

- __This command requires moderator permissions.__

---

## `!addbuild`

```
!addbuild <build name> [soul level] [upgrade level] [link]
```

Used to add a build to a streamer's build list. Stating soul level, upgrade level and build planner link are optional but recommended.

Example: `!addbuild Vilhelm's Squire SL60 +7 https://soulsplanner.com/darksouls3/1381`
This will add a build by the name of 'Vilhelm's Squire' to the build list. If a build by the same name already exists in the list, its information will be updated with the new information stated.

- This command is part of the twitch.tv builds module.
- __This command requires moderator permissions.__

---

## `!removebuild`

```
!removebuild <build name>
```

Used to remove a build from a streamer's build list.

Example: `!removebuild Vilhelm's Squire`
This will remove the build 'Vilhelm's Squire' from the build list. Build name is case insensitive.

- This command is part of the twitch.tv builds module.
- __This command requires moderator permissions.__

---

## `!setbuild`

```
!setbuild <build name | build number>
```

Used to set the currently used build.

Example: `!setbuild Wilty`
This will set the current build to Wilty if there is a build by the name of Wilty in the streamer's build list. The build name is case insensitive.

Alternatively, a build number can be used to set the current build.

Example: `!setbuild 2`
This will set the current build to the second build in the list. To view build names and corresponding build numbers, use the command `!build list`.

- This command is part of the twitch.tv builds module.
- __This command requires moderator permissions.__

---

## `!build`

```
!build
```

Use this command to view information on a streamer's current build. A build must be in the streamer's build list and set as their current build using `!addbuild` and `!setbuild` for this command to work.

`!build list` can also be used to get a list of all builds and their build number DMed to the to you.

- This command is part of the twitch.tv builds module.

---

## `!sl`

```
!sl
```

Use this command to get the name, soul level, and upgrade level of streamer's current build. A build must be in the streamer's build list and set as their current build using `!addbuild` and `!setbuild` for this command to work.

- This command is part of the twitch.tv builds module.

---

## `!addcommand`

```
!addcommand <command> <response>
```

Used to add/edit a custom command that will respond with a specified string.

Example: `!addcommand ping pong`
This will add command '!ping' with response 'pong'.

Using `!addcommand` with an existing command will overwrite it with the new response.

- This command is part of the twitch.tv customCommands module.
- __This command requires moderator permissions.__

---

## `!removecommand`

```
!removecommand <command>
```

Use this command to remove a custom command

Example: `!removecommand ping`
This will remove command '!ping'.

- This command is part of the twitch.tv customCommands module.
- __This command requires moderator permissions.__