# `/slugcasino`
*Module: [[Economy]]*<br>
Gamble your Slugs at the Slug Casino
## /slugcasino blackjack
`/slugcasino blackjack <bet> [opponent]`<br>
Play Blackjack against SlugBot or another member
#### bet
Amount to bet
- Type: `INTEGER`
- Required: `TRUE`
#### opponent
Optionally play against another user
- Type: `USER`
- Required: `FALSE`
## /slugcasino higherlower
`/slugcasino higherlower <bet>`<br>
Player HigherLower
#### bet
Amount to bet
- Type: `INTEGER`
- Required: `TRUE`
## /slugcasino knuckleslug
`/slugcasino knuckleslug <bet> [opponent]`<br>
Play Knuckleslug against SlugBot or other members
#### bet
Amount to bet
- Type: `INTEGER`
- Required: `TRUE`
#### opponent
Optionally play against another user
- Type: `USER`
- Required: `FALSE`
## /slugcasino roll
`/slugcasino roll <bet> [opponent] [all_or_nothing]`<br>
Roll dice against SlugBot or other members
#### bet
Amount to bet
- Type: `INTEGER`
- Required: `TRUE`
#### opponent
Member or list of members to challenge (@member) (@everyone for an open challenge!)
- Type: `STRING`
- Required: `FALSE`
#### all_or_nothing
If TRUE, the winner will take everything and the loser(s) will get nothing.
- Type: `BOOLEAN`
- Required: `FALSE`
## /slugcasino slots
`/slugcasino slots <bet>`<br>
Play Slots
#### bet
Amount to bet
- Type: `INTEGER`
- Required: `TRUE`