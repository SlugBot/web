## RoleReact Guide
[[RoleReact]]s are custom menus allowing users to assign roles to themselves with full customisability. Follow this step-by-step guide to set up a role react in your server.
### Creating a RoleReact
Use the [[rolereact#`/rolereact create`|/rolereact create]] create command to create a new embed. It is also possible to provide an existing message ID to use as a RoleReact - However, buttons and select menus can only be used if the existing message was originally sent by SlugBot.
### Adding Roles
Once you've created a RoleReact, add assignable roles with [[rolereact#/rolereact add|/rolereact add]]. Specify an emoji to use along with a role. Optionally provide up to two more roles that will be assigned along with the primary role when a user selects this option.

Remove a role option with [[rolereact#/rolereact remove|/rolereact remove]].
### Editing the RoleReact Message
RoleReacts can be customised in several ways using [[rolereact#/rolereact update|/rolereact update]]. Read the parameters of the command to see what they do.
### RoleReacts on Reminders
RoleReacts can be referenced by reminders. This allows repeating reminders to display roleReact role selections under them. The original RoleReact is not modified or moved. More on this in [[Reminders#Attaching Components|Reminders]].

# Commands
- [[rolereact|/rolereact]]
- [[temprole|/temprole]]