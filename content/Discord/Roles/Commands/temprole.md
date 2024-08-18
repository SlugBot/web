# `/temprole`
*Module: [[Roles]]*<br>
Set a role as 'temporary', meaning it will automatically be removed after a period of time
## /temprole add
`/temprole add <role> <duration>`<br>
Add a new temporary role
#### role
Role to set as temporary
- Type: `ROLE`
- Required: `TRUE`
#### duration
How long after a member getting a role should it be removed?
- Type: `STRING`
- Required: `TRUE`
## /temprole remove
`/temprole remove <temp_role>`<br>
Remove an existing temporary role
#### temp_role
Temporary role to remove
- Type: `AUTOCMPLETE SELECTION`
- Required: `TRUE`
## /temprole list
`/temprole list`<br>
View all existing temporary roles in this server
