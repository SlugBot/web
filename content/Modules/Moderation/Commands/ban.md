# ban
*Module: [[Moderation]]*
Ban a member
#### member
Member to ban or user ID of user to preemptively ban
- Type: `STRING`
- Required: `true`
#### duration
Duration in english; e.g. "1 hour 20 mins"
- Type: `STRING`
- Required: `false`
#### reason
Reason for banning. The reason is DMed to member.
- Type: `STRING`
- Required: `false`
#### context_url
Link to a message or image for extra context.
- Type: `STRING`
- Required: `false`
#### delete_messages
Delete user's messages within given time
- Type: `STRING`
- Required: `false`