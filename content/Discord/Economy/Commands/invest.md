# `/invest`
*Module: [[Economy]]*<br>
Invest SC in text channels
## `/invest add <channel> [amount]`
Make a new investment
#### channel
Channel to invest in
- Type: `CHANNEL`
- Required: `TRUE`
#### amount
Amount of SC to invest
- Type: `NUMBER`
- Required: `FALSE`
## `/invest terminate <channel>`
Terminate an existing investment prematurely
#### channel
Channel to terminate investment in
- Type: `AUTOCMPLETE SELECTION`
- Required: `TRUE`