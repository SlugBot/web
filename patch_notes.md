---
### layout: info
### title: Patch Notes
---
# PATCH NOTES

### 8th September 2020
### Updates
  - SlugBot_AI now attempts to plant processes in channels the target has access to.
  - Adjusted initial injection success chance to be more affected by injector stat.
  - !log now allows for process IDs to be specified to show logs pertaining to only those processes.

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

