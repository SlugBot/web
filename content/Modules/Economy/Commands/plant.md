# `/plant`
*Module: [[Economy]]*<br>
Begin the planting a process on a target
## `/plant skimmer`
Plant a SKIMMER process on a target
#### target
Target identifier
- Type: `Autocomplete Selection`
- Required: `true`
## `/plant leech`
Plant a LEECH process on a target
#### target
Target identifier
- Type: `Autocomplete Selection`
- Required: `true`
## `/plant cloner`
Plant a CLONER process on a target
#### target
Target identifier
- Type: `Autocomplete Selection`
- Required: `true`
## `/plant hijacker`
Plant a HIJACKER process on a target
#### target
Target identifier
- Type: `Autocomplete Selection`
- Required: `true`
## `/plant honeypot`
Plant a HONEYPOT process on a target
#### target
Target identifier
- Type: `Autocomplete Selection`
- Required: `true`
## `/plant redirect`
Plant a REDIRECT process on a target, redirecting processes to another target
#### target
Target identifier
- Type: `Autocomplete Selection`
- Required: `true`
#### redirect_target
redirect_target identifier
- Type: `Autocomplete Selection`
- Required: `true`
## `/plant latch`
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
## `/plant tracker`
Plant a TRACKER process on a target
#### target
Target identifier
- Type: `Autocomplete Selection`
- Required: `true`
## `/plant corruptor`
Plant a CORRUPTOR process on a target
#### target
Target identifier
- Type: `STRING`
- Required: `true`
## `/plant rootkit`
Plant a ROOTKIT process on a target
#### target
Target identifier
- Type: `Autocomplete Selection`
- Required: `true`