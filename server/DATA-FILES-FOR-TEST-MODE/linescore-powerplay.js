// 20220604205312
// https://statsapi.web.nhl.com/api/v1/game/2021030323/linescore

const linescorePowerPlay = {
    "copyright": "NHL and the NHL Shield are registered trademarks of the National Hockey League. NHL and NHL team marks are the property of the NHL and its teams. © NHL 2022. All Rights Reserved.",
    "currentPeriod": 1,
    "currentPeriodOrdinal": "1st",
    "currentPeriodTimeRemaining": "01:49",
    "periods": [
      {
        "periodType": "REGULAR",
        "startTime": "2022-06-05T00:15:35Z",
        "num": 1,
        "ordinalNum": "1st",
        "home": {
          "goals": 1,
          "shotsOnGoal": 9,
          "rinkSide": "left"
        },
        "away": {
          "goals": 1,
          "shotsOnGoal": 10,
          "rinkSide": "right"
        }
      }
    ],
    "shootoutInfo": {
      "away": {
        "scores": 0,
        "attempts": 0
      },
      "home": {
        "scores": 0,
        "attempts": 0
      }
    },
    "teams": {
      "home": {
        "team": {
          "id": 22,
          "name": "Edmonton Oilers",
          "link": "/api/v1/teams/22"
        },
        "goals": 1,
        "shotsOnGoal": 9,
        "goaliePulled": false,
        "numSkaters": 5,
        "powerPlay": true
      },
      "away": {
        "team": {
          "id": 21,
          "name": "Colorado Avalanche",
          "link": "/api/v1/teams/21"
        },
        "goals": 1,
        "shotsOnGoal": 10,
        "goaliePulled": false,
        "numSkaters": 4,
        "powerPlay": false
      }
    },
    "powerPlayStrength": "5-on-4",
    "hasShootout": false,
    "intermissionInfo": {
      "intermissionTimeRemaining": 0,
      "intermissionTimeElapsed": 0,
      "inIntermission": false
    },
    "powerPlayInfo": {
      "situationTimeRemaining": 82,
      "situationTimeElapsed": 38,
      "inSituation": true
    }
  }

  module.exports = {linescorePowerPlay};