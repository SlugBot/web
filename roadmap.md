---
### layout: info
### title: Roadmap
---
# ROADMAP
### Misc Features:
  - [ ] Make !giveme use stringSim for role name
  - [ ] Users can set a birth date and slugbot will announce their birthday
  - [ ] meme generator
    - [ ] give image link, top text, bottom text
  - [ ] Make botadmin exempt from role order warning
  - [ ] Make !builds lists over 20 builds into multi-page menus
  - [ ] Add build description field
  - [ ] !poll command allowing mods to start a poll in chat
    - [ ] Use progress bars to display votes
  - [ ] Togglable option to auto delete spam

### Member Events:
  - [ ] Add locations (with screenshots) for playable areas without bonfires

### Activity Data:
  - [ ] make graph png and send

### music:
  - [ ] music queue
  - [ ] play, pause, skip, volume

### DS3 Tools:
  - [ ] collect all DS3 weapon data and add to DB
    - [ ] Weapon art motionValues
    - [ ] frame data

### custom commands:
  custom commands for discord server and twitch channels
  - [ ] Add cooldown to discord customcommands and keyword matches

### weapon:
  - [ ] Show spellbuff for catalysts instead of R1 damage
  - [ ] Show shield stability
  - [ ] Synonym lookup

### Slug Hack Game:
  - [ ] rebalance max process count per stat Lvl
  - [ ] min stat requirements for some processes (?)
  - [ ] Process Trading
    - [ ] trade system for trading processes and SC
      - [ ] something to stop alt account abuse
      - [ ] SlugBot randomly generated processes weighted to target high rollers
    - [ ] Private process shop
      - [ ] only viewable in DMs. gives a tailored list of processes determined by user's total worth and level. (encourage user's to punch up a little)
      - [ ] refreshes daily
  - [ ] ROOTKIT process that allows users to take some control of a bypassed account and plant processes as them
  - [ ] JAMMER process that can be planted directly on to other processes to suspend them for a finite duration
    - [ ] Duration and success chance governed by percentage of properties identified and Injector Lvl
    - [ ] JAMMER process, when planted on a user instead, will obfuscate their logs until removed
  - [ ] rework SCANs
    - [ ] Make SCANs free
    - [ ] SCAN duration can be specified
    - [ ] Making them faster reduces scan success chance
    - [ ] Increasing scanner level reduces base duration and increases min success chance
    - [ ] Display more than 6 processes in SCAN complete message if needed
  - [ ] !stealslugs command to take a lump sum from a member's current
    - [ ] BYPASS and CRACK required
    - [ ] Amount stolen capped by vault cap or 30% of target's current (smallest taken)
    - [ ] All users locked out from stealing from target's current for a duration based on how much was stolen
    - [ ] chance of failure resulting in consequences (removed processes on target, uncovered processes on target, stat vulnerabilities) 
  - [ ] SlugBot AI
    - [ ] Increase SlugBot income

### Auth:
  - [ ] Automatically refresh Twitch token
  - [ ] Separate token and auth refs
 
### WEB:
  - [ ] look into hugo https://gohugo.io/
  - [ ] look into netlify https://www.netlify.com/