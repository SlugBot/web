---
layout: info
title: Patch Notes
---

# PATCH NOTES

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

