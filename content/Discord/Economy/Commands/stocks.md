# `/stocks`
*Module: [[Economy]]*<br>
Buy or sell stocks
## `/stocks buy <stock> <amount> [limit_order] [stop_order]`
Buy stocks
#### stock
Stock to buy
- Type: `AUTOCMPLETE SELECTION`
- Required: `TRUE`
#### amount
Amount of shares to buy
- Type: `NUMBER`
- Required: `TRUE`
#### limit_order
Buy stock when below the given price
- Type: `NUMBER`
- Required: `FALSE`
#### stop_order
Buy stock when above the given price
- Type: `NUMBER`
- Required: `FALSE`
## `/stocks sell <stock> <amount> [limit_order] [stop_order]`
Sell stocks
#### stock
Stock to sell
- Type: `AUTOCMPLETE SELECTION`
- Required: `TRUE`
#### amount
Amount of shares to sell
- Type: `NUMBER`
- Required: `TRUE`
#### limit_order
Sell stock when above the given price
- Type: `NUMBER`
- Required: `FALSE`
#### stop_order
Sell stock when below the given price
- Type: `NUMBER`
- Required: `FALSE`
## `/stocks list`
View stock values
