---
layout: info
title: Patch Notes
---

# PATCH NOTES

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

