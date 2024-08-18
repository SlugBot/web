# `/poll`
*Module: [[Misc]]*<br>
Create a poll
## /poll create
`/poll create [duration]`<br>
Create a new poll
#### duration
How long before the poll ends automatically (e.g "2 days and 12 hours")
- Type: `STRING`
- Required: `FALSE`
## /poll end
`/poll end <poll>`<br>
End an existing poll
#### poll
Poll identifier
- Type: `AUTOCMPLETE SELECTION`
- Required: `TRUE`