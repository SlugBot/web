# `/exclusivechar`
*Module: [[Nicknames]]*<br>
Reserve a given character or string for specific member's or role's display names
## `/exclusivechar add <char> <member>`
Add or update an exclusive character for a member or role
#### char
Exclusive character for member or role
- Type: `STRING`
- Required: `TRUE`
#### member
Member or role to apply exclusive character to
- Type: `MENTIONABLE`
- Required: `TRUE`
## `/exclusivechar remove <char> [member]`
remove an exclusive character for a member or role
#### char
Exclusive character
- Type: `STRING`
- Required: `TRUE`
#### member
Member or role to remove exclusive character from
- Type: `MENTIONABLE`
- Required: `FALSE`
## `/exclusivechar list`
View all existing exclusive characters in this guild
