# RoleReact Guide
[[RoleReact]]s are custom menus allowing users to assign roles to themselves with full customisability. Follow this step-by-step guide to set up a role react in your server.

### Creating a RoleReact
Use the [[rolereact#`/rolereact create`|/rolereact create]] create command to create a new embed. You can edit this embed by using the [[rolereact#`/rolereact update`|/rolereact update]] command, and then selecting the relevant RoleReact ID.

### Editing the RoleReact Message
Once you've selected the RoleReact menu to update, you can edit the Title, Description, and Colour of the embed to your liking. 

You can set a couple other parameters to a specific RoleReact message using [[rolereact#`/rolereact update`|/rolereact update]]. Required Role, Is Mutually Exclusive, and Do Feedback are self-explanatory.

Is Toggle allows you to make role selections toggleable. If a user already has Role A, and selects Role A in the RoleReact, they will lose Role A.
Is Select Menu enables the drop-down version of RoleReacts, instead of traditional reactions.

### Adding Role Reacts
Use the [[rolereact#`/rolereact add`|/rolereact add]] command to add a new role to a RoleReact.

Reaction specifies the emoji that SlugBot will use under the message. The emoji can be from any server, as long as SlugBot is also in it.

Role specifies the role that is assigned by that option. Make sure the role being assigned is below SlugBot in the role hierarchy.

Removing role reacts functions the same way.
# Commands
- [[rolereact]]
- [[temprole]]