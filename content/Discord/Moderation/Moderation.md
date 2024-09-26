## Mod Actions
SlugBot can help streamline server moderation and make moderation action logs easier to sift through than Discord's audit log system. 
### Mod Commands
[[ban|/ban]], [[unban|/unban]], [[mute|/mute]], [[unmute|/unmute]], [[kick|/kick]], and [[warn|/warn]] all take `reason` and `context_urls`; 
`reason` is a string that describes the reason for the moderator action, and is DMed to the target member.
`context_url` is a link the moderator can provide that could provide extra context for the moderator action, such as an image link, or a Discord message link where an infraction took place. If left empty, the `context_url` will link back to where the moderator command was used - useful to take you back to the mod discussion around the action.
### Mod Action Logs
All moderator actions, either through SlugBot mod commands, timeouts/bans directly through Discord, or through other moderation bots, are logged in the target member's [[userinfo]]. The timestamp, moderator, reason, duration, and updated duration are all displayed where applicable. Clicking the mod action header will take you to the `context_url`.

Its also possible to view a moderators actions by viewing the moderator's [[userinfo]] and clicking the `View Mod Actions` button. Their total bans, mutes, kicks, and warns are shown, along with every mod action they have performed. This is useful for seeing how well a mod is performing.
### Mass-Deleting Messages
The [[deletemessages|/deletemessages]] command can be used to delete message in bulk by providing a range. Provide the URL or message ID of a message to delete every message after the given message.
Optionally provide a `latest_msg` URL or message ID to delete every message **between** the given messages.
Specifying either a member or a user ID will only delete the messages sent by that user.

## Chat Censoring
SlugBot can filter chats for profanity or any string, and automatically mute users for using filtered words. SlugBot's detection system is more sophisticated than Discord's built-in automod but both can be used depending on the server's needs.
### Word Matching
Use [[filter#/filter add|/filter add]] to create a new filter. Provide a word and SlugBot will delete any message containing the word. Several methods to avoid the filter are also caught (repeating characters, replacing characters with similar ones, spacing, etc).

[RegEx](https://regex101.com/) can also be provided as a filter for more controlled matching, but it will not have the same filter-avoidance catching as word filters.
### Auto-muting
By default, SlugBot has a random chance to mute the member who triggered a filter - The random chance increases the more times they trigger filters. The mute duration also scales up the more times they are muted by triggering filters. 
Use [[filter#/filter mute_settings|/filter mute_settings]] to customise the auto-mute parameters.

## Persistent Roles
It's often useful to have roles that are reapplied to members when they leave and return. use [[persistentrole#/persistentrole add|/persistentrole add]] to set any existing role as `persistent`. Any member with this role will have it reapplied to them when they return to the server.

# Commands
- [[ban|/ban]]
- [[deletemessages|/deletemessages]]
- [[filter|/filter]]
- [[kick|/kick]]
- [[mute|/mute]]
- [[persistentrole|/persistentrole]]
- [[unban|/unban]]
- [[unmute|/unmute]]
- [[userinfo|/userinfo]]
- [[usernote|/usernote]]
- [[warn|/warn]]