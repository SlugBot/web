# `/deletemessages`
*Module: [[Moderation]]*<br>
Bulk delete messages
#### earliest_msg
Messages between this and the latest message will be deleted
- Type: `STRING`
- Required: `true`
#### latest_msg
Messages between this and the earliest message will be deleted
- Type: `STRING`
- Required: `false`
#### member
Only delete messages by this member
- Type: `USER`
- Required: `false`
#### user_id
Only delete messages by member with this ID
- Type: `STRING`
- Required: `false`