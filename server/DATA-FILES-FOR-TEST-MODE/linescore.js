// 20220604200935
// https://statsapi.web.nhl.com/api/v1/game/2021030323/linescore

const linescoreStart = {
    "copyright": "NHL and the NHL Shield are registered trademarks of the National Hockey League. NHL and NHL team marks are the property of the NHL and its teams. © NHL 2022. All Rights Reserved.",
    "currentPeriod": 1,
    "currentPeriodOrdinal": "1st",
    "currentPeriodTimeRemaining": "20:00",
    "periods": [
      {
        "periodType": "REGULAR",
        "num": 1,
        "ordinalNum": "1st",
        "home": {
          "goals": 0,
          "shotsOnGoal": 0,
          "rinkSide": "left"
        },
        "away": {
          "goals": 0,
          "shotsOnGoal": 0,
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
        "goals": 0,
        "shotsOnGoal": 0,
        "goaliePulled": false,
        "numSkaters": 0,
        "powerPlay": false
      },
      "away": {
        "team": {
          "id": 21,
          "name": "Colorado Avalanche",
          "link": "/api/v1/teams/21"
        },
        "goals": 0,
        "shotsOnGoal": 0,
        "goaliePulled": false,
        "numSkaters": 0,
        "powerPlay": false
      }
    },
    "powerPlayStrength": "Even",
    "hasShootout": false,
    "intermissionInfo": {
      "intermissionTimeRemaining": 0,
      "intermissionTimeElapsed": 0,
      "inIntermission": false
    }
  }

  const linescoreGoal = {
    "copyright": "NHL and the NHL Shield are registered trademarks of the National Hockey League. NHL and NHL team marks are the property of the NHL and its teams. © NHL 2022. All Rights Reserved.",
    "currentPeriod": 1,
    "currentPeriodOrdinal": "1st",
    "currentPeriodTimeRemaining": "18:54",
    "periods": [
      {
        "periodType": "REGULAR",
        "startTime": "2022-06-05T00:15:35Z",
        "num": 1,
        "ordinalNum": "1st",
        "home": {
          "goals": 1,
          "shotsOnGoal": 1,
          "rinkSide": "left"
        },
        "away": {
          "goals": 0,
          "shotsOnGoal": 0,
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
        "shotsOnGoal": 1,
        "goaliePulled": false,
        "numSkaters": 5,
        "powerPlay": false
      },
      "away": {
        "team": {
          "id": 21,
          "name": "Colorado Avalanche",
          "link": "/api/v1/teams/21"
        },
        "goals": 0,
        "shotsOnGoal": 0,
        "goaliePulled": false,
        "numSkaters": 5,
        "powerPlay": false
      }
    },
    "powerPlayStrength": "Even",
    "hasShootout": false,
    "intermissionInfo": {
      "intermissionTimeRemaining": 0,
      "intermissionTimeElapsed": 0,
      "inIntermission": false
    },
    "powerPlayInfo": {
      "situationTimeRemaining": 1134,
      "situationTimeElapsed": 66,
      "inSituation": false
    }
  }

  const linescoreGoal2 = {
    "copyright": "NHL and the NHL Shield are registered trademarks of the National Hockey League. NHL and NHL team marks are the property of the NHL and its teams. © NHL 2022. All Rights Reserved.",
    "currentPeriod": 1,
    "currentPeriodOrdinal": "1st",
    "currentPeriodTimeRemaining": "03:43",
    "periods": [
      {
        "periodType": "REGULAR",
        "startTime": "2022-06-05T00:15:35Z",
        "num": 1,
        "ordinalNum": "1st",
        "home": {
          "goals": 1,
          "shotsOnGoal": 6,
          "rinkSide": "left"
        },
        "away": {
          "goals": 1,
          "shotsOnGoal": 11,
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
        "shotsOnGoal": 6,
        "goaliePulled": false,
        "numSkaters": 5,
        "powerPlay": false
      },
      "away": {
        "team": {
          "id": 21,
          "name": "Colorado Avalanche",
          "link": "/api/v1/teams/21"
        },
        "goals": 1,
        "shotsOnGoal": 11,
        "goaliePulled": false,
        "numSkaters": 5,
        "powerPlay": false
      }
    },
    "powerPlayStrength": "Even",
    "hasShootout": false,
    "intermissionInfo": {
      "intermissionTimeRemaining": 0,
      "intermissionTimeElapsed": 0,
      "inIntermission": false
    },
    "powerPlayInfo": {
      "situationTimeRemaining": 223,
      "situationTimeElapsed": 281,
      "inSituation": false
    }
  }

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

  module.exports = {linescoreStart,
    linescoreGoal,
    linescoreGoal2,
    linescorePowerPlay
  };