# `/poll`
*Module: [[Misc]]*<br>
Create a poll
## `/poll create [duration]`
Create a new poll
#### duration
How long before the poll ends automatically (e.g "2 days and 12 hours")
- Type: `STRING`
- Required: `false`
## `/poll end <poll>`
End an existing poll
#### poll
Poll identifier
- Type: `Autocomplete Selection`
- Required: `true`