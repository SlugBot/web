# `/filter`
*Module: [[Moderation]]*<br>
Manage filters in this server.
## `/filter add`
Add a new word or regEx filter.
#### filter
word or regEx to filter.
- Type: `STRING`
- Required: `true`
#### match_repeating_chars
Should the filter account for repeating characters?
- Type: `BOOLEAN`
- Required: `false`
## `/filter remove`
Remove an existing word or regEx filter.
#### filter
word or regEx to filter.
- Type: `Autocomplete Selection`
- Required: `true`
## `/filter list`
List all existing word and regEx filters.

## `/filter mute_settings`
Customise auto-mute settings
#### base_mute_chance
Starting probability for mute (0 to 1)
- Type: `NUMBER`
- Required: `false`
#### mute_chance_increase
Amount mute chance increases with each trigger
- Type: `NUMBER`
- Required: `false`
#### base_mute_duration
Starting mute duration (in minutes)
- Type: `NUMBER`
- Required: `false`
#### mute_duration_increase
Amount mute duration increases with each mute (in minutes)
- Type: `NUMBER`
- Required: `false`
#### mute_duration_mult
Amount mute duration gets multiplied by with each mute
- Type: `NUMBER`
- Required: `false`
#### mute_message
Message sent when a member triggers a filter
- Type: `STRING`
- Required: `false`
## `/filter set_next_mute_duration`
Set a member's next auto-mute duration
#### member
Member to set next auto-mute duration for
- Type: `USER`
- Required: `true`
#### duration
Next auto-mute duration (in minutes)
- Type: `NUMBER`
- Required: `true`