# slugboard
*Module: [[Slugboard]]*
Customise the settings for the Slugboard
## `/slugboard create`
Create a new Slugboard
#### channel
Channel to send slugboarded messages to
- Type: `CHANNEL`
- Required: `true`
#### flag
Members can react with this Emoji to flag a message for the Slugboard
- Type: `STRING`
- Required: `true`
## `/slugboard remove`
Remove an existing Slugboard
#### slugboard
Slugboad to remove
- Type: `Autocomplete Selection`
- Required: `true`
## `/slugboard update`
Update settings of an existing Slugboard
#### slugboard
Slugboad to update
- Type: `Autocomplete Selection`
- Required: `true`
#### flag
Members can react with this Emoji to flag a message for the Slugboard
- Type: `STRING`
- Required: `false`
#### response
Emoji SlugBot will react with when a message gets Slugboard'ed
- Type: `STRING`
- Required: `false`
#### threshold
Flag total threshold to be posted on the Slugboard
- Type: `INTEGER`
- Required: `false`
#### delete_threshold
Flag total lower threshold to be removed from the Slugboard
- Type: `INTEGER`
- Required: `false`
#### unflag
Emoji members can react with to count against the flag count
- Type: `STRING`
- Required: `false`
#### allow_unflag
Can members use unflag reacts to count against flag reacts?
- Type: `BOOLEAN`
- Required: `false`
#### color
Hex color code of the Slugboard embed
- Type: `STRING`
- Required: `false`