# `/ban`
*Module: [[Moderation]]*<br>
Ban a member
## `/ban <member> [duration] [reason] [context_url] [delete_messages]`
#### member
Member to ban or user ID of user to preemptively ban
- Type: `STRING`
- Required: `true`
## `/ban <member> [duration] [reason] [context_url] [delete_messages]`
#### duration
Duration in english; e.g. "1 hour 20 mins"
- Type: `STRING`
- Required: `false`
## `/ban <member> [duration] [reason] [context_url] [delete_messages]`
#### reason
Reason for banning. The reason is DMed to member.
- Type: `STRING`
- Required: `false`
## `/ban <member> [duration] [reason] [context_url] [delete_messages]`
#### context_url
Link to a message or image for extra context.
- Type: `STRING`
- Required: `false`
## `/ban <member> [duration] [reason] [context_url] [delete_messages]`
#### delete_messages
Delete user's messages within given time
  - 1 hour
  - 6 hours
  - 12 hours
  - 1 day
  - 2 days
  - 7 days
- Required: `false`