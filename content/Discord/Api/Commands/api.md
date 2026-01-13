# `/api`
*Module: [[Api]]*<br>
Get a new API key to access the SlugAPI.
## /api get_new_key
`/api get_new_key`<br>
Get a new API key.

## /api webhook
`/api webhook <type> <webhook_url>`<br>
Subscribe to a webhook.
#### type
Which webhook to subscribe to.
- Type: `SELECTION`
  - `leaderboard`
- Required: `TRUE`
#### webhook_url
Where webhook data will be sent
- Type: `STRING`
- Required: `TRUE`