// 20220604200522
// https://statsapi.web.nhl.com/api/v1/game/2021030323/feed/live

const feedLiveStart = {
    "copyright": "NHL and the NHL Shield are registered trademarks of the National Hockey League. NHL and NHL team marks are the property of the NHL and its teams. © NHL 2022. All Rights Reserved.",
    "gamePk": 2021030323,
    "link": "/api/v1/game/2021030323/feed/live",
    "metaData": {
      "wait": 10,
      "timeStamp": "20220605_000418"
    },
    "gameData": {
      "game": {
        "pk": 2021030323,
        "season": "20212022",
        "type": "P"
      },
      "datetime": {
        "dateTime": "2022-06-05T00:00:00Z"
      },
      "status": {
        "abstractGameState": "Preview",
        "codedGameState": "2",
        "detailedState": "Pre-Game",
        "statusCode": "2",
        "startTimeTBD": false
      },
      "teams": {
        "away": {
          "id": 21,
          "name": "Colorado Avalanche",
          "link": "/api/v1/teams/21",
          "venue": {
            "id": 5064,
            "name": "Ball Arena",
            "link": "/api/v1/venues/5064",
            "city": "Denver",
            "timeZone": {
              "id": "America/Denver",
              "offset": -6,
              "tz": "MDT"
            }
          },
          "abbreviation": "COL",
          "triCode": "COL",
          "teamName": "Avalanche",
          "locationName": "Colorado",
          "firstYearOfPlay": "1995",
          "division": {
            "id": 16,
            "name": "Central",
            "nameShort": "CEN",
            "link": "/api/v1/divisions/16",
            "abbreviation": "C"
          },
          "conference": {
            "id": 5,
            "name": "Western",
            "link": "/api/v1/conferences/5"
          },
          "franchise": {
            "franchiseId": 27,
            "teamName": "Avalanche",
            "link": "/api/v1/franchises/27"
          },
          "shortName": "Colorado",
          "officialSiteUrl": "http://www.coloradoavalanche.com/",
          "franchiseId": 27,
          "active": true
        },
        "home": {
          "id": 22,
          "name": "Edmonton Oilers",
          "link": "/api/v1/teams/22",
          "venue": {
            "id": 5100,
            "name": "Rogers Place",
            "link": "/api/v1/venues/5100",
            "city": "Edmonton",
            "timeZone": {
              "id": "America/Edmonton",
              "offset": -6,
              "tz": "MDT"
            }
          },
          "abbreviation": "EDM",
          "triCode": "EDM",
          "teamName": "Oilers",
          "locationName": "Edmonton",
          "firstYearOfPlay": "1979",
          "division": {
            "id": 15,
            "name": "Pacific",
            "nameShort": "PAC",
            "link": "/api/v1/divisions/15",
            "abbreviation": "P"
          },
          "conference": {
            "id": 5,
            "name": "Western",
            "link": "/api/v1/conferences/5"
          },
          "franchise": {
            "franchiseId": 25,
            "teamName": "Oilers",
            "link": "/api/v1/franchises/25"
          },
          "shortName": "Edmonton",
          "officialSiteUrl": "http://www.edmontonoilers.com/",
          "franchiseId": 25,
          "active": true
        }
      },
      "players": {
        "ID8476967": {
          "id": 8476967,
          "fullName": "Brett Kulak",
          "link": "/api/v1/people/8476967",
          "firstName": "Brett",
          "lastName": "Kulak",
          "primaryNumber": "27",
          "birthDate": "1994-01-06",
          "currentAge": 28,
          "birthCity": "Edmonton",
          "birthStateProvince": "AB",
          "birthCountry": "CAN",
          "nationality": "CAN",
          "height": "6' 1\"",
          "weight": 197,
          "active": true,
          "alternateCaptain": false,
          "captain": false,
          "rookie": false,
          "shootsCatches": "L",
          "rosterStatus": "Y",
          "currentTeam": {
            "id": 22,
            "name": "Edmonton Oilers",
            "link": "/api/v1/teams/22",
            "triCode": "EDM"
          },
          "primaryPosition": {
            "code": "D",
            "name": "Defenseman",
            "type": "Defenseman",
            "abbreviation": "D"
          }
        },
        "ID8477979": {
          "id": 8477979,
          "fullName": "Nicolas Aube-Kubel",
          "link": "/api/v1/people/8477979",
          "firstName": "Nicolas",
          "lastName": "Aube-Kubel",
          "primaryNumber": "16",
          "birthDate": "1996-05-10",
          "currentAge": 26,
          "birthCity": "Slave Lake",
          "birthStateProvince": "AB",
          "birthCountry": "CAN",
          "nationality": "CAN",
          "height": "5' 11\"",
          "weight": 187,
          "active": true,
          "alternateCaptain": false,
          "captain": false,
          "rookie": false,
          "shootsCatches": "R",
          "rosterStatus": "Y",
          "currentTeam": {
            "id": 21,
            "name": "Colorado Avalanche",
            "link": "/api/v1/teams/21",
            "triCode": "COL"
          },
          "primaryPosition": {
            "code": "R",
            "name": "Right Wing",
            "type": "Forward",
            "abbreviation": "RW"
          }
        },
        "ID8471794": {
          "id": 8471794,
          "fullName": "Darren Helm",
          "link": "/api/v1/people/8471794",
          "firstName": "Darren",
          "lastName": "Helm",
          "primaryNumber": "43",
          "birthDate": "1987-01-21",
          "currentAge": 35,
          "birthCity": "St. Andrews",
          "birthStateProvince": "MB",
          "birthCountry": "CAN",
          "nationality": "CAN",
          "height": "6' 0\"",
          "weight": 192,
          "active": true,
          "alternateCaptain": false,
          "captain": false,
          "rookie": false,
          "shootsCatches": "L",
          "rosterStatus": "Y",
          "currentTeam": {
            "id": 21,
            "name": "Colorado Avalanche",
            "link": "/api/v1/teams/21",
            "triCode": "COL"
          },
          "primaryPosition": {
            "code": "C",
            "name": "Center",
            "type": "Forward",
            "abbreviation": "C"
          }
        },
        "ID8476326": {
          "id": 8476326,
          "fullName": "Josh Archibald",
          "link": "/api/v1/people/8476326",
          "firstName": "Josh",
          "lastName": "Archibald",
          "primaryNumber": "15",
          "birthDate": "1992-10-06",
          "currentAge": 29,
          "birthCity": "Regina",
          "birthStateProvince": "SK",
          "birthCountry": "CAN",
          "nationality": "CAN",
          "height": "5' 10\"",
          "weight": 176,
          "active": true,
          "alternateCaptain": false,
          "captain": false,
          "rookie": false,
          "shootsCatches": "R",
          "rosterStatus": "Y",
          "currentTeam": {
            "id": 22,
            "name": "Edmonton Oilers",
            "link": "/api/v1/teams/22",
            "triCode": "EDM"
          },
          "primaryPosition": {
            "code": "R",
            "name": "Right Wing",
            "type": "Forward",
            "abbreviation": "RW"
          }
        },
        "ID8477934": {
          "id": 8477934,
          "fullName": "Leon Draisaitl",
          "link": "/api/v1/people/8477934",
          "firstName": "Leon",
          "lastName": "Draisaitl",
          "primaryNumber": "29",
          "birthDate": "1995-10-27",
          "currentAge": 26,
          "birthCity": "Cologne",
          "birthCountry": "DEU",
          "nationality": "DEU",
          "height": "6' 2\"",
          "weight": 208,
          "active": true,
          "alternateCaptain": true,
          "captain": false,
          "rookie": false,
          "shootsCatches": "L",
          "rosterStatus": "Y",
          "currentTeam": {
            "id": 22,
            "name": "Edmonton Oilers",
            "link": "/api/v1/teams/22",
            "triCode": "EDM"
          },
          "primaryPosition": {
            "code": "C",
            "name": "Center",
            "type": "Forward",
            "abbreviation": "C"
          }
        },
        "ID8471677": {
          "id": 8471677,
          "fullName": "Jack Johnson",
          "link": "/api/v1/people/8471677",
          "firstName": "Jack",
          "lastName": "Johnson",
          "primaryNumber": "3",
          "birthDate": "1987-01-13",
          "currentAge": 35,
          "birthCity": "Indianapolis",
          "birthStateProvince": "IN",
          "birthCountry": "USA",
          "nationality": "USA",
          "height": "6' 1\"",
          "weight": 227,
          "active": true,
          "alternateCaptain": false,
          "captain": false,
          "rookie": false,
          "shootsCatches": "L",
          "rosterStatus": "Y",
          "currentTeam": {
            "id": 21,
            "name": "Colorado Avalanche",
            "link": "/api/v1/teams/21",
            "triCode": "COL"
          },
          "primaryPosition": {
            "code": "D",
            "name": "Defenseman",
            "type": "Defenseman",
            "abbreviation": "D"
          }
        },
        "ID8478038": {
          "id": 8478038,
          "fullName": "Devon Toews",
          "link": "/api/v1/people/8478038",
          "firstName": "Devon",
          "lastName": "Toews",
          "primaryNumber": "7",
          "birthDate": "1994-02-21",
          "currentAge": 28,
          "birthCity": "Abbotsford",
          "birthStateProvince": "BC",
          "birthCountry": "CAN",
          "nationality": "CAN",
          "height": "6' 1\"",
          "weight": 191,
          "active": true,
          "alternateCaptain": false,
          "captain": false,
          "rookie": false,
          "shootsCatches": "L",
          "rosterStatus": "Y",
          "currentTeam": {
            "id": 21,
            "name": "Colorado Avalanche",
            "link": "/api/v1/teams/21",
            "triCode": "COL"
          },
          "primaryPosition": {
            "code": "D",
            "name": "Defenseman",
            "type": "Defenseman",
            "abbreviation": "D"
          }
        },
        "ID8476850": {
          "id": 8476850,
          "fullName": "Ryan Murray",
          "link": "/api/v1/people/8476850",
          "firstName": "Ryan",
          "lastName": "Murray",
          "primaryNumber": "28",
          "birthDate": "1993-09-27",
          "currentAge": 28,
          "birthCity": "Regina",
          "birthStateProvince": "SK",
          "birthCountry": "CAN",
          "nationality": "CAN",
          "height": "6' 1\"",
          "weight": 206,
          "active": true,
          "alternateCaptain": false,
          "captain": false,
          "rookie": false,
          "shootsCatches": "L",
          "rosterStatus": "Y",
          "currentTeam": {
            "id": 21,
            "name": "Colorado Avalanche",
            "link": "/api/v1/teams/21",
            "triCode": "COL"
          },
          "primaryPosition": {
            "code": "D",
            "name": "Defenseman",
            "type": "Defenseman",
            "abbreviation": "D"
          }
        },
        "ID8480822": {
          "id": 8480822,
          "fullName": "Martin Kaut",
          "link": "/api/v1/people/8480822",
          "firstName": "Martin",
          "lastName": "Kaut",
          "primaryNumber": "61",
          "birthDate": "1999-10-02",
          "currentAge": 22,
          "birthCity": "Brno",
          "birthCountry": "CZE",
          "nationality": "CZE",
          "height": "6' 2\"",
          "weight": 190,
          "active": true,
          "alternateCaptain": false,
          "captain": false,
          "rookie": true,
          "shootsCatches": "R",
          "rosterStatus": "N",
          "currentTeam": {
            "id": 21,
            "name": "Colorado Avalanche",
            "link": "/api/v1/teams/21",
            "triCode": "COL"
          },
          "primaryPosition": {
            "code": "R",
            "name": "Right Wing",
            "type": "Forward",
            "abbreviation": "RW"
          }
        },
        "ID8476454": {
          "id": 8476454,
          "fullName": "Ryan Nugent-Hopkins",
          "link": "/api/v1/people/8476454",
          "firstName": "Ryan",
          "lastName": "Nugent-Hopkins",
          "primaryNumber": "93",
          "birthDate": "1993-04-12",
          "currentAge": 29,
          "birthCity": "Burnaby",
          "birthStateProvince": "BC",
          "birthCountry": "CAN",
          "nationality": "CAN",
          "height": "6' 0\"",
          "weight": 184,
          "active": true,
          "alternateCaptain": true,
          "captain": false,
          "rookie": false,
          "shootsCatches": "L",
          "rosterStatus": "Y",
          "currentTeam": {
            "id": 22,
            "name": "Edmonton Oilers",
            "link": "/api/v1/teams/22",
            "triCode": "EDM"
          },
          "primaryPosition": {
            "code": "C",
            "name": "Center",
            "type": "Forward",
            "abbreviation": "C"
          }
        },
        "ID8477501": {
          "id": 8477501,
          "fullName": "Valeri Nichushkin",
          "link": "/api/v1/people/8477501",
          "firstName": "Valeri",
          "lastName": "Nichushkin",
          "primaryNumber": "13",
          "birthDate": "1995-03-04",
          "currentAge": 27,
          "birthCity": "Chelyabinsk",
          "birthCountry": "RUS",
          "nationality": "RUS",
          "height": "6' 4\"",
          "weight": 210,
          "active": true,
          "alternateCaptain": false,
          "captain": false,
          "rookie": false,
          "shootsCatches": "L",
          "rosterStatus": "Y",
          "currentTeam": {
            "id": 21,
            "name": "Colorado Avalanche",
            "link": "/api/v1/teams/21",
            "triCode": "COL"
          },
          "primaryPosition": {
            "code": "R",
            "name": "Right Wing",
            "type": "Forward",
            "abbreviation": "RW"
          }
        },
        "ID8476455": {
          "id": 8476455,
          "fullName": "Gabriel Landeskog",
          "link": "/api/v1/people/8476455",
          "firstName": "Gabriel",
          "lastName": "Landeskog",
          "primaryNumber": "92",
          "birthDate": "1992-11-23",
          "currentAge": 29,
          "birthCity": "Stockholm",
          "birthCountry": "SWE",
          "nationality": "SWE",
          "height": "6' 1\"",
          "weight": 215,
          "active": true,
          "alternateCaptain": false,
          "captain": true,
          "rookie": false,
          "shootsCatches": "L",
          "rosterStatus": "Y",
          "currentTeam": {
            "id": 21,
            "name": "Colorado Avalanche",
            "link": "/api/v1/teams/21",
            "triCode": "COL"
          },
          "primaryPosition": {
            "code": "L",
            "name": "Left Wing",
            "type": "Forward",
            "abbreviation": "LW"
          }
        },
        "ID8475169": {
          "id": 8475169,
          "fullName": "Evander Kane",
          "link": "/api/v1/people/8475169",
          "firstName": "Evander",
          "lastName": "Kane",
          "primaryNumber": "91",
          "birthDate": "1991-08-02",
          "currentAge": 30,
          "birthCity": "Vancouver",
          "birthStateProvince": "BC",
          "birthCountry": "CAN",
          "nationality": "CAN",
          "height": "6' 2\"",
          "weight": 210,
          "active": true,
          "alternateCaptain": false,
          "captain": false,
          "rookie": false,
          "shootsCatches": "L",
          "rosterStatus": "Y",
          "currentTeam": {
            "id": 22,
            "name": "Edmonton Oilers",
            "link": "/api/v1/teams/22",
            "triCode": "EDM"
          },
          "primaryPosition": {
            "code": "L",
            "name": "Left Wing",
            "type": "Forward",
            "abbreviation": "LW"
          }
        },
        "ID8477981": {
          "id": 8477981,
          "fullName": "Roland McKeown",
          "link": "/api/v1/people/8477981",
          "firstName": "Roland",
          "lastName": "McKeown",
          "primaryNumber": "10",
          "birthDate": "1996-01-20",
          "currentAge": 26,
          "birthCity": "Listowel",
          "birthStateProvince": "ON",
          "birthCountry": "CAN",
          "nationality": "CAN",
          "height": "6' 1\"",
          "weight": 195,
          "active": true,
          "alternateCaptain": false,
          "captain": false,
          "rookie": true,
          "shootsCatches": "R",
          "rosterStatus": "N",
          "currentTeam": {
            "id": 21,
            "name": "Colorado Avalanche",
            "link": "/api/v1/teams/21",
            "triCode": "COL"
          },
          "primaryPosition": {
            "code": "D",
            "name": "Defenseman",
            "type": "Defenseman",
            "abbreviation": "D"
          }
        },
        "ID8476495": {
          "id": 8476495,
          "fullName": "Seth Griffith",
          "link": "/api/v1/people/8476495",
          "firstName": "Seth",
          "lastName": "Griffith",
          "primaryNumber": "23",
          "birthDate": "1993-01-04",
          "currentAge": 29,
          "birthCity": "Wallaceburg",
          "birthStateProvince": "ON",
          "birthCountry": "CAN",
          "nationality": "CAN",
          "height": "5' 9\"",
          "weight": 190,
          "active": true,
          "alternateCaptain": false,
          "captain": false,
          "rookie": false,
          "shootsCatches": "R",
          "rosterStatus": "Y",
          "currentTeam": {
            "id": 22,
            "name": "Edmonton Oilers",
            "link": "/api/v1/teams/22",
            "triCode": "EDM"
          },
          "primaryPosition": {
            "code": "C",
            "name": "Center",
            "type": "Forward",
            "abbreviation": "C"
          }
        },
        "ID8480069": {
          "id": 8480069,
          "fullName": "Cale Makar",
          "link": "/api/v1/people/8480069",
          "firstName": "Cale",
          "lastName": "Makar",
          "primaryNumber": "8",
          "birthDate": "1998-10-30",
          "currentAge": 23,
          "birthCity": "Calgary",
          "birthStateProvince": "AB",
          "birthCountry": "CAN",
          "nationality": "CAN",
          "height": "5' 11\"",
          "weight": 187,
          "active": true,
          "alternateCaptain": false,
          "captain": false,
          "rookie": false,
          "shootsCatches": "R",
          "rosterStatus": "Y",
          "currentTeam": {
            "id": 21,
            "name": "Colorado Avalanche",
            "link": "/api/v1/teams/21",
            "triCode": "COL"
          },
          "primaryPosition": {
            "code": "D",
            "name": "Defenseman",
            "type": "Defenseman",
            "abbreviation": "D"
          }
        },
        "ID8481477": {
          "id": 8481477,
          "fullName": "Nico Sturm",
          "link": "/api/v1/people/8481477",
          "firstName": "Nico",
          "lastName": "Sturm",
          "primaryNumber": "78",
          "birthDate": "1995-05-03",
          "currentAge": 27,
          "birthCity": "Augsburg",
          "birthCountry": "DEU",
          "nationality": "DEU",
          "height": "6' 3\"",
          "weight": 209,
          "active": true,
          "alternateCaptain": false,
          "captain": false,
          "rookie": false,
          "shootsCatches": "L",
          "rosterStatus": "Y",
          "currentTeam": {
            "id": 21,
            "name": "Colorado Avalanche",
            "link": "/api/v1/teams/21",
            "triCode": "COL"
          },
          "primaryPosition": {
            "code": "C",
            "name": "Center",
            "type": "Forward",
            "abbreviation": "C"
          }
        },
        "ID8481598": {
          "id": 8481598,
          "fullName": "Philip Broberg",
          "link": "/api/v1/people/8481598",
          "firstName": "Philip",
          "lastName": "Broberg",
          "primaryNumber": "86",
          "birthDate": "2001-06-25",
          "currentAge": 20,
          "birthCity": "Orebro",
          "birthCountry": "SWE",
          "nationality": "SWE",
          "height": "6' 3\"",
          "weight": 199,
          "active": true,
          "alternateCaptain": false,
          "captain": false,
          "rookie": true,
          "shootsCatches": "L",
          "rosterStatus": "Y",
          "currentTeam": {
            "id": 22,
            "name": "Edmonton Oilers",
            "link": "/api/v1/teams/22",
            "triCode": "EDM"
          },
          "primaryPosition": {
            "code": "D",
            "name": "Defenseman",
            "type": "Defenseman",
            "abbreviation": "D"
          }
        },
        "ID8469608": {
          "id": 8469608,
          "fullName": "Mike Smith",
          "link": "/api/v1/people/8469608",
          "firstName": "Mike",
          "lastName": "Smith",
          "primaryNumber": "41",
          "birthDate": "1982-03-22",
          "currentAge": 40,
          "birthCity": "Kingston",
          "birthStateProvince": "ON",
          "birthCountry": "CAN",
          "nationality": "CAN",
          "height": "6' 5\"",
          "weight": 220,
          "active": true,
          "alternateCaptain": false,
          "captain": false,
          "rookie": false,
          "shootsCatches": "L",
          "rosterStatus": "Y",
          "currentTeam": {
            "id": 22,
            "name": "Edmonton Oilers",
            "link": "/api/v1/teams/22",
            "triCode": "EDM"
          },
          "primaryPosition": {
            "code": "G",
            "name": "Goalie",
            "type": "Goalie",
            "abbreviation": "G"
          }
        },
        "ID8480041": {
          "id": 8480041,
          "fullName": "Dmitri Samorukov",
          "link": "/api/v1/people/8480041",
          "firstName": "Dmitri",
          "lastName": "Samorukov",
          "primaryNumber": "58",
          "birthDate": "1999-06-16",
          "currentAge": 22,
          "birthCity": "Volgograd",
          "birthCountry": "RUS",
          "nationality": "RUS",
          "height": "6' 3\"",
          "weight": 188,
          "active": true,
          "alternateCaptain": false,
          "captain": false,
          "rookie": true,
          "shootsCatches": "L",
          "rosterStatus": "Y",
          "currentTeam": {
            "id": 22,
            "name": "Edmonton Oilers",
            "link": "/api/v1/teams/22",
            "triCode": "EDM"
          },
          "primaryPosition": {
            "code": "D",
            "name": "Defenseman",
            "type": "Defenseman",
            "abbreviation": "D"
          }
        },
        "ID8471729": {
          "id": 8471729,
          "fullName": "Kris Russell",
          "link": "/api/v1/people/8471729",
          "firstName": "Kris",
          "lastName": "Russell",
          "primaryNumber": "6",
          "birthDate": "1987-05-02",
          "currentAge": 35,
          "birthCity": "Caroline",
          "birthStateProvince": "AB",
          "birthCountry": "CAN",
          "nationality": "CAN",
          "height": "5' 10\"",
          "weight": 170,
          "active": true,
          "alternateCaptain": false,
          "captain": false,
          "rookie": false,
          "shootsCatches": "L",
          "rosterStatus": "Y",
          "currentTeam": {
            "id": 22,
            "name": "Edmonton Oilers",
            "link": "/api/v1/teams/22",
            "triCode": "EDM"
          },
          "primaryPosition": {
            "code": "D",
            "name": "Defenseman",
            "type": "Defenseman",
            "abbreviation": "D"
          }
        },
        "ID8473544": {
          "id": 8473544,
          "fullName": "Derick Brassard",
          "link": "/api/v1/people/8473544",
          "firstName": "Derick",
          "lastName": "Brassard",
          "primaryNumber": "16",
          "birthDate": "1987-09-22",
          "currentAge": 34,
          "birthCity": "Hull",
          "birthStateProvince": "QC",
          "birthCountry": "CAN",
          "nationality": "CAN",
          "height": "6' 1\"",
          "weight": 202,
          "active": true,
          "alternateCaptain": false,
          "captain": false,
          "rookie": false,
          "shootsCatches": "L",
          "rosterStatus": "Y",
          "currentTeam": {
            "id": 22,
            "name": "Edmonton Oilers",
            "link": "/api/v1/teams/22",
            "triCode": "EDM"
          },
          "primaryPosition": {
            "code": "C",
            "name": "Center",
            "type": "Forward",
            "abbreviation": "C"
          }
        },
        "ID8477476": {
          "id": 8477476,
          "fullName": "Artturi Lehkonen",
          "link": "/api/v1/people/8477476",
          "firstName": "Artturi",
          "lastName": "Lehkonen",
          "primaryNumber": "62",
          "birthDate": "1995-07-04",
          "currentAge": 26,
          "birthCity": "Piikkio",
          "birthCountry": "FIN",
          "nationality": "FIN",
          "height": "5' 11\"",
          "weight": 179,
          "active": true,
          "alternateCaptain": false,
          "captain": false,
          "rookie": false,
          "shootsCatches": "L",
          "rosterStatus": "Y",
          "currentTeam": {
            "id": 21,
            "name": "Colorado Avalanche",
            "link": "/api/v1/teams/21",
            "triCode": "COL"
          },
          "primaryPosition": {
            "code": "L",
            "name": "Left Wing",
            "type": "Forward",
            "abbreviation": "LW"
          }
        },
        "ID8470281": {
          "id": 8470281,
          "fullName": "Duncan Keith",
          "link": "/api/v1/people/8470281",
          "firstName": "Duncan",
          "lastName": "Keith",
          "primaryNumber": "2",
          "birthDate": "1983-07-16",
          "currentAge": 38,
          "birthCity": "Winnipeg",
          "birthStateProvince": "MB",
          "birthCountry": "CAN",
          "nationality": "CAN",
          "height": "6' 1\"",
          "weight": 192,
          "active": true,
          "alternateCaptain": false,
          "captain": false,
          "rookie": false,
          "shootsCatches": "L",
          "rosterStatus": "Y",
          "currentTeam": {
            "id": 22,
            "name": "Edmonton Oilers",
            "link": "/api/v1/teams/22",
            "triCode": "EDM"
          },
          "primaryPosition": {
            "code": "D",
            "name": "Defenseman",
            "type": "Defenseman",
            "abbreviation": "D"
          }
        },
        "ID8475178": {
          "id": 8475178,
          "fullName": "Zack Kassian",
          "link": "/api/v1/people/8475178",
          "firstName": "Zack",
          "lastName": "Kassian",
          "primaryNumber": "44",
          "birthDate": "1991-01-24",
          "currentAge": 31,
          "birthCity": "Windsor",
          "birthStateProvince": "ON",
          "birthCountry": "CAN",
          "nationality": "CAN",
          "height": "6' 3\"",
          "weight": 211,
          "active": true,
          "alternateCaptain": false,
          "captain": false,
          "rookie": false,
          "shootsCatches": "R",
          "rosterStatus": "Y",
          "currentTeam": {
            "id": 22,
            "name": "Edmonton Oilers",
            "link": "/api/v1/teams/22",
            "triCode": "EDM"
          },
          "primaryPosition": {
            "code": "R",
            "name": "Right Wing",
            "type": "Forward",
            "abbreviation": "RW"
          }
        },
        "ID8479338": {
          "id": 8479338,
          "fullName": "Markus Niemelainen",
          "link": "/api/v1/people/8479338",
          "firstName": "Markus",
          "lastName": "Niemelainen",
          "primaryNumber": "80",
          "birthDate": "1998-06-08",
          "currentAge": 23,
          "birthCity": "Kuopio",
          "birthCountry": "FIN",
          "nationality": "FIN",
          "height": "6' 6\"",
          "weight": 190,
          "active": true,
          "alternateCaptain": false,
          "captain": false,
          "rookie": true,
          "shootsCatches": "L",
          "rosterStatus": "Y",
          "currentTeam": {
            "id": 22,
            "name": "Edmonton Oilers",
            "link": "/api/v1/teams/22",
            "triCode": "EDM"
          },
          "primaryPosition": {
            "code": "D",
            "name": "Defenseman",
            "type": "Defenseman",
            "abbreviation": "D"
          }
        },
        "ID8479973": {
          "id": 8479973,
          "fullName": "Stuart Skinner",
          "link": "/api/v1/people/8479973",
          "firstName": "Stuart",
          "lastName": "Skinner",
          "primaryNumber": "74",
          "birthDate": "1998-11-01",
          "currentAge": 23,
          "birthCity": "Edmonton",
          "birthStateProvince": "AB",
          "birthCountry": "CAN",
          "nationality": "CAN",
          "height": "6' 4\"",
          "weight": 206,
          "active": true,
          "alternateCaptain": false,
          "captain": false,
          "rookie": true,
          "shootsCatches": "L",
          "rosterStatus": "Y",
          "currentTeam": {
            "id": 22,
            "name": "Edmonton Oilers",
            "link": "/api/v1/teams/22",
            "triCode": "EDM"
          },
          "primaryPosition": {
            "code": "G",
            "name": "Goalie",
            "type": "Goalie",
            "abbreviation": "G"
          }
        },
        "ID8478402": {
          "id": 8478402,
          "fullName": "Connor McDavid",
          "link": "/api/v1/people/8478402",
          "firstName": "Connor",
          "lastName": "McDavid",
          "primaryNumber": "97",
          "birthDate": "1997-01-13",
          "currentAge": 25,
          "birthCity": "Richmond Hill",
          "birthStateProvince": "ON",
          "birthCountry": "CAN",
          "nationality": "CAN",
          "height": "6' 1\"",
          "weight": 193,
          "active": true,
          "alternateCaptain": false,
          "captain": true,
          "rookie": false,
          "shootsCatches": "L",
          "rosterStatus": "Y",
          "currentTeam": {
            "id": 22,
            "name": "Edmonton Oilers",
            "link": "/api/v1/teams/22",
            "triCode": "EDM"
          },
          "primaryPosition": {
            "code": "C",
            "name": "Center",
            "type": "Forward",
            "abbreviation": "C"
          }
        },
        "ID8481529": {
          "id": 8481529,
          "fullName": "Trent Miner",
          "link": "/api/v1/people/8481529",
          "firstName": "Trent",
          "lastName": "Miner",
          "primaryNumber": "50",
          "birthDate": "2001-02-05",
          "currentAge": 21,
          "birthCity": "Brandon",
          "birthStateProvince": "MB",
          "birthCountry": "CAN",
          "nationality": "CAN",
          "height": "6' 1\"",
          "weight": 185,
          "active": true,
          "alternateCaptain": false,
          "captain": false,
          "rookie": true,
          "shootsCatches": "L",
          "rosterStatus": "N",
          "currentTeam": {
            "id": 21,
            "name": "Colorado Avalanche",
            "link": "/api/v1/teams/21",
            "triCode": "COL"
          },
          "primaryPosition": {
            "code": "G",
            "name": "Goalie",
            "type": "Goalie",
            "abbreviation": "G"
          }
        },
        "ID8479573": {
          "id": 8479573,
          "fullName": "Mikhail Maltsev",
          "link": "/api/v1/people/8479573",
          "firstName": "Mikhail",
          "lastName": "Maltsev",
          "birthDate": "1998-03-12",
          "currentAge": 24,
          "birthCity": "St. Petersburg",
          "birthCountry": "RUS",
          "nationality": "RUS",
          "height": "6' 3\"",
          "weight": 198,
          "active": true,
          "alternateCaptain": false,
          "captain": false,
          "rookie": false,
          "shootsCatches": "L",
          "rosterStatus": "N",
          "currentTeam": {
            "id": 21,
            "name": "Colorado Avalanche",
            "link": "/api/v1/teams/21",
            "triCode": "COL"
          },
          "primaryPosition": {
            "code": "L",
            "name": "Left Wing",
            "type": "Forward",
            "abbreviation": "LW"
          }
        },
        "ID8474089": {
          "id": 8474089,
          "fullName": "Brad Malone",
          "link": "/api/v1/people/8474089",
          "firstName": "Brad",
          "lastName": "Malone",
          "primaryNumber": "24",
          "birthDate": "1989-05-20",
          "currentAge": 33,
          "birthCity": "Miramichi",
          "birthStateProvince": "NB",
          "birthCountry": "CAN",
          "nationality": "CAN",
          "height": "6' 2\"",
          "weight": 217,
          "active": true,
          "alternateCaptain": false,
          "captain": false,
          "rookie": false,
          "shootsCatches": "L",
          "rosterStatus": "Y",
          "currentTeam": {
            "id": 22,
            "name": "Edmonton Oilers",
            "link": "/api/v1/teams/22",
            "triCode": "EDM"
          },
          "primaryPosition": {
            "code": "C",
            "name": "Center",
            "type": "Forward",
            "abbreviation": "C"
          }
        },
        "ID8477073": {
          "id": 8477073,
          "fullName": "Kurtis MacDermid",
          "link": "/api/v1/people/8477073",
          "firstName": "Kurtis",
          "lastName": "MacDermid",
          "primaryNumber": "56",
          "birthDate": "1994-03-25",
          "currentAge": 28,
          "birthCity": "Sauble Beach",
          "birthStateProvince": "ON",
          "birthCountry": "CAN",
          "nationality": "CAN",
          "height": "6' 5\"",
          "weight": 233,
          "active": true,
          "alternateCaptain": false,
          "captain": false,
          "rookie": false,
          "shootsCatches": "L",
          "rosterStatus": "Y",
          "currentTeam": {
            "id": 21,
            "name": "Colorado Avalanche",
            "link": "/api/v1/teams/21",
            "triCode": "COL"
          },
          "primaryPosition": {
            "code": "D",
            "name": "Defenseman",
            "type": "Defenseman",
            "abbreviation": "D"
          }
        },
        "ID8475172": {
          "id": 8475172,
          "fullName": "Nazem Kadri",
          "link": "/api/v1/people/8475172",
          "firstName": "Nazem",
          "lastName": "Kadri",
          "primaryNumber": "91",
          "birthDate": "1990-10-06",
          "currentAge": 31,
          "birthCity": "London",
          "birthStateProvince": "ON",
          "birthCountry": "CAN",
          "nationality": "CAN",
          "height": "6' 0\"",
          "weight": 192,
          "active": true,
          "alternateCaptain": false,
          "captain": false,
          "rookie": false,
          "shootsCatches": "L",
          "rosterStatus": "Y",
          "currentTeam": {
            "id": 21,
            "name": "Colorado Avalanche",
            "link": "/api/v1/teams/21",
            "triCode": "COL"
          },
          "primaryPosition": {
            "code": "C",
            "name": "Center",
            "type": "Forward",
            "abbreviation": "C"
          }
        },
        "ID8480112": {
          "id": 8480112,
          "fullName": "Hunter Miska",
          "link": "/api/v1/people/8480112",
          "firstName": "Hunter",
          "lastName": "Miska",
          "primaryNumber": "32",
          "birthDate": "1995-07-07",
          "currentAge": 26,
          "birthCity": "North Branch",
          "birthStateProvince": "MN",
          "birthCountry": "USA",
          "nationality": "USA",
          "height": "6' 1\"",
          "weight": 175,
          "active": true,
          "alternateCaptain": false,
          "captain": false,
          "rookie": false,
          "shootsCatches": "L",
          "rosterStatus": "N",
          "currentTeam": {
            "id": 21,
            "name": "Colorado Avalanche",
            "link": "/api/v1/teams/21",
            "triCode": "COL"
          },
          "primaryPosition": {
            "code": "G",
            "name": "Goalie",
            "type": "Goalie",
            "abbreviation": "G"
          }
        },
        "ID8481524": {
          "id": 8481524,
          "fullName": "Bowen Byram",
          "link": "/api/v1/people/8481524",
          "firstName": "Bowen",
          "lastName": "Byram",
          "primaryNumber": "4",
          "birthDate": "2001-06-13",
          "currentAge": 20,
          "birthCity": "Cranbrook",
          "birthStateProvince": "BC",
          "birthCountry": "CAN",
          "nationality": "CAN",
          "height": "6' 1\"",
          "weight": 190,
          "active": true,
          "alternateCaptain": false,
          "captain": false,
          "rookie": true,
          "shootsCatches": "L",
          "rosterStatus": "Y",
          "currentTeam": {
            "id": 21,
            "name": "Colorado Avalanche",
            "link": "/api/v1/teams/21",
            "triCode": "COL"
          },
          "primaryPosition": {
            "code": "D",
            "name": "Defenseman",
            "type": "Defenseman",
            "abbreviation": "D"
          }
        },
        "ID8481020": {
          "id": 8481020,
          "fullName": "Justus Annunen",
          "link": "/api/v1/people/8481020",
          "firstName": "Justus",
          "lastName": "Annunen",
          "primaryNumber": "60",
          "birthDate": "2000-03-11",
          "currentAge": 22,
          "birthCity": "Kempele",
          "birthCountry": "FIN",
          "nationality": "FIN",
          "height": "6' 4\"",
          "weight": 210,
          "active": true,
          "alternateCaptain": false,
          "captain": false,
          "rookie": true,
          "shootsCatches": "L",
          "rosterStatus": "N",
          "currentTeam": {
            "id": 21,
            "name": "Colorado Avalanche",
            "link": "/api/v1/teams/21",
            "triCode": "COL"
          },
          "primaryPosition": {
            "code": "G",
            "name": "Goalie",
            "type": "Goalie",
            "abbreviation": "G"
          }
        },
        "ID8482077": {
          "id": 8482077,
          "fullName": "Dylan Holloway",
          "link": "/api/v1/people/8482077",
          "firstName": "Dylan",
          "lastName": "Holloway",
          "primaryNumber": "36",
          "birthDate": "2001-09-23",
          "currentAge": 20,
          "birthCity": "Calgary",
          "birthStateProvince": "AB",
          "birthCountry": "CAN",
          "nationality": "CAN",
          "height": "6' 1\"",
          "weight": 203,
          "active": true,
          "alternateCaptain": false,
          "captain": false,
          "rookie": true,
          "shootsCatches": "L",
          "rosterStatus": "Y",
          "currentTeam": {
            "id": 22,
            "name": "Edmonton Oilers",
            "link": "/api/v1/teams/22",
            "triCode": "EDM"
          },
          "primaryPosition": {
            "code": "L",
            "name": "Left Wing",
            "type": "Forward",
            "abbreviation": "LW"
          }
        },
        "ID8481186": {
          "id": 8481186,
          "fullName": "Logan O'Connor",
          "link": "/api/v1/people/8481186",
          "firstName": "Logan",
          "lastName": "O'Connor",
          "primaryNumber": "25",
          "birthDate": "1996-08-14",
          "currentAge": 25,
          "birthCity": "Missouri City",
          "birthStateProvince": "TX",
          "birthCountry": "USA",
          "nationality": "USA",
          "height": "6' 0\"",
          "weight": 175,
          "active": true,
          "alternateCaptain": false,
          "captain": false,
          "rookie": false,
          "shootsCatches": "R",
          "rosterStatus": "Y",
          "currentTeam": {
            "id": 21,
            "name": "Colorado Avalanche",
            "link": "/api/v1/teams/21",
            "triCode": "COL"
          },
          "primaryPosition": {
            "code": "R",
            "name": "Right Wing",
            "type": "Forward",
            "abbreviation": "RW"
          }
        },
        "ID8477998": {
          "id": 8477998,
          "fullName": "Warren Foegele",
          "link": "/api/v1/people/8477998",
          "firstName": "Warren",
          "lastName": "Foegele",
          "primaryNumber": "37",
          "birthDate": "1996-04-01",
          "currentAge": 26,
          "birthCity": "Markham",
          "birthStateProvince": "ON",
          "birthCountry": "CAN",
          "nationality": "CAN",
          "height": "6' 2\"",
          "weight": 198,
          "active": true,
          "alternateCaptain": false,
          "captain": false,
          "rookie": false,
          "shootsCatches": "L",
          "rosterStatus": "Y",
          "currentTeam": {
            "id": 22,
            "name": "Edmonton Oilers",
            "link": "/api/v1/teams/22",
            "triCode": "EDM"
          },
          "primaryPosition": {
            "code": "L",
            "name": "Left Wing",
            "type": "Forward",
            "abbreviation": "LW"
          }
        },
        "ID8479977": {
          "id": 8479977,
          "fullName": "Kailer Yamamoto",
          "link": "/api/v1/people/8479977",
          "firstName": "Kailer",
          "lastName": "Yamamoto",
          "primaryNumber": "56",
          "birthDate": "1998-09-29",
          "currentAge": 23,
          "birthCity": "Spokane",
          "birthStateProvince": "WA",
          "birthCountry": "USA",
          "nationality": "USA",
          "height": "5' 8\"",
          "weight": 153,
          "active": true,
          "alternateCaptain": false,
          "captain": false,
          "rookie": false,
          "shootsCatches": "R",
          "rosterStatus": "Y",
          "currentTeam": {
            "id": 22,
            "name": "Edmonton Oilers",
            "link": "/api/v1/teams/22",
            "triCode": "EDM"
          },
          "primaryPosition": {
            "code": "R",
            "name": "Right Wing",
            "type": "Forward",
            "abbreviation": "RW"
          }
        },
        "ID8471699": {
          "id": 8471699,
          "fullName": "Andrew Cogliano",
          "link": "/api/v1/people/8471699",
          "firstName": "Andrew",
          "lastName": "Cogliano",
          "primaryNumber": "11",
          "birthDate": "1987-06-14",
          "currentAge": 34,
          "birthCity": "Toronto",
          "birthStateProvince": "ON",
          "birthCountry": "CAN",
          "nationality": "CAN",
          "height": "5' 10\"",
          "weight": 179,
          "active": true,
          "alternateCaptain": false,
          "captain": false,
          "rookie": false,
          "shootsCatches": "L",
          "rosterStatus": "Y",
          "currentTeam": {
            "id": 21,
            "name": "Colorado Avalanche",
            "link": "/api/v1/teams/21",
            "triCode": "COL"
          },
          "primaryPosition": {
            "code": "C",
            "name": "Center",
            "type": "Forward",
            "abbreviation": "C"
          }
        },
        "ID8477444": {
          "id": 8477444,
          "fullName": "Andre Burakovsky",
          "link": "/api/v1/people/8477444",
          "firstName": "Andre",
          "lastName": "Burakovsky",
          "primaryNumber": "95",
          "birthDate": "1995-02-09",
          "currentAge": 27,
          "birthCity": "Klagenfurt",
          "birthCountry": "AUT",
          "nationality": "SWE",
          "height": "6' 3\"",
          "weight": 201,
          "active": true,
          "alternateCaptain": false,
          "captain": false,
          "rookie": false,
          "shootsCatches": "L",
          "rosterStatus": "Y",
          "currentTeam": {
            "id": 21,
            "name": "Colorado Avalanche",
            "link": "/api/v1/teams/21",
            "triCode": "COL"
          },
          "primaryPosition": {
            "code": "L",
            "name": "Left Wing",
            "type": "Forward",
            "abbreviation": "LW"
          }
        },
        "ID8482108": {
          "id": 8482108,
          "fullName": "Carter Savoie",
          "link": "/api/v1/people/8482108",
          "firstName": "Carter",
          "lastName": "Savoie",
          "birthDate": "2002-01-23",
          "currentAge": 20,
          "birthCity": "St. Albert",
          "birthStateProvince": "AB",
          "birthCountry": "CAN",
          "nationality": "CAN",
          "height": "5' 9\"",
          "weight": 192,
          "active": true,
          "alternateCaptain": false,
          "captain": false,
          "rookie": true,
          "shootsCatches": "L",
          "rosterStatus": "N",
          "currentTeam": {
            "id": 22,
            "name": "Edmonton Oilers",
            "link": "/api/v1/teams/22",
            "triCode": "EDM"
          },
          "primaryPosition": {
            "code": "L",
            "name": "Left Wing",
            "type": "Forward",
            "abbreviation": "LW"
          }
        },
        "ID8476312": {
          "id": 8476312,
          "fullName": "Josh Manson",
          "link": "/api/v1/people/8476312",
          "firstName": "Josh",
          "lastName": "Manson",
          "primaryNumber": "42",
          "birthDate": "1991-10-07",
          "currentAge": 30,
          "birthCity": "Hinsdale",
          "birthStateProvince": "IL",
          "birthCountry": "USA",
          "nationality": "CAN",
          "height": "6' 3\"",
          "weight": 218,
          "active": true,
          "alternateCaptain": false,
          "captain": false,
          "rookie": false,
          "shootsCatches": "R",
          "rosterStatus": "Y",
          "currentTeam": {
            "id": 21,
            "name": "Colorado Avalanche",
            "link": "/api/v1/teams/21",
            "triCode": "COL"
          },
          "primaryPosition": {
            "code": "D",
            "name": "Defenseman",
            "type": "Defenseman",
            "abbreviation": "D"
          }
        },
        "ID8477126": {
          "id": 8477126,
          "fullName": "Jayson Megna",
          "link": "/api/v1/people/8477126",
          "firstName": "Jayson",
          "lastName": "Megna",
          "primaryNumber": "12",
          "birthDate": "1990-02-01",
          "currentAge": 32,
          "birthCity": "Fort Lauderdale",
          "birthStateProvince": "FL",
          "birthCountry": "USA",
          "nationality": "USA",
          "height": "6' 1\"",
          "weight": 195,
          "active": true,
          "alternateCaptain": false,
          "captain": false,
          "rookie": false,
          "shootsCatches": "R",
          "rosterStatus": "N",
          "currentTeam": {
            "id": 21,
            "name": "Colorado Avalanche",
            "link": "/api/v1/teams/21",
            "triCode": "COL"
          },
          "primaryPosition": {
            "code": "C",
            "name": "Center",
            "type": "Forward",
            "abbreviation": "C"
          }
        },
        "ID8480802": {
          "id": 8480802,
          "fullName": "Ryan McLeod",
          "link": "/api/v1/people/8480802",
          "firstName": "Ryan",
          "lastName": "McLeod",
          "primaryNumber": "71",
          "birthDate": "1999-09-21",
          "currentAge": 22,
          "birthCity": "Mississauga",
          "birthStateProvince": "ON",
          "birthCountry": "CAN",
          "nationality": "CAN",
          "height": "6' 2\"",
          "weight": 207,
          "active": true,
          "alternateCaptain": false,
          "captain": false,
          "rookie": true,
          "shootsCatches": "L",
          "rosterStatus": "Y",
          "currentTeam": {
            "id": 22,
            "name": "Edmonton Oilers",
            "link": "/api/v1/teams/22",
            "triCode": "EDM"
          },
          "primaryPosition": {
            "code": "C",
            "name": "Center",
            "type": "Forward",
            "abbreviation": "C"
          }
        },
        "ID8479344": {
          "id": 8479344,
          "fullName": "Jesse Puljujarvi",
          "link": "/api/v1/people/8479344",
          "firstName": "Jesse",
          "lastName": "Puljujarvi",
          "primaryNumber": "13",
          "birthDate": "1998-05-07",
          "currentAge": 24,
          "birthCity": "Alvkarleby",
          "birthCountry": "SWE",
          "nationality": "FIN",
          "height": "6' 4\"",
          "weight": 201,
          "active": true,
          "alternateCaptain": false,
          "captain": false,
          "rookie": false,
          "shootsCatches": "R",
          "rosterStatus": "Y",
          "currentTeam": {
            "id": 22,
            "name": "Edmonton Oilers",
            "link": "/api/v1/teams/22",
            "triCode": "EDM"
          },
          "primaryPosition": {
            "code": "R",
            "name": "Right Wing",
            "type": "Forward",
            "abbreviation": "RW"
          }
        },
        "ID8480803": {
          "id": 8480803,
          "fullName": "Evan Bouchard",
          "link": "/api/v1/people/8480803",
          "firstName": "Evan",
          "lastName": "Bouchard",
          "primaryNumber": "75",
          "birthDate": "1999-10-20",
          "currentAge": 22,
          "birthCity": "Oakville",
          "birthStateProvince": "ON",
          "birthCountry": "CAN",
          "nationality": "CAN",
          "height": "6' 3\"",
          "weight": 194,
          "active": true,
          "alternateCaptain": false,
          "captain": false,
          "rookie": false,
          "shootsCatches": "R",
          "rosterStatus": "Y",
          "currentTeam": {
            "id": 22,
            "name": "Edmonton Oilers",
            "link": "/api/v1/teams/22",
            "triCode": "EDM"
          },
          "primaryPosition": {
            "code": "D",
            "name": "Defenseman",
            "type": "Defenseman",
            "abbreviation": "D"
          }
        },
        "ID8481618": {
          "id": 8481618,
          "fullName": "Alex Newhook",
          "link": "/api/v1/people/8481618",
          "firstName": "Alex",
          "lastName": "Newhook",
          "primaryNumber": "18",
          "birthDate": "2001-01-28",
          "currentAge": 21,
          "birthCity": "St. John's",
          "birthStateProvince": "NL",
          "birthCountry": "CAN",
          "nationality": "CAN",
          "height": "5' 10\"",
          "weight": 190,
          "active": true,
          "alternateCaptain": false,
          "captain": false,
          "rookie": true,
          "shootsCatches": "L",
          "rosterStatus": "Y",
          "currentTeam": {
            "id": 21,
            "name": "Colorado Avalanche",
            "link": "/api/v1/teams/21",
            "triCode": "COL"
          },
          "primaryPosition": {
            "code": "C",
            "name": "Center",
            "type": "Forward",
            "abbreviation": "C"
          }
        },
        "ID8480925": {
          "id": 8480925,
          "fullName": "Pavel Francouz",
          "link": "/api/v1/people/8480925",
          "firstName": "Pavel",
          "lastName": "Francouz",
          "primaryNumber": "39",
          "birthDate": "1990-06-03",
          "currentAge": 32,
          "birthCity": "Plzen",
          "birthCountry": "CZE",
          "nationality": "CZE",
          "height": "6' 0\"",
          "weight": 179,
          "active": true,
          "alternateCaptain": false,
          "captain": false,
          "rookie": false,
          "shootsCatches": "R",
          "rosterStatus": "Y",
          "currentTeam": {
            "id": 21,
            "name": "Colorado Avalanche",
            "link": "/api/v1/teams/21",
            "triCode": "COL"
          },
          "primaryPosition": {
            "code": "G",
            "name": "Goalie",
            "type": "Goalie",
            "abbreviation": "G"
          }
        },
        "ID8479387": {
          "id": 8479387,
          "fullName": "Keaton Middleton",
          "link": "/api/v1/people/8479387",
          "firstName": "Keaton",
          "lastName": "Middleton",
          "primaryNumber": "67",
          "birthDate": "1998-02-10",
          "currentAge": 24,
          "birthCity": "Edmonton",
          "birthStateProvince": "AB",
          "birthCountry": "CAN",
          "nationality": "CAN",
          "height": "6' 6\"",
          "weight": 240,
          "active": true,
          "alternateCaptain": false,
          "captain": false,
          "rookie": true,
          "shootsCatches": "L",
          "rosterStatus": "N",
          "currentTeam": {
            "id": 21,
            "name": "Colorado Avalanche",
            "link": "/api/v1/teams/21",
            "triCode": "COL"
          },
          "primaryPosition": {
            "code": "D",
            "name": "Defenseman",
            "type": "Defenseman",
            "abbreviation": "D"
          }
        },
        "ID8482147": {
          "id": 8482147,
          "fullName": "Jean-Luc Foudy",
          "link": "/api/v1/people/8482147",
          "firstName": "Jean-Luc",
          "lastName": "Foudy",
          "primaryNumber": "93",
          "birthDate": "2002-05-13",
          "currentAge": 20,
          "birthCity": "Scarborough",
          "birthStateProvince": "ON",
          "birthCountry": "CAN",
          "nationality": "CAN",
          "height": "5' 11\"",
          "weight": 177,
          "active": true,
          "alternateCaptain": false,
          "captain": false,
          "rookie": true,
          "shootsCatches": "R",
          "rosterStatus": "N",
          "currentTeam": {
            "id": 21,
            "name": "Colorado Avalanche",
            "link": "/api/v1/teams/21",
            "triCode": "COL"
          },
          "primaryPosition": {
            "code": "C",
            "name": "Center",
            "type": "Forward",
            "abbreviation": "C"
          }
        },
        "ID8480885": {
          "id": 8480885,
          "fullName": "Olivier Rodrigue",
          "link": "/api/v1/people/8480885",
          "firstName": "Olivier",
          "lastName": "Rodrigue",
          "primaryNumber": "35",
          "birthDate": "2000-07-06",
          "currentAge": 21,
          "birthCity": "Chicoutimi",
          "birthStateProvince": "QC",
          "birthCountry": "CAN",
          "nationality": "CAN",
          "height": "6' 1\"",
          "weight": 158,
          "active": true,
          "alternateCaptain": false,
          "captain": false,
          "rookie": true,
          "shootsCatches": "L",
          "rosterStatus": "Y",
          "currentTeam": {
            "id": 22,
            "name": "Edmonton Oilers",
            "link": "/api/v1/teams/22",
            "triCode": "EDM"
          },
          "primaryPosition": {
            "code": "G",
            "name": "Goalie",
            "type": "Goalie",
            "abbreviation": "G"
          }
        },
        "ID8473446": {
          "id": 8473446,
          "fullName": "Erik Johnson",
          "link": "/api/v1/people/8473446",
          "firstName": "Erik",
          "lastName": "Johnson",
          "primaryNumber": "6",
          "birthDate": "1988-03-21",
          "currentAge": 34,
          "birthCity": "Bloomington",
          "birthStateProvince": "MN",
          "birthCountry": "USA",
          "nationality": "USA",
          "height": "6' 4\"",
          "weight": 225,
          "active": true,
          "alternateCaptain": false,
          "captain": false,
          "rookie": false,
          "shootsCatches": "R",
          "rosterStatus": "Y",
          "currentTeam": {
            "id": 21,
            "name": "Colorado Avalanche",
            "link": "/api/v1/teams/21",
            "triCode": "COL"
          },
          "primaryPosition": {
            "code": "D",
            "name": "Defenseman",
            "type": "Defenseman",
            "abbreviation": "D"
          }
        },
        "ID8476879": {
          "id": 8476879,
          "fullName": "Cody Ceci",
          "link": "/api/v1/people/8476879",
          "firstName": "Cody",
          "lastName": "Ceci",
          "primaryNumber": "5",
          "birthDate": "1993-12-21",
          "currentAge": 28,
          "birthCity": "Ottawa",
          "birthStateProvince": "ON",
          "birthCountry": "CAN",
          "nationality": "CAN",
          "height": "6' 2\"",
          "weight": 210,
          "active": true,
          "alternateCaptain": false,
          "captain": false,
          "rookie": false,
          "shootsCatches": "R",
          "rosterStatus": "Y",
          "currentTeam": {
            "id": 22,
            "name": "Edmonton Oilers",
            "link": "/api/v1/teams/22",
            "triCode": "EDM"
          },
          "primaryPosition": {
            "code": "D",
            "name": "Defenseman",
            "type": "Defenseman",
            "abbreviation": "D"
          }
        },
        "ID8476913": {
          "id": 8476913,
          "fullName": "Devin Shore",
          "link": "/api/v1/people/8476913",
          "firstName": "Devin",
          "lastName": "Shore",
          "primaryNumber": "14",
          "birthDate": "1994-07-19",
          "currentAge": 27,
          "birthCity": "Ajax",
          "birthStateProvince": "ON",
          "birthCountry": "CAN",
          "nationality": "CAN",
          "height": "6' 1\"",
          "weight": 206,
          "active": true,
          "alternateCaptain": false,
          "captain": false,
          "rookie": false,
          "shootsCatches": "L",
          "rosterStatus": "Y",
          "currentTeam": {
            "id": 22,
            "name": "Edmonton Oilers",
            "link": "/api/v1/teams/22",
            "triCode": "EDM"
          },
          "primaryPosition": {
            "code": "C",
            "name": "Center",
            "type": "Forward",
            "abbreviation": "C"
          }
        },
        "ID8475786": {
          "id": 8475786,
          "fullName": "Zach Hyman",
          "link": "/api/v1/people/8475786",
          "firstName": "Zach",
          "lastName": "Hyman",
          "primaryNumber": "18",
          "birthDate": "1992-06-09",
          "currentAge": 29,
          "birthCity": "Toronto",
          "birthStateProvince": "ON",
          "birthCountry": "CAN",
          "nationality": "CAN",
          "height": "6' 1\"",
          "weight": 211,
          "active": true,
          "alternateCaptain": false,
          "captain": false,
          "rookie": false,
          "shootsCatches": "R",
          "rosterStatus": "Y",
          "currentTeam": {
            "id": 22,
            "name": "Edmonton Oilers",
            "link": "/api/v1/teams/22",
            "triCode": "EDM"
          },
          "primaryPosition": {
            "code": "L",
            "name": "Left Wing",
            "type": "Forward",
            "abbreviation": "LW"
          }
        },
        "ID8477498": {
          "id": 8477498,
          "fullName": "Darnell Nurse",
          "link": "/api/v1/people/8477498",
          "firstName": "Darnell",
          "lastName": "Nurse",
          "primaryNumber": "25",
          "birthDate": "1995-02-04",
          "currentAge": 27,
          "birthCity": "Hamilton",
          "birthStateProvince": "ON",
          "birthCountry": "CAN",
          "nationality": "CAN",
          "height": "6' 4\"",
          "weight": 221,
          "active": true,
          "alternateCaptain": true,
          "captain": false,
          "rookie": false,
          "shootsCatches": "L",
          "rosterStatus": "Y",
          "currentTeam": {
            "id": 22,
            "name": "Edmonton Oilers",
            "link": "/api/v1/teams/22",
            "triCode": "EDM"
          },
          "primaryPosition": {
            "code": "D",
            "name": "Defenseman",
            "type": "Defenseman",
            "abbreviation": "D"
          }
        },
        "ID8475156": {
          "id": 8475156,
          "fullName": "Mikko Koskinen",
          "link": "/api/v1/people/8475156",
          "firstName": "Mikko",
          "lastName": "Koskinen",
          "primaryNumber": "19",
          "birthDate": "1988-07-18",
          "currentAge": 33,
          "birthCity": "Vantaa",
          "birthCountry": "FIN",
          "nationality": "FIN",
          "height": "6' 7\"",
          "weight": 202,
          "active": true,
          "alternateCaptain": false,
          "captain": false,
          "rookie": false,
          "shootsCatches": "L",
          "rosterStatus": "Y",
          "currentTeam": {
            "id": 22,
            "name": "Edmonton Oilers",
            "link": "/api/v1/teams/22",
            "triCode": "EDM"
          },
          "primaryPosition": {
            "code": "G",
            "name": "Goalie",
            "type": "Goalie",
            "abbreviation": "G"
          }
        },
        "ID8478106": {
          "id": 8478106,
          "fullName": "Dylan Sikura",
          "link": "/api/v1/people/8478106",
          "firstName": "Dylan",
          "lastName": "Sikura",
          "primaryNumber": "9",
          "birthDate": "1995-06-01",
          "currentAge": 27,
          "birthCity": "Aurora",
          "birthStateProvince": "ON",
          "birthCountry": "CAN",
          "nationality": "CAN",
          "height": "5' 11\"",
          "weight": 170,
          "active": true,
          "alternateCaptain": false,
          "captain": false,
          "rookie": false,
          "shootsCatches": "L",
          "rosterStatus": "N",
          "currentTeam": {
            "id": 21,
            "name": "Colorado Avalanche",
            "link": "/api/v1/teams/21",
            "triCode": "COL"
          },
          "primaryPosition": {
            "code": "C",
            "name": "Center",
            "type": "Forward",
            "abbreviation": "C"
          }
        },
        "ID8475311": {
          "id": 8475311,
          "fullName": "Darcy Kuemper",
          "link": "/api/v1/people/8475311",
          "firstName": "Darcy",
          "lastName": "Kuemper",
          "primaryNumber": "35",
          "birthDate": "1990-05-05",
          "currentAge": 32,
          "birthCity": "Saskatoon",
          "birthStateProvince": "SK",
          "birthCountry": "CAN",
          "nationality": "CAN",
          "height": "6' 5\"",
          "weight": 215,
          "active": true,
          "alternateCaptain": false,
          "captain": false,
          "rookie": false,
          "shootsCatches": "L",
          "rosterStatus": "Y",
          "currentTeam": {
            "id": 21,
            "name": "Colorado Avalanche",
            "link": "/api/v1/teams/21",
            "triCode": "COL"
          },
          "primaryPosition": {
            "code": "G",
            "name": "Goalie",
            "type": "Goalie",
            "abbreviation": "G"
          }
        },
        "ID8477456": {
          "id": 8477456,
          "fullName": "J.T. Compher",
          "link": "/api/v1/people/8477456",
          "firstName": "J.T.",
          "lastName": "Compher",
          "primaryNumber": "37",
          "birthDate": "1995-04-08",
          "currentAge": 27,
          "birthCity": "Northbrook",
          "birthStateProvince": "IL",
          "birthCountry": "USA",
          "nationality": "USA",
          "height": "6' 0\"",
          "weight": 190,
          "active": true,
          "alternateCaptain": false,
          "captain": false,
          "rookie": false,
          "shootsCatches": "R",
          "rosterStatus": "Y",
          "currentTeam": {
            "id": 21,
            "name": "Colorado Avalanche",
            "link": "/api/v1/teams/21",
            "triCode": "COL"
          },
          "primaryPosition": {
            "code": "L",
            "name": "Left Wing",
            "type": "Forward",
            "abbreviation": "LW"
          }
        },
        "ID8475197": {
          "id": 8475197,
          "fullName": "Tyson Barrie",
          "link": "/api/v1/people/8475197",
          "firstName": "Tyson",
          "lastName": "Barrie",
          "primaryNumber": "22",
          "birthDate": "1991-07-26",
          "currentAge": 30,
          "birthCity": "Victoria",
          "birthStateProvince": "BC",
          "birthCountry": "CAN",
          "nationality": "CAN",
          "height": "5' 11\"",
          "weight": 197,
          "active": true,
          "alternateCaptain": false,
          "captain": false,
          "rookie": false,
          "shootsCatches": "R",
          "rosterStatus": "Y",
          "currentTeam": {
            "id": 22,
            "name": "Edmonton Oilers",
            "link": "/api/v1/teams/22",
            "triCode": "EDM"
          },
          "primaryPosition": {
            "code": "D",
            "name": "Defenseman",
            "type": "Defenseman",
            "abbreviation": "D"
          }
        },
        "ID8478420": {
          "id": 8478420,
          "fullName": "Mikko Rantanen",
          "link": "/api/v1/people/8478420",
          "firstName": "Mikko",
          "lastName": "Rantanen",
          "primaryNumber": "96",
          "birthDate": "1996-10-29",
          "currentAge": 25,
          "birthCity": "Nousiainen",
          "birthCountry": "FIN",
          "nationality": "FIN",
          "height": "6' 4\"",
          "weight": 215,
          "active": true,
          "alternateCaptain": true,
          "captain": false,
          "rookie": false,
          "shootsCatches": "L",
          "rosterStatus": "Y",
          "currentTeam": {
            "id": 21,
            "name": "Colorado Avalanche",
            "link": "/api/v1/teams/21",
            "triCode": "COL"
          },
          "primaryPosition": {
            "code": "R",
            "name": "Right Wing",
            "type": "Forward",
            "abbreviation": "RW"
          }
        },
        "ID8479398": {
          "id": 8479398,
          "fullName": "Samuel Girard",
          "link": "/api/v1/people/8479398",
          "firstName": "Samuel",
          "lastName": "Girard",
          "primaryNumber": "49",
          "birthDate": "1998-05-12",
          "currentAge": 24,
          "birthCity": "Roberval",
          "birthStateProvince": "QC",
          "birthCountry": "CAN",
          "nationality": "CAN",
          "height": "5' 10\"",
          "weight": 170,
          "active": true,
          "alternateCaptain": false,
          "captain": false,
          "rookie": false,
          "shootsCatches": "L",
          "rosterStatus": "Y",
          "currentTeam": {
            "id": 21,
            "name": "Colorado Avalanche",
            "link": "/api/v1/teams/21",
            "triCode": "COL"
          },
          "primaryPosition": {
            "code": "D",
            "name": "Defenseman",
            "type": "Defenseman",
            "abbreviation": "D"
          }
        },
        "ID8478585": {
          "id": 8478585,
          "fullName": "Derek Ryan",
          "link": "/api/v1/people/8478585",
          "firstName": "Derek",
          "lastName": "Ryan",
          "primaryNumber": "10",
          "birthDate": "1986-12-29",
          "currentAge": 35,
          "birthCity": "Spokane",
          "birthStateProvince": "WA",
          "birthCountry": "USA",
          "nationality": "USA",
          "height": "5' 10\"",
          "weight": 185,
          "active": true,
          "alternateCaptain": false,
          "captain": false,
          "rookie": false,
          "shootsCatches": "R",
          "rosterStatus": "Y",
          "currentTeam": {
            "id": 22,
            "name": "Edmonton Oilers",
            "link": "/api/v1/teams/22",
            "triCode": "EDM"
          },
          "primaryPosition": {
            "code": "C",
            "name": "Center",
            "type": "Forward",
            "abbreviation": "C"
          }
        },
        "ID8477492": {
          "id": 8477492,
          "fullName": "Nathan MacKinnon",
          "link": "/api/v1/people/8477492",
          "firstName": "Nathan",
          "lastName": "MacKinnon",
          "primaryNumber": "29",
          "birthDate": "1995-09-01",
          "currentAge": 26,
          "birthCity": "Halifax",
          "birthStateProvince": "NS",
          "birthCountry": "CAN",
          "nationality": "CAN",
          "height": "6' 0\"",
          "weight": 200,
          "active": true,
          "alternateCaptain": true,
          "captain": false,
          "rookie": false,
          "shootsCatches": "R",
          "rosterStatus": "Y",
          "currentTeam": {
            "id": 21,
            "name": "Colorado Avalanche",
            "link": "/api/v1/teams/21",
            "triCode": "COL"
          },
          "primaryPosition": {
            "code": "C",
            "name": "Center",
            "type": "Forward",
            "abbreviation": "C"
          }
        }
      },
      "venue": {
        "id": 5100,
        "name": "Rogers Place",
        "link": "/api/v1/venues/5100"
      }
    },
    "liveData": {
      "plays": {
        "allPlays": [
          {
            "result": {
              "event": "Game Scheduled",
              "eventCode": "EDM1",
              "eventTypeId": "GAME_SCHEDULED",
              "description": "Game Scheduled"
            },
            "about": {
              "eventIdx": 0,
              "eventId": 1,
              "period": 1,
              "periodType": "REGULAR",
              "ordinalNum": "1st",
              "periodTime": "00:00",
              "periodTimeRemaining": "20:00",
              "dateTime": "2022-06-04T23:15:08Z",
              "goals": {
                "away": 0,
                "home": 0
              }
            },
            "coordinates": {
              
            }
          }
        ],
        "scoringPlays": [
          
        ],
        "penaltyPlays": [
          
        ],
        "playsByPeriod": [
          {
            "startIndex": 0,
            "plays": [
              0
            ],
            "endIndex": 0
          }
        ],
        "currentPlay": {
          "result": {
            "event": "Game Scheduled",
            "eventCode": "EDM1",
            "eventTypeId": "GAME_SCHEDULED",
            "description": "Game Scheduled"
          },
          "about": {
            "eventIdx": 0,
            "eventId": 1,
            "period": 1,
            "periodType": "REGULAR",
            "ordinalNum": "1st",
            "periodTime": "00:00",
            "periodTimeRemaining": "20:00",
            "dateTime": "2022-06-04T23:15:08Z",
            "goals": {
              "away": 0,
              "home": 0
            }
          },
          "coordinates": {
            
          }
        }
      },
      "linescore": {
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
              "link": "/api/v1/teams/22",
              "abbreviation": "EDM",
              "triCode": "EDM"
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
              "link": "/api/v1/teams/21",
              "abbreviation": "COL",
              "triCode": "COL"
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
      },
      "boxscore": {
        "teams": {
          "away": {
            "team": {
              "id": 21,
              "name": "Colorado Avalanche",
              "link": "/api/v1/teams/21",
              "abbreviation": "COL",
              "triCode": "COL"
            },
            "teamStats": {
              "teamSkaterStats": {
                "goals": 0,
                "pim": 0,
                "shots": 0,
                "powerPlayPercentage": "0.0",
                "powerPlayGoals": 0.0,
                "powerPlayOpportunities": 0.0,
                "faceOffWinPercentage": "0.0",
                "blocked": 0,
                "takeaways": 0,
                "giveaways": 0,
                "hits": 0
              }
            },
            "players": {
              "ID8481020": {
                "person": {
                  "id": 8481020,
                  "fullName": "Justus Annunen",
                  "link": "/api/v1/people/8481020",
                  "shootsCatches": "L",
                  "rosterStatus": "N"
                },
                "jerseyNumber": "60",
                "position": {
                  "code": "G",
                  "name": "Goalie",
                  "type": "Goalie",
                  "abbreviation": "G"
                },
                "stats": {
                  "goalieStats": {
                    "timeOnIce": "0:00",
                    "assists": 0,
                    "goals": 0,
                    "pim": 0,
                    "shots": 0,
                    "saves": 0,
                    "powerPlaySaves": 0,
                    "shortHandedSaves": 0,
                    "evenSaves": 0,
                    "shortHandedShotsAgainst": 0,
                    "evenShotsAgainst": 0,
                    "powerPlayShotsAgainst": 0
                  }
                }
              },
              "ID8481186": {
                "person": {
                  "id": 8481186,
                  "fullName": "Logan O'Connor",
                  "link": "/api/v1/people/8481186",
                  "shootsCatches": "R",
                  "rosterStatus": "Y"
                },
                "jerseyNumber": "25",
                "position": {
                  "code": "R",
                  "name": "Right Wing",
                  "type": "Forward",
                  "abbreviation": "RW"
                },
                "stats": {
                  "skaterStats": {
                    "timeOnIce": "0:00",
                    "assists": 0,
                    "goals": 0,
                    "shots": 0,
                    "hits": 0,
                    "powerPlayGoals": 0,
                    "powerPlayAssists": 0,
                    "penaltyMinutes": 0,
                    "faceOffWins": 0,
                    "faceoffTaken": 0,
                    "takeaways": 0,
                    "giveaways": 0,
                    "shortHandedGoals": 0,
                    "shortHandedAssists": 0,
                    "blocked": 0,
                    "plusMinus": 0,
                    "evenTimeOnIce": "0:00",
                    "powerPlayTimeOnIce": "0:00",
                    "shortHandedTimeOnIce": "0:00"
                  }
                }
              },
              "ID8477979": {
                "person": {
                  "id": 8477979,
                  "fullName": "Nicolas Aube-Kubel",
                  "link": "/api/v1/people/8477979",
                  "shootsCatches": "R",
                  "rosterStatus": "Y"
                },
                "jerseyNumber": "16",
                "position": {
                  "code": "N/A",
                  "name": "Unknown",
                  "type": "Unknown",
                  "abbreviation": "N/A"
                },
                "stats": {
                  
                }
              },
              "ID8471794": {
                "person": {
                  "id": 8471794,
                  "fullName": "Darren Helm",
                  "link": "/api/v1/people/8471794",
                  "shootsCatches": "L",
                  "rosterStatus": "Y"
                },
                "jerseyNumber": "43",
                "position": {
                  "code": "C",
                  "name": "Center",
                  "type": "Forward",
                  "abbreviation": "C"
                },
                "stats": {
                  "skaterStats": {
                    "timeOnIce": "0:00",
                    "assists": 0,
                    "goals": 0,
                    "shots": 0,
                    "hits": 0,
                    "powerPlayGoals": 0,
                    "powerPlayAssists": 0,
                    "penaltyMinutes": 0,
                    "faceOffWins": 0,
                    "faceoffTaken": 0,
                    "takeaways": 0,
                    "giveaways": 0,
                    "shortHandedGoals": 0,
                    "shortHandedAssists": 0,
                    "blocked": 0,
                    "plusMinus": 0,
                    "evenTimeOnIce": "0:00",
                    "powerPlayTimeOnIce": "0:00",
                    "shortHandedTimeOnIce": "0:00"
                  }
                }
              },
              "ID8471677": {
                "person": {
                  "id": 8471677,
                  "fullName": "Jack Johnson",
                  "link": "/api/v1/people/8471677",
                  "shootsCatches": "L",
                  "rosterStatus": "Y"
                },
                "jerseyNumber": "3",
                "position": {
                  "code": "D",
                  "name": "Defenseman",
                  "type": "Defenseman",
                  "abbreviation": "D"
                },
                "stats": {
                  "skaterStats": {
                    "timeOnIce": "0:00",
                    "assists": 0,
                    "goals": 0,
                    "shots": 0,
                    "hits": 0,
                    "powerPlayGoals": 0,
                    "powerPlayAssists": 0,
                    "penaltyMinutes": 0,
                    "faceOffWins": 0,
                    "faceoffTaken": 0,
                    "takeaways": 0,
                    "giveaways": 0,
                    "shortHandedGoals": 0,
                    "shortHandedAssists": 0,
                    "blocked": 0,
                    "plusMinus": 0,
                    "evenTimeOnIce": "0:00",
                    "powerPlayTimeOnIce": "0:00",
                    "shortHandedTimeOnIce": "0:00"
                  }
                }
              },
              "ID8471699": {
                "person": {
                  "id": 8471699,
                  "fullName": "Andrew Cogliano",
                  "link": "/api/v1/people/8471699",
                  "shootsCatches": "L",
                  "rosterStatus": "Y"
                },
                "jerseyNumber": "11",
                "position": {
                  "code": "C",
                  "name": "Center",
                  "type": "Forward",
                  "abbreviation": "C"
                },
                "stats": {
                  "skaterStats": {
                    "timeOnIce": "0:00",
                    "assists": 0,
                    "goals": 0,
                    "shots": 0,
                    "hits": 0,
                    "powerPlayGoals": 0,
                    "powerPlayAssists": 0,
                    "penaltyMinutes": 0,
                    "faceOffWins": 0,
                    "faceoffTaken": 0,
                    "takeaways": 0,
                    "giveaways": 0,
                    "shortHandedGoals": 0,
                    "shortHandedAssists": 0,
                    "blocked": 0,
                    "plusMinus": 0,
                    "evenTimeOnIce": "0:00",
                    "powerPlayTimeOnIce": "0:00",
                    "shortHandedTimeOnIce": "0:00"
                  }
                }
              },
              "ID8478038": {
                "person": {
                  "id": 8478038,
                  "fullName": "Devon Toews",
                  "link": "/api/v1/people/8478038",
                  "shootsCatches": "L",
                  "rosterStatus": "Y"
                },
                "jerseyNumber": "7",
                "position": {
                  "code": "D",
                  "name": "Defenseman",
                  "type": "Defenseman",
                  "abbreviation": "D"
                },
                "stats": {
                  "skaterStats": {
                    "timeOnIce": "0:00",
                    "assists": 0,
                    "goals": 0,
                    "shots": 0,
                    "hits": 0,
                    "powerPlayGoals": 0,
                    "powerPlayAssists": 0,
                    "penaltyMinutes": 0,
                    "faceOffWins": 0,
                    "faceoffTaken": 0,
                    "takeaways": 0,
                    "giveaways": 0,
                    "shortHandedGoals": 0,
                    "shortHandedAssists": 0,
                    "blocked": 0,
                    "plusMinus": 0,
                    "evenTimeOnIce": "0:00",
                    "powerPlayTimeOnIce": "0:00",
                    "shortHandedTimeOnIce": "0:00"
                  }
                }
              },
              "ID8477444": {
                "person": {
                  "id": 8477444,
                  "fullName": "Andre Burakovsky",
                  "link": "/api/v1/people/8477444",
                  "shootsCatches": "L",
                  "rosterStatus": "Y"
                },
                "jerseyNumber": "95",
                "position": {
                  "code": "N/A",
                  "name": "Unknown",
                  "type": "Unknown",
                  "abbreviation": "N/A"
                },
                "stats": {
                  
                }
              },
              "ID8476850": {
                "person": {
                  "id": 8476850,
                  "fullName": "Ryan Murray",
                  "link": "/api/v1/people/8476850",
                  "shootsCatches": "L",
                  "rosterStatus": "Y"
                },
                "jerseyNumber": "28",
                "position": {
                  "code": "N/A",
                  "name": "Unknown",
                  "type": "Unknown",
                  "abbreviation": "N/A"
                },
                "stats": {
                  
                }
              },
              "ID8480822": {
                "person": {
                  "id": 8480822,
                  "fullName": "Martin Kaut",
                  "link": "/api/v1/people/8480822",
                  "shootsCatches": "R",
                  "rosterStatus": "N"
                },
                "jerseyNumber": "61",
                "position": {
                  "code": "N/A",
                  "name": "Unknown",
                  "type": "Unknown",
                  "abbreviation": "N/A"
                },
                "stats": {
                  
                }
              },
              "ID8477501": {
                "person": {
                  "id": 8477501,
                  "fullName": "Valeri Nichushkin",
                  "link": "/api/v1/people/8477501",
                  "shootsCatches": "L",
                  "rosterStatus": "Y"
                },
                "jerseyNumber": "13",
                "position": {
                  "code": "R",
                  "name": "Right Wing",
                  "type": "Forward",
                  "abbreviation": "RW"
                },
                "stats": {
                  "skaterStats": {
                    "timeOnIce": "0:00",
                    "assists": 0,
                    "goals": 0,
                    "shots": 0,
                    "hits": 0,
                    "powerPlayGoals": 0,
                    "powerPlayAssists": 0,
                    "penaltyMinutes": 0,
                    "faceOffWins": 0,
                    "faceoffTaken": 0,
                    "takeaways": 0,
                    "giveaways": 0,
                    "shortHandedGoals": 0,
                    "shortHandedAssists": 0,
                    "blocked": 0,
                    "plusMinus": 0,
                    "evenTimeOnIce": "0:00",
                    "powerPlayTimeOnIce": "0:00",
                    "shortHandedTimeOnIce": "0:00"
                  }
                }
              },
              "ID8476312": {
                "person": {
                  "id": 8476312,
                  "fullName": "Josh Manson",
                  "link": "/api/v1/people/8476312",
                  "shootsCatches": "R",
                  "rosterStatus": "Y"
                },
                "jerseyNumber": "42",
                "position": {
                  "code": "D",
                  "name": "Defenseman",
                  "type": "Defenseman",
                  "abbreviation": "D"
                },
                "stats": {
                  "skaterStats": {
                    "timeOnIce": "0:00",
                    "assists": 0,
                    "goals": 0,
                    "shots": 0,
                    "hits": 0,
                    "powerPlayGoals": 0,
                    "powerPlayAssists": 0,
                    "penaltyMinutes": 0,
                    "faceOffWins": 0,
                    "faceoffTaken": 0,
                    "takeaways": 0,
                    "giveaways": 0,
                    "shortHandedGoals": 0,
                    "shortHandedAssists": 0,
                    "blocked": 0,
                    "plusMinus": 0,
                    "evenTimeOnIce": "0:00",
                    "powerPlayTimeOnIce": "0:00",
                    "shortHandedTimeOnIce": "0:00"
                  }
                }
              },
              "ID8476455": {
                "person": {
                  "id": 8476455,
                  "fullName": "Gabriel Landeskog",
                  "link": "/api/v1/people/8476455",
                  "shootsCatches": "L",
                  "rosterStatus": "Y"
                },
                "jerseyNumber": "92",
                "position": {
                  "code": "L",
                  "name": "Left Wing",
                  "type": "Forward",
                  "abbreviation": "LW"
                },
                "stats": {
                  "skaterStats": {
                    "timeOnIce": "0:00",
                    "assists": 0,
                    "goals": 0,
                    "shots": 0,
                    "hits": 0,
                    "powerPlayGoals": 0,
                    "powerPlayAssists": 0,
                    "penaltyMinutes": 0,
                    "faceOffWins": 0,
                    "faceoffTaken": 0,
                    "takeaways": 0,
                    "giveaways": 0,
                    "shortHandedGoals": 0,
                    "shortHandedAssists": 0,
                    "blocked": 0,
                    "plusMinus": 0,
                    "evenTimeOnIce": "0:00",
                    "powerPlayTimeOnIce": "0:00",
                    "shortHandedTimeOnIce": "0:00"
                  }
                }
              },
              "ID8477126": {
                "person": {
                  "id": 8477126,
                  "fullName": "Jayson Megna",
                  "link": "/api/v1/people/8477126",
                  "shootsCatches": "R",
                  "rosterStatus": "N"
                },
                "jerseyNumber": "12",
                "position": {
                  "code": "N/A",
                  "name": "Unknown",
                  "type": "Unknown",
                  "abbreviation": "N/A"
                },
                "stats": {
                  
                }
              },
              "ID8481618": {
                "person": {
                  "id": 8481618,
                  "fullName": "Alex Newhook",
                  "link": "/api/v1/people/8481618",
                  "shootsCatches": "L",
                  "rosterStatus": "Y"
                },
                "jerseyNumber": "18",
                "position": {
                  "code": "C",
                  "name": "Center",
                  "type": "Forward",
                  "abbreviation": "C"
                },
                "stats": {
                  "skaterStats": {
                    "timeOnIce": "0:00",
                    "assists": 0,
                    "goals": 0,
                    "shots": 0,
                    "hits": 0,
                    "powerPlayGoals": 0,
                    "powerPlayAssists": 0,
                    "penaltyMinutes": 0,
                    "faceOffWins": 0,
                    "faceoffTaken": 0,
                    "takeaways": 0,
                    "giveaways": 0,
                    "shortHandedGoals": 0,
                    "shortHandedAssists": 0,
                    "blocked": 0,
                    "plusMinus": 0,
                    "evenTimeOnIce": "0:00",
                    "powerPlayTimeOnIce": "0:00",
                    "shortHandedTimeOnIce": "0:00"
                  }
                }
              },
              "ID8480925": {
                "person": {
                  "id": 8480925,
                  "fullName": "Pavel Francouz",
                  "link": "/api/v1/people/8480925",
                  "shootsCatches": "R",
                  "rosterStatus": "Y"
                },
                "jerseyNumber": "39",
                "position": {
                  "code": "G",
                  "name": "Goalie",
                  "type": "Goalie",
                  "abbreviation": "G"
                },
                "stats": {
                  "goalieStats": {
                    "timeOnIce": "0:00",
                    "assists": 0,
                    "goals": 0,
                    "pim": 0,
                    "shots": 0,
                    "saves": 0,
                    "powerPlaySaves": 0,
                    "shortHandedSaves": 0,
                    "evenSaves": 0,
                    "shortHandedShotsAgainst": 0,
                    "evenShotsAgainst": 0,
                    "powerPlayShotsAgainst": 0
                  }
                }
              },
              "ID8477981": {
                "person": {
                  "id": 8477981,
                  "fullName": "Roland McKeown",
                  "link": "/api/v1/people/8477981",
                  "shootsCatches": "R",
                  "rosterStatus": "N"
                },
                "jerseyNumber": "10",
                "position": {
                  "code": "N/A",
                  "name": "Unknown",
                  "type": "Unknown",
                  "abbreviation": "N/A"
                },
                "stats": {
                  
                }
              },
              "ID8479387": {
                "person": {
                  "id": 8479387,
                  "fullName": "Keaton Middleton",
                  "link": "/api/v1/people/8479387",
                  "shootsCatches": "L",
                  "rosterStatus": "N"
                },
                "jerseyNumber": "67",
                "position": {
                  "code": "N/A",
                  "name": "Unknown",
                  "type": "Unknown",
                  "abbreviation": "N/A"
                },
                "stats": {
                  
                }
              },
              "ID8482147": {
                "person": {
                  "id": 8482147,
                  "fullName": "Jean-Luc Foudy",
                  "link": "/api/v1/people/8482147",
                  "shootsCatches": "R",
                  "rosterStatus": "N"
                },
                "jerseyNumber": "93",
                "position": {
                  "code": "N/A",
                  "name": "Unknown",
                  "type": "Unknown",
                  "abbreviation": "N/A"
                },
                "stats": {
                  
                }
              },
              "ID8480069": {
                "person": {
                  "id": 8480069,
                  "fullName": "Cale Makar",
                  "link": "/api/v1/people/8480069",
                  "shootsCatches": "R",
                  "rosterStatus": "Y"
                },
                "jerseyNumber": "8",
                "position": {
                  "code": "D",
                  "name": "Defenseman",
                  "type": "Defenseman",
                  "abbreviation": "D"
                },
                "stats": {
                  "skaterStats": {
                    "timeOnIce": "0:00",
                    "assists": 0,
                    "goals": 0,
                    "shots": 0,
                    "hits": 0,
                    "powerPlayGoals": 0,
                    "powerPlayAssists": 0,
                    "penaltyMinutes": 0,
                    "faceOffWins": 0,
                    "faceoffTaken": 0,
                    "takeaways": 0,
                    "giveaways": 0,
                    "shortHandedGoals": 0,
                    "shortHandedAssists": 0,
                    "blocked": 0,
                    "plusMinus": 0,
                    "evenTimeOnIce": "0:00",
                    "powerPlayTimeOnIce": "0:00",
                    "shortHandedTimeOnIce": "0:00"
                  }
                }
              },
              "ID8481477": {
                "person": {
                  "id": 8481477,
                  "fullName": "Nico Sturm",
                  "link": "/api/v1/people/8481477",
                  "shootsCatches": "L",
                  "rosterStatus": "Y"
                },
                "jerseyNumber": "78",
                "position": {
                  "code": "C",
                  "name": "Center",
                  "type": "Forward",
                  "abbreviation": "C"
                },
                "stats": {
                  "skaterStats": {
                    "timeOnIce": "0:00",
                    "assists": 0,
                    "goals": 0,
                    "shots": 0,
                    "hits": 0,
                    "powerPlayGoals": 0,
                    "powerPlayAssists": 0,
                    "penaltyMinutes": 0,
                    "faceOffWins": 0,
                    "faceoffTaken": 0,
                    "takeaways": 0,
                    "giveaways": 0,
                    "shortHandedGoals": 0,
                    "shortHandedAssists": 0,
                    "blocked": 0,
                    "plusMinus": 0,
                    "evenTimeOnIce": "0:00",
                    "powerPlayTimeOnIce": "0:00",
                    "shortHandedTimeOnIce": "0:00"
                  }
                }
              },
              "ID8473446": {
                "person": {
                  "id": 8473446,
                  "fullName": "Erik Johnson",
                  "link": "/api/v1/people/8473446",
                  "shootsCatches": "R",
                  "rosterStatus": "Y"
                },
                "jerseyNumber": "6",
                "position": {
                  "code": "D",
                  "name": "Defenseman",
                  "type": "Defenseman",
                  "abbreviation": "D"
                },
                "stats": {
                  "skaterStats": {
                    "timeOnIce": "0:00",
                    "assists": 0,
                    "goals": 0,
                    "shots": 0,
                    "hits": 0,
                    "powerPlayGoals": 0,
                    "powerPlayAssists": 0,
                    "penaltyMinutes": 0,
                    "faceOffWins": 0,
                    "faceoffTaken": 0,
                    "takeaways": 0,
                    "giveaways": 0,
                    "shortHandedGoals": 0,
                    "shortHandedAssists": 0,
                    "blocked": 0,
                    "plusMinus": 0,
                    "evenTimeOnIce": "0:00",
                    "powerPlayTimeOnIce": "0:00",
                    "shortHandedTimeOnIce": "0:00"
                  }
                }
              },
              "ID8477476": {
                "person": {
                  "id": 8477476,
                  "fullName": "Artturi Lehkonen",
                  "link": "/api/v1/people/8477476",
                  "shootsCatches": "L",
                  "rosterStatus": "Y"
                },
                "jerseyNumber": "62",
                "position": {
                  "code": "L",
                  "name": "Left Wing",
                  "type": "Forward",
                  "abbreviation": "LW"
                },
                "stats": {
                  "skaterStats": {
                    "timeOnIce": "0:00",
                    "assists": 0,
                    "goals": 0,
                    "shots": 0,
                    "hits": 0,
                    "powerPlayGoals": 0,
                    "powerPlayAssists": 0,
                    "penaltyMinutes": 0,
                    "faceOffWins": 0,
                    "faceoffTaken": 0,
                    "takeaways": 0,
                    "giveaways": 0,
                    "shortHandedGoals": 0,
                    "shortHandedAssists": 0,
                    "blocked": 0,
                    "plusMinus": 0,
                    "evenTimeOnIce": "0:00",
                    "powerPlayTimeOnIce": "0:00",
                    "shortHandedTimeOnIce": "0:00"
                  }
                }
              },
              "ID8478106": {
                "person": {
                  "id": 8478106,
                  "fullName": "Dylan Sikura",
                  "link": "/api/v1/people/8478106",
                  "shootsCatches": "L",
                  "rosterStatus": "N"
                },
                "jerseyNumber": "9",
                "position": {
                  "code": "N/A",
                  "name": "Unknown",
                  "type": "Unknown",
                  "abbreviation": "N/A"
                },
                "stats": {
                  
                }
              },
              "ID8475311": {
                "person": {
                  "id": 8475311,
                  "fullName": "Darcy Kuemper",
                  "link": "/api/v1/people/8475311",
                  "shootsCatches": "L",
                  "rosterStatus": "Y"
                },
                "jerseyNumber": "35",
                "position": {
                  "code": "N/A",
                  "name": "Unknown",
                  "type": "Unknown",
                  "abbreviation": "N/A"
                },
                "stats": {
                  
                }
              },
              "ID8477456": {
                "person": {
                  "id": 8477456,
                  "fullName": "J.T. Compher",
                  "link": "/api/v1/people/8477456",
                  "shootsCatches": "R",
                  "rosterStatus": "Y"
                },
                "jerseyNumber": "37",
                "position": {
                  "code": "L",
                  "name": "Left Wing",
                  "type": "Forward",
                  "abbreviation": "LW"
                },
                "stats": {
                  "skaterStats": {
                    "timeOnIce": "0:00",
                    "assists": 0,
                    "goals": 0,
                    "shots": 0,
                    "hits": 0,
                    "powerPlayGoals": 0,
                    "powerPlayAssists": 0,
                    "penaltyMinutes": 0,
                    "faceOffWins": 0,
                    "faceoffTaken": 0,
                    "takeaways": 0,
                    "giveaways": 0,
                    "shortHandedGoals": 0,
                    "shortHandedAssists": 0,
                    "blocked": 0,
                    "plusMinus": 0,
                    "evenTimeOnIce": "0:00",
                    "powerPlayTimeOnIce": "0:00",
                    "shortHandedTimeOnIce": "0:00"
                  }
                }
              },
              "ID8481529": {
                "person": {
                  "id": 8481529,
                  "fullName": "Trent Miner",
                  "link": "/api/v1/people/8481529",
                  "shootsCatches": "L",
                  "rosterStatus": "N"
                },
                "jerseyNumber": "50",
                "position": {
                  "code": "N/A",
                  "name": "Unknown",
                  "type": "Unknown",
                  "abbreviation": "N/A"
                },
                "stats": {
                  
                }
              },
              "ID8479573": {
                "person": {
                  "id": 8479573,
                  "fullName": "Mikhail Maltsev",
                  "link": "/api/v1/people/8479573",
                  "shootsCatches": "L",
                  "rosterStatus": "N"
                },
                "jerseyNumber": "11",
                "position": {
                  "code": "N/A",
                  "name": "Unknown",
                  "type": "Unknown",
                  "abbreviation": "N/A"
                },
                "stats": {
                  
                }
              },
              "ID8478420": {
                "person": {
                  "id": 8478420,
                  "fullName": "Mikko Rantanen",
                  "link": "/api/v1/people/8478420",
                  "shootsCatches": "L",
                  "rosterStatus": "Y"
                },
                "jerseyNumber": "96",
                "position": {
                  "code": "R",
                  "name": "Right Wing",
                  "type": "Forward",
                  "abbreviation": "RW"
                },
                "stats": {
                  "skaterStats": {
                    "timeOnIce": "0:00",
                    "assists": 0,
                    "goals": 0,
                    "shots": 0,
                    "hits": 0,
                    "powerPlayGoals": 0,
                    "powerPlayAssists": 0,
                    "penaltyMinutes": 0,
                    "faceOffWins": 0,
                    "faceoffTaken": 0,
                    "takeaways": 0,
                    "giveaways": 0,
                    "shortHandedGoals": 0,
                    "shortHandedAssists": 0,
                    "blocked": 0,
                    "plusMinus": 0,
                    "evenTimeOnIce": "0:00",
                    "powerPlayTimeOnIce": "0:00",
                    "shortHandedTimeOnIce": "0:00"
                  }
                }
              },
              "ID8479398": {
                "person": {
                  "id": 8479398,
                  "fullName": "Samuel Girard",
                  "link": "/api/v1/people/8479398",
                  "shootsCatches": "L",
                  "rosterStatus": "Y"
                },
                "jerseyNumber": "49",
                "position": {
                  "code": "N/A",
                  "name": "Unknown",
                  "type": "Unknown",
                  "abbreviation": "N/A"
                },
                "stats": {
                  
                }
              },
              "ID8477073": {
                "person": {
                  "id": 8477073,
                  "fullName": "Kurtis MacDermid",
                  "link": "/api/v1/people/8477073",
                  "shootsCatches": "L",
                  "rosterStatus": "Y"
                },
                "jerseyNumber": "56",
                "position": {
                  "code": "N/A",
                  "name": "Unknown",
                  "type": "Unknown",
                  "abbreviation": "N/A"
                },
                "stats": {
                  
                }
              },
              "ID8477492": {
                "person": {
                  "id": 8477492,
                  "fullName": "Nathan MacKinnon",
                  "link": "/api/v1/people/8477492",
                  "shootsCatches": "R",
                  "rosterStatus": "Y"
                },
                "jerseyNumber": "29",
                "position": {
                  "code": "C",
                  "name": "Center",
                  "type": "Forward",
                  "abbreviation": "C"
                },
                "stats": {
                  "skaterStats": {
                    "timeOnIce": "0:00",
                    "assists": 0,
                    "goals": 0,
                    "shots": 0,
                    "hits": 0,
                    "powerPlayGoals": 0,
                    "powerPlayAssists": 0,
                    "penaltyMinutes": 0,
                    "faceOffWins": 0,
                    "faceoffTaken": 0,
                    "takeaways": 0,
                    "giveaways": 0,
                    "shortHandedGoals": 0,
                    "shortHandedAssists": 0,
                    "blocked": 0,
                    "plusMinus": 0,
                    "evenTimeOnIce": "0:00",
                    "powerPlayTimeOnIce": "0:00",
                    "shortHandedTimeOnIce": "0:00"
                  }
                }
              },
              "ID8475172": {
                "person": {
                  "id": 8475172,
                  "fullName": "Nazem Kadri",
                  "link": "/api/v1/people/8475172",
                  "shootsCatches": "L",
                  "rosterStatus": "Y"
                },
                "jerseyNumber": "91",
                "position": {
                  "code": "C",
                  "name": "Center",
                  "type": "Forward",
                  "abbreviation": "C"
                },
                "stats": {
                  "skaterStats": {
                    "timeOnIce": "0:00",
                    "assists": 0,
                    "goals": 0,
                    "shots": 0,
                    "hits": 0,
                    "powerPlayGoals": 0,
                    "powerPlayAssists": 0,
                    "penaltyMinutes": 0,
                    "faceOffWins": 0,
                    "faceoffTaken": 0,
                    "takeaways": 0,
                    "giveaways": 0,
                    "shortHandedGoals": 0,
                    "shortHandedAssists": 0,
                    "blocked": 0,
                    "plusMinus": 0,
                    "evenTimeOnIce": "0:00",
                    "powerPlayTimeOnIce": "0:00",
                    "shortHandedTimeOnIce": "0:00"
                  }
                }
              },
              "ID8480112": {
                "person": {
                  "id": 8480112,
                  "fullName": "Hunter Miska",
                  "link": "/api/v1/people/8480112",
                  "shootsCatches": "L",
                  "rosterStatus": "N"
                },
                "jerseyNumber": "32",
                "position": {
                  "code": "N/A",
                  "name": "Unknown",
                  "type": "Unknown",
                  "abbreviation": "N/A"
                },
                "stats": {
                  
                }
              },
              "ID8481524": {
                "person": {
                  "id": 8481524,
                  "fullName": "Bowen Byram",
                  "link": "/api/v1/people/8481524",
                  "shootsCatches": "L",
                  "rosterStatus": "Y"
                },
                "jerseyNumber": "4",
                "position": {
                  "code": "D",
                  "name": "Defenseman",
                  "type": "Defenseman",
                  "abbreviation": "D"
                },
                "stats": {
                  "skaterStats": {
                    "timeOnIce": "0:00",
                    "assists": 0,
                    "goals": 0,
                    "shots": 0,
                    "hits": 0,
                    "powerPlayGoals": 0,
                    "powerPlayAssists": 0,
                    "penaltyMinutes": 0,
                    "faceOffWins": 0,
                    "faceoffTaken": 0,
                    "takeaways": 0,
                    "giveaways": 0,
                    "shortHandedGoals": 0,
                    "shortHandedAssists": 0,
                    "blocked": 0,
                    "plusMinus": 0,
                    "evenTimeOnIce": "0:00",
                    "powerPlayTimeOnIce": "0:00",
                    "shortHandedTimeOnIce": "0:00"
                  }
                }
              }
            },
            "goalies": [
              8480925,
              8481020
            ],
            "skaters": [
              8471677,
              8481524,
              8473446,
              8478038,
              8480069,
              8471699,
              8477501,
              8481618,
              8481186,
              8477492,
              8477456,
              8476312,
              8471794,
              8477476,
              8481477,
              8475172,
              8476455,
              8478420,
              8478106,
              8477981,
              8479573,
              8477126,
              8477979,
              8476850,
              8480112,
              8475311,
              8479398,
              8481529,
              8477073,
              8480822,
              8479387,
              8482147,
              8477444
            ],
            "onIce": [
              
            ],
            "onIcePlus": [
              
            ],
            "scratches": [
              8478106,
              8477981,
              8479573,
              8477126,
              8477979,
              8476850,
              8480112,
              8475311,
              8479398,
              8481529,
              8477073,
              8480822,
              8479387,
              8482147,
              8477444
            ],
            "penaltyBox": [
              
            ],
            "coaches": [
              {
                "person": {
                  "fullName": "Jared Bednar",
                  "link": "/api/v1/people/null"
                },
                "position": {
                  "code": "HC",
                  "name": "Head Coach",
                  "type": "Head Coach",
                  "abbreviation": "Head Coach"
                }
              }
            ]
          },
          "home": {
            "team": {
              "id": 22,
              "name": "Edmonton Oilers",
              "link": "/api/v1/teams/22",
              "abbreviation": "EDM",
              "triCode": "EDM"
            },
            "teamStats": {
              "teamSkaterStats": {
                "goals": 0,
                "pim": 0,
                "shots": 0,
                "powerPlayPercentage": "0.0",
                "powerPlayGoals": 0.0,
                "powerPlayOpportunities": 0.0,
                "faceOffWinPercentage": "0.0",
                "blocked": 0,
                "takeaways": 0,
                "giveaways": 0,
                "hits": 0
              }
            },
            "players": {
              "ID8482077": {
                "person": {
                  "id": 8482077,
                  "fullName": "Dylan Holloway",
                  "link": "/api/v1/people/8482077",
                  "shootsCatches": "L",
                  "rosterStatus": "Y"
                },
                "jerseyNumber": "36",
                "position": {
                  "code": "N/A",
                  "name": "Unknown",
                  "type": "Unknown",
                  "abbreviation": "N/A"
                },
                "stats": {
                  
                }
              },
              "ID8476967": {
                "person": {
                  "id": 8476967,
                  "fullName": "Brett Kulak",
                  "link": "/api/v1/people/8476967",
                  "shootsCatches": "L",
                  "rosterStatus": "Y"
                },
                "jerseyNumber": "27",
                "position": {
                  "code": "D",
                  "name": "Defenseman",
                  "type": "Defenseman",
                  "abbreviation": "D"
                },
                "stats": {
                  "skaterStats": {
                    "timeOnIce": "0:00",
                    "assists": 0,
                    "goals": 0,
                    "shots": 0,
                    "hits": 0,
                    "powerPlayGoals": 0,
                    "powerPlayAssists": 0,
                    "penaltyMinutes": 0,
                    "faceOffWins": 0,
                    "faceoffTaken": 0,
                    "takeaways": 0,
                    "giveaways": 0,
                    "shortHandedGoals": 0,
                    "shortHandedAssists": 0,
                    "blocked": 0,
                    "plusMinus": 0,
                    "evenTimeOnIce": "0:00",
                    "powerPlayTimeOnIce": "0:00",
                    "shortHandedTimeOnIce": "0:00"
                  }
                }
              },
              "ID8477998": {
                "person": {
                  "id": 8477998,
                  "fullName": "Warren Foegele",
                  "link": "/api/v1/people/8477998",
                  "shootsCatches": "L",
                  "rosterStatus": "Y"
                },
                "jerseyNumber": "37",
                "position": {
                  "code": "L",
                  "name": "Left Wing",
                  "type": "Forward",
                  "abbreviation": "LW"
                },
                "stats": {
                  "skaterStats": {
                    "timeOnIce": "0:00",
                    "assists": 0,
                    "goals": 0,
                    "shots": 0,
                    "hits": 0,
                    "powerPlayGoals": 0,
                    "powerPlayAssists": 0,
                    "penaltyMinutes": 0,
                    "faceOffWins": 0,
                    "faceoffTaken": 0,
                    "takeaways": 0,
                    "giveaways": 0,
                    "shortHandedGoals": 0,
                    "shortHandedAssists": 0,
                    "blocked": 0,
                    "plusMinus": 0,
                    "evenTimeOnIce": "0:00",
                    "powerPlayTimeOnIce": "0:00",
                    "shortHandedTimeOnIce": "0:00"
                  }
                }
              },
              "ID8476326": {
                "person": {
                  "id": 8476326,
                  "fullName": "Josh Archibald",
                  "link": "/api/v1/people/8476326",
                  "shootsCatches": "R",
                  "rosterStatus": "Y"
                },
                "jerseyNumber": "15",
                "position": {
                  "code": "N/A",
                  "name": "Unknown",
                  "type": "Unknown",
                  "abbreviation": "N/A"
                },
                "stats": {
                  
                }
              },
              "ID8477934": {
                "person": {
                  "id": 8477934,
                  "fullName": "Leon Draisaitl",
                  "link": "/api/v1/people/8477934",
                  "shootsCatches": "L",
                  "rosterStatus": "Y"
                },
                "jerseyNumber": "29",
                "position": {
                  "code": "C",
                  "name": "Center",
                  "type": "Forward",
                  "abbreviation": "C"
                },
                "stats": {
                  "skaterStats": {
                    "timeOnIce": "0:00",
                    "assists": 0,
                    "goals": 0,
                    "shots": 0,
                    "hits": 0,
                    "powerPlayGoals": 0,
                    "powerPlayAssists": 0,
                    "penaltyMinutes": 0,
                    "faceOffWins": 0,
                    "faceoffTaken": 0,
                    "takeaways": 0,
                    "giveaways": 0,
                    "shortHandedGoals": 0,
                    "shortHandedAssists": 0,
                    "blocked": 0,
                    "plusMinus": 0,
                    "evenTimeOnIce": "0:00",
                    "powerPlayTimeOnIce": "0:00",
                    "shortHandedTimeOnIce": "0:00"
                  }
                }
              },
              "ID8479977": {
                "person": {
                  "id": 8479977,
                  "fullName": "Kailer Yamamoto",
                  "link": "/api/v1/people/8479977",
                  "shootsCatches": "R",
                  "rosterStatus": "Y"
                },
                "jerseyNumber": "56",
                "position": {
                  "code": "N/A",
                  "name": "Unknown",
                  "type": "Unknown",
                  "abbreviation": "N/A"
                },
                "stats": {
                  
                }
              },
              "ID8476454": {
                "person": {
                  "id": 8476454,
                  "fullName": "Ryan Nugent-Hopkins",
                  "link": "/api/v1/people/8476454",
                  "shootsCatches": "L",
                  "rosterStatus": "Y"
                },
                "jerseyNumber": "93",
                "position": {
                  "code": "C",
                  "name": "Center",
                  "type": "Forward",
                  "abbreviation": "C"
                },
                "stats": {
                  "skaterStats": {
                    "timeOnIce": "0:00",
                    "assists": 0,
                    "goals": 0,
                    "shots": 0,
                    "hits": 0,
                    "powerPlayGoals": 0,
                    "powerPlayAssists": 0,
                    "penaltyMinutes": 0,
                    "faceOffWins": 0,
                    "faceoffTaken": 0,
                    "takeaways": 0,
                    "giveaways": 0,
                    "shortHandedGoals": 0,
                    "shortHandedAssists": 0,
                    "blocked": 0,
                    "plusMinus": 0,
                    "evenTimeOnIce": "0:00",
                    "powerPlayTimeOnIce": "0:00",
                    "shortHandedTimeOnIce": "0:00"
                  }
                }
              },
              "ID8482108": {
                "person": {
                  "id": 8482108,
                  "fullName": "Carter Savoie",
                  "link": "/api/v1/people/8482108",
                  "shootsCatches": "L",
                  "rosterStatus": "N"
                },
                "position": {
                  "code": "N/A",
                  "name": "Unknown",
                  "type": "Unknown",
                  "abbreviation": "N/A"
                },
                "stats": {
                  
                }
              },
              "ID8480802": {
                "person": {
                  "id": 8480802,
                  "fullName": "Ryan McLeod",
                  "link": "/api/v1/people/8480802",
                  "shootsCatches": "L",
                  "rosterStatus": "Y"
                },
                "jerseyNumber": "71",
                "position": {
                  "code": "C",
                  "name": "Center",
                  "type": "Forward",
                  "abbreviation": "C"
                },
                "stats": {
                  "skaterStats": {
                    "timeOnIce": "0:00",
                    "assists": 0,
                    "goals": 0,
                    "shots": 0,
                    "hits": 0,
                    "powerPlayGoals": 0,
                    "powerPlayAssists": 0,
                    "penaltyMinutes": 0,
                    "faceOffWins": 0,
                    "faceoffTaken": 0,
                    "takeaways": 0,
                    "giveaways": 0,
                    "shortHandedGoals": 0,
                    "shortHandedAssists": 0,
                    "blocked": 0,
                    "plusMinus": 0,
                    "evenTimeOnIce": "0:00",
                    "powerPlayTimeOnIce": "0:00",
                    "shortHandedTimeOnIce": "0:00"
                  }
                }
              },
              "ID8475169": {
                "person": {
                  "id": 8475169,
                  "fullName": "Evander Kane",
                  "link": "/api/v1/people/8475169",
                  "shootsCatches": "L",
                  "rosterStatus": "Y"
                },
                "jerseyNumber": "91",
                "position": {
                  "code": "L",
                  "name": "Left Wing",
                  "type": "Forward",
                  "abbreviation": "LW"
                },
                "stats": {
                  "skaterStats": {
                    "timeOnIce": "0:00",
                    "assists": 0,
                    "goals": 0,
                    "shots": 0,
                    "hits": 0,
                    "powerPlayGoals": 0,
                    "powerPlayAssists": 0,
                    "penaltyMinutes": 0,
                    "faceOffWins": 0,
                    "faceoffTaken": 0,
                    "takeaways": 0,
                    "giveaways": 0,
                    "shortHandedGoals": 0,
                    "shortHandedAssists": 0,
                    "blocked": 0,
                    "plusMinus": 0,
                    "evenTimeOnIce": "0:00",
                    "powerPlayTimeOnIce": "0:00",
                    "shortHandedTimeOnIce": "0:00"
                  }
                }
              },
              "ID8479344": {
                "person": {
                  "id": 8479344,
                  "fullName": "Jesse Puljujarvi",
                  "link": "/api/v1/people/8479344",
                  "shootsCatches": "R",
                  "rosterStatus": "Y"
                },
                "jerseyNumber": "13",
                "position": {
                  "code": "R",
                  "name": "Right Wing",
                  "type": "Forward",
                  "abbreviation": "RW"
                },
                "stats": {
                  "skaterStats": {
                    "timeOnIce": "0:00",
                    "assists": 0,
                    "goals": 0,
                    "shots": 0,
                    "hits": 0,
                    "powerPlayGoals": 0,
                    "powerPlayAssists": 0,
                    "penaltyMinutes": 0,
                    "faceOffWins": 0,
                    "faceoffTaken": 0,
                    "takeaways": 0,
                    "giveaways": 0,
                    "shortHandedGoals": 0,
                    "shortHandedAssists": 0,
                    "blocked": 0,
                    "plusMinus": 0,
                    "evenTimeOnIce": "0:00",
                    "powerPlayTimeOnIce": "0:00",
                    "shortHandedTimeOnIce": "0:00"
                  }
                }
              },
              "ID8480803": {
                "person": {
                  "id": 8480803,
                  "fullName": "Evan Bouchard",
                  "link": "/api/v1/people/8480803",
                  "shootsCatches": "R",
                  "rosterStatus": "Y"
                },
                "jerseyNumber": "75",
                "position": {
                  "code": "D",
                  "name": "Defenseman",
                  "type": "Defenseman",
                  "abbreviation": "D"
                },
                "stats": {
                  "skaterStats": {
                    "timeOnIce": "0:00",
                    "assists": 0,
                    "goals": 0,
                    "shots": 0,
                    "hits": 0,
                    "powerPlayGoals": 0,
                    "powerPlayAssists": 0,
                    "penaltyMinutes": 0,
                    "faceOffWins": 0,
                    "faceoffTaken": 0,
                    "takeaways": 0,
                    "giveaways": 0,
                    "shortHandedGoals": 0,
                    "shortHandedAssists": 0,
                    "blocked": 0,
                    "plusMinus": 0,
                    "evenTimeOnIce": "0:00",
                    "powerPlayTimeOnIce": "0:00",
                    "shortHandedTimeOnIce": "0:00"
                  }
                }
              },
              "ID8476495": {
                "person": {
                  "id": 8476495,
                  "fullName": "Seth Griffith",
                  "link": "/api/v1/people/8476495",
                  "shootsCatches": "R",
                  "rosterStatus": "Y"
                },
                "jerseyNumber": "23",
                "position": {
                  "code": "N/A",
                  "name": "Unknown",
                  "type": "Unknown",
                  "abbreviation": "N/A"
                },
                "stats": {
                  
                }
              },
              "ID8481598": {
                "person": {
                  "id": 8481598,
                  "fullName": "Philip Broberg",
                  "link": "/api/v1/people/8481598",
                  "shootsCatches": "L",
                  "rosterStatus": "Y"
                },
                "jerseyNumber": "86",
                "position": {
                  "code": "N/A",
                  "name": "Unknown",
                  "type": "Unknown",
                  "abbreviation": "N/A"
                },
                "stats": {
                  
                }
              },
              "ID8480885": {
                "person": {
                  "id": 8480885,
                  "fullName": "Olivier Rodrigue",
                  "link": "/api/v1/people/8480885",
                  "shootsCatches": "L",
                  "rosterStatus": "Y"
                },
                "jerseyNumber": "35",
                "position": {
                  "code": "N/A",
                  "name": "Unknown",
                  "type": "Unknown",
                  "abbreviation": "N/A"
                },
                "stats": {
                  
                }
              },
              "ID8469608": {
                "person": {
                  "id": 8469608,
                  "fullName": "Mike Smith",
                  "link": "/api/v1/people/8469608",
                  "shootsCatches": "L",
                  "rosterStatus": "Y"
                },
                "jerseyNumber": "41",
                "position": {
                  "code": "G",
                  "name": "Goalie",
                  "type": "Goalie",
                  "abbreviation": "G"
                },
                "stats": {
                  "goalieStats": {
                    "timeOnIce": "0:00",
                    "assists": 0,
                    "goals": 0,
                    "pim": 0,
                    "shots": 0,
                    "saves": 0,
                    "powerPlaySaves": 0,
                    "shortHandedSaves": 0,
                    "evenSaves": 0,
                    "shortHandedShotsAgainst": 0,
                    "evenShotsAgainst": 0,
                    "powerPlayShotsAgainst": 0
                  }
                }
              },
              "ID8480041": {
                "person": {
                  "id": 8480041,
                  "fullName": "Dmitri Samorukov",
                  "link": "/api/v1/people/8480041",
                  "shootsCatches": "L",
                  "rosterStatus": "Y"
                },
                "jerseyNumber": "58",
                "position": {
                  "code": "N/A",
                  "name": "Unknown",
                  "type": "Unknown",
                  "abbreviation": "N/A"
                },
                "stats": {
                  
                }
              },
              "ID8471729": {
                "person": {
                  "id": 8471729,
                  "fullName": "Kris Russell",
                  "link": "/api/v1/people/8471729",
                  "shootsCatches": "L",
                  "rosterStatus": "Y"
                },
                "jerseyNumber": "6",
                "position": {
                  "code": "D",
                  "name": "Defenseman",
                  "type": "Defenseman",
                  "abbreviation": "D"
                },
                "stats": {
                  "skaterStats": {
                    "timeOnIce": "0:00",
                    "assists": 0,
                    "goals": 0,
                    "shots": 0,
                    "hits": 0,
                    "powerPlayGoals": 0,
                    "powerPlayAssists": 0,
                    "penaltyMinutes": 0,
                    "faceOffWins": 0,
                    "faceoffTaken": 0,
                    "takeaways": 0,
                    "giveaways": 0,
                    "shortHandedGoals": 0,
                    "shortHandedAssists": 0,
                    "blocked": 0,
                    "plusMinus": 0,
                    "evenTimeOnIce": "0:00",
                    "powerPlayTimeOnIce": "0:00",
                    "shortHandedTimeOnIce": "0:00"
                  }
                }
              },
              "ID8476879": {
                "person": {
                  "id": 8476879,
                  "fullName": "Cody Ceci",
                  "link": "/api/v1/people/8476879",
                  "shootsCatches": "R",
                  "rosterStatus": "Y"
                },
                "jerseyNumber": "5",
                "position": {
                  "code": "D",
                  "name": "Defenseman",
                  "type": "Defenseman",
                  "abbreviation": "D"
                },
                "stats": {
                  "skaterStats": {
                    "timeOnIce": "0:00",
                    "assists": 0,
                    "goals": 0,
                    "shots": 0,
                    "hits": 0,
                    "powerPlayGoals": 0,
                    "powerPlayAssists": 0,
                    "penaltyMinutes": 0,
                    "faceOffWins": 0,
                    "faceoffTaken": 0,
                    "takeaways": 0,
                    "giveaways": 0,
                    "shortHandedGoals": 0,
                    "shortHandedAssists": 0,
                    "blocked": 0,
                    "plusMinus": 0,
                    "evenTimeOnIce": "0:00",
                    "powerPlayTimeOnIce": "0:00",
                    "shortHandedTimeOnIce": "0:00"
                  }
                }
              },
              "ID8476913": {
                "person": {
                  "id": 8476913,
                  "fullName": "Devin Shore",
                  "link": "/api/v1/people/8476913",
                  "shootsCatches": "L",
                  "rosterStatus": "Y"
                },
                "jerseyNumber": "14",
                "position": {
                  "code": "N/A",
                  "name": "Unknown",
                  "type": "Unknown",
                  "abbreviation": "N/A"
                },
                "stats": {
                  
                }
              },
              "ID8473544": {
                "person": {
                  "id": 8473544,
                  "fullName": "Derick Brassard",
                  "link": "/api/v1/people/8473544",
                  "shootsCatches": "L",
                  "rosterStatus": "Y"
                },
                "jerseyNumber": "16",
                "position": {
                  "code": "N/A",
                  "name": "Unknown",
                  "type": "Unknown",
                  "abbreviation": "N/A"
                },
                "stats": {
                  
                }
              },
              "ID8475786": {
                "person": {
                  "id": 8475786,
                  "fullName": "Zach Hyman",
                  "link": "/api/v1/people/8475786",
                  "shootsCatches": "R",
                  "rosterStatus": "Y"
                },
                "jerseyNumber": "18",
                "position": {
                  "code": "L",
                  "name": "Left Wing",
                  "type": "Forward",
                  "abbreviation": "LW"
                },
                "stats": {
                  "skaterStats": {
                    "timeOnIce": "0:00",
                    "assists": 0,
                    "goals": 0,
                    "shots": 0,
                    "hits": 0,
                    "powerPlayGoals": 0,
                    "powerPlayAssists": 0,
                    "penaltyMinutes": 0,
                    "faceOffWins": 0,
                    "faceoffTaken": 0,
                    "takeaways": 0,
                    "giveaways": 0,
                    "shortHandedGoals": 0,
                    "shortHandedAssists": 0,
                    "blocked": 0,
                    "plusMinus": 0,
                    "evenTimeOnIce": "0:00",
                    "powerPlayTimeOnIce": "0:00",
                    "shortHandedTimeOnIce": "0:00"
                  }
                }
              },
              "ID8470281": {
                "person": {
                  "id": 8470281,
                  "fullName": "Duncan Keith",
                  "link": "/api/v1/people/8470281",
                  "shootsCatches": "L",
                  "rosterStatus": "Y"
                },
                "jerseyNumber": "2",
                "position": {
                  "code": "D",
                  "name": "Defenseman",
                  "type": "Defenseman",
                  "abbreviation": "D"
                },
                "stats": {
                  "skaterStats": {
                    "timeOnIce": "0:00",
                    "assists": 0,
                    "goals": 0,
                    "shots": 0,
                    "hits": 0,
                    "powerPlayGoals": 0,
                    "powerPlayAssists": 0,
                    "penaltyMinutes": 0,
                    "faceOffWins": 0,
                    "faceoffTaken": 0,
                    "takeaways": 0,
                    "giveaways": 0,
                    "shortHandedGoals": 0,
                    "shortHandedAssists": 0,
                    "blocked": 0,
                    "plusMinus": 0,
                    "evenTimeOnIce": "0:00",
                    "powerPlayTimeOnIce": "0:00",
                    "shortHandedTimeOnIce": "0:00"
                  }
                }
              },
              "ID8477498": {
                "person": {
                  "id": 8477498,
                  "fullName": "Darnell Nurse",
                  "link": "/api/v1/people/8477498",
                  "shootsCatches": "L",
                  "rosterStatus": "Y"
                },
                "jerseyNumber": "25",
                "position": {
                  "code": "D",
                  "name": "Defenseman",
                  "type": "Defenseman",
                  "abbreviation": "D"
                },
                "stats": {
                  "skaterStats": {
                    "timeOnIce": "0:00",
                    "assists": 0,
                    "goals": 0,
                    "shots": 0,
                    "hits": 0,
                    "powerPlayGoals": 0,
                    "powerPlayAssists": 0,
                    "penaltyMinutes": 0,
                    "faceOffWins": 0,
                    "faceoffTaken": 0,
                    "takeaways": 0,
                    "giveaways": 0,
                    "shortHandedGoals": 0,
                    "shortHandedAssists": 0,
                    "blocked": 0,
                    "plusMinus": 0,
                    "evenTimeOnIce": "0:00",
                    "powerPlayTimeOnIce": "0:00",
                    "shortHandedTimeOnIce": "0:00"
                  }
                }
              },
              "ID8475178": {
                "person": {
                  "id": 8475178,
                  "fullName": "Zack Kassian",
                  "link": "/api/v1/people/8475178",
                  "shootsCatches": "R",
                  "rosterStatus": "Y"
                },
                "jerseyNumber": "44",
                "position": {
                  "code": "R",
                  "name": "Right Wing",
                  "type": "Forward",
                  "abbreviation": "RW"
                },
                "stats": {
                  "skaterStats": {
                    "timeOnIce": "0:00",
                    "assists": 0,
                    "goals": 0,
                    "shots": 0,
                    "hits": 0,
                    "powerPlayGoals": 0,
                    "powerPlayAssists": 0,
                    "penaltyMinutes": 0,
                    "faceOffWins": 0,
                    "faceoffTaken": 0,
                    "takeaways": 0,
                    "giveaways": 0,
                    "shortHandedGoals": 0,
                    "shortHandedAssists": 0,
                    "blocked": 0,
                    "plusMinus": 0,
                    "evenTimeOnIce": "0:00",
                    "powerPlayTimeOnIce": "0:00",
                    "shortHandedTimeOnIce": "0:00"
                  }
                }
              },
              "ID8475156": {
                "person": {
                  "id": 8475156,
                  "fullName": "Mikko Koskinen",
                  "link": "/api/v1/people/8475156",
                  "shootsCatches": "L",
                  "rosterStatus": "Y"
                },
                "jerseyNumber": "19",
                "position": {
                  "code": "G",
                  "name": "Goalie",
                  "type": "Goalie",
                  "abbreviation": "G"
                },
                "stats": {
                  "goalieStats": {
                    "timeOnIce": "0:00",
                    "assists": 0,
                    "goals": 0,
                    "pim": 0,
                    "shots": 0,
                    "saves": 0,
                    "powerPlaySaves": 0,
                    "shortHandedSaves": 0,
                    "evenSaves": 0,
                    "shortHandedShotsAgainst": 0,
                    "evenShotsAgainst": 0,
                    "powerPlayShotsAgainst": 0
                  }
                }
              },
              "ID8479338": {
                "person": {
                  "id": 8479338,
                  "fullName": "Markus Niemelainen",
                  "link": "/api/v1/people/8479338",
                  "shootsCatches": "L",
                  "rosterStatus": "Y"
                },
                "jerseyNumber": "80",
                "position": {
                  "code": "N/A",
                  "name": "Unknown",
                  "type": "Unknown",
                  "abbreviation": "N/A"
                },
                "stats": {
                  
                }
              },
              "ID8479973": {
                "person": {
                  "id": 8479973,
                  "fullName": "Stuart Skinner",
                  "link": "/api/v1/people/8479973",
                  "shootsCatches": "L",
                  "rosterStatus": "Y"
                },
                "jerseyNumber": "74",
                "position": {
                  "code": "N/A",
                  "name": "Unknown",
                  "type": "Unknown",
                  "abbreviation": "N/A"
                },
                "stats": {
                  
                }
              },
              "ID8478402": {
                "person": {
                  "id": 8478402,
                  "fullName": "Connor McDavid",
                  "link": "/api/v1/people/8478402",
                  "shootsCatches": "L",
                  "rosterStatus": "Y"
                },
                "jerseyNumber": "97",
                "position": {
                  "code": "C",
                  "name": "Center",
                  "type": "Forward",
                  "abbreviation": "C"
                },
                "stats": {
                  "skaterStats": {
                    "timeOnIce": "0:00",
                    "assists": 0,
                    "goals": 0,
                    "shots": 0,
                    "hits": 0,
                    "powerPlayGoals": 0,
                    "powerPlayAssists": 0,
                    "penaltyMinutes": 0,
                    "faceOffWins": 0,
                    "faceoffTaken": 0,
                    "takeaways": 0,
                    "giveaways": 0,
                    "shortHandedGoals": 0,
                    "shortHandedAssists": 0,
                    "blocked": 0,
                    "plusMinus": 0,
                    "evenTimeOnIce": "0:00",
                    "powerPlayTimeOnIce": "0:00",
                    "shortHandedTimeOnIce": "0:00"
                  }
                }
              },
              "ID8475197": {
                "person": {
                  "id": 8475197,
                  "fullName": "Tyson Barrie",
                  "link": "/api/v1/people/8475197",
                  "shootsCatches": "R",
                  "rosterStatus": "Y"
                },
                "jerseyNumber": "22",
                "position": {
                  "code": "D",
                  "name": "Defenseman",
                  "type": "Defenseman",
                  "abbreviation": "D"
                },
                "stats": {
                  "skaterStats": {
                    "timeOnIce": "0:00",
                    "assists": 0,
                    "goals": 0,
                    "shots": 0,
                    "hits": 0,
                    "powerPlayGoals": 0,
                    "powerPlayAssists": 0,
                    "penaltyMinutes": 0,
                    "faceOffWins": 0,
                    "faceoffTaken": 0,
                    "takeaways": 0,
                    "giveaways": 0,
                    "shortHandedGoals": 0,
                    "shortHandedAssists": 0,
                    "blocked": 0,
                    "plusMinus": 0,
                    "evenTimeOnIce": "0:00",
                    "powerPlayTimeOnIce": "0:00",
                    "shortHandedTimeOnIce": "0:00"
                  }
                }
              },
              "ID8474089": {
                "person": {
                  "id": 8474089,
                  "fullName": "Brad Malone",
                  "link": "/api/v1/people/8474089",
                  "shootsCatches": "L",
                  "rosterStatus": "Y"
                },
                "jerseyNumber": "24",
                "position": {
                  "code": "C",
                  "name": "Center",
                  "type": "Forward",
                  "abbreviation": "C"
                },
                "stats": {
                  "skaterStats": {
                    "timeOnIce": "0:00",
                    "assists": 0,
                    "goals": 0,
                    "shots": 0,
                    "hits": 0,
                    "powerPlayGoals": 0,
                    "powerPlayAssists": 0,
                    "penaltyMinutes": 0,
                    "faceOffWins": 0,
                    "faceoffTaken": 0,
                    "takeaways": 0,
                    "giveaways": 0,
                    "shortHandedGoals": 0,
                    "shortHandedAssists": 0,
                    "blocked": 0,
                    "plusMinus": 0,
                    "evenTimeOnIce": "0:00",
                    "powerPlayTimeOnIce": "0:00",
                    "shortHandedTimeOnIce": "0:00"
                  }
                }
              },
              "ID8478585": {
                "person": {
                  "id": 8478585,
                  "fullName": "Derek Ryan",
                  "link": "/api/v1/people/8478585",
                  "shootsCatches": "R",
                  "rosterStatus": "Y"
                },
                "jerseyNumber": "10",
                "position": {
                  "code": "C",
                  "name": "Center",
                  "type": "Forward",
                  "abbreviation": "C"
                },
                "stats": {
                  "skaterStats": {
                    "timeOnIce": "0:00",
                    "assists": 0,
                    "goals": 0,
                    "shots": 0,
                    "hits": 0,
                    "powerPlayGoals": 0,
                    "powerPlayAssists": 0,
                    "penaltyMinutes": 0,
                    "faceOffWins": 0,
                    "faceoffTaken": 0,
                    "takeaways": 0,
                    "giveaways": 0,
                    "shortHandedGoals": 0,
                    "shortHandedAssists": 0,
                    "blocked": 0,
                    "plusMinus": 0,
                    "evenTimeOnIce": "0:00",
                    "powerPlayTimeOnIce": "0:00",
                    "shortHandedTimeOnIce": "0:00"
                  }
                }
              }
            },
            "goalies": [
              8475156,
              8469608
            ],
            "skaters": [
              8470281,
              8476879,
              8471729,
              8478585,
              8479344,
              8475786,
              8475197,
              8474089,
              8477498,
              8476967,
              8477934,
              8477998,
              8475178,
              8480802,
              8480803,
              8475169,
              8476454,
              8478402,
              8482108,
              8476913,
              8476326,
              8473544,
              8476495,
              8480885,
              8482077,
              8479977,
              8480041,
              8479973,
              8479338,
              8481598
            ],
            "onIce": [
              
            ],
            "onIcePlus": [
              
            ],
            "scratches": [
              8482108,
              8476913,
              8476326,
              8473544,
              8476495,
              8480885,
              8482077,
              8479977,
              8480041,
              8479973,
              8479338,
              8481598
            ],
            "penaltyBox": [
              
            ],
            "coaches": [
              {
                "person": {
                  "fullName": "Jay Woodcroft",
                  "link": "/api/v1/people/null"
                },
                "position": {
                  "code": "HC",
                  "name": "Head Coach",
                  "type": "Head Coach",
                  "abbreviation": "Head Coach"
                }
              }
            ]
          }
        },
        "officials": [
          {
            "official": {
              "id": 2332,
              "fullName": "Wes McCauley",
              "link": "/api/v1/people/2332"
            },
            "officialType": "Referee"
          },
          {
            "official": {
              "id": 2490,
              "fullName": "Frederick L'Ecuyer",
              "link": "/api/v1/people/2490"
            },
            "officialType": "Referee"
          },
          {
            "official": {
              "id": 2308,
              "fullName": "Eric Furlatt",
              "link": "/api/v1/people/2308"
            },
            "officialType": "Referee"
          },
          {
            "official": {
              "id": 4651,
              "fullName": "Kiel Murchison",
              "link": "/api/v1/people/4651"
            },
            "officialType": "Linesman"
          },
          {
            "official": {
              "id": 6990,
              "fullName": "Ryan Daisy",
              "link": "/api/v1/people/6990"
            },
            "officialType": "Linesman"
          },
          {
            "official": {
              "id": 2326,
              "fullName": "Jonny Murray",
              "link": "/api/v1/people/2326"
            },
            "officialType": "Linesman"
          }
        ]
      },
      "decisions": {
        
      }
    }
  }

  module.exports = {feedLiveStart};