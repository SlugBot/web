# Flag Replacers
Some SlugBot functions allow users to set strings to be used for responses such as custom welcome messages and command responses. These strings can be made more dynamic with the use of **flag replacers**.

### NAME
`${NAME}`
Any appearance of this flag in the string will be replaced with the name of the user who triggered the function.
### ID
`${ID}`
Any appearance of this flag in the string will be replaced with the ID of the user who triggered the function.
### COUNT
`${COUNT}`
Any appearance of this flag in the string will be replaced with the number of times the function has been triggered. If used for a welcome message, the flag will be replaced with the server's member count instead.
### ARG
`${ARG:0} ${ARG:1} ${ARG:2}`
Index flags, when used for command responses, will be replaced by the corresponding argument that was supplied when the command was used.
### MATCH
`${MATCH} ${MATCH: 1} ${MATCH: 2}`
For RegEx custom commands, this flag will be replaced by the match that triggered it. If an index argument is given, the flag will be replaced by the corresponding capture group in the given regEx. `${MATCH: 0}` will always be replaced by the full regEx match.
### VALUE
`${VALUE}`
Any appearance of this flag in the string, when used for command responses, will be replaced with a stored value that can be set, incremented, and decremented by supplying a number argument, ++, or -- respectively when the command was used.
### SETVALUE
`${SETVALUE: <value>}`
This flag will save a string to the command that called it. The string can then be added to the response with ${VALUE}. This gives commands some persistent memory. The flag is removed from the response.

### RESTRICT
`${RESTRICT: #<channel id>} ${RESTRICT: @<member id>}`
This flag restricts the use of the function to either within specified channels, or by specified members. Multiple channel and member restrictions can be listed. **The member must satisfy at least one of each restriction type listed.** The flag is removed from the response.
### REACT
`${REACT: <emoji>}`
This flag will add the specified emoji as a reaction to the message that triggered the function. The flag is removed from the response.
### RAND
`${RAND: <option 1> | <option 2> | <option 3> | ...}`
Any appearance of this flag in the string will be replaced with **one** of the listed options selected at random. The option selection can be weighted by prefixing the option with `{<weight>}` - for example `${RAND: {2} heads | {1} tails}`. This will make the option "heads" be twice as likely to be selected.
### IF 
`${IF: {\<logic expression>} \<option 1> | \<option 2> }`
This flag will attempt to resolve the given `<logic expression>` to either **TRUE** or **FALSE**. If true, `<option 1>` will replace the flag - otherwise `<option 2>` will replace the flag. Replacer flags can be nested within the logic expression and/or the options.
### MATH
`${MATH: \<expression>}`
This flag will be replaced by the result of evaluating the expression given. Other replacer flags can be nested within this flag and factored into the expression - for example `${MATH: ${COUNT} + 10}`.
### CALL 
`${CALL: \<command> [arg0 [arg1 [...]]]}`
This replacer flag will replace itself with the response of the given command. This essentially turns commands into functions. The arguments passed in can be referenced in the called command's response with `${ARG: <arg index>}`
### CALLONLY
`${CALLONLY}`
If this flag is present in the response of a command, that command can only be used through `${CALL: }` and by no other means.
### TIMEOUT 
`${TIMEOUT: \<duration>}`
This flag will timeout the user who triggered the function for `<duration>` seconds if possible. This flag only applies for Twitch functions. SlugBot must be a moderator in the relevant Twitch chat. The flag is removed from the response.
### MUTE 
`${MUTE: \<duration>}`
This flag will mute the user who triggered the function for `<duration>` seconds if possible. This flag only applies for Discord functions. Slugbot must have the ability to apply roles. The flag is removed from the response.
### DELETE
`${DELETE}`
This flag will delete the message that triggered the response with this flag in it. This flag only applies for Discord functions. Slugbot must have the ability to delete messages. The flag is removed from the response.
### DELETESELF 
`${DELETESELF: <time>}`
This flag will delete the command response sent by SlugBot after the specified amount of time (in seconds). If no time is given, the default is 10 seconds. This flag only applies for Discord functions. Slugbot must have the ability to delete messages. The flag is removed from the response.