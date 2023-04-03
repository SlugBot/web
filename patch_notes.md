---
layout: info
title: Patch Notes
---

# PATCH NOTES

## 31st March
### New Additions
  - New PROFILE_MOD border_celtic_0 added.
  - New PROFILE_MOD border_plasmodia added.
  - Added LATCH process type.

### Updates  
  - Added FORGET PROC button to scanned processes tab.
  - Added tax to levelup cost.
  - Leaderboard roleAtRank command moved to `/ladder roleatrank`.
  - Leaderboard roleAtRanks will now not be removed if the member qualifies for the role on at least one leaderboard.
  - Updated `${MATCH}` flag to allow an index argument.

### Bug Fixes
  - Fixed Pick/Ban embed failing to send if the icon emotes couldn't be fetched.

*****************************

## 12th March
### New Additions
  - Added Pick/Ban options for leaderboard matches

### Updates
  - Improved Economy process initiation messages
  - Improved Tourney role handling.

### Bug Fixes
  - Fixed `/deletemessages` command failing when attempting to delete messages older than 14 days.

*****************************

## 4th March
### Updates
  - Updated `/lockdown` to slash command.
  - Updated `/activate` to slash command.
  - Updated `/suspend` to slash command.
  - Updated `/giveslugs` to slash command.
  - Updated economy process injection log display.
  - Allowed `/elo` command to view team matches of a given member.
  - Updated PvP Leaderboards to display 50 ranks
  - Added demo response to `/command add`.
  - Added invite used to join log in `/warn list`.

### Bug Fixes
  - Hopefully improved economy processes failing sometimes.
  - Improved UI when using a scan through a rootkit.
  - Fixed `/challenge team` command showing default teams.
  - Fixed last match played time being incorrectly saved.
  - Fixed matches not terminating when all members have left.
  - Fixed `/suspend` failing in DMs.
  - Fixed long command responses causing `/command add` to not send a confirmation.
  - Fixed custom command value and count updates not being saved correctly.
  - Fixed tourney reserve invites not being initiated.

*****************************

## 20th February 2023
### Updates
  - Refactored the flag replacer parser.
  - Made `/command add` a modal with text fields for input.
  - Added ladder player `/iwon` override with `/ladder player_override iwon`.
  - Added ladder player `/ilost` override with `/ladder player_override ilost`.
  - Added ladder player `/challenge cancel` override with `/ladder player_override cancel`.

### New Additions
  - Added `${call: }` flag replacer.
  - Added `${setvalue: }` flag replacer.

### Bug Fixes
  - Fixed filter trigger mute chance sometimes not displaying in the log message.

*****************************

## 12th February 2023
### Updates
  - Added ability for members to create tourneys to be validated by admins.
  - Added tourney description and banner customisation modal.

### Bug Fixes
  - Fixed leaderboard challenges automatching with existing challenges that do not meet region limit parameters.
  - Fixed `/tourney abort` not working.
  - Fixed direct challenges becoming open challenges when the recipient cancels.

*****************************

## 8th January 2023
### Updates
  - `/vc private` now whitelists all current members of the VC at time of use.

### Bug Fixes
  - Fixed several instances of `/vc` commands failing.
  - Fixed `/ladder reset` not resetting point decay.
  - Fixed `/ladder reset` not setting to starting point value.
  - Fixed `/elo` not displaying reset times.
  - Fixed `/bet` autocomplete field not functioning.

*****************************

## 12th December 2022
### Updates
  - Updated Elden Ring weapon data for 1.08 changes.
  - Updated `/allocatestatser` and `/weaponer` to view paired attacks.
  - Updated counter hit and Spear Talisman counter hits to 1.08 values.

### Bug Fixes
  - Fixed incorrect motion values for Rusted Anchor.

*****************************

## 4th December 2022
### Updates
  - Updated `/shop` to slash command.
  - Added `bid` button to shop.
  - Updated `/elo` to allow team match history viewing.
  - Updated `/challenge team` to allow specific team challenges.

### Bug Fixes
  - Fixed `/mute` failing when member leaves during command being run.
  - Fixed various typos in command descriptions.

*****************************

## 22nd November 2022
### New Additions
  - Added `/say` command allowing admins to send and edit messages via SlugBot. Useful for server rule messages that can be edited by any admin.

### Updates
  - Added `give_role` parameter to `/ticketer update` allowing a role to be given on ticket create.
  - Updated `/stocks list` display to show total profit.
  - Updated `/stocks sell` display to cap sell amount to the quantity of owned shares.

### Bug fixes
  - Fixed `/say` message edit when original message was longer than 100 characters. 
  - Fixed `/challenge` command listing leaderboards the user does not have access to.

*****************************

## 18th November 2022
### Updates
  - Welcome message, `init`, and `global` roles will now not apply until member has passed Rules Screening.
  - Added select menu to `/stocks list`.
  - Various other `/stocks` UI improvements. 

### Bug Fixes
  - Fixed unmute command autocomplete.
  - Fixed Stocks sell order bug.
  - Fixed Stocks profit display.
  - Fixed Investment terminate UI bug.
  - Fixed Standard to Somber weapon upgrade level conversion.
  - Fixed Elo and starting points not instatiating correctly for some members.
  - Fixed custom command use count updating on restricted responses.
  - Fixed `/tourney status` display bug caused by host leaving server.
  - Prevented race condition issue when multiple players accept a leaderboard challenge at the same time.

*****************************

## 26th October 2022
### Updates
  - Added `content_message` option to ticketers allowing a custom message to be sent along with the submitted ticket embed.
  - Reworked `/stocks`. 
  - Added ability to create stop and limit orders.

*****************************

## 18th October 2022
### New Additions
  - Added `/bet` command to start bets.

### Updates
  - Added team functionality to PvP leaderboards.

*****************************

## 31st August 2022
### New Additions
  - Added Elden Ring item descriptions to `!item`

### Updates
  - Added SlugBot AI opponent to `/knuckleslug`
  - Added the ability to put out an open challenge in `/knuckleslug`.
  - Added item descriptions and weapon icons to `/weaponer` and `/allocatestatser`.

### Bug Fixes
  - Fixed bug causing `/ticketer update send_to_channel` to fail.

*****************************

## 3rd August 2022
### New Additions
  - Added `/knuckleslug` minigame to economy module.
  
### Updates
  - Updated `/roleatlevel` to slash command.
  - Updated `/setexp` to slash command (was `!setscore`).
  - Updated `/setlevel` to slash command.
  - Added roles-at-levels for weekly activity levels.
  - Added `automatch` ladder setting param.

### Bug Fixes
  - Fixed bug that would cause process scans to terminate prematurely.
  - Fixed bug causing `/roleatlevel` command to fail.
  - Fixed bug where `/roleatlevel` could not be used with level_add of 0.

*****************************

## 19th July 2022
### Updates
  - Added ability to automatically set participant and reserve roles for tourney invites.
  - Refactored `/leaderboard` to allow for modular leaderboards.

### Bug Fixes
  - Fixed `!perms score` not working (it is now `!perms exp`).

*****************************

## 30th June 2022
### Updates
  - Added HIJACK button to `/slugs` menu when selecting valid processes.

### Bug Fixes
  - Fixed interaction failed error when using `/clean` with invalid params.

*****************************

## 23rd June 2022
### Updates
  - Added `${IF: {\<boolean_expression>} option 1 | option 2}` flag replacer.

### Bug Fixes
  - Fixed interaction timeout for several slash commands. 

*****************************

## 29th May 2022
### New Additions
  - Added `/tourney` command to automatically handle tournament invites selecting from leaderboards.

### Updates
  - `/warn` and `/mute` now store a message link to easily get back to when the action was performed.
  - Added `logging` perms to control which events in channels and by members get logged.

### Bug Fixes
  - Fixed bug with custom VCs not being cleaned up if host left the server.

*****************************

## 3rd May 2022
### Updates
  - Added Claw Talisman toggle to `/weaponer` command.
  - Improved word filter matching.
  - Added autocomplete to `/filter remove <word>` `<word>` argument.
  - Improved `/ban` and `/mute` target matching.

### Bug Fixes
  - Fixed counter hit display for `/weaponer` command.
  - Fixed point transfer from twitch FCs when syncing Twitch and Discord accounts.
  - Fixed bug where `/rolereact` `<rolereact_id>` failed to display autocomplete options.
  - Fixed bug where rolereacts failed to update in some cases.
  - Fixed bug where mic-muted channel perms were incorrectly set when going from one custom VC to another.
  - Fixed display error in challenge messages.

*****************************

## 20th April 2022
### Updates
  - Updated motion values for ER weapon commands.
  - Updated guard values for ER weapon commands.
  - Updated scaling values for ER weapon commands.

### Bug Fixes
  - Fixed bug with rolereacts allowing two options to give the same role.
  - Fixed bug with Custom VC mic-muted channels not initialising with the correct permissions.
  - Fixed Greatsword weapon using incorrect motion values.
  - Fixed incorrect status MVs for crits.
  - Tentative fix for custom VC cleanup issues.

*****************************

## 10th April 2022
### Updates
  - Updated `/exclusivechar` to slash command.
  - Add automatic thread creation for leaderboard challenges.

### Bug Fixes
  - Fixed incorrect weapon being recognised by name in `/weaponer`.
  - Fixed Spear Talisman toggle not working.

*****************************

## 27th March 2022
### New Additions
  - Added `/allocatestatser` for stat allocation for Elden Ring weapons.
  - Added `/weaponer` for weapon data for Elden Ring weapons.

### Updates
  - Changed `/allocatestats` to `/allocatestatsds3` for DS3 stat allocation.
  - Changed `/weapon` to `/weaponds3` for DS3 weapon data.
  - Updated `/range` command to work with Elden Ring summon ranges.
  - Updated `/igot` command to work with Elden Ring level calculation.
  - Updated `/ladder` to slash command.

### Bug Fixes
  - Fixed Frost aux scaling with reinforce.
  - Fixed `/allocatestatser` ignoring fth scaling.
  - Fixed `/weaponer bestinclass` holy AR display.
  - Fixed `!igot` twitch command for ER.
  - Added failsafe to custom VC cleanup.

*****************************

## 24th February 2022
### Updates
  - Updated `/usernote` to slash command.

*****************************

## 14th February 2022
### Updates
  - Added 'dead leafing' to the slugboard. By default, reacting with a dead leaf will count as -1 leaf to the slugboard.

### Bug Fixes 
  - Fixed visual bug when setting a rank range limit on a challenge before being ranked.
  - Fixed visual bug when giving fractional rep

*****************************

## 8th February 2022
### Updates
  - Ported Twitch API wrapper to @twurple.
  - Improved responsiveness of `/streamer remove` `streamer` argument autocomplete. 
  - Added autocompete to `/command remove` `command` argument.
  - Added autocompete to `/slugs` `target` argument.
  - `/slugs` menu now refreshes data on tab change.

### Bug Fixes
  - Fixed `daily` when used through a ROOTKIT.
  - Fixed `crack` when used through a ROOTKIT.
  - Fixed UI error when cleaning own process with the REMOVE PROCESS button.
  - Fixed `!blackjack` bug when getting 21 with three or more cards.
  - Fixed bug where banned member could sometimes get unbanned.

*****************************

## 1st February 2022
### Bug Fixes
  - Fixed !userinfo not working with no arguments.
  - Fixed !blackjack incorrectly calling a draw on some instances of getting blackjack.

*****************************

## 25th January 2022
### Updates
  - Updated `/range` to slash command.
  - Updated `/levelup` to slash command.
  - Updated `/invest` to slash command.
  - Added autocomplete to `/invest terminate`.
  - Added `cross-server` setting for `/memberevent` allowing member events to be displayed in all servers the member shares with slugbot.

### Bug Fixes
  - Fixed rounding error with `/range` command.
  - Fixed member events failing to take level data.
  - Fixed member events failing to take set build data.
  - Fixed member events not timing out.
  - Fixed `/vc` commands not working for Custom VCs.

*****************************

## 10th January 2022
### Updates
  - Updated `/allocatestats` algorithm to be more accurate.
  - Updated `/guildinfo` to slash command.

### New Additions
  - Added temporary VC creation and customisation.

### Bug Fixes 
  - Fixed `Remove process` button not working.

*****************************

## 10th December 2021
### Updates
  - Reformatted weapon data in prep for Elden Ring.
  - Added infusion selection to `/weapon`.
  - Slightly improved speed of `/allocatestats`
  - Updated `/build` to slash command.
  - `/build` now includes `add`, `remove`, and `list` subcommands.

*****************************

## 30th November 2021
### Updates
  - Updated `/poise` to slash command.
  - Added weapon descriptions to `/weapon`.
  - Added autocomplete to `/weapon info` `weapon` argument.
  - Added autocomplete to `/plant` `target` argument.
  - Added autocomplete to `/crack` `target` argument.

*****************************

## 24th November 2021
### Updates
  - `!warnlog` removed. Functionality moved to `/warn list`
  - `/warn` now has a confirmation step before warning.
  - `/warn` now DMs the target user.
  - Various time displays updated.

  - Updated `/install` to slash command.
  - Updated `/uninstall` to slash command.
  - Updated `/upgrade` to slash command.
  - Updated `/downgrade` to slash command.

### Bug Fixes
  - Fixed `/daily` display.
  - Fixed `/crack` with rootkit
  - Fixed `/bypass` with rootkit
  - Fixed `/clean` with rootkit
  - Fixed missing `password` argument in `/memberevent`.
  - Fixed `level` and `upgrade` argments in `/memberevent`.
  - Fixed `/slugs` in DMs.

*****************************

## 15th November 2021
### Updates
  - Added `${DELETE}` flag replacer to delete the message that matched the trigger.

*****************************

## 6th November 2021
### Updates
  - Updated `/ban` to slash command.
  - Updated `/warn` to slash command.
  - Updated `/unmute` to slash command.
  - Added autocomplete to `/unmute` member param
  - Added autocomplete to `/challenge` leaderboard param
  - Added rank_range param to `/challenge` allowing users to limit the rank of the opponent to within a range.

### Bug Fixes
  - Fixed permissions overrides for command > module > global permissions.
  - Fixed dead streams notification failsafe

*****************************

## 8th October 2021
### Updates
  - Updated `/deletemessages` to slash command.
  - `/deletemessages` now takes `member` as an optional argument. Not supplying a member will delete the last X messages by any member.
  - Updated `/rank` to slash command.
  - Updated `/mute` to slash command.
  - Updated `/filter` to slash command.
  - Added failsafe for dead stream notifications.
  - Added failsafe for dead challenge notifications.

### Bug Fixes
  - Fixed linebreaks in ${rand: } replacer flag not behaving properly.

*****************************

## 28th September 2021
### Updates
  - `/weapon info` now displays counter hit damage where applicable.
  - Added Leo ring toggle for `/weapon info` where applicable.

*****************************

## 21st September 2021
### New Additions
  - Added `/persistentroles` command to manage persistent roles.
  
### Updates 
  - Added Weekly Top Sleg SC reward.

### Bug Fixes
  - Fixed bug where incorrect attacker was displayed for `onAccountAccessed` log.
  
*****************************

## 10th September 2021
### Updates
  - Added physical infusion only toggle to `/allocatestats`.
  - Updated Ladder challenge interface.
  - Updated investment graphs.

### New Additions
  - Auto fix broken embed links from copied video URLs on mobile.

*****************************

## 8th September 2021
### Updates
  - Improved time formatting in various locations.
  - Added point decay regeneration display in ladder messages.
  - Improved UI for ladder challenges.

*****************************

## 6th September 2021
### New Additions
  - `${MUTE: <duration>}` replacer flag added.

### Bug Fixes 
  - Fixed bug with twitch `${timeout: <duration>}` flag when duration was greater than 9 seconds.

*****************************

## 4th September 2021
### New Additions
  - New PROFILE_MOD border_glow_fire_outer added.
  - New PROFILE_MOD border_glow_lightning_outer added.

### Updates
  - Updated `/weapon` to slash command.
  - Increased contract reward for CORRUPTOR plants.

*****************************

## 31st August 2021
### Updates
  - Updated `/allcatestats` to slash command.
  - Improved `!rep` argument parsing.

### Bug Fixes
  - Fixed removing process from `!slugs` menu not resetting selection.

*****************************

## 29th August 2021
### Updates
  - Added sales tax.

### Bug Fixes
  - Various formatting errors with process displays.

*****************************

## 27th August 2021
### New Additions
  - New PROFILE_MOD border_dog added.
  - New PROFILE_MOD border_snake_light_0 added.
  - New PROFILE_MOD border_snake_light_1 added.
  - New PROFILE_MOD border_snake_light_2 added.
  - New PROFILE_MOD border_snake_dark_0 added.
  - New PROFILE_MOD border_snake_dark_1 added.
  - New PROFILE_MOD border_snake_dark_2 added.

### Updates
  - Added DISC company stocks to the stock market.
  - DISC stock trend is influenced by the general activity across all servers with slugbot.
  - Updated `/names` to slash command. 
  - Updated `/avatar` to slash command. 
  - Updated `/daily` to slash command.
  - Updated `/vault` to slash command. 

*****************************

## 25th August 2021
### New Additions
  - You can now buy and sell stocks in "companies".
  - New PROFILE_MOD border_dragon added.

*****************************

## 22nd August 2021
### Updates
  - Updated `/streamer` to slash command.
  - SKIMMERs now accurately display how much they skim.

### Bug Fixes
  - Fixed bug in economy tutorial stopping progression at stage 4.
  - Fixed bug with process descriptions being too long to embed in select menus.
  - Fixed bug when streamer in streamer notification list gets banned while live, making it impossible to remove them from the notification list.

*****************************

## 18th August 2021
### Updates
  - Updated `slugs`, `plant`, `bypass`, `crack`, and `clean` to /slash commands.
  - These commands will now also use the new discord buttons and select menus.
  - Button in `/slugs` menu to begin the CLEAN process directly.
  - Refactored process display to lay the groundwork for more useful data to be displayed on each process (graphing LEECH earnings over time, process logs, etc).
  - Increased profile slime duration to four weeks.
  - Updated member event participation buttons.

## Bug Fixes
  - Fixed initial Member Event display.

*****************************

## 11th August 2021
### Updates
  - Updated Discord.js to v13!
   
  - `!addcommand` and `!removecommand` have been removed and replaced with `/command add` and `/command remove` slash commands.
  - `!challange` has been updated and can now be used as a slash command. 
  - `!weapon` will now display multiple weapons simultaneously if multiple weapons are given, allowing for easy comparison.
  - Process messages now use buttons for injections instead of reactions.

### Bug Fixes
  - `!whowas` command now works again.

*****************************

## 1st August 2021
### Updates
  - Word filter algorithm made more efficient.

*****************************

## 25th July 2021
### New Additions
  - Added ExclusiveChar module.
  - A character or string can be specified as exclusive to specific members. The character/string will be removed from all but the specified member's display names and appended to the specified member's display names. 

### Bug Fixes
  - Fixed bug allowing you to respecc into stats that would not support your process configuration.

*****************************

## 22nd July 2021
### Updates
  - Viewing the marks of another user will now be obfuscated depending on what processes you have identified.
  - Respecc'ing now takes 24 hours to complete and can be cancelled any time by removing the RESPECC process.
  - Added error feedback when `!twitch` command can not send a DM to user.

### Bug Fixes
  - Removed ability to attempt to install invalid process types.

*****************************

## 20th July 2021
### Updates
  - Added admin page to `!userinfo` command. Invite info and moderator notes are now displayed there.

*****************************

## 16th July 2021
### New Additions
  - New PROFILE_MOD border_fracture added.
  - New PROFILE_MOD border_cat added.
  
### Updates
  - Improved memory usage when displaying PROFILE_MOD previews.
  - PROFILE_MOD previews and your own profile can now be viewed in DMs with slugbot.

*****************************

## 12th July 2021
### New Additions
  - `!comp <target> <stat>` command for the economy module, allowing users to temporarily compromise a target's stats.

### Bug Fixes
  - Fixed `!deletemessages` command not working on messages where the author had left the server.

*****************************

## 7th July 2021
### Bug Fixes
  - Processes hijacked or created via processes initiated through ROOTKITs should now properly inherit ROOTKIT ownership.

*****************************

## 30th June 2021
### Updates
  - Accepted ladder challenges can now be cancelled if both parties use `!challenge cancel`.
  - Region roles and rank of the challenger are now displayed in the challenge message.
  - Unmutes will now be logged in set #mod-log channels.

*****************************

## 17th June 2021
### Updates
  - Improved Discord <> Twitch account link process.
  
*****************************

## 13th June 2021
### Bug Fixes
  - Fixed raffle module.

*****************************

## 12th June 2021
### Updates
  - Added `!fightclub force <member1> <member2>` command to force a fight between two members in a fightclub.

*****************************

## 9th June 2021
### New Additions
  - Added ROOTKIT process. Allows remote control of another user.

### Updates
  - Improved ladder leaderboard display.

### Bug Fixes
  - Fixed bug where leveling a stat while planting a process would error the process.

*****************************

## 7th June 2021
### Updates
  - `!elo` now displays all past matches separated into pages.
  - `!elo` now displays when the ladder was reset.

*****************************

## 4th june 2021
### New Additions
  - Added `!roleAtLadderRank` command, allowing roles to be given and taken away automatically based on member's rank in PvP ladders. 
  - Added twitch fight club handling. Can sync with discord ladders.

### Updates
  - Added customisable point decay to ladder.

*****************************

## 25th May 2021
### Bug Fixes
  - Logging should now properly log invite used for new members.
  - Command use rate limit should now not trigger when an invalid command is used.
  
*****************************

## 21st May 2021
### Updates
  - `!daily` now gives an extra 1000sc per power level.

*****************************

## 13th May 2021
### New Additions
  - Added CONTRACT processes.
  - CONTRACTs will be generated once a day and put on the shop.

*****************************

## 11th May 2021
### Updates
  - 'Invite used' info will now be displayed in the 'MEMBER JOINED' log message if possible.

### Bug Fixes
  - Fixed 'Invite used' info not always displaying in `!userinfo` response when used by an admin and invite data was present.
  - Fixed padding error with avatars in profiles.

*****************************

## 26th April 2021
### Updates
  - HIJACKERs success chance now slightly decays with each successful hijack.
  - HIJACKs and HIJACKERs will now fail if the attacker already has a similar process to the one being hijacked.
  - Level up duration has been uncapped (was capped at 14 days).
  - Added settings customisation to PvP ladder using `!ladder <ladder name> <setting> <value>`.

### Bug Fixes
  - Fixed REDIRECT notifications not sending in certain circumstances.
  - Fixed `!so` on twitch erroring when no previous stream data is found.

*****************************

## 16th April 2021
### Updates
  - Added Slugboard leaderboard `!leaderboard slugboard`/
  - Added slugboard embed colour customisation `!slugboard color <hex color>`.

*****************************

## 13th April 2021
### Bug Fixes
  - Fixed occasional miscounts with slugboarded messages. 

*****************************

## 11th April 2021
### Updates
  - Investment saturation is now based on total amount invested instead of number of investments in a guild/channel. This means a small investment won't affect the return rate as much.
  - Reduced Install and upgrade taxes.
  - Improved SlugBot AI.

*****************************

## 5th April 2021
### Updates
  - Rolereacts can now be put on any message using `!rolereact create <msg ID>`

*****************************

## 27th Match 2021
### Bug Fixes
  - Fixed `!banme` not working in certain circumstances.

*****************************

## 18th March 2021
### New Additions
  - Added ability to slime other member's profiles with `!slime <member>`.
  - Added border_glow_shard_outer profile mod.

*****************************

## 5th March 2021
### Bug Fixes
  - Fixed bug causing `!whowas` command to fail.

*****************************

## 27th February 2021
### Bug Fixes
  - Fixed bug with certain failed respeccs not ending the action correctly. 

*****************************

## 20th February 2021
### Updates
  - Stat Rework
    - Added configuration tab in `!slugs` menu.
    - Processes can now be installed and uninstalled with `!install` and `!uninstall`.
    - Processes can now be upgraded and downgraded with `!upgrade` and `!downgrade`.
    - Stat levels now control available slots for processes to occupy.
    - Process plant duration formula updated to have diminishing returns.
  - Added `!lockdown` command to force a short account lockdown. duration governed by Encryption stat.
  - BYPASS_VIRUS renamed to CLONER
  - CLONER expires after a number of activations. Number increases with upgrade level.
  - Only one CLONER will trigger per target if multiple are planted on them.
  - LEECH now takes a small fraction of target's current balance every hour.
  - REDIRECT now increases redirected process duration if the plant time on the redirect target would be longer.
  - Upgrading VAULT process will increase vault capacity.
  - Various upgrade levels for processes. Use `!upgrade <process type>` to get a description of what each upgrade level does.
  - Deleting `!log` command message will now also delete the log menu.
  - Adding a ❌ reaction to the process message of a process you own will now remove the process.
  - Cleaning processes takes longer if the process is not planted on you.
  - Cleaning processes takes a shorter amount of time if you know it is planted on you.

### Bug Fixes
  - Fixed bug with Interceptor stat_boosts not working.

*****************************

## 15th February 2021
### Bug Fixes
  - Fixed improper parsing of flag replacers when name contained parentheses. 

*****************************

## 1st February 2021
### Updates
  - Added Bloodborne item descriptions to `!item` command.
  - Improved `!item` command search algorithm to better find matches in item descriptions.

### Bug Fixes
  - Fixed blackjack payout multiplier.

*****************************

## 29th January 2021
### New Additions
  - Added `!blackjack <bet>` command.
  - Added `!teambuilder [member, [member, [...]]] <team count>` command. Will try to evenly distribute members among the stated number of teams, or if no members were stated, will allow anyone to react and be put in a random team.

*****************************

## 25th January 2021
### Updates
  - !remindme now allows for decimal time values.

*****************************

## 9th January 2021
### Updates
  - Added ${math: \<expression\>} flag replacer.
  - Improved flag replacer nesting.

*****************************

## 5th January 2021
### Bug Fixes
  - fixed muted members not being muted again after leaving and rejoining.

## 29th December 2020
### Bug Fixes
  - Fixed SlugBot disconnecting from twitch then not properly re-authenticating and reconnecting.

*****************************

## 4th December 2020
### Bug Fixes
  - Fixed order of permission checks.

*****************************

## 29th November 2020
### Updates
  - RoleReacts can now have a set 'required' role. Only members with that role will be allowed to use the RoleReact. The required role will be displayed in the RoleReact.

### Bug Fixes
  - Improved dynamic caching to hopefully fix reaction events not emitting on bot restart.

*****************************

## 12th November 2020
### New Additions
  - Added `!setscore` and `!setlevel` commands for admins to set member's activity score and level values.

### Bug Fix
  - Fixed error causing `!invest` command to fail.

*****************************

## 11th November 2020
### Updates
  - A DM notification will now be sent to winning ladder betters.

### Bug Fixes
  - Fixed hijacked PROFILE_MODs not properly disabling the border for the original owner.
  - Fixed ability to have multiple STEALs running on one user.

*****************************

## 10th November 2020
### Updates
  - Updated command documentation page on website to include module names.

### Bug Fixes
  - Fixed Crow Quills weapon type in database.

*****************************

## 4th November 2020
### New Additions
  - Settable `init` role that will be given to new members **once**. Will not be reapplied if removed like the `global` role.

### Updates
  - Putting a process on sale will unveil the actual target if the target had been spoofed.
  - HIJACKERs now hijack transfers on process init.

### Bug Fixes
  - Can no longer suspend PvP roll transfers.
  - Servers should no longer get unverified after a bot restart.
  - Fixed open challenges ignoring ladder types.

*****************************

## 30th October 2020
### Updates
  - Ladder challenge bets now scale such that each bet is `+(5000sc + half existing bet)`. Allows for bigger bets without having to spam the react as much.
  - `!ladder remove <ladder name>` command added.
  - Injector effect on initial injection chance and injection chance reduction reduced.

### Bug Fixes
  - Fixed challenges in servers with multiple ladders defaulting to a ladder when the reaction menu timed out.

*****************************

## 26th October 2020
### Updates
  - Corruptors will now parially obfuscate HONEYPOT and REDIRECT notifications, obscuring the owner name and process type of the trapped process.
  - Ladder betting now increases the amount bet each time to make it easier to bet larger amounts. 

*****************************

## 25th October 2020
### New Additions
  - STAT_BOOST process. Grants temporary stat boosts on activation.

### Updates
  - `!daily` now has a chance to generate random stat boosts.
  - STEALs can no longer be suspended.

*****************************

## 24th October 2020
### Updates
  - `!giveslugs` will now cap amount at effective slug balance including running transfers.

### Bug Fixes
  - `!giveme` should work again now.
  - Fixed porting over role settings to new backend.

*****************************

## 22nd October 2020
### Bug Fixes
  - A tonne more bug fixes across the board.
  - Fixed !giveme not responding with confirmation.
  - Fixed !streamer command not working.

*****************************

## 21st October 2020
### Updates
  - Ladders can now be renamed with `!ladder <ladder name> rename <new name>`.

### Bug Fixes
  - An ungodly number of bugfixes due to the caching changes of the discord library. Pretty much every module needed to be updated.

***************************** 

## 17th October 2020
### Updates
  - Added `!roll anyone <bet>` functionality to !roll. Allows anyone to join the roll. After 5 minutes the roll commences.
  - Servers can now have multiple ladders at the same time.
    - Use `!ladder create <ladder title>` in the channel you wish to use as the leaderboard channel.
    - When challenging a member in a server with multiple ladders, the user can specify the ladder at the end of the command or use the reactions to select a ladder from a list.
    - `!elo` lets users view their stats and match history per ladder. 

### Bug Fixes
  - Added self-correcting to duplicate investments due to discord lag.

***************************** 

## 13th October 2020
### Bug Fixes
  - Fixed the reddit video embedding module.

***************************** 

## 4th October 2020
### Bug Fixes
  - Fixed markdown characters in usernames interfering with embed formatting.

*****************************

## 3rd October 2020
### Upates
  - Added border_dashitek_0 to shop pool.
  - Removed botAdmin permission overrides. Disabling a command/module will also disable it for admins/moderators.

### Bug Fixes
  - Fixed last TRANSFER/STEAL interval happening after completion.

*****************************

## 1st October 2020
### Updates
  - Allowed moderators to end any poll in their server by providing the poll message ID.

### Bug Fix
  - Fixed profile mods displaying in spoofed !slugs menu if viewer does not have the process identified.
  - Fixed twitch custom commands not working.

*****************************

## 30th September 2020
### Bug Fix
  - Fixed bug where removing a bypass would suspend processes in progress even if the process didn't require a bypass to plant.
  - Fixed LEECH processes not starting with the correct potency.

*****************************

## 26th September 2020
### Updates
  - Improved `!roll` input parsing.
  - Clamped gambling bets to effective balance after all outbound transfers.

### Bug Fix
  - Fixed [winner takes all] description not displaying.

*****************************

## 25th September 2020
### Updates
  - Added 'winner takes all' rolls. Add 'all in' to the end of the !roll command to change the payout mode to 'winner takes all'.

### Bug Fixes
  - Fixed pvp roll when one member has a negative balance.
  - Fixed some TRANSFER processes not removing themselves.
  - Fixed SlugBot trying to remove transfers to SlugBot.

*****************************

## 24th September 2020
### Updates
  - Refactored process intevals to allow for minimum durations of 10 seconds.
  - Added PvP `!roll`.
    - Mention one or more members to challenge them to a roll.
    - All members must accept before the roll proceeds.
    - Roll will cancel if member accepts but does not have the funds to match the bet.
    - Amount won/lost is proportional to how high you rolled.

### Bug Fixes
  - Fixed incorrect percentage being displayed in transfer logs
  - Hopefully tricked Discord into displaying graphs correctly.
  - Fixed bug with some scans not displaying their description properly.

*****************************

## 23rd September 2020
### Updates
  - Increased minimum detect chance for CRACK and BYPASS processes.

### Bug Fixes
  - Fixed SlugBot attempting to bypass when currently at bypass limit.

*****************************

## 22nd September 2020
### Updates
  - HIJACKER processes will now send a notification when a process is hijacked.

### Bug Fixes
  - Fixed hijackers failing to hijack any process.
  - Fixed scans incorrectly limiting scanned processes to specified filter.

*****************************

## 21st September 2020
### Updates
  - Lowered the frequency of STEAL transfers to once per minute.
  - Made TRANSFER messages update at least once every 2.5 minutes.
  - Added "Amount transferred" field to transfer messages.
  - Added some plant duration fuzzing.

*****************************

## 20th September 2020
### Updates
  - Decreased levelup durations to give people more levels to play with.
  - `!streamer list` can now be used by all members instead of just bot admins.

### Bug Fixes
  - Fixed bug with concealError not properly uncovering process properties.
  - Fixed bug where a start steal error was not correctly stopping the process initiation.

*****************************

## 19th September 2020
### New Additions
  - Added Phase glow profile mod to the shop pool.
  - Added CORRUPTOR process.
    - Can plant up to 3 CORRUPTORs per mark. Each CORRUPTOR increases how much the target's logs will be obfuscated.
    - Each CORRUPTOR reduces the chance of TRACKER scans.
    - CORRUPTORs do not require a bypass to plant.

### Updates
  - Added `!transfer` as `!giveslugs` synonym.
  - Made the last interval of STEAL and TRANSFER always transfer the last 1%.

### Bug Fixes
  - Renabling a suspended TRACKER will only show user logs back to when the tracker was enabled and not when the TRACKER was originally planted.

*****************************

## 17th September 2020
### Updates
  - Updated `!clean` and `!hijack` documentation.
  - Increased effectiveness of Injector stat with regards to initial injection success chance and injection success chance decay.
  - Increased REDIRECT plant duration.
  - Improved STEAL logs.
  - `!giveslugs` now transfers SC over time using a TRANSFER process.
    - Duration based on WIRE stat.
    - Injection success chance regenerates faster than normal processes.
    - TRANSFER processes can be hijacked. The hijacker becomes the recipient.
  - Reduced the severity of Balance Error consequences.
  - SlugBot will now periodically scan itself and clean processes off itself.
    - Processes owned by higher level players will be prioritised.
  - Command message when a `!steal` attempt fails gets deleted immediately.

### Bug Fixes
  - Fixed bug allowing suspended TRACKER processes to still function.
  - Minor bug fix with display of scan inject when process is already fully identified.

*****************************

## 16th September 2020
### Bug Fixes
  - Fixed bug allowing anyone to view any user's !slugs menu

*****************************

## 15th September 2020
### Updates
  - Redirects can now be planted using a BYPASS ID for both the target and the redirect target.
  - Reduced the severity of injection fail consequences.
    - Stat vulnerabilities are more likely.
    - process corrupt error is less likely.
    - Delay consequence delays less.
  - Capped !higherlower bet at max vault capacity. (I would have capped the other gambling games but people would have got mad.)

### Bug Fixes
  - Fixed minor display bug with obfuscated balance history graphs.

*****************************

## 14th September 2020
### Updates
  - Reformatted the website and added more to the Economy Guide.
  - Added !hilo as a command synonym for !higherlower.

### New Additions
  - Added more filigree profile mod variations to shop pool.
  - Added Smoke glow profile mod to the shop pool.

*****************************

## 13th September 2020
### Updates
  - Allowed users to specify a starting tab for `!slugs` menu by appending the tab emoji when using the command.
  - A bypass process ID can now be given with the `!slugs` command to view the target's account.
  - Using `!slugs` to view a mark's account no longer has to be done in a channel the mark can see. 
  - Made certain process-fail-to-start conditions auto-delete the error message.

### Bug Fixes
  - Sanitised usernames to alleviate possible bugs with markdown formatting. 

*****************************

## 11th September 2020
### Updates
  - Added optionally displaying new member's profiles with the welcome message.
  - Improved !roll to allow for multiple dice rolls.
  - Improved time parsing for all modules that use it.
  - Initial injection success chance will now stay the same for restarted processes.
  - Changed diminishing returns of scan duration based on scanner level.

### Bug Fixes
  - Fixed bug where removing a BYPASS on self would cause some planting processes to be suspended.

*****************************

## 9th September 2020
### New Additions
  - Poll module added. Users can now create polls that allow other users to vote on the specified options.
    - `!poll [description] 1: <option 1 description> 2: <option 2 description> [...]` command to start a poll.
    - `!poll end` command will end the user's most recent poll and display the final results.
    - `!poll end [poll msg ID]` command will attempt to terminate a poll with the given message ID.

### Updates
  - Improved suspended process duration handling.
    - The duration a process has been suspended will no longer affect fast track or delay durations.
    - UI elements displaying process duration will now be more accurate.
  - Reduced STEAL fast track amount.

*****************************

## 8th September 2020
### Updates
  - SlugBot_AI now attempts to plant processes in channels the target has access to.
  - Adjusted initial injection success chance to be more affected by injector stat.
  - !log now allows for process IDs to be specified to show logs pertaining to only those processes.

### Bug Fixes
  - Fixed error with the removing filter fail response.
  - Correctly sorted auction list buy time remaining on sale.

*****************************

## 7th September 2020
### Updates
  - Twitch tokens get automatically refreshed when they expire.
  - !Log now fetches a page at a time, saving memory and making the embed load faster. 
  - Suspended processes no longer count towards user's process limits when attempting to activate suspended processes.
  - Capped account lockdown duration to 7 days.

### Bug Fixes
  - Excluded duplicate process types when specifying scan parameters.
  - Fixed SlugBot_AI attempting to use itself as a redirect target.

*****************************

## 6th September 2020
### New Additions
  - !steal released
    - User's can start a STEAL process after bypassing and cracking a target.
    - STEAL will transfer a large amount rapidly.
    - Injection chance rapidly regenerates.
    - Target has a chance to detect the steal attempt depending on their scanner level.
    - Account lockdown for some duration after steal relative to how much was stolen.
    - A locked down account can not be stolen from until it expires

### Updates
  - Refactored how skimmers function to be more efficient.
  - Hijacked processes get automatically suspended if user is at their process caps.

### Bug Fixes
  - Fixed bug where !roll could sometimes display another user's roll result.
  - Fixed RegEx issue with !allocatestats

