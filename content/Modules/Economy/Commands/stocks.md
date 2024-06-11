# `/stocks`
*Module: [[Economy]]*<br>
Buy or sell stocks
## `/stocks buy`
Buy stocks
#### stock
Stock to buy
- Type: `Autocomplete Selection`
- Required: `true`
#### amount
Amount of shares to buy
- Type: `NUMBER`
- Required: `true`
#### limit_order
Buy stock when below the given price
- Type: `NUMBER`
- Required: `false`
#### stop_order
Buy stock when above the given price
- Type: `NUMBER`
- Required: `false`
## `/stocks sell`
Sell stocks
#### stock
Stock to sell
- Type: `Autocomplete Selection`
- Required: `true`
#### amount
Amount of shares to sell
- Type: `NUMBER`
- Required: `true`
#### limit_order
Sell stock when above the given price
- Type: `NUMBER`
- Required: `false`
#### stop_order
Sell stock when below the given price
- Type: `NUMBER`
- Required: `false`
## `/stocks list`
View stock values
