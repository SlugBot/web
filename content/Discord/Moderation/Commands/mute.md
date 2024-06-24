# `/mute`
*Module: [[Moderation]]*<br>
Mute a member
## `/mute <member> [duration] [reason] [context_url]`
#### member
Member to mute
- Type: `USER`
- Required: `TRUE`
#### duration
Duration in english; e.g. "1 hour 20 mins"
- Type: `STRING`
- Required: `FALSE`
#### reason
Reason for muting. The reason is DMed to member.
- Type: `STRING`
- Required: `FALSE`
#### context_url
Link to a message or image for extra context.
- Type: `STRING`
- Required: `FALSE`