# `/bet`
*Module: [[Economy]]*<br>
Create a bet
## /bet create
`/bet create`<br>
Create a new bet

## /bet close
`/bet close <bet>`<br>
Close a bet and stop members placing bets
#### bet
Bet identifier
- Type: `AUTOCOMPLETE SELECTION`
- Required: `TRUE`
## /bet open
`/bet open <bet>`<br>
Reopen a closed bet and allow members to bet again
#### bet
Bet identifier
- Type: `AUTOCOMPLETE SELECTION`
- Required: `TRUE`
## /bet resolve
`/bet resolve <bet> <outcome>`<br>
Declare the outcome of a bet
#### bet
Bet identifier
- Type: `AUTOCOMPLETE SELECTION`
- Required: `TRUE`
#### outcome
Final outcome of the bet
- Type: `AUTOCOMPLETE SELECTION`
- Required: `TRUE`