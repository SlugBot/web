# `/plant`
*Module: [[Economy]]*<br>
Begin the planting a process on a target
## `/plant skimmer <target>`
Plant a SKIMMER process on a target
#### target
Target identifier
- Type: `Autocomplete Selection`
- Required: `true`
## `/plant leech <target>`
Plant a LEECH process on a target
#### target
Target identifier
- Type: `Autocomplete Selection`
- Required: `true`
## `/plant cloner <target>`
Plant a CLONER process on a target
#### target
Target identifier
- Type: `Autocomplete Selection`
- Required: `true`
## `/plant hijacker <target>`
Plant a HIJACKER process on a target
#### target
Target identifier
- Type: `Autocomplete Selection`
- Required: `true`
## `/plant honeypot <target>`
Plant a HONEYPOT process on a target
#### target
Target identifier
- Type: `Autocomplete Selection`
- Required: `true`
## `/plant redirect <target> <redirect_target>`
Plant a REDIRECT process on a target, redirecting processes to another target
#### target
Target identifier
- Type: `Autocomplete Selection`
- Required: `true`
#### redirect_target
redirect_target identifier
- Type: `Autocomplete Selection`
- Required: `true`
## `/plant latch <target> <attach_process_id> [trigger_process_types] [trigger_target]`
Plant a LATCH process on a target
#### target
Target identifier
- Type: `Autocomplete Selection`
- Required: `true`
#### attach_process_id
Process ID of process to attach LATCH
- Type: `STRING`
- Required: `true`
#### trigger_process_types
Limit the LATCH to only trigger on given process types
- Type: `Autocomplete Selection`
- Required: `false`
#### trigger_target
Limit the LATCH to only trigger by processes on a given target
- Type: `STRING`
- Required: `false`
## `/plant tracker <target>`
Plant a TRACKER process on a target
#### target
Target identifier
- Type: `Autocomplete Selection`
- Required: `true`
## `/plant corruptor <target>`
Plant a CORRUPTOR process on a target
#### target
Target identifier
- Type: `STRING`
- Required: `true`
## `/plant rootkit <target>`
Plant a ROOTKIT process on a target
#### target
Target identifier
- Type: `Autocomplete Selection`
- Required: `true`