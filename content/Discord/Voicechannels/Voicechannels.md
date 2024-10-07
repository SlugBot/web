Instead of having a tonne of Voice Channels in your server, it may be more convenient to let your members create new VCs as they need them.

Use [[vc#/vc create|/vc create]] to create a new `JOIN to CREATE VC` channel. Any member that joins this VC will have a new temporary VC created for them.

Temporary VCs inherit the permissions of the `JOIN to CREATE VC` channel.

The host member can customise the name of the channel and control access to their VC using [[vc|/vc]]. Note: the host can not deny access to any member who has explicit `CONNECT` permissions in the `JOIN to CREATE VC` channel. It is advised to give moderators explicit access so they can always join Temp VCs
# Commands
- [[vc|/vc]]