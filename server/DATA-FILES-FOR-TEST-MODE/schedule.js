// 20220604200327
// https://statsapi.web.nhl.com/api/v1/schedule

const testSchedule = {
    "copyright": "NHL and the NHL Shield are registered trademarks of the National Hockey League. NHL and NHL team marks are the property of the NHL and its teams. © NHL 2022. All Rights Reserved.",
    "totalItems": 1,
    "totalEvents": 0,
    "totalGames": 1,
    "totalMatches": 0,
    "metaData": {
      "timeStamp": "20220605_000322"
    },
    "wait": 10,
    "dates": [
      {
        "date": "2022-06-04",
        "totalItems": 1,
        "totalEvents": 0,
        "totalGames": 1,
        "totalMatches": 0,
        "games": [
          {
            "gamePk": 2021030323,
            "link": "/api/v1/game/2021030323/feed/live",
            "gameType": "P",
            "season": "20212022",
            "gameDate": "2022-06-05T00:00:00Z",
            "status": {
              "abstractGameState": "Preview",
              "codedGameState": "1",
              "detailedState": "Scheduled",
              "statusCode": "1",
              "startTimeTBD": false
            },
            "teams": {
              "away": {
                "leagueRecord": {
                  "wins": 10,
                  "losses": 2,
                  "type": "league"
                },
                "score": 0,
                "team": {
                  "id": 21,
                  "name": "Colorado Avalanche",
                  "link": "/api/v1/teams/21"
                }
              },
              "home": {
                "leagueRecord": {
                  "wins": 8,
                  "losses": 6,
                  "type": "league"
                },
                "score": 0,
                "team": {
                  "id": 22,
                  "name": "Edmonton Oilers",
                  "link": "/api/v1/teams/22"
                }
              }
            },
            "venue": {
              "id": 5100,
              "name": "Rogers Place",
              "link": "/api/v1/venues/5100"
            },
            "content": {
              "link": "/api/v1/game/2021030323/content"
            }
          }
        ],
        "events": [
          
        ],
        "matches": [
          
        ]
      }
    ]
  }

  module.exports = {testSchedule};