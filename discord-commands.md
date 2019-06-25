---
layout: info
Title: Discord Commands
type: 'discord_commands'
---

# Discord commands

This page provides an easy reference for all of the available SlugBot commands for Discord.

---

## `!addbuild`
```
!addbuild [build name] [soul level] [upgrade level] <link>
```

Used to add a build to your build list. Stating `soul level`, `upgrade level` and `build planner link` are optional but recommended. If a soulsplanner link is suplied, any missing data will be taken from the build directly - often, all thats needed.

Requirements to use command:
- none

Examples:
* `!addbuild Vilhelm's Squire SL60 +7 https://soulsplanner.com/darksouls3/1381` This will add a build by the name of 'Vilhelm's Squire' to the build list. If a build by the same name already exists in the list, its information will be updated with the new information stated.

* `!addbuild https://soulsplanner.com/darksouls3/1139` This will take the name, soul level, and upgrade level directly from the build linked.

---

## `!removebuild`
```
!removebuild <build name | build number>
```

Used to remove a build from a streamer's build list.

Parameter `<build name | build number>` allows the following values:
- Name of existing build (case insensitive)
- Number of existing build (can be found using the `!build` command)

Requirements to use command:
- none

Examples: 
* `!removebuild Vilhelm's Squire` This will remove the build 'Vilhelm's Squire' from the build list. Build name is case insensitive.

---

## `!build`
```
!build [member]
```

Used to view your own build list or the build list of another member.
*`!builds` can also be used.*

optional parameter `[member]` allows the following values:
- Discord username of member
- Discord ID of member
- member mention

Requirements to use command:
- none

Examples:
* `!build @Tikaro` This will show Tikaro's build list.

---

## `!addcommand`
```
!addcommand <command> <response>
```

Used to add/edit a custom command that will respond with a specified string. alternatively regex can be used in place of a command to make SlugBot send a response message whenever the regex matches a members message.

The response can contain certain flags that will be replaced when sent by slugbot.

Parameter `<command>` allows the following values:
- New command string
- Existing command string. Will overwrite its response
- Regex keyword, indicated by a string starting and ending with `/`

Parameter `<response>` allows the following values:
- Response string containing flag `${count}`. Flag will be replaced with the number of times the command has been used
- Response string containing flag `${name}`. Flag will be replaced with the displayname of the member who used the command
- Response string containing flag `${id}`. Flag will be replaced with the discord ID of the member who used the command
- Response string containing flag `${value}`. Flag will be replaced with a number value that can be modified by moderators

Requirements to use command:
- `botAdmin` role
- `ADMINISTRATOR` discord permission
- server owner

Examples:
* `!addcommand ping pong ${value}` This will create a custom command `!ping` that will respond with `pong 0` initially. Moderators can modify the value by appending `++`, `--`, or a Number to the end of the command when used.
* `!ping ++` The will increment the command's value by 1.
* `!addcommand /don't\s@\sme/ <@${id}>` This will create a regex keyword match that will respond with a discord mention whenever a message contains the string `don't @ me`.

---

## `!removecommand`
```
!removecommand <command>
```

Used to remove an existing custom command.

Parameter `<command>` allows the following values:
- Existing command to remove
- Existing regex keyword to remove

Requirements to use command:
- `botAdmin` role
- `ADMINISTRATOR` discord permission
- server owner

Example:
`!removecommand ping` This will remove the custom command `!ping`.

---

## `!commands`
```
!commands
```

Used to get a list of all custom commands in the server DMed to you.

Requirements to use command:
- none

Requirements to get regex keywords included in list:
- `botAdmin` role
- `ADMINISTRATOR` discord permission
- server owner

---

## `!constraint`
```
!constraint <command> <whitelist|blacklist|remove|list> <channel|role|member>
```


---

## `!setchannel`
```
!setchannel [<channel to set> [reset]]
```

Set channels for SlugBot to use. `!setchannel` with no arguments will show information on which channels have been set.

Parameter `<channel to set>` allows the following values:
- `default`, main channel
- `leaderboard`, channel with the Leaderboard
- `streams`, channel for live notifications about streams
- `memberevents`, channel for active Member Events
- `log`, discord logging
- `slugboard`, channel used for slugboard messages 
- `micmuted`, channel for mic-muted VC communication

Optional parameter `[reset]` allows the following value:
- `reset` to unset the stated channel

Requirements to use command:
- `botAdmin` role
- `ADMINISTRATOR` discord permission
- server owner

Examples:
* `!setchannel default` This will set the current channel to be used as the default channel by slugbot. This will produce the following message:
![dummy-screenshot](images/dummy.png)

* `!setchannel default reset` This will unset the default channel, disabling any slugbot functionality that uses the default channel.
![dummy-screenshot](images/dummy2.png)

---

## `!setrole`
```
!setrole [<role to set> <reset | role name>]
```

Set roles for SlugBot to use. `!setrole` with no arguments will show information on which roles have been set.

The `mute` role will be created and set automatically on the first use of a mute command if a role was not already set beforehand.

Parameter `<role to set>` allows the following values:
-	`mute`, mute role (auto-generated)
- `botAdmin`, bot admin role
- `global`, role assigned to all members
- `weeklytoprank`, role given to weekly top ranking member
- `totaltoprank`, role given to top ranking member
- `streamer`, role that adds members to the streamer list
- `pc`, PC platform role
- `ps4`, PS4 platform role
- `xbox`, XBox platform role

Parameter `reset` allows the following value:
- `reset` to unset the stated role

Parameter `role name` allows the following value:
- The name of an existing role in the server

Requirements to use command:
- `botAdmin` role
- `ADMINISTRATOR` discord permission
- Server owner

Examples:
* `!setrole totalTopRank Top Sleg` This will set totalTopRank to use a server role called 'Top Sleg'.

* `!setrole weeklyTopRank reset` This will unset the weeklyTopRank role, disabling any slugbot functionality that uses the weeklyTopRank role.
![dummy-screenshot](images/dummy.png)

---

## `!setwelcomemessage`
```
!setwelcomemessage <welcome message>
```

Use this command to customise the welcome message sent when a new member joins the server.

Parameter `welcome message` allows the following value:
- String welcome message

Requirements to use command:
- `botAdmin` role
- `ADMINISTRATOR` discord permission
- Server owner

Example: 
* `!setwelcomemessage welcome ${member} to the server!` - `${member}` will be replaced with the new member's display name.

---

## `!streamer`
```
!streamer <add | remove | list> <streamer name>
```

Use this command to add a streamer to the streams notification list or remove a streamer from the list. A notification message will be sent to the '#streams' channel (if set) when a streamer in the list goes live on twitch.tv. The notification gets deleted when the streamer goes offline again.

Parameter `<add | remove | list>` allows the following values:
- `add`, to add streamer to streamer list
- `remove`, to remove streamer from streamer list
- `list`, to list all streamers in streamer list

Parameter `<streamer name>` allows the following value:
- twitch username of streamer

Requirements to use command:
- `botAdmin` role
- `ADMINISTRATOR` discord permission
- Server owner

Examples:
* `!streamer add Florador` This will add twitch streamer 'Florador' to the notification list.
* `!streamer remove Florador` This will remove twitch streamer 'Florador' from the notification list.
* `!streamer list` This will list all streamers currently set to display when they go live.

---

## `!mute`
```
!mute <member> [duration] [reason]
```

This command is used to mute members. Giving a `duration` and `reason` are optional. Not giving a duration will mute the user until they are manually unmuted. The member can be specified by ping, user ID or name.

Parameter `<member>` allows the following value:
- discord username/ID/mention of member to mute

Optional parameter `[duration]` allows the following value:
- Number value for mute duration in minutes

Optional parameter `[reason]` allows the following value:
- String reason for why the member was muted. Will be DMed to the member

Requirements to use command:
- `botAdmin` role
- `ADMINISTRATOR` discord permission
- Server owner

Example: 
* `!mute 2340287340287 10 For reasons and stuff.` This will mute the member with ID `2340287340287` for 10 minutes and DM them the reason 'For reasons and stuff'.
![dummy-screenshot](images/dummy.png)

---

## `!unmute`
```
!unmute <member>
```

Use this command to unmute a muted member.

Parameter `<member>` allows the following value:
- discord username/ID/mention of member to unmute

Requirements to use command:
- `botAdmin` role
- `ADMINISTRATOR` discord permission
- Server owner

Example: 
* `!unmute Alex_` This will unmute member 'Alex_' if they are muted.
