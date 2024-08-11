# `/say`
*Module: [[Misc]]*<br>
Send a message in a specified channel.
## `/say [channel] [edit_msg_id] [do_embed] [schedule_send_time]`
#### channel
Channel to send message to
- Type: `CHANNEL`
- Required: `FALSE`
#### edit_msg_id
ID of SlugBot msg to edit
- Type: `STRING`
- Required: `FALSE`
#### do_embed
Should the message be put inside an embed?
- Type: `BOOLEAN`
- Required: `FALSE`
#### schedule_send_time
Delay sending the message; e.g. "4 days 12 hours"
- Type: `STRING`
- Required: `FALSE`