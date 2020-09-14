layout: info
Title: SlugBot Economy Guide
type: 'guide'
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
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel eros eleifend, lobortis velit accumsan, scelerisque risus. Nam vel placerat metus. Vivamus scelerisque accumsan tincidunt. Nunc semper lectus non est placerat mattis. Proin eget rutrum felis.

## Firewall
Firewall is the first line of defense when it comes to protecting your account. In most cases, the Firewall must be BYPASSed before any process can be planted on an account.

## Bypasser
To bypass an accounts Firewall, a BYPASS process must be completed. The time it takes to bypass a Firewall is dependant on the attacker's Bypasser level vs the target's Firewall level.

## Encryption
Encryption keeps your Current balance secure. For a process to take SC directly out of your account, your encryption will have to be cracked first.

## Cracker
Cracking encryption takes time. The duration is governed by the attacker's Cracker level vs the target's Encryption level.

## Scanner
Scanning the network for other user's processes is a major part of keeping your account secure and successfully attacking another user's account. Your Scanner level governs your scan durations along with various other detection based actions.

## Interceptor
Your Interceptor level governs the duration and efficacy of processes that pertain to intercepting transactions between accounts. A higher Interceptor level will, for example, make SKIMMERs plant faster and increase the number of SKIMMERs you can plant.

## Wire
Any activity that involves transfering SC between accounts is governed by the Wire stat.

## Injector
Processes can be modified at runtime via injecting - the chance of successive injections without failure is governed by the Injector level.


# Processes and Malware
One of the best ways to make SC is to steal, either directly or through the effects of malware processes. First you'll want to **BYPASS** your target's **FIREWALL** using the <span class="command-link" data-command="bypass"/> command. This will begin the **BYPASS** process which will take a certain amount of time determined by your BYPASSER level and their FIREWALL level.
<div class="note">
Most processes take time - be that BYPASSing, SCANning for processes, or planting processes of your own on someones account. The time a process takes is usually determined by your offensive stat and your target's defensive stat. Use the `!plant` command with no arguments to view a list of possible processes you can plant and their corresponding offensive stat and defensive stat.
</div>
Once you've **BYPASS**ed a user's **FIREWALL** you'll have access to their account. Use `!slugs <target>` command to open their account menu and view their info. You won't be able to take anything from their bank balance just yet - Their SC reserves are still protected by their bank **ENCRYPTION** which will need to be **CRACK**ed - a time consuming process (`!crack <target>`), but access to their account now lets you plant various processes on them using the <span class="command-link" data-command="plant"/> command.

## SKIMMER
```!plant skimmer <target> <fraction to skim>```
This process, once planted on a user, will skim a fraction of all income the user receives and transfers the skimmed SC to the planter instead. As the process isn't directly taking SC from an account, but instead intercepting a transaction, **CRACK**ing their encryption is not needed.
* Offensive Stat: **INTERCEPTOR**
* Defensive Stat: **SCANNER**

## LEECH
```!plant leech <target> <amount/hour>```
This malware will siphon an amount of SC out of a users current account and transfer it to the planter every hour. Requires that the user's **ENCRYPTION** has been **CRACK**ed.
* Offensive Stat: **WIRE**
* Defensive Stat: **ENCRYPTION**

## BYPASS_VIRUS
```!plant bypass_virus <target>```
When a user with this process planted on them **BYPASS**es another, the planter of this process will also gain access to that account - essentially cloning their **BYPASS** process.
* Offensive Stat: **BYPASSER**
* Defensive Stat: **SCANNER**

## HIJACKER
```!plant hijacker <target user> <potency>```
A planted HIJACKER will attempt to hijack processes planted by the infected user. The potency of the HIJACKER process determines the success chance of the hijack attempts as well as the likelihood of its detection by a scan.
* Offensive Stat: **INJECTOR**
* Defensive Stat: **SCANNER**

## HONEYPOT
A honeypot, when planted on a user, bypass attackers attempting to bypass the user, or crack attackers attempting to crack the user. It's best to plant these on high value targets so you can gain access to the attacker's accounts.
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

*More coming soon...*

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

# Stats
Stats determine how long it takes for processes to complete, how effective processes are, or how secure your account is. For example, a higher **FIREWALL** stat will mean it will take longer for others to **BYPASS** it and access your account. You can level up using the command <span class="command-link" data-command="levelup"/> but it will cost SC. Every stat leveled increases your POWER Lvl. Every fifth POWER Lvl increases your vault capacity. every tenth POWER Lvl increases the number of investments you can make.