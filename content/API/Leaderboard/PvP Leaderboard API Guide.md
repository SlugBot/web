This API provides programmatic access to leaderboard rankings, player statistics, and match history for the SlugBot PvP Leaderboard system.

## Base URL
`https://api.slugbot.xyz/pvplb/{server_id}/{leaderboard_id}/`
- `server_id`: ID of Discord server the leaderboard is in.
	- The user tied to the API key must be a member of this server to have access to the leaderboard data.
- `leaderboard_id`: The name of the leaderboard. Special characters must be URL Encoded.
### Authorisation
A valid API Key must be provided in the header.
```json
"Authorization": "Bearer {API_KEY}"
```
*Note: An API Key can be generated using the command [[Discord/Api/Commands/api#/api get_new_key|/api get_new_key]] in any Discord server with SlugBot.*

## Player Endpoints
### Get Player Stats
Retrieves leaderboard statistics for a single player.
- **URL:** `/player/{player_id}`
- **Method:** `GET`
- **Path Parameters:**
	- `player_id` (string): The Discord User ID of the player.
#### Example
`https://api.slugbot.xyz/pvplb/123123123123123123/test%20lb/player/2290978510728123123`
**Example response:**
```json
{
  "userId": "2290978510728123123",
  "guildId": "123123123123123123",
  "leaderBoardId": "test lb",
  "displayName": "Narcolept",
  "members": ["2290978510728123123"],
  "rank": 1,
  "matchesPlayed": 8,
  "matchesWon": 7,
  "points": 30.10524021259957,
  "decayedPoints": 0,
  "elo": 1029.0332436228407,
  "lastMatchPlayedAt": 1767985291309
}
```

### Get All Players (Batch)
Retrieves a paginated list of all participants on the specified leaderboard.
- **URL:** `/player/batch`
- **Method:** `GET`
- **Query Parameters:**
	- `limit` (number): Maximum number of records to return.
	- `nextCursor` (string): The cursor token for the next page of results.
#### Example
`https://api.slugbot.xyz/pvplb/123123123123123123/test%20lb/player/batch?limit=3`
**Example Response:**
```json
{
  "success": TRUE,
  "data": [{...}, {...}, {...}],
  "paging": { 
    "nextCursor": 3,
    "hasNextPage": TRUE
  }
}
```

## Match Endpoints
### Get Match Info
Retrieves match info on a specific match.
- **URL:** `/match/{match_id}`
- **Method:** `GET`
- **Path Parameters:**
	- `match_id` (string): The unique identifier for the match.
#### Example
`https://api.slugbot.xyz/pvplb/123123123123123123/test%20lb/match/6961335332de57bd419e3b16`
**Example response:**
```json
{
  "matchId": "6961335332de57bd419e3b16",
  "guildId": "123123123123123123",
  "leaderBoardId": "test lb",
  "timestamp": 1767985291309,
  "winTeam": 0,
  "participants": [
    {
      "teamId": 0,
      "playerId": "2290978510728123123",
      "initialRank": 1,
      "initialPoints": 29.61793872377991,
      "initialElo": 1022.40341488487301,
      "pointsReceived": 0.4873014888196579,
      "eloReceived": 4.623613044190915
    },
    {
      "teamId": 1,
      "playerId": "460530474897567567",
      "initialRank": 2,
      "initialPoints": 15.58222222222222,
      "initialElo": 994.40341488487301,
      "pointsReceived": 0.2222222222222221,
      "eloReceived": -4.623613044190915
    }
  ]
}
```

### Get Match History (Batch)
Retrieves a paginated list of matches for the leaderboard. Includes filters for specific users or match status.
- **URL:** `/match/batch`
- **Method:** `GET`
- **Query Parameters:**
	- `userId` (string): Filter history to matches involving a specific player.
	- `complete` (boolean): If true, returns finished matches.
	- `incomplete` (boolean): If true, returns ongoing/pending matches.
	- `limit` (number): Maximum number of records to return.
	- `nextCursor` (string): The cursor token for the next page of results.
#### Example
`https://api.slugbot.xyz/pvplb/123123123123123123/test%20lb/match/batch?limit=3&userId=2290978510728123123&complete=true&incomplete=false`
**Example Response:**
```json
{
  "success": TRUE,
  "data": [{...}, {...}, {...}],
  "paging": { 
    "nextCursor": 1748195916815,
    "hasNextPage": TRUE
  }
}
```
*Note: This query will return **completed** matches played by user `2290978510728123123`*


## Pagination Logic
Both `/batch` endpoints use **Cursor-Based Pagination**. 
1. **Initial Request:** Leave the `nextCursor` parameter empty.
2. **Handling Response:** The API will return a list of items and a `nextCursor` string.    
3. **Subsequent Request:** Pass that string into the `nextCursor` query parameter to fetch the next "page" of results. 
If `hasNextPage` is `FALSE`, you have reached the end of the data.