# `/plant`
*Module: [[Economy]]*<br>
Begin the planting a process on a target
## /plant skimmer
`/plant skimmer <target>`<br>
Plant a SKIMMER process on a target
#### target
Target identifier
- Type: `AUTOCMPLETE SELECTION`
- Required: `TRUE`
## /plant leech
`/plant leech <target>`<br>
Plant a LEECH process on a target
#### target
Target identifier
- Type: `AUTOCMPLETE SELECTION`
- Required: `TRUE`
## /plant cloner
`/plant cloner <target>`<br>
Plant a CLONER process on a target
#### target
Target identifier
- Type: `AUTOCMPLETE SELECTION`
- Required: `TRUE`
## /plant hijacker
`/plant hijacker <target>`<br>
Plant a HIJACKER process on a target
#### target
Target identifier
- Type: `AUTOCMPLETE SELECTION`
- Required: `TRUE`
## /plant honeypot
`/plant honeypot <target>`<br>
Plant a HONEYPOT process on a target
#### target
Target identifier
- Type: `AUTOCMPLETE SELECTION`
- Required: `TRUE`
## /plant redirect
`/plant redirect <target> <redirect_target>`<br>
Plant a REDIRECT process on a target, redirecting processes to another target
#### target
Target identifier
- Type: `AUTOCMPLETE SELECTION`
- Required: `TRUE`
#### redirect_target
redirect_target identifier
- Type: `AUTOCMPLETE SELECTION`
- Required: `TRUE`
## /plant latch
`/plant latch <target> <attach_process_id> [trigger_process_types] [trigger_target]`<br>
Plant a LATCH process on a target
#### target
Target identifier
- Type: `AUTOCMPLETE SELECTION`
- Required: `TRUE`
#### attach_process_id
Process ID of process to attach LATCH
- Type: `STRING`
- Required: `TRUE`
#### trigger_process_types
Limit the LATCH to only trigger on given process types
- Type: `AUTOCMPLETE SELECTION`
- Required: `FALSE`
#### trigger_target
Limit the LATCH to only trigger by processes on a given target
- Type: `STRING`
- Required: `FALSE`
## /plant tracker
`/plant tracker <target>`<br>
Plant a TRACKER process on a target
#### target
Target identifier
- Type: `AUTOCMPLETE SELECTION`
- Required: `TRUE`
## /plant corruptor
`/plant corruptor <target>`<br>
Plant a CORRUPTOR process on a target
#### target
Target identifier
- Type: `STRING`
- Required: `TRUE`
## /plant rootkit
`/plant rootkit <target>`<br>
Plant a ROOTKIT process on a target
#### target
Target identifier
- Type: `AUTOCMPLETE SELECTION`
- Required: `TRUE`