# `/temprole`
*Module: [[Roles]]*<br>
Set a role as 'temporary', meaning it will automatically be removed after a period of time
## `/temprole add <role> <duration>`
Add a new temporary role
#### role
Role to set as temporary
- Type: `ROLE`
- Required: `TRUE`
#### duration
How long after a member getting a role should it be removed?
- Type: `STRING`
- Required: `TRUE`
## `/temprole remove <temp_role>`
Remove an existing temporary role
#### temp_role
Temporary role to remove
- Type: `AUTOCMPLETE SELECTION`
- Required: `TRUE`
## `/temprole list`
View all existing temporary roles in this server
