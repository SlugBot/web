# temprole
*Module: [[Reminders]]*
Set a role as 'temporary', meaning it will automatically be removed after a period of time
## `/temprole add`
Add a new temporary role
#### role
Role to set as temporary
- Type: `ROLE`
- Required: `true`
#### duration
How long after a member getting a role should it be removed?
- Type: `STRING`
- Required: `true`
## `/temprole remove`
Remove an existing temporary role
#### temp_role
Temporary role to remove
- Type: `Autocomplete Selection`
- Required: `true`
## `/temprole list`
View all existing temporary roles in this server
