# `/casinovault`
*Module: [[Economy]]*<br>
Deposit or withdraw from your casino vaults.
## /casinovault deposit
`/casinovault deposit <target_casino> <amount>`<br>
Add SC to one of your casino vaults.
#### target_casino
Target CASINO_BIN identifier
- Type: `AUTOCOMPLETE SELECTION`
- Required: `TRUE`
#### amount
Amount of SC to deposit.
- Type: `INTEGER`
- Required: `TRUE`
## /casinovault withdraw
`/casinovault withdraw <target_casino> <amount>`<br>
Withdraw SC from one of your casino vaults.
#### target_casino
Target CASINO_BIN identifier
- Type: `AUTOCOMPLETE SELECTION`
- Required: `TRUE`
#### amount
Amount of SC to withdraw.
- Type: `INTEGER`
- Required: `TRUE`