# `/bet`
*Module: [[Economy]]*<br>
Create a bet
## `/bet create`
Create a new bet

## `/bet close`
Close a bet and stop members placing bets
#### bet
Bet identifier
- Type: `Autocomplete Selection`
- Required: `true`
## `/bet open`
Reopen a closed bet and allow members to bet again
#### bet
Bet identifier
- Type: `Autocomplete Selection`
- Required: `true`
## `/bet resolve`
Declare the outcome of a bet
#### bet
Bet identifier
- Type: `Autocomplete Selection`
- Required: `true`
#### outcome
Final outcome of the bet
- Type: `Autocomplete Selection`
- Required: `true`