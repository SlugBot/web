# warn
*Module: [[Moderation]]*
Warn a member, remove a warning, or view warnings
## `/warn add`
Warn a member
#### member
Member to warn
- Type: `USER`
- Required: `true`
#### warning
Warning message.
- Type: `STRING`
- Required: `true`
#### context_link
Link to a message or image for extra context
- Type: `STRING`
- Required: `false`
## `/warn remove`
Remove a warning
#### member
Member to remove warning from
- Type: `USER`
- Required: `true`
#### index
Warning to remove
- Type: `INTEGER`
- Required: `true`