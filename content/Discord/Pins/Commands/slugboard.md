# `/slugboard`
*Module: [[Pins]]*<br>
Customise the settings for the Slugboard
## `/slugboard create <channel> <flag>`
Create a new Slugboard
#### channel
Channel to send slugboarded messages to
- Type: `CHANNEL`
- Required: `TRUE`
#### flag
Members can react with this Emoji to flag a message for the Slugboard
- Type: `STRING`
- Required: `TRUE`
## `/slugboard remove <slugboard>`
Remove an existing Slugboard
#### slugboard
Slugboad to remove
- Type: `AUTOCMPLETE SELECTION`
- Required: `TRUE`
## `/slugboard update <slugboard> [flag] [response] [threshold] [delete_threshold] [unflag] [allow_unflag] [color]`
Update settings of an existing Slugboard
#### slugboard
Slugboad to update
- Type: `AUTOCMPLETE SELECTION`
- Required: `TRUE`
#### flag
Members can react with this Emoji to flag a message for the Slugboard
- Type: `STRING`
- Required: `FALSE`
#### response
Emoji SlugBot will react with when a message gets Slugboard'ed
- Type: `STRING`
- Required: `FALSE`
#### threshold
Flag total threshold to be posted on the Slugboard
- Type: `INTEGER`
- Required: `FALSE`
#### delete_threshold
Flag total lower threshold to be removed from the Slugboard
- Type: `INTEGER`
- Required: `FALSE`
#### unflag
Emoji members can react with to count against the flag count
- Type: `STRING`
- Required: `FALSE`
#### allow_unflag
Can members use unflag reacts to count against flag reacts?
- Type: `BOOLEAN`
- Required: `FALSE`
#### color
Hex color code of the Slugboard embed
- Type: `STRING`
- Required: `FALSE`