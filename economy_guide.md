---
layout: info
Title: SlugBot User Guide
type: 'economy_guide'
---
# SlugBot Economy Guide
Like some other bots, SlugBot has an Economy module, letting users earn and trade currency in the form of SlugCoin. However, SlugBot's economy allows users to 'hack' other members, steal from them or plant malware on their accounts. The aim of the game is to earn as much SlugCoin as you can while also protecting your account from other members.

# Your Account
Your account holds all of your Slug Economy data, including your bank balance, stats, info on your processes and marks, along with info detected processes planted by others. Use the <span class="command-link" data-command="slugs"/> command to view your account menu. All accounts are protected by a **FIREWALL** that will prevent any tampering with your account. but that can be **BYPASS**ed given enough time.

## Your Balance
Your SlugCoin balance is stored in two ways; **Current** and **Vault**. **Current** has infinite capacity but is more vulnerable to malware and theft. The **ENCRYPTION** stat dictates how safe your **Current** balance is. Your **Vault** is much more secure but has limited capacity determined by your **POWER Lvl**. Use the <span class="command-link" data-command="vault"/> command to transfer SC from your current to your vault.

## Getting Started
The easiest way to start earning is through Daily SlugCoin collection and passive SlugCoin earning. 
Once per day, you can use the <span class="command-link" data-command="daily"/> command to earn between 5000sc and 10,000sc.
You will also earn a small amount every few minutes while you are active in the server.

If you are feeling generous, you can give SC to others using the <span class="command-link" data-command="giveslugs"/> command.


# Stats
Your account's strengths and weaknesses are all dependant on your stats and where you specialise. Use the <span class="command-link" data-command="levelup"/> command to increase your stats at the cost of time and SC. Every level-up increases your POWER Lvl by 1. You can reallocate your stats once a week using the <span class="command-link" data-command="respecc"/> command.
Stat level also governs how many slots you have to install processes.

## Firewall
Firewall is the first line of defense when it comes to protecting your account. In most cases, the Firewall must be BYPASSed before any process can be planted on an account.

## Bypasser
To bypass an accounts Firewall, a BYPASS process must be completed. The time it takes to bypass a Firewall is dependant on the attacker's Bypasser level vs the target's Firewall level.

## Encryption
Encryption keeps your Current balance secure. For a process to take SC directly out of your account, your encryption will have to be cracked first. A higher Encryption stat will also increase the duration you can put your account in <span class="command-link" data-command="lockdown"/> for - protecting you from <span class="command-link" data-command="steal"/> attempts.

## Cracker
Cracking encryption takes time. The duration is governed by the attacker's Cracker level vs the target's Encryption level.

## Scanner
Scanning the network for other user's processes is a major part of keeping your account secure and successfully attacking another user's account. Your Scanner level governs your scan durations along with various other detection based actions.

## Interceptor
Your Interceptor level governs the duration and efficacy of processes that pertain to intercepting transactions between accounts. A higher Interceptor level will, for example, make SKIMMERs plant faster.

## Wire
Any activity that involves transfering SC between accounts is governed by the Wire stat.

## Injector
Processes can be modified at runtime via injecting - the chance of successive injections without failure is governed by the Injector level.


# Processes and Malware
One of the best ways to make SC is to steal, either directly or through the effects of malware processes. First you'll want to **BYPASS** your target's **FIREWALL** using the <span class="command-link" data-command="bypass"/> command. This will begin the **BYPASS** process which will take a certain amount of time determined by your BYPASSER level and their FIREWALL level.

Once you've **BYPASS**ed a user's **FIREWALL** you'll have access to their account. Use `!slugs <target>` command to open their account menu and view their info. You won't be able to take anything from their bank balance just yet - Their SC reserves are still protected by their **ENCRYPTION** which will need to be **CRACK**ed - a time consuming process (<span class="command-link" data-command="crack"/>), but access to their account now lets you plant various processes on them using the <span class="command-link" data-command="plant"/> command.

## SKIMMER
```!plant skimmer <target>```
This process, once planted on a user, will skim a fraction of all income the user receives and transfers the skimmed SC to the planter instead. As the process isn't directly taking SC from an account, but instead intercepting a transaction, **CRACK**ing their encryption is not needed.
* Offensive Stat: **INTERCEPTOR**
* Defensive Stat: **SCANNER**

## LEECH
```!plant leech <target>```
This malware will siphon an amount of SC out of a users current account and transfer it to the planter every hour. Requires that the user's **ENCRYPTION** has been **CRACK**ed.
* Offensive Stat: **WIRE**
* Defensive Stat: **ENCRYPTION**

## CLONER
```!plant CLONER <target>```
When planted on a target, any **BYPASS**es planted by the target will be cloned - giving the **CLONER** owner a copy. A CLONER will expire after a number of activations. Upgrading this process will increase the number of uses before expiring. Only one **CLONER** process will trigger if multiple are planted on the same target.
* Offensive Stat: **BYPASSER**
* Defensive Stat: **SCANNER**

## HIJACK
```!hijack <process ID>```
Hijacking is the act of manually stealing another user's processes. The original owner of the process must be **BYPASS**ed before you can attempt to **HIJACK**. The success chance is based on how many properties of the process you have identified.

## HIJACKER
```!plant hijacker <target user>```
A planted **HIJACKER** will attempt to automatically hijack processes planted by the infected user. The initial chance of hijacking can be increased by upgrading. The chance of hijacking decays with each successful hijack.
* Offensive Stat: **INJECTOR**
* Defensive Stat: **SCANNER**

## HONEYPOT
```!plant honeypot <target user>```
A honeypot, when planted on a user, bypass attackers attempting to bypass the user. It's best to plant these on high value targets so you can gain access to the attacker's accounts. Upgrading this process will allow it to trigger on cracks as well as bypasses.
* Offensive Stat: **INJECTOR**
* Defensive Stat: **SCANNER**

## REDIRECT
```!plant redirect <target user> to <redirect target user>```
A redirect process will redirect a planted process on a user to the redirect target user before deleting itself. The redirected process will have its target user spoofed so its owner will assume the process has not been redirected.
* Offensive Stat: **INJECTOR**
* Defensive Stat: **SCANNER**

## TRACKER
```!plant tracker <target user>```
A tracker process allows the owner to view the account activity logs of the target user as well as having a chance to automatically scan the target user's processes as they plant them. The more trackers you plant on a user, the better they will function.
* Offensive Stat: **SCANNER**
* Defensive Stat: **ENCRYPTION**

## CORRUPTOR
```!plant corruptor <target user>```
CORRUPTORs, when planted on a user, will corrupt their log viewer - making it difficult to read to completely impossible, depending on how many CORRUPTORs are planted. CORRUPTORs also reduce the chance of TRACKERs scanning initated processes. **CORRUPTOR processes do NOT require the target to be BYPASSed before they can be planted.**
* Offensive Stat: **INJECTOR**
* Defensive Stat: **SCANNER**

## COMP
```!comp <target user> <stat>```
Compromising a target's stats will temporarily lower their effectiveness. Compromising a target requires a correct password to be guessed - failing to do so may result in the attacker getting compromised.
* Offensive Stat: **BYPASSER**
* Defensive Stat: **ENCRYPTION**

## ROOTKIT
```!plant rootkit <target user>```
A ROOTKIT, when planted on a user, will allow you to run processes remotely from that user. Use the command `!rootkit <rootkit ID>` followed by the command you'd like to execute *as the rootkit'ed user*.
* Offensive Stat: **CRACKER**
* Defensive Stat: **ENCRYPTION**

*More coming soon...*

# Installing and Upgrading
You have control over what processes and how many of each process you want to be able to use by installing and uninstalling processes. Most processes can also be upgraded at the cost of SC and increased slot size. Your account has limited process slots (which can be increased by leveling up the governing stat) so managing your process configuration will require careful consideration.

Use the <span class="command-link" data-command="install"/> command to install a specific process type - allowing you to plant more of that process. It costs SC to install processes so think carefully before adjusting your configuration.

Use the <span class="command-link" data-command="uninstall"/> command to uninstall a process type. A process can not be uninstalled if the resulting installed process count would not be able to support your planted processes. You will be partially refunded the install cost when uninstalling.

Use the <span class="command-link" data-command="upgrade"/> command to upgrade a process type. A description of what the upgrade does will be shown before you confirm the upgrade. Upgrading a process will increase its slot size by 1. The <span class="command-link" data-command="downgrade"/> command allows you to revert a process back to a lower upgrade level - reducing its slot size and partially refunding you the upgrade cost. 

# Scanning
You are going to want to make sure your account is malware free - but malware processes aren't always easy to detect. Use the <span class="command-link" data-command="scan"/> command to start a **SCAN** process. Scanning allows you to identify ANY process that exists - not just ones planted on you - so you'll want to specify a target to scan. To scan yourself state your username after the command. You can also state specific process types and/or attackers; As you can only scan at most a number of processes equal to your SCANNER lvl, narrowing your search will increase the chance of scanning the process you want.

Once you've **SCAN**ned, any detected processes will be displayed in your IDENTIFIED PROCESSES menu tab. You may see that some details of the process are still unidentified. Most processes require a few **SCAN**s to fully identify.

You can also identify malware by accessing the attacker's account and viewing their OUTBOUND PROCESSES. You can only uncover the owner of the process, but its a good way of finding that a process exists.

You are not limited to only scanning processes planted on yourself; You can also scan for processes planted on other people. This can be useful for finding good marks, defending other members, removing defenses or hijacking profitable processes.

# Cleaning and Hijacking
Once you've identified a process, you may want to remove it or hijack it. Use the <span class="command-link" data-command="clean"/> or <span class="command-link" data-command="hijack"/> commands respectively to begin process. The more properties of the process you've identified, the more likely it will be successfully removed. **A bypass on the process' owner is required to hijack a process.**

# Investing
Another method of making SC is to invest in text channels in discord servers. Channel investments let you invest SC in a channel to get return payments for messages sent in that channel for 7 days. The return rates are calculated from the last 7 days activity - meaning that if a channel is more active in the following 7 days, you will see bigger returns. Use the <span class="command-link" data-command="invest"/> command to see the expected return rate on the channel and how much you're expected to make by the end of the investment period. You can confirm or cancel the investment before SC is taken so feel free to use the command to view various channel's return rates.

To terminate an investment early, use the command `!invest terminate <channel>`. You will NOT be reimbursed any SC.

