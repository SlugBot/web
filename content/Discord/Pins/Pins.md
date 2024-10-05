## Slugboards
Slugboards are channels dedicated to immortalising user-voted chat messages. Members use reacts to vote on messages and, once they reach the specified number of reacts, the message will have a copy sent to the Slugboard channel. Think of them like Discord channel pins but members can vote on what gets pinned.
### Setup
Create a new Slugboard with [[slugboard#/slugboard create|/slugboard create]] - Providing a channel to use and a flag reaction to listen for. There is no limit to the number of Slugboards in a server and they can share channels. If a message reaches the flag threshold for multiple Slugboards that share a channel, the Slugboard message will merge all of them into one, listing the number of flags for each Slugboard.

![[slugboard pin demo.png]]

Use [[slugboard#/slugboard update|/slugboard update]] to modify the settings of a Slugboard.
#### Thresholds
The `threshold` is the number of flag reactions a message needs to get put on the Slugboard. Note that a user's own reactions on their messages do not count towards this threshold.

The `delete_threshold` is the lower bound for an existing Slugboard message before it gets deleted. For example, if a message has a `threshold` of 5 and a `delete_threshold` of 3, after getting flagged with 5 reactions, it will stay on the Slugboard even after a reaction has been removed. Only when the reaction count falls below 3 will the Slugboard message be removed.
#### Flags
The `flag`, `response`, and `unflag` emojis can be from any server SlugBot has access to.

The optional `Unflag` emoji behaves like a negative flag, with any reaction using this emoji counting as -1 flags. Unflag count will also be displayed on the Slugboard message.

# Commands
- [[slugboard|/slugboard]]