---
layout: info
Title: SlugBot in Twitch
---

# Setting Up SmugSlugBot for Twitch.tv for the First Time
First you will need SlugBot to join your twitch chat; This can be done by pinging `@Narcolept`, I guess? SlugBot will lurk in your twitch chat until activated.
​
​
## Activating Modules
SlugBot's twitch.tv modules can be activated independently; This allows you to prevent conflicts with other bots you may have in your chat.

To activate a module, enter the command `!activate <module>` in your twitch chat. There are 8 modules: `uptime`, `build`, `igot`, `roll`, `customCommands`, `slugballs`, `so` and `follows`. They can be activated/deactivated one at a time or multiple can be activated/deactivated by listing the modules as follows: `!activate uptime build`. This will activate both `uptime` and `build`.

Alternatively, you can activate/deactivate all modules using the command `!activate slugbot` or `!deactivate slugbot`.
​
​
## Modules Overview
### `uptime`
Activating this module allows viewers to use the `!uptime` command (More info in #twitch-commnands).

### `build`
Activating this module lets the streamer/mods add builds to the streamer's build list (`!addbuild <build name> [soul level] [upgrade level] [build planner link]`), remove builds from the streamer's build list (`!removebuild <build name>`). Also allows viewers to use `!build` and `!sl` commands (More info in #twitch-commnands).

### `igot`
Activating this module allows viewers to use the !igot `<souls received>` command (More info in #twitch-commnands).

### `roll`
Activating this module allows viewers to use the `!roll <dice count>D<dice type>` command (More info in #twitch-commnands).

### `customCommands`
Activating this module allows the streamer/mods to add/remove custom commands using `!addcommand <command> <response>` and `!removecommand <command>` respectively (More info in #twitch-commnands).

### `slugballs`
Activating this module allows viewers to use the `!slugballs <question>` command (More info in #twitch-commnands).

### `so`
Activating this module allows the streamer/mods to use the `!so <streamer>` command to shout out another streamer (More info in #twitch-commnands).

### `follows`
Activating this module sets slugbot to send a message in chat announcing new follows.