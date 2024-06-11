# `/vc`
Customise properties of your temporary VC
*Module: [[Voicechannels]]*
## `/vc name`
Set the name of your VC
#### name
Name to use
- Type: `STRING`
- Required: `true`
## `/vc set_limit`
Set the member limit of your VC
#### limit
Member limit
- Type: `INTEGER`
- Required: `true`
## `/vc whitelist`
Whitelist a member or role
#### subject
Member or role
- Type: `MENTIONABLE`
- Required: `true`
## `/vc blacklist`
Blacklist a member or role and kick members if present
#### subject
Member or role
- Type: `MENTIONABLE`
- Required: `true`
## `/vc private`
Set your VC to private, kicking all members that aren't whitelisted.

## `/vc public`
Set your VC to public

## `/vc create`
Instatiate custom VCs
#### create_text_channel
If true, a text channel will be created for each temp VC.
- Type: `BOOLEAN`
- Required: `true`