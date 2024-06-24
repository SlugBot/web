# `/deletemessages`
*Module: [[Moderation]]*<br>
Bulk delete messages
## `/deletemessages <earliest_msg> [latest_msg] [member] [user_id]`
#### earliest_msg
Messages between this and the latest message will be deleted
- Type: `STRING`
- Required: `true`
## `/deletemessages <earliest_msg> [latest_msg] [member] [user_id]`
#### latest_msg
Messages between this and the earliest message will be deleted
- Type: `STRING`
- Required: `false`
## `/deletemessages <earliest_msg> [latest_msg] [member] [user_id]`
#### member
Only delete messages by this member
- Type: `USER`
- Required: `false`
## `/deletemessages <earliest_msg> [latest_msg] [member] [user_id]`
#### user_id
Only delete messages by member with this ID
- Type: `STRING`
- Required: `false`