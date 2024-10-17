SlugBot can log a multitude of of events within a server. From deleted messages to updated channel permissions.

Use [[eventlog#/eventlog create|/eventlog create]] to create a new logging channel. You will then be prompted to select all of the relevant events you would like logged.

![[eventlog demo.png]]

SlugBot supports any number of logging channels. It can be useful to separate logged events into channels based on their context. A `#chat-log` logging channel for message deletes and updates, and a separate channel for moderation action logs for example.

# Commands
- [[eventlog|/eventlog]]