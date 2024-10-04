# `/filter`
*Module: [[Moderation]]*<br>
Manage filters in this server.
## /filter add
`/filter add <filter> [match_repeating_chars]`<br>
Add a new word or regEx filter.
#### filter
word or regEx to filter.
- Type: `STRING`
- Required: `TRUE`
#### match_repeating_chars
Should the filter account for repeating characters?
- Type: `BOOLEAN`
- Required: `FALSE`
## /filter remove
`/filter remove <filter>`<br>
Remove an existing word or regEx filter.
#### filter
word or regEx to filter.
- Type: `AUTOCOMPLETE SELECTION`
- Required: `TRUE`
## /filter list
`/filter list`<br>
List all existing word and regEx filters.

## /filter mute_settings
`/filter mute_settings [base_mute_chance] [mute_chance_increase] [base_mute_duration] [mute_duration_increase] [mute_duration_mult] [mute_message]`<br>
Customise auto-mute settings
#### base_mute_chance
Starting probability for mute (0 to 1)
- Type: `NUMBER`
- Required: `FALSE`
#### mute_chance_increase
Amount mute chance increases with each trigger
- Type: `NUMBER`
- Required: `FALSE`
#### base_mute_duration
Starting mute duration (in minutes)
- Type: `NUMBER`
- Required: `FALSE`
#### mute_duration_increase
Amount mute duration increases with each mute (in minutes)
- Type: `NUMBER`
- Required: `FALSE`
#### mute_duration_mult
Amount mute duration gets multiplied by with each mute
- Type: `NUMBER`
- Required: `FALSE`
#### mute_message
Message sent when a member triggers a filter. Can include [[Flag Replacers]]
- Type: `STRING`
- Required: `FALSE`
## /filter set_next_mute_duration
`/filter set_next_mute_duration <member> <duration>`<br>
Set a member's next auto-mute duration
#### member
Member to set next auto-mute duration for
- Type: `USER`
- Required: `TRUE`
#### duration
Next auto-mute duration (in minutes)
- Type: `NUMBER`
- Required: `TRUE`