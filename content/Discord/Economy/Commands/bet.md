# `/bet`
*Module: [[Economy]]*<br>
Create a bet
## `/bet create`
Create a new bet

## `/bet close <bet>`
Close a bet and stop members placing bets
#### bet
Bet identifier
- Type: `AUTOCMPLETE SELECTION`
- Required: `TRUE`
## `/bet open <bet>`
Reopen a closed bet and allow members to bet again
#### bet
Bet identifier
- Type: `AUTOCMPLETE SELECTION`
- Required: `TRUE`
## `/bet resolve <bet> <outcome>`
Declare the outcome of a bet
#### bet
Bet identifier
- Type: `AUTOCMPLETE SELECTION`
- Required: `TRUE`
#### outcome
Final outcome of the bet
- Type: `AUTOCMPLETE SELECTION`
- Required: `TRUE`