# `/ban`
*Module: [[Moderation]]*<br>
Ban a member
## `/ban [member] [user_id] [duration] [reason] [context_url] [delete_messages]`
#### member
Member to ban.
- Type: `USER`
- Required: `FALSE`
#### user_id
User ID of member to ban or user to preemptively ban.
- Type: `STRING`
- Required: `FALSE`
#### duration
Duration in english; e.g. "1 hour 20 mins"
- Type: `STRING`
- Required: `FALSE`
#### reason
Reason for banning. The reason is DMed to member.
- Type: `STRING`
- Required: `FALSE`
#### context_url
Link to a message or image for extra context.
- Type: `STRING`
- Required: `FALSE`
#### delete_messages
Delete user's messages within given time
- Type: `SELECTION`
  - `1 hour`
  - `6 hours`
  - `12 hours`
  - `1 day`
  - `2 days`
  - `7 days`
- Required: `FALSE`