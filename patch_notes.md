---
layout: info
title: Patch Notes
---
# PATCH NOTES

## 14th September 2020
### Updates
  - Reformatted the website and added more to the Economy Guide.
  - Added !hilo as a command synonym for !higherlower.

### New Additions
  - Added more filigree profile mod variations to shop pool.

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

