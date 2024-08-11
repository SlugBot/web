# `/vc`
*Module: [[Voicechannels]]*<br>
Customise properties of your temporary VC
## `/vc name <name>`
Set the name of your VC
#### name
Name to use
- Type: `STRING`
- Required: `TRUE`
## `/vc set_limit <limit>`
Set the member limit of your VC
#### limit
Member limit
- Type: `INTEGER`
- Required: `TRUE`
## `/vc whitelist <subject>`
Whitelist a member or role
#### subject
Member or role
- Type: `MENTIONABLE`
- Required: `TRUE`
## `/vc blacklist <subject>`
Blacklist a member or role and kick members if present
#### subject
Member or role
- Type: `MENTIONABLE`
- Required: `TRUE`
## `/vc private`
Set your VC to private, kicking all members that aren't whitelisted.

## `/vc public`
Set your VC to public

## `/vc create <create_text_channel>`
Instatiate custom VCs
#### create_text_channel
If true, a text channel will be created for each temp VC.
- Type: `BOOLEAN`
- Required: `TRUE`