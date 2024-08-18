# `/invest`
*Module: [[Economy]]*<br>
Invest SC in text channels
## /invest add
`/invest add <channel> [amount]`<br>
Make a new investment
#### channel
Channel to invest in
- Type: `CHANNEL`
- Required: `TRUE`
#### amount
Amount of SC to invest
- Type: `NUMBER`
- Required: `FALSE`
## /invest terminate
`/invest terminate <channel>`<br>
Terminate an existing investment prematurely
#### channel
Channel to terminate investment in
- Type: `AUTOCMPLETE SELECTION`
- Required: `TRUE`