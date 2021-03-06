// 20220604204716
// https://statsapi.web.nhl.com/api/v1/game/2021030323/feed/live

const feedLiveGoal2 = {
    "copyright": "NHL and the NHL Shield are registered trademarks of the National Hockey League. NHL and NHL team marks are the property of the NHL and its teams. © NHL 2022. All Rights Reserved.",
    "gamePk": 2021030323,
    "link": "/api/v1/game/2021030323/feed/live",
    "metaData": {
      "wait": 10,
      "timeStamp": "20220605_004701"
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
        "abstractGameState": "Live",
        "codedGameState": "3",
        "detailedState": "In Progress",
        "statusCode": "3",
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
          },
          {
            "result": {
              "event": "Period Ready",
              "eventCode": "EDM5",
              "eventTypeId": "PERIOD_READY",
              "description": "Period Ready"
            },
            "about": {
              "eventIdx": 1,
              "eventId": 5,
              "period": 1,
              "periodType": "REGULAR",
              "ordinalNum": "1st",
              "periodTime": "00:00",
              "periodTimeRemaining": "20:00",
              "dateTime": "2022-06-05T00:14:56Z",
              "goals": {
                "away": 0,
                "home": 0
              }
            },
            "coordinates": {
              
            }
          },
          {
            "result": {
              "event": "Period Start",
              "eventCode": "EDM51",
              "eventTypeId": "PERIOD_START",
              "description": "Period Start"
            },
            "about": {
              "eventIdx": 2,
              "eventId": 51,
              "period": 1,
              "periodType": "REGULAR",
              "ordinalNum": "1st",
              "periodTime": "00:00",
              "periodTimeRemaining": "20:00",
              "dateTime": "2022-06-05T00:15:35Z",
              "goals": {
                "away": 0,
                "home": 0
              }
            },
            "coordinates": {
              
            }
          },
          {
            "players": [
              {
                "player": {
                  "id": 8477492,
                  "fullName": "Nathan MacKinnon",
                  "link": "/api/v1/people/8477492"
                },
                "playerType": "Winner"
              },
              {
                "player": {
                  "id": 8477934,
                  "fullName": "Leon Draisaitl",
                  "link": "/api/v1/people/8477934"
                },
                "playerType": "Loser"
              }
            ],
            "result": {
              "event": "Faceoff",
              "eventCode": "EDM52",
              "eventTypeId": "FACEOFF",
              "description": "Nathan MacKinnon faceoff won against Leon Draisaitl"
            },
            "about": {
              "eventIdx": 3,
              "eventId": 52,
              "period": 1,
              "periodType": "REGULAR",
              "ordinalNum": "1st",
              "periodTime": "00:00",
              "periodTimeRemaining": "20:00",
              "dateTime": "2022-06-05T00:15:35Z",
              "goals": {
                "away": 0,
                "home": 0
              }
            },
            "coordinates": {
              "x": 0.0,
              "y": 0.0
            },
            "team": {
              "id": 21,
              "name": "Colorado Avalanche",
              "link": "/api/v1/teams/21",
              "triCode": "COL"
            }
          },
          {
            "players": [
              {
                "player": {
                  "id": 8476454,
                  "fullName": "Ryan Nugent-Hopkins",
                  "link": "/api/v1/people/8476454"
                },
                "playerType": "Hitter"
              },
              {
                "player": {
                  "id": 8480069,
                  "fullName": "Cale Makar",
                  "link": "/api/v1/people/8480069"
                },
                "playerType": "Hittee"
              }
            ],
            "result": {
              "event": "Hit",
              "eventCode": "EDM8",
              "eventTypeId": "HIT",
              "description": "Ryan Nugent-Hopkins hit Cale Makar"
            },
            "about": {
              "eventIdx": 4,
              "eventId": 8,
              "period": 1,
              "periodType": "REGULAR",
              "ordinalNum": "1st",
              "periodTime": "00:25",
              "periodTimeRemaining": "19:35",
              "dateTime": "2022-06-05T00:16:00Z",
              "goals": {
                "away": 0,
                "home": 0
              }
            },
            "coordinates": {
              "x": 87.0,
              "y": 34.0
            },
            "team": {
              "id": 22,
              "name": "Edmonton Oilers",
              "link": "/api/v1/teams/22",
              "triCode": "EDM"
            }
          },
          {
            "players": [
              {
                "player": {
                  "id": 8478402,
                  "fullName": "Connor McDavid",
                  "link": "/api/v1/people/8478402"
                },
                "playerType": "Scorer",
                "seasonTotal": 9
              },
              {
                "player": {
                  "id": 8475786,
                  "fullName": "Zach Hyman",
                  "link": "/api/v1/people/8475786"
                },
                "playerType": "Assist",
                "seasonTotal": 5
              },
              {
                "player": {
                  "id": 8477498,
                  "fullName": "Darnell Nurse",
                  "link": "/api/v1/people/8477498"
                },
                "playerType": "Assist",
                "seasonTotal": 3
              },
              {
                "player": {
                  "id": 8480925,
                  "fullName": "Pavel Francouz",
                  "link": "/api/v1/people/8480925"
                },
                "playerType": "Goalie"
              }
            ],
            "result": {
              "event": "Goal",
              "eventCode": "EDM151",
              "eventTypeId": "GOAL",
              "description": "Connor McDavid (9) Wrist Shot, assists: Zach Hyman (5), Darnell Nurse (3)",
              "secondaryType": "Wrist Shot",
              "strength": {
                "code": "EVEN",
                "name": "Even"
              },
              "emptyNet": false
            },
            "about": {
              "eventIdx": 5,
              "eventId": 151,
              "period": 1,
              "periodType": "REGULAR",
              "ordinalNum": "1st",
              "periodTime": "00:38",
              "periodTimeRemaining": "19:22",
              "dateTime": "2022-06-05T00:16:14Z",
              "goals": {
                "away": 0,
                "home": 1
              }
            },
            "coordinates": {
              "x": 73.0,
              "y": 15.0
            },
            "team": {
              "id": 22,
              "name": "Edmonton Oilers",
              "link": "/api/v1/teams/22",
              "triCode": "EDM"
            }
          },
          {
            "players": [
              {
                "player": {
                  "id": 8478402,
                  "fullName": "Connor McDavid",
                  "link": "/api/v1/people/8478402"
                },
                "playerType": "Winner"
              },
              {
                "player": {
                  "id": 8475172,
                  "fullName": "Nazem Kadri",
                  "link": "/api/v1/people/8475172"
                },
                "playerType": "Loser"
              }
            ],
            "result": {
              "event": "Faceoff",
              "eventCode": "EDM53",
              "eventTypeId": "FACEOFF",
              "description": "Connor McDavid faceoff won against Nazem Kadri"
            },
            "about": {
              "eventIdx": 6,
              "eventId": 53,
              "period": 1,
              "periodType": "REGULAR",
              "ordinalNum": "1st",
              "periodTime": "00:38",
              "periodTimeRemaining": "19:22",
              "dateTime": "2022-06-05T00:16:52Z",
              "goals": {
                "away": 0,
                "home": 1
              }
            },
            "coordinates": {
              "x": 0.0,
              "y": 0.0
            },
            "team": {
              "id": 22,
              "name": "Edmonton Oilers",
              "link": "/api/v1/teams/22",
              "triCode": "EDM"
            }
          },
          {
            "players": [
              {
                "player": {
                  "id": 8473446,
                  "fullName": "Erik Johnson",
                  "link": "/api/v1/people/8473446"
                },
                "playerType": "Hitter"
              },
              {
                "player": {
                  "id": 8478402,
                  "fullName": "Connor McDavid",
                  "link": "/api/v1/people/8478402"
                },
                "playerType": "Hittee"
              }
            ],
            "result": {
              "event": "Hit",
              "eventCode": "EDM9",
              "eventTypeId": "HIT",
              "description": "Erik Johnson hit Connor McDavid"
            },
            "about": {
              "eventIdx": 7,
              "eventId": 9,
              "period": 1,
              "periodType": "REGULAR",
              "ordinalNum": "1st",
              "periodTime": "00:57",
              "periodTimeRemaining": "19:03",
              "dateTime": "2022-06-05T00:17:11Z",
              "goals": {
                "away": 0,
                "home": 1
              }
            },
            "coordinates": {
              "x": 97.0,
              "y": -19.0
            },
            "team": {
              "id": 21,
              "name": "Colorado Avalanche",
              "link": "/api/v1/teams/21",
              "triCode": "COL"
            }
          },
          {
            "players": [
              {
                "player": {
                  "id": 8478402,
                  "fullName": "Connor McDavid",
                  "link": "/api/v1/people/8478402"
                },
                "playerType": "PlayerID"
              }
            ],
            "result": {
              "event": "Giveaway",
              "eventCode": "EDM54",
              "eventTypeId": "GIVEAWAY",
              "description": "Giveaway by Connor McDavid"
            },
            "about": {
              "eventIdx": 8,
              "eventId": 54,
              "period": 1,
              "periodType": "REGULAR",
              "ordinalNum": "1st",
              "periodTime": "00:58",
              "periodTimeRemaining": "19:02",
              "dateTime": "2022-06-05T00:17:12Z",
              "goals": {
                "away": 0,
                "home": 1
              }
            },
            "coordinates": {
              "x": 94.0,
              "y": -15.0
            },
            "team": {
              "id": 22,
              "name": "Edmonton Oilers",
              "link": "/api/v1/teams/22",
              "triCode": "EDM"
            }
          },
          {
            "result": {
              "event": "Stoppage",
              "eventCode": "EDM10",
              "eventTypeId": "STOP",
              "description": "Video Review"
            },
            "about": {
              "eventIdx": 10,
              "eventId": 10,
              "period": 1,
              "periodType": "REGULAR",
              "ordinalNum": "1st",
              "periodTime": "01:06",
              "periodTimeRemaining": "18:54",
              "dateTime": "2022-06-05T00:17:20Z",
              "goals": {
                "away": 0,
                "home": 1
              }
            },
            "coordinates": {
              
            }
          },
          {
            "players": [
              {
                "player": {
                  "id": 8475169,
                  "fullName": "Evander Kane",
                  "link": "/api/v1/people/8475169"
                },
                "playerType": "PenaltyOn"
              },
              {
                "player": {
                  "id": 8475172,
                  "fullName": "Nazem Kadri",
                  "link": "/api/v1/people/8475172"
                },
                "playerType": "DrewBy"
              }
            ],
            "result": {
              "event": "Penalty",
              "eventCode": "EDM111",
              "eventTypeId": "PENALTY",
              "description": "Evander Kane Boarding against Nazem Kadri",
              "secondaryType": "Boarding",
              "penaltySeverity": "Major",
              "penaltyMinutes": 5
            },
            "about": {
              "eventIdx": 9,
              "eventId": 111,
              "period": 1,
              "periodType": "REGULAR",
              "ordinalNum": "1st",
              "periodTime": "01:06",
              "periodTimeRemaining": "18:54",
              "dateTime": "2022-06-05T00:17:20Z",
              "goals": {
                "away": 0,
                "home": 1
              }
            },
            "coordinates": {
              "x": -96.0,
              "y": 23.0
            },
            "team": {
              "id": 22,
              "name": "Edmonton Oilers",
              "link": "/api/v1/teams/22",
              "triCode": "EDM"
            }
          },
          {
            "players": [
              {
                "player": {
                  "id": 8478585,
                  "fullName": "Derek Ryan",
                  "link": "/api/v1/people/8478585"
                },
                "playerType": "Winner"
              },
              {
                "player": {
                  "id": 8476455,
                  "fullName": "Gabriel Landeskog",
                  "link": "/api/v1/people/8476455"
                },
                "playerType": "Loser"
              }
            ],
            "result": {
              "event": "Faceoff",
              "eventCode": "EDM55",
              "eventTypeId": "FACEOFF",
              "description": "Derek Ryan faceoff won against Gabriel Landeskog"
            },
            "about": {
              "eventIdx": 11,
              "eventId": 55,
              "period": 1,
              "periodType": "REGULAR",
              "ordinalNum": "1st",
              "periodTime": "01:06",
              "periodTimeRemaining": "18:54",
              "dateTime": "2022-06-05T00:20:29Z",
              "goals": {
                "away": 0,
                "home": 1
              }
            },
            "coordinates": {
              "x": -69.0,
              "y": -22.0
            },
            "team": {
              "id": 22,
              "name": "Edmonton Oilers",
              "link": "/api/v1/teams/22",
              "triCode": "EDM"
            }
          },
          {
            "players": [
              {
                "player": {
                  "id": 8478420,
                  "fullName": "Mikko Rantanen",
                  "link": "/api/v1/people/8478420"
                },
                "playerType": "Shooter"
              },
              {
                "player": {
                  "id": 8469608,
                  "fullName": "Mike Smith",
                  "link": "/api/v1/people/8469608"
                },
                "playerType": "Goalie"
              }
            ],
            "result": {
              "event": "Shot",
              "eventCode": "EDM152",
              "eventTypeId": "SHOT",
              "description": "Mikko Rantanen Snap Shot saved by Mike Smith",
              "secondaryType": "Snap Shot"
            },
            "about": {
              "eventIdx": 12,
              "eventId": 152,
              "period": 1,
              "periodType": "REGULAR",
              "ordinalNum": "1st",
              "periodTime": "01:20",
              "periodTimeRemaining": "18:40",
              "dateTime": "2022-06-05T00:20:43Z",
              "goals": {
                "away": 0,
                "home": 1
              }
            },
            "coordinates": {
              "x": -43.0,
              "y": 24.0
            },
            "team": {
              "id": 21,
              "name": "Colorado Avalanche",
              "link": "/api/v1/teams/21",
              "triCode": "COL"
            }
          },
          {
            "result": {
              "event": "Stoppage",
              "eventCode": "EDM11",
              "eventTypeId": "STOP",
              "description": "Goalie Stopped"
            },
            "about": {
              "eventIdx": 13,
              "eventId": 11,
              "period": 1,
              "periodType": "REGULAR",
              "ordinalNum": "1st",
              "periodTime": "01:21",
              "periodTimeRemaining": "18:39",
              "dateTime": "2022-06-05T00:20:44Z",
              "goals": {
                "away": 0,
                "home": 1
              }
            },
            "coordinates": {
              
            }
          },
          {
            "players": [
              {
                "player": {
                  "id": 8477492,
                  "fullName": "Nathan MacKinnon",
                  "link": "/api/v1/people/8477492"
                },
                "playerType": "Winner"
              },
              {
                "player": {
                  "id": 8476454,
                  "fullName": "Ryan Nugent-Hopkins",
                  "link": "/api/v1/people/8476454"
                },
                "playerType": "Loser"
              }
            ],
            "result": {
              "event": "Faceoff",
              "eventCode": "EDM56",
              "eventTypeId": "FACEOFF",
              "description": "Nathan MacKinnon faceoff won against Ryan Nugent-Hopkins"
            },
            "about": {
              "eventIdx": 14,
              "eventId": 56,
              "period": 1,
              "periodType": "REGULAR",
              "ordinalNum": "1st",
              "periodTime": "01:21",
              "periodTimeRemaining": "18:39",
              "dateTime": "2022-06-05T00:21:10Z",
              "goals": {
                "away": 0,
                "home": 1
              }
            },
            "coordinates": {
              "x": -69.0,
              "y": 22.0
            },
            "team": {
              "id": 21,
              "name": "Colorado Avalanche",
              "link": "/api/v1/teams/21",
              "triCode": "COL"
            }
          },
          {
            "players": [
              {
                "player": {
                  "id": 8476455,
                  "fullName": "Gabriel Landeskog",
                  "link": "/api/v1/people/8476455"
                },
                "playerType": "Shooter"
              },
              {
                "player": {
                  "id": 8469608,
                  "fullName": "Mike Smith",
                  "link": "/api/v1/people/8469608"
                },
                "playerType": "Goalie"
              }
            ],
            "result": {
              "event": "Shot",
              "eventCode": "EDM153",
              "eventTypeId": "SHOT",
              "description": "Gabriel Landeskog Snap Shot saved by Mike Smith",
              "secondaryType": "Snap Shot"
            },
            "about": {
              "eventIdx": 15,
              "eventId": 153,
              "period": 1,
              "periodType": "REGULAR",
              "ordinalNum": "1st",
              "periodTime": "01:35",
              "periodTimeRemaining": "18:25",
              "dateTime": "2022-06-05T00:21:24Z",
              "goals": {
                "away": 0,
                "home": 1
              }
            },
            "coordinates": {
              "x": -57.0,
              "y": 24.0
            },
            "team": {
              "id": 21,
              "name": "Colorado Avalanche",
              "link": "/api/v1/teams/21",
              "triCode": "COL"
            }
          },
          {
            "result": {
              "event": "Stoppage",
              "eventCode": "EDM12",
              "eventTypeId": "STOP",
              "description": "Goalie Stopped"
            },
            "about": {
              "eventIdx": 16,
              "eventId": 12,
              "period": 1,
              "periodType": "REGULAR",
              "ordinalNum": "1st",
              "periodTime": "01:36",
              "periodTimeRemaining": "18:24",
              "dateTime": "2022-06-05T00:21:25Z",
              "goals": {
                "away": 0,
                "home": 1
              }
            },
            "coordinates": {
              
            }
          },
          {
            "players": [
              {
                "player": {
                  "id": 8477934,
                  "fullName": "Leon Draisaitl",
                  "link": "/api/v1/people/8477934"
                },
                "playerType": "Winner"
              },
              {
                "player": {
                  "id": 8477492,
                  "fullName": "Nathan MacKinnon",
                  "link": "/api/v1/people/8477492"
                },
                "playerType": "Loser"
              }
            ],
            "result": {
              "event": "Faceoff",
              "eventCode": "EDM57",
              "eventTypeId": "FACEOFF",
              "description": "Leon Draisaitl faceoff won against Nathan MacKinnon"
            },
            "about": {
              "eventIdx": 17,
              "eventId": 57,
              "period": 1,
              "periodType": "REGULAR",
              "ordinalNum": "1st",
              "periodTime": "01:36",
              "periodTimeRemaining": "18:24",
              "dateTime": "2022-06-05T00:21:51Z",
              "goals": {
                "away": 0,
                "home": 1
              }
            },
            "coordinates": {
              "x": -69.0,
              "y": 22.0
            },
            "team": {
              "id": 22,
              "name": "Edmonton Oilers",
              "link": "/api/v1/teams/22",
              "triCode": "EDM"
            }
          },
          {
            "players": [
              {
                "player": {
                  "id": 8477492,
                  "fullName": "Nathan MacKinnon",
                  "link": "/api/v1/people/8477492"
                },
                "playerType": "Shooter"
              },
              {
                "player": {
                  "id": 8469608,
                  "fullName": "Mike Smith",
                  "link": "/api/v1/people/8469608"
                },
                "playerType": "Goalie"
              }
            ],
            "result": {
              "event": "Shot",
              "eventCode": "EDM154",
              "eventTypeId": "SHOT",
              "description": "Nathan MacKinnon Tip-In saved by Mike Smith",
              "secondaryType": "Tip-In"
            },
            "about": {
              "eventIdx": 18,
              "eventId": 154,
              "period": 1,
              "periodType": "REGULAR",
              "ordinalNum": "1st",
              "periodTime": "01:58",
              "periodTimeRemaining": "18:02",
              "dateTime": "2022-06-05T00:22:13Z",
              "goals": {
                "away": 0,
                "home": 1
              }
            },
            "coordinates": {
              "x": -85.0,
              "y": -5.0
            },
            "team": {
              "id": 21,
              "name": "Colorado Avalanche",
              "link": "/api/v1/teams/21",
              "triCode": "COL"
            }
          },
          {
            "players": [
              {
                "player": {
                  "id": 8480069,
                  "fullName": "Cale Makar",
                  "link": "/api/v1/people/8480069"
                },
                "playerType": "Shooter"
              },
              {
                "player": {
                  "id": 8469608,
                  "fullName": "Mike Smith",
                  "link": "/api/v1/people/8469608"
                },
                "playerType": "Goalie"
              }
            ],
            "result": {
              "event": "Shot",
              "eventCode": "EDM155",
              "eventTypeId": "SHOT",
              "description": "Cale Makar Slap Shot saved by Mike Smith",
              "secondaryType": "Slap Shot"
            },
            "about": {
              "eventIdx": 19,
              "eventId": 155,
              "period": 1,
              "periodType": "REGULAR",
              "ordinalNum": "1st",
              "periodTime": "02:05",
              "periodTimeRemaining": "17:55",
              "dateTime": "2022-06-05T00:22:20Z",
              "goals": {
                "away": 0,
                "home": 1
              }
            },
            "coordinates": {
              "x": -34.0,
              "y": -2.0
            },
            "team": {
              "id": 21,
              "name": "Colorado Avalanche",
              "link": "/api/v1/teams/21",
              "triCode": "COL"
            }
          },
          {
            "result": {
              "event": "Stoppage",
              "eventCode": "EDM13",
              "eventTypeId": "STOP",
              "description": "Goalie Stopped"
            },
            "about": {
              "eventIdx": 20,
              "eventId": 13,
              "period": 1,
              "periodType": "REGULAR",
              "ordinalNum": "1st",
              "periodTime": "02:06",
              "periodTimeRemaining": "17:54",
              "dateTime": "2022-06-05T00:22:21Z",
              "goals": {
                "away": 0,
                "home": 1
              }
            },
            "coordinates": {
              
            }
          },
          {
            "players": [
              {
                "player": {
                  "id": 8476455,
                  "fullName": "Gabriel Landeskog",
                  "link": "/api/v1/people/8476455"
                },
                "playerType": "Winner"
              },
              {
                "player": {
                  "id": 8478585,
                  "fullName": "Derek Ryan",
                  "link": "/api/v1/people/8478585"
                },
                "playerType": "Loser"
              }
            ],
            "result": {
              "event": "Faceoff",
              "eventCode": "EDM58",
              "eventTypeId": "FACEOFF",
              "description": "Gabriel Landeskog faceoff won against Derek Ryan"
            },
            "about": {
              "eventIdx": 21,
              "eventId": 58,
              "period": 1,
              "periodType": "REGULAR",
              "ordinalNum": "1st",
              "periodTime": "02:06",
              "periodTimeRemaining": "17:54",
              "dateTime": "2022-06-05T00:22:46Z",
              "goals": {
                "away": 0,
                "home": 1
              }
            },
            "coordinates": {
              "x": -69.0,
              "y": -22.0
            },
            "team": {
              "id": 21,
              "name": "Colorado Avalanche",
              "link": "/api/v1/teams/21",
              "triCode": "COL"
            }
          },
          {
            "players": [
              {
                "player": {
                  "id": 8471729,
                  "fullName": "Kris Russell",
                  "link": "/api/v1/people/8471729"
                },
                "playerType": "Blocker"
              },
              {
                "player": {
                  "id": 8477492,
                  "fullName": "Nathan MacKinnon",
                  "link": "/api/v1/people/8477492"
                },
                "playerType": "Shooter"
              }
            ],
            "result": {
              "event": "Blocked Shot",
              "eventCode": "EDM156",
              "eventTypeId": "BLOCKED_SHOT",
              "description": "Nathan MacKinnon shot blocked shot by Kris Russell"
            },
            "about": {
              "eventIdx": 22,
              "eventId": 156,
              "period": 1,
              "periodType": "REGULAR",
              "ordinalNum": "1st",
              "periodTime": "02:12",
              "periodTimeRemaining": "17:48",
              "dateTime": "2022-06-05T00:22:52Z",
              "goals": {
                "away": 0,
                "home": 1
              }
            },
            "coordinates": {
              "x": -64.0,
              "y": -5.0
            },
            "team": {
              "id": 22,
              "name": "Edmonton Oilers",
              "link": "/api/v1/teams/22",
              "triCode": "EDM"
            }
          },
          {
            "players": [
              {
                "player": {
                  "id": 8477492,
                  "fullName": "Nathan MacKinnon",
                  "link": "/api/v1/people/8477492"
                },
                "playerType": "Shooter"
              },
              {
                "player": {
                  "id": 8469608,
                  "fullName": "Mike Smith",
                  "link": "/api/v1/people/8469608"
                },
                "playerType": "Goalie"
              }
            ],
            "result": {
              "event": "Shot",
              "eventCode": "EDM157",
              "eventTypeId": "SHOT",
              "description": "Nathan MacKinnon Slap Shot saved by Mike Smith",
              "secondaryType": "Slap Shot"
            },
            "about": {
              "eventIdx": 23,
              "eventId": 157,
              "period": 1,
              "periodType": "REGULAR",
              "ordinalNum": "1st",
              "periodTime": "02:43",
              "periodTimeRemaining": "17:17",
              "dateTime": "2022-06-05T00:23:23Z",
              "goals": {
                "away": 0,
                "home": 1
              }
            },
            "coordinates": {
              "x": -55.0,
              "y": -19.0
            },
            "team": {
              "id": 21,
              "name": "Colorado Avalanche",
              "link": "/api/v1/teams/21",
              "triCode": "COL"
            }
          },
          {
            "players": [
              {
                "player": {
                  "id": 8476455,
                  "fullName": "Gabriel Landeskog",
                  "link": "/api/v1/people/8476455"
                },
                "playerType": "Hitter"
              },
              {
                "player": {
                  "id": 8471729,
                  "fullName": "Kris Russell",
                  "link": "/api/v1/people/8471729"
                },
                "playerType": "Hittee"
              }
            ],
            "result": {
              "event": "Hit",
              "eventCode": "EDM14",
              "eventTypeId": "HIT",
              "description": "Gabriel Landeskog hit Kris Russell"
            },
            "about": {
              "eventIdx": 24,
              "eventId": 14,
              "period": 1,
              "periodType": "REGULAR",
              "ordinalNum": "1st",
              "periodTime": "02:45",
              "periodTimeRemaining": "17:15",
              "dateTime": "2022-06-05T00:23:25Z",
              "goals": {
                "away": 0,
                "home": 1
              }
            },
            "coordinates": {
              "x": -96.0,
              "y": -12.0
            },
            "team": {
              "id": 21,
              "name": "Colorado Avalanche",
              "link": "/api/v1/teams/21",
              "triCode": "COL"
            }
          },
          {
            "players": [
              {
                "player": {
                  "id": 8476455,
                  "fullName": "Gabriel Landeskog",
                  "link": "/api/v1/people/8476455"
                },
                "playerType": "Shooter"
              },
              {
                "player": {
                  "id": 8469608,
                  "fullName": "Mike Smith",
                  "link": "/api/v1/people/8469608"
                },
                "playerType": "Unknown"
              }
            ],
            "result": {
              "event": "Missed Shot",
              "eventCode": "EDM158",
              "eventTypeId": "MISSED_SHOT",
              "description": "Gabriel Landeskog Wide of Net Mike Smith"
            },
            "about": {
              "eventIdx": 25,
              "eventId": 158,
              "period": 1,
              "periodType": "REGULAR",
              "ordinalNum": "1st",
              "periodTime": "02:58",
              "periodTimeRemaining": "17:02",
              "dateTime": "2022-06-05T00:23:38Z",
              "goals": {
                "away": 0,
                "home": 1
              }
            },
            "coordinates": {
              "x": -67.0,
              "y": 6.0
            },
            "team": {
              "id": 21,
              "name": "Colorado Avalanche",
              "link": "/api/v1/teams/21",
              "triCode": "COL"
            }
          },
          {
            "players": [
              {
                "player": {
                  "id": 8478420,
                  "fullName": "Mikko Rantanen",
                  "link": "/api/v1/people/8478420"
                },
                "playerType": "Shooter"
              },
              {
                "player": {
                  "id": 8469608,
                  "fullName": "Mike Smith",
                  "link": "/api/v1/people/8469608"
                },
                "playerType": "Goalie"
              }
            ],
            "result": {
              "event": "Shot",
              "eventCode": "EDM159",
              "eventTypeId": "SHOT",
              "description": "Mikko Rantanen Slap Shot saved by Mike Smith",
              "secondaryType": "Slap Shot"
            },
            "about": {
              "eventIdx": 26,
              "eventId": 159,
              "period": 1,
              "periodType": "REGULAR",
              "ordinalNum": "1st",
              "periodTime": "03:14",
              "periodTimeRemaining": "16:46",
              "dateTime": "2022-06-05T00:23:54Z",
              "goals": {
                "away": 0,
                "home": 1
              }
            },
            "coordinates": {
              "x": -60.0,
              "y": 20.0
            },
            "team": {
              "id": 21,
              "name": "Colorado Avalanche",
              "link": "/api/v1/teams/21",
              "triCode": "COL"
            }
          },
          {
            "result": {
              "event": "Stoppage",
              "eventCode": "EDM15",
              "eventTypeId": "STOP",
              "description": "Goalie Stopped"
            },
            "about": {
              "eventIdx": 27,
              "eventId": 15,
              "period": 1,
              "periodType": "REGULAR",
              "ordinalNum": "1st",
              "periodTime": "03:15",
              "periodTimeRemaining": "16:45",
              "dateTime": "2022-06-05T00:23:54Z",
              "goals": {
                "away": 0,
                "home": 1
              }
            },
            "coordinates": {
              
            }
          },
          {
            "players": [
              {
                "player": {
                  "id": 8477934,
                  "fullName": "Leon Draisaitl",
                  "link": "/api/v1/people/8477934"
                },
                "playerType": "Winner"
              },
              {
                "player": {
                  "id": 8477456,
                  "fullName": "J.T. Compher",
                  "link": "/api/v1/people/8477456"
                },
                "playerType": "Loser"
              }
            ],
            "result": {
              "event": "Faceoff",
              "eventCode": "EDM59",
              "eventTypeId": "FACEOFF",
              "description": "Leon Draisaitl faceoff won against J.T. Compher"
            },
            "about": {
              "eventIdx": 28,
              "eventId": 59,
              "period": 1,
              "periodType": "REGULAR",
              "ordinalNum": "1st",
              "periodTime": "03:15",
              "periodTimeRemaining": "16:45",
              "dateTime": "2022-06-05T00:24:31Z",
              "goals": {
                "away": 0,
                "home": 1
              }
            },
            "coordinates": {
              "x": -69.0,
              "y": 22.0
            },
            "team": {
              "id": 22,
              "name": "Edmonton Oilers",
              "link": "/api/v1/teams/22",
              "triCode": "EDM"
            }
          },
          {
            "players": [
              {
                "player": {
                  "id": 8474089,
                  "fullName": "Brad Malone",
                  "link": "/api/v1/people/8474089"
                },
                "playerType": "Hitter"
              },
              {
                "player": {
                  "id": 8477456,
                  "fullName": "J.T. Compher",
                  "link": "/api/v1/people/8477456"
                },
                "playerType": "Hittee"
              }
            ],
            "result": {
              "event": "Hit",
              "eventCode": "EDM17",
              "eventTypeId": "HIT",
              "description": "Brad Malone hit J.T. Compher"
            },
            "about": {
              "eventIdx": 29,
              "eventId": 17,
              "period": 1,
              "periodType": "REGULAR",
              "ordinalNum": "1st",
              "periodTime": "03:39",
              "periodTimeRemaining": "16:21",
              "dateTime": "2022-06-05T00:24:55Z",
              "goals": {
                "away": 0,
                "home": 1
              }
            },
            "coordinates": {
              "x": -99.0,
              "y": -10.0
            },
            "team": {
              "id": 22,
              "name": "Edmonton Oilers",
              "link": "/api/v1/teams/22",
              "triCode": "EDM"
            }
          },
          {
            "players": [
              {
                "player": {
                  "id": 8477492,
                  "fullName": "Nathan MacKinnon",
                  "link": "/api/v1/people/8477492"
                },
                "playerType": "Shooter"
              },
              {
                "player": {
                  "id": 8469608,
                  "fullName": "Mike Smith",
                  "link": "/api/v1/people/8469608"
                },
                "playerType": "Unknown"
              }
            ],
            "result": {
              "event": "Missed Shot",
              "eventCode": "EDM160",
              "eventTypeId": "MISSED_SHOT",
              "description": "Nathan MacKinnon Wide of Net Mike Smith"
            },
            "about": {
              "eventIdx": 30,
              "eventId": 160,
              "period": 1,
              "periodType": "REGULAR",
              "ordinalNum": "1st",
              "periodTime": "04:22",
              "periodTimeRemaining": "15:38",
              "dateTime": "2022-06-05T00:25:38Z",
              "goals": {
                "away": 0,
                "home": 1
              }
            },
            "coordinates": {
              "x": -74.0,
              "y": -12.0
            },
            "team": {
              "id": 21,
              "name": "Colorado Avalanche",
              "link": "/api/v1/teams/21",
              "triCode": "COL"
            }
          },
          {
            "players": [
              {
                "player": {
                  "id": 8477498,
                  "fullName": "Darnell Nurse",
                  "link": "/api/v1/people/8477498"
                },
                "playerType": "Hitter"
              },
              {
                "player": {
                  "id": 8477492,
                  "fullName": "Nathan MacKinnon",
                  "link": "/api/v1/people/8477492"
                },
                "playerType": "Hittee"
              }
            ],
            "result": {
              "event": "Hit",
              "eventCode": "EDM18",
              "eventTypeId": "HIT",
              "description": "Darnell Nurse hit Nathan MacKinnon"
            },
            "about": {
              "eventIdx": 31,
              "eventId": 18,
              "period": 1,
              "periodType": "REGULAR",
              "ordinalNum": "1st",
              "periodTime": "04:24",
              "periodTimeRemaining": "15:36",
              "dateTime": "2022-06-05T00:25:40Z",
              "goals": {
                "away": 0,
                "home": 1
              }
            },
            "coordinates": {
              "x": -90.0,
              "y": -32.0
            },
            "team": {
              "id": 22,
              "name": "Edmonton Oilers",
              "link": "/api/v1/teams/22",
              "triCode": "EDM"
            }
          },
          {
            "players": [
              {
                "player": {
                  "id": 8477476,
                  "fullName": "Artturi Lehkonen",
                  "link": "/api/v1/people/8477476"
                },
                "playerType": "Shooter"
              },
              {
                "player": {
                  "id": 8469608,
                  "fullName": "Mike Smith",
                  "link": "/api/v1/people/8469608"
                },
                "playerType": "Goalie"
              }
            ],
            "result": {
              "event": "Shot",
              "eventCode": "EDM161",
              "eventTypeId": "SHOT",
              "description": "Artturi Lehkonen Tip-In saved by Mike Smith",
              "secondaryType": "Tip-In"
            },
            "about": {
              "eventIdx": 32,
              "eventId": 161,
              "period": 1,
              "periodType": "REGULAR",
              "ordinalNum": "1st",
              "periodTime": "04:30",
              "periodTimeRemaining": "15:30",
              "dateTime": "2022-06-05T00:25:46Z",
              "goals": {
                "away": 0,
                "home": 1
              }
            },
            "coordinates": {
              "x": -69.0,
              "y": 0.0
            },
            "team": {
              "id": 21,
              "name": "Colorado Avalanche",
              "link": "/api/v1/teams/21",
              "triCode": "COL"
            }
          },
          {
            "players": [
              {
                "player": {
                  "id": 8471729,
                  "fullName": "Kris Russell",
                  "link": "/api/v1/people/8471729"
                },
                "playerType": "Blocker"
              },
              {
                "player": {
                  "id": 8477456,
                  "fullName": "J.T. Compher",
                  "link": "/api/v1/people/8477456"
                },
                "playerType": "Shooter"
              }
            ],
            "result": {
              "event": "Blocked Shot",
              "eventCode": "EDM162",
              "eventTypeId": "BLOCKED_SHOT",
              "description": "J.T. Compher shot blocked shot by Kris Russell"
            },
            "about": {
              "eventIdx": 33,
              "eventId": 162,
              "period": 1,
              "periodType": "REGULAR",
              "ordinalNum": "1st",
              "periodTime": "05:00",
              "periodTimeRemaining": "15:00",
              "dateTime": "2022-06-05T00:26:16Z",
              "goals": {
                "away": 0,
                "home": 1
              }
            },
            "coordinates": {
              "x": -76.0,
              "y": -7.0
            },
            "team": {
              "id": 22,
              "name": "Edmonton Oilers",
              "link": "/api/v1/teams/22",
              "triCode": "EDM"
            }
          },
          {
            "players": [
              {
                "player": {
                  "id": 8476967,
                  "fullName": "Brett Kulak",
                  "link": "/api/v1/people/8476967"
                },
                "playerType": "Shooter"
              },
              {
                "player": {
                  "id": 8480925,
                  "fullName": "Pavel Francouz",
                  "link": "/api/v1/people/8480925"
                },
                "playerType": "Goalie"
              }
            ],
            "result": {
              "event": "Shot",
              "eventCode": "EDM163",
              "eventTypeId": "SHOT",
              "description": "Brett Kulak Slap Shot saved by Pavel Francouz",
              "secondaryType": "Slap Shot"
            },
            "about": {
              "eventIdx": 34,
              "eventId": 163,
              "period": 1,
              "periodType": "REGULAR",
              "ordinalNum": "1st",
              "periodTime": "05:10",
              "periodTimeRemaining": "14:50",
              "dateTime": "2022-06-05T00:26:26Z",
              "goals": {
                "away": 0,
                "home": 1
              }
            },
            "coordinates": {
              "x": -71.0,
              "y": 21.0
            },
            "team": {
              "id": 22,
              "name": "Edmonton Oilers",
              "link": "/api/v1/teams/22",
              "triCode": "EDM"
            }
          },
          {
            "players": [
              {
                "player": {
                  "id": 8474089,
                  "fullName": "Brad Malone",
                  "link": "/api/v1/people/8474089"
                },
                "playerType": "Hitter"
              },
              {
                "player": {
                  "id": 8478038,
                  "fullName": "Devon Toews",
                  "link": "/api/v1/people/8478038"
                },
                "playerType": "Hittee"
              }
            ],
            "result": {
              "event": "Hit",
              "eventCode": "EDM19",
              "eventTypeId": "HIT",
              "description": "Brad Malone hit Devon Toews"
            },
            "about": {
              "eventIdx": 35,
              "eventId": 19,
              "period": 1,
              "periodType": "REGULAR",
              "ordinalNum": "1st",
              "periodTime": "05:22",
              "periodTimeRemaining": "14:38",
              "dateTime": "2022-06-05T00:26:38Z",
              "goals": {
                "away": 0,
                "home": 1
              }
            },
            "coordinates": {
              "x": 40.0,
              "y": -40.0
            },
            "team": {
              "id": 22,
              "name": "Edmonton Oilers",
              "link": "/api/v1/teams/22",
              "triCode": "EDM"
            }
          },
          {
            "players": [
              {
                "player": {
                  "id": 8474089,
                  "fullName": "Brad Malone",
                  "link": "/api/v1/people/8474089"
                },
                "playerType": "Hitter"
              },
              {
                "player": {
                  "id": 8477456,
                  "fullName": "J.T. Compher",
                  "link": "/api/v1/people/8477456"
                },
                "playerType": "Hittee"
              }
            ],
            "result": {
              "event": "Hit",
              "eventCode": "EDM20",
              "eventTypeId": "HIT",
              "description": "Brad Malone hit J.T. Compher"
            },
            "about": {
              "eventIdx": 36,
              "eventId": 20,
              "period": 1,
              "periodType": "REGULAR",
              "ordinalNum": "1st",
              "periodTime": "05:29",
              "periodTimeRemaining": "14:31",
              "dateTime": "2022-06-05T00:26:45Z",
              "goals": {
                "away": 0,
                "home": 1
              }
            },
            "coordinates": {
              "x": -50.0,
              "y": -40.0
            },
            "team": {
              "id": 22,
              "name": "Edmonton Oilers",
              "link": "/api/v1/teams/22",
              "triCode": "EDM"
            }
          },
          {
            "players": [
              {
                "player": {
                  "id": 8477501,
                  "fullName": "Valeri Nichushkin",
                  "link": "/api/v1/people/8477501"
                },
                "playerType": "Shooter"
              },
              {
                "player": {
                  "id": 8469608,
                  "fullName": "Mike Smith",
                  "link": "/api/v1/people/8469608"
                },
                "playerType": "Unknown"
              }
            ],
            "result": {
              "event": "Missed Shot",
              "eventCode": "EDM164",
              "eventTypeId": "MISSED_SHOT",
              "description": "Valeri Nichushkin Over Net Mike Smith"
            },
            "about": {
              "eventIdx": 37,
              "eventId": 164,
              "period": 1,
              "periodType": "REGULAR",
              "ordinalNum": "1st",
              "periodTime": "05:32",
              "periodTimeRemaining": "14:28",
              "dateTime": "2022-06-05T00:26:48Z",
              "goals": {
                "away": 0,
                "home": 1
              }
            },
            "coordinates": {
              "x": -58.0,
              "y": -3.0
            },
            "team": {
              "id": 21,
              "name": "Colorado Avalanche",
              "link": "/api/v1/teams/21",
              "triCode": "COL"
            }
          },
          {
            "players": [
              {
                "player": {
                  "id": 8481524,
                  "fullName": "Bowen Byram",
                  "link": "/api/v1/people/8481524"
                },
                "playerType": "Shooter"
              },
              {
                "player": {
                  "id": 8469608,
                  "fullName": "Mike Smith",
                  "link": "/api/v1/people/8469608"
                },
                "playerType": "Goalie"
              }
            ],
            "result": {
              "event": "Shot",
              "eventCode": "EDM165",
              "eventTypeId": "SHOT",
              "description": "Bowen Byram Snap Shot saved by Mike Smith",
              "secondaryType": "Snap Shot"
            },
            "about": {
              "eventIdx": 38,
              "eventId": 165,
              "period": 1,
              "periodType": "REGULAR",
              "ordinalNum": "1st",
              "periodTime": "06:00",
              "periodTimeRemaining": "14:00",
              "dateTime": "2022-06-05T00:27:16Z",
              "goals": {
                "away": 0,
                "home": 1
              }
            },
            "coordinates": {
              "x": -68.0,
              "y": -21.0
            },
            "team": {
              "id": 21,
              "name": "Colorado Avalanche",
              "link": "/api/v1/teams/21",
              "triCode": "COL"
            }
          },
          {
            "players": [
              {
                "player": {
                  "id": 8478038,
                  "fullName": "Devon Toews",
                  "link": "/api/v1/people/8478038"
                },
                "playerType": "PlayerID"
              }
            ],
            "result": {
              "event": "Giveaway",
              "eventCode": "EDM60",
              "eventTypeId": "GIVEAWAY",
              "description": "Giveaway by Devon Toews"
            },
            "about": {
              "eventIdx": 39,
              "eventId": 60,
              "period": 1,
              "periodType": "REGULAR",
              "ordinalNum": "1st",
              "periodTime": "06:06",
              "periodTimeRemaining": "13:54",
              "dateTime": "2022-06-05T00:27:22Z",
              "goals": {
                "away": 0,
                "home": 1
              }
            },
            "coordinates": {
              "x": 11.0,
              "y": -32.0
            },
            "team": {
              "id": 21,
              "name": "Colorado Avalanche",
              "link": "/api/v1/teams/21",
              "triCode": "COL"
            }
          },
          {
            "result": {
              "event": "Stoppage",
              "eventCode": "EDM21",
              "eventTypeId": "STOP",
              "description": "Icing"
            },
            "about": {
              "eventIdx": 40,
              "eventId": 21,
              "period": 1,
              "periodType": "REGULAR",
              "ordinalNum": "1st",
              "periodTime": "06:27",
              "periodTimeRemaining": "13:33",
              "dateTime": "2022-06-05T00:27:44Z",
              "goals": {
                "away": 0,
                "home": 1
              }
            },
            "coordinates": {
              
            }
          },
          {
            "players": [
              {
                "player": {
                  "id": 8480802,
                  "fullName": "Ryan McLeod",
                  "link": "/api/v1/people/8480802"
                },
                "playerType": "Winner"
              },
              {
                "player": {
                  "id": 8471794,
                  "fullName": "Darren Helm",
                  "link": "/api/v1/people/8471794"
                },
                "playerType": "Loser"
              }
            ],
            "result": {
              "event": "Faceoff",
              "eventCode": "EDM61",
              "eventTypeId": "FACEOFF",
              "description": "Ryan McLeod faceoff won against Darren Helm"
            },
            "about": {
              "eventIdx": 41,
              "eventId": 61,
              "period": 1,
              "periodType": "REGULAR",
              "ordinalNum": "1st",
              "periodTime": "06:27",
              "periodTimeRemaining": "13:33",
              "dateTime": "2022-06-05T00:28:19Z",
              "goals": {
                "away": 0,
                "home": 1
              }
            },
            "coordinates": {
              "x": 69.0,
              "y": 22.0
            },
            "team": {
              "id": 22,
              "name": "Edmonton Oilers",
              "link": "/api/v1/teams/22",
              "triCode": "EDM"
            }
          },
          {
            "players": [
              {
                "player": {
                  "id": 8475178,
                  "fullName": "Zack Kassian",
                  "link": "/api/v1/people/8475178"
                },
                "playerType": "Hitter"
              },
              {
                "player": {
                  "id": 8476455,
                  "fullName": "Gabriel Landeskog",
                  "link": "/api/v1/people/8476455"
                },
                "playerType": "Hittee"
              }
            ],
            "result": {
              "event": "Hit",
              "eventCode": "EDM22",
              "eventTypeId": "HIT",
              "description": "Zack Kassian hit Gabriel Landeskog"
            },
            "about": {
              "eventIdx": 42,
              "eventId": 22,
              "period": 1,
              "periodType": "REGULAR",
              "ordinalNum": "1st",
              "periodTime": "07:24",
              "periodTimeRemaining": "12:36",
              "dateTime": "2022-06-05T00:29:16Z",
              "goals": {
                "away": 0,
                "home": 1
              }
            },
            "coordinates": {
              "x": 12.0,
              "y": 41.0
            },
            "team": {
              "id": 22,
              "name": "Edmonton Oilers",
              "link": "/api/v1/teams/22",
              "triCode": "EDM"
            }
          },
          {
            "players": [
              {
                "player": {
                  "id": 8475178,
                  "fullName": "Zack Kassian",
                  "link": "/api/v1/people/8475178"
                },
                "playerType": "Hitter"
              },
              {
                "player": {
                  "id": 8478038,
                  "fullName": "Devon Toews",
                  "link": "/api/v1/people/8478038"
                },
                "playerType": "Hittee"
              }
            ],
            "result": {
              "event": "Hit",
              "eventCode": "EDM23",
              "eventTypeId": "HIT",
              "description": "Zack Kassian hit Devon Toews"
            },
            "about": {
              "eventIdx": 43,
              "eventId": 23,
              "period": 1,
              "periodType": "REGULAR",
              "ordinalNum": "1st",
              "periodTime": "07:50",
              "periodTimeRemaining": "12:10",
              "dateTime": "2022-06-05T00:29:42Z",
              "goals": {
                "away": 0,
                "home": 1
              }
            },
            "coordinates": {
              "x": 96.0,
              "y": 13.0
            },
            "team": {
              "id": 22,
              "name": "Edmonton Oilers",
              "link": "/api/v1/teams/22",
              "triCode": "EDM"
            }
          },
          {
            "players": [
              {
                "player": {
                  "id": 8475169,
                  "fullName": "Evander Kane",
                  "link": "/api/v1/people/8475169"
                },
                "playerType": "Hitter"
              },
              {
                "player": {
                  "id": 8481477,
                  "fullName": "Nico Sturm",
                  "link": "/api/v1/people/8481477"
                },
                "playerType": "Hittee"
              }
            ],
            "result": {
              "event": "Hit",
              "eventCode": "EDM24",
              "eventTypeId": "HIT",
              "description": "Evander Kane hit Nico Sturm"
            },
            "about": {
              "eventIdx": 44,
              "eventId": 24,
              "period": 1,
              "periodType": "REGULAR",
              "ordinalNum": "1st",
              "periodTime": "07:55",
              "periodTimeRemaining": "12:05",
              "dateTime": "2022-06-05T00:29:47Z",
              "goals": {
                "away": 0,
                "home": 1
              }
            },
            "coordinates": {
              "x": 91.0,
              "y": -31.0
            },
            "team": {
              "id": 22,
              "name": "Edmonton Oilers",
              "link": "/api/v1/teams/22",
              "triCode": "EDM"
            }
          },
          {
            "players": [
              {
                "player": {
                  "id": 8475169,
                  "fullName": "Evander Kane",
                  "link": "/api/v1/people/8475169"
                },
                "playerType": "Shooter"
              },
              {
                "player": {
                  "id": 8480925,
                  "fullName": "Pavel Francouz",
                  "link": "/api/v1/people/8480925"
                },
                "playerType": "Goalie"
              }
            ],
            "result": {
              "event": "Shot",
              "eventCode": "EDM167",
              "eventTypeId": "SHOT",
              "description": "Evander Kane Tip-In saved by Pavel Francouz",
              "secondaryType": "Tip-In"
            },
            "about": {
              "eventIdx": 45,
              "eventId": 167,
              "period": 1,
              "periodType": "REGULAR",
              "ordinalNum": "1st",
              "periodTime": "08:12",
              "periodTimeRemaining": "11:48",
              "dateTime": "2022-06-05T00:30:04Z",
              "goals": {
                "away": 0,
                "home": 1
              }
            },
            "coordinates": {
              "x": 79.0,
              "y": 5.0
            },
            "team": {
              "id": 22,
              "name": "Edmonton Oilers",
              "link": "/api/v1/teams/22",
              "triCode": "EDM"
            }
          },
          {
            "players": [
              {
                "player": {
                  "id": 8478402,
                  "fullName": "Connor McDavid",
                  "link": "/api/v1/people/8478402"
                },
                "playerType": "Shooter"
              },
              {
                "player": {
                  "id": 8480925,
                  "fullName": "Pavel Francouz",
                  "link": "/api/v1/people/8480925"
                },
                "playerType": "Goalie"
              }
            ],
            "result": {
              "event": "Shot",
              "eventCode": "EDM168",
              "eventTypeId": "SHOT",
              "description": "Connor McDavid Slap Shot saved by Pavel Francouz",
              "secondaryType": "Slap Shot"
            },
            "about": {
              "eventIdx": 46,
              "eventId": 168,
              "period": 1,
              "periodType": "REGULAR",
              "ordinalNum": "1st",
              "periodTime": "08:13",
              "periodTimeRemaining": "11:47",
              "dateTime": "2022-06-05T00:30:05Z",
              "goals": {
                "away": 0,
                "home": 1
              }
            },
            "coordinates": {
              "x": 51.0,
              "y": -21.0
            },
            "team": {
              "id": 22,
              "name": "Edmonton Oilers",
              "link": "/api/v1/teams/22",
              "triCode": "EDM"
            }
          },
          {
            "result": {
              "event": "Stoppage",
              "eventCode": "EDM25",
              "eventTypeId": "STOP",
              "description": "Puck in Netting"
            },
            "about": {
              "eventIdx": 47,
              "eventId": 25,
              "period": 1,
              "periodType": "REGULAR",
              "ordinalNum": "1st",
              "periodTime": "08:15",
              "periodTimeRemaining": "11:45",
              "dateTime": "2022-06-05T00:30:06Z",
              "goals": {
                "away": 0,
                "home": 1
              }
            },
            "coordinates": {
              
            }
          },
          {
            "players": [
              {
                "player": {
                  "id": 8471794,
                  "fullName": "Darren Helm",
                  "link": "/api/v1/people/8471794"
                },
                "playerType": "Winner"
              },
              {
                "player": {
                  "id": 8478402,
                  "fullName": "Connor McDavid",
                  "link": "/api/v1/people/8478402"
                },
                "playerType": "Loser"
              }
            ],
            "result": {
              "event": "Faceoff",
              "eventCode": "EDM62",
              "eventTypeId": "FACEOFF",
              "description": "Darren Helm faceoff won against Connor McDavid"
            },
            "about": {
              "eventIdx": 48,
              "eventId": 62,
              "period": 1,
              "periodType": "REGULAR",
              "ordinalNum": "1st",
              "periodTime": "08:15",
              "periodTimeRemaining": "11:45",
              "dateTime": "2022-06-05T00:32:41Z",
              "goals": {
                "away": 0,
                "home": 1
              }
            },
            "coordinates": {
              "x": 69.0,
              "y": -22.0
            },
            "team": {
              "id": 21,
              "name": "Colorado Avalanche",
              "link": "/api/v1/teams/21",
              "triCode": "COL"
            }
          },
          {
            "players": [
              {
                "player": {
                  "id": 8478402,
                  "fullName": "Connor McDavid",
                  "link": "/api/v1/people/8478402"
                },
                "playerType": "PlayerID"
              }
            ],
            "result": {
              "event": "Takeaway",
              "eventCode": "EDM63",
              "eventTypeId": "TAKEAWAY",
              "description": "Takeaway by Connor McDavid"
            },
            "about": {
              "eventIdx": 49,
              "eventId": 63,
              "period": 1,
              "periodType": "REGULAR",
              "ordinalNum": "1st",
              "periodTime": "08:19",
              "periodTimeRemaining": "11:41",
              "dateTime": "2022-06-05T00:32:45Z",
              "goals": {
                "away": 0,
                "home": 1
              }
            },
            "coordinates": {
              "x": 59.0,
              "y": -37.0
            },
            "team": {
              "id": 22,
              "name": "Edmonton Oilers",
              "link": "/api/v1/teams/22",
              "triCode": "EDM"
            }
          },
          {
            "result": {
              "event": "Stoppage",
              "eventCode": "EDM26",
              "eventTypeId": "STOP",
              "description": "Icing"
            },
            "about": {
              "eventIdx": 50,
              "eventId": 26,
              "period": 1,
              "periodType": "REGULAR",
              "ordinalNum": "1st",
              "periodTime": "08:35",
              "periodTimeRemaining": "11:25",
              "dateTime": "2022-06-05T00:33:01Z",
              "goals": {
                "away": 0,
                "home": 1
              }
            },
            "coordinates": {
              
            }
          },
          {
            "players": [
              {
                "player": {
                  "id": 8478585,
                  "fullName": "Derek Ryan",
                  "link": "/api/v1/people/8478585"
                },
                "playerType": "Winner"
              },
              {
                "player": {
                  "id": 8477492,
                  "fullName": "Nathan MacKinnon",
                  "link": "/api/v1/people/8477492"
                },
                "playerType": "Loser"
              }
            ],
            "result": {
              "event": "Faceoff",
              "eventCode": "EDM64",
              "eventTypeId": "FACEOFF",
              "description": "Derek Ryan faceoff won against Nathan MacKinnon"
            },
            "about": {
              "eventIdx": 51,
              "eventId": 64,
              "period": 1,
              "periodType": "REGULAR",
              "ordinalNum": "1st",
              "periodTime": "08:35",
              "periodTimeRemaining": "11:25",
              "dateTime": "2022-06-05T00:33:48Z",
              "goals": {
                "away": 0,
                "home": 1
              }
            },
            "coordinates": {
              "x": -69.0,
              "y": -22.0
            },
            "team": {
              "id": 22,
              "name": "Edmonton Oilers",
              "link": "/api/v1/teams/22",
              "triCode": "EDM"
            }
          },
          {
            "players": [
              {
                "player": {
                  "id": 8477492,
                  "fullName": "Nathan MacKinnon",
                  "link": "/api/v1/people/8477492"
                },
                "playerType": "Hitter"
              },
              {
                "player": {
                  "id": 8477934,
                  "fullName": "Leon Draisaitl",
                  "link": "/api/v1/people/8477934"
                },
                "playerType": "Hittee"
              }
            ],
            "result": {
              "event": "Hit",
              "eventCode": "EDM27",
              "eventTypeId": "HIT",
              "description": "Nathan MacKinnon hit Leon Draisaitl"
            },
            "about": {
              "eventIdx": 52,
              "eventId": 27,
              "period": 1,
              "periodType": "REGULAR",
              "ordinalNum": "1st",
              "periodTime": "09:11",
              "periodTimeRemaining": "10:49",
              "dateTime": "2022-06-05T00:34:24Z",
              "goals": {
                "away": 0,
                "home": 1
              }
            },
            "coordinates": {
              "x": 10.0,
              "y": 39.0
            },
            "team": {
              "id": 21,
              "name": "Colorado Avalanche",
              "link": "/api/v1/teams/21",
              "triCode": "COL"
            }
          },
          {
            "players": [
              {
                "player": {
                  "id": 8477498,
                  "fullName": "Darnell Nurse",
                  "link": "/api/v1/people/8477498"
                },
                "playerType": "PenaltyOn"
              }
            ],
            "result": {
              "event": "Penalty",
              "eventCode": "EDM230",
              "eventTypeId": "PENALTY",
              "description": "Darnell Nurse Delaying Game - Puck over glass",
              "secondaryType": "Delaying Game - Puck over glass",
              "penaltySeverity": "Minor",
              "penaltyMinutes": 2
            },
            "about": {
              "eventIdx": 53,
              "eventId": 230,
              "period": 1,
              "periodType": "REGULAR",
              "ordinalNum": "1st",
              "periodTime": "09:36",
              "periodTimeRemaining": "10:24",
              "dateTime": "2022-06-05T00:34:49Z",
              "goals": {
                "away": 0,
                "home": 1
              }
            },
            "coordinates": {
              "x": 14.0,
              "y": -42.0
            },
            "team": {
              "id": 22,
              "name": "Edmonton Oilers",
              "link": "/api/v1/teams/22",
              "triCode": "EDM"
            }
          },
          {
            "players": [
              {
                "player": {
                  "id": 8476455,
                  "fullName": "Gabriel Landeskog",
                  "link": "/api/v1/people/8476455"
                },
                "playerType": "Winner"
              },
              {
                "player": {
                  "id": 8478585,
                  "fullName": "Derek Ryan",
                  "link": "/api/v1/people/8478585"
                },
                "playerType": "Loser"
              }
            ],
            "result": {
              "event": "Faceoff",
              "eventCode": "EDM65",
              "eventTypeId": "FACEOFF",
              "description": "Gabriel Landeskog faceoff won against Derek Ryan"
            },
            "about": {
              "eventIdx": 54,
              "eventId": 65,
              "period": 1,
              "periodType": "REGULAR",
              "ordinalNum": "1st",
              "periodTime": "09:36",
              "periodTimeRemaining": "10:24",
              "dateTime": "2022-06-05T00:35:33Z",
              "goals": {
                "away": 0,
                "home": 1
              }
            },
            "coordinates": {
              "x": -69.0,
              "y": -22.0
            },
            "team": {
              "id": 21,
              "name": "Colorado Avalanche",
              "link": "/api/v1/teams/21",
              "triCode": "COL"
            }
          },
          {
            "players": [
              {
                "player": {
                  "id": 8480069,
                  "fullName": "Cale Makar",
                  "link": "/api/v1/people/8480069"
                },
                "playerType": "Shooter"
              },
              {
                "player": {
                  "id": 8469608,
                  "fullName": "Mike Smith",
                  "link": "/api/v1/people/8469608"
                },
                "playerType": "Goalie"
              }
            ],
            "result": {
              "event": "Shot",
              "eventCode": "EDM169",
              "eventTypeId": "SHOT",
              "description": "Cale Makar Snap Shot saved by Mike Smith",
              "secondaryType": "Snap Shot"
            },
            "about": {
              "eventIdx": 55,
              "eventId": 169,
              "period": 1,
              "periodType": "REGULAR",
              "ordinalNum": "1st",
              "periodTime": "09:40",
              "periodTimeRemaining": "10:20",
              "dateTime": "2022-06-05T00:35:37Z",
              "goals": {
                "away": 0,
                "home": 1
              }
            },
            "coordinates": {
              "x": -39.0,
              "y": -9.0
            },
            "team": {
              "id": 21,
              "name": "Colorado Avalanche",
              "link": "/api/v1/teams/21",
              "triCode": "COL"
            }
          },
          {
            "result": {
              "event": "Stoppage",
              "eventCode": "EDM29",
              "eventTypeId": "STOP",
              "description": "Goalie Stopped"
            },
            "about": {
              "eventIdx": 56,
              "eventId": 29,
              "period": 1,
              "periodType": "REGULAR",
              "ordinalNum": "1st",
              "periodTime": "09:41",
              "periodTimeRemaining": "10:19",
              "dateTime": "2022-06-05T00:35:38Z",
              "goals": {
                "away": 0,
                "home": 1
              }
            },
            "coordinates": {
              
            }
          },
          {
            "players": [
              {
                "player": {
                  "id": 8476455,
                  "fullName": "Gabriel Landeskog",
                  "link": "/api/v1/people/8476455"
                },
                "playerType": "Winner"
              },
              {
                "player": {
                  "id": 8478585,
                  "fullName": "Derek Ryan",
                  "link": "/api/v1/people/8478585"
                },
                "playerType": "Loser"
              }
            ],
            "result": {
              "event": "Faceoff",
              "eventCode": "EDM66",
              "eventTypeId": "FACEOFF",
              "description": "Gabriel Landeskog faceoff won against Derek Ryan"
            },
            "about": {
              "eventIdx": 57,
              "eventId": 66,
              "period": 1,
              "periodType": "REGULAR",
              "ordinalNum": "1st",
              "periodTime": "09:41",
              "periodTimeRemaining": "10:19",
              "dateTime": "2022-06-05T00:35:55Z",
              "goals": {
                "away": 0,
                "home": 1
              }
            },
            "coordinates": {
              "x": -69.0,
              "y": -22.0
            },
            "team": {
              "id": 21,
              "name": "Colorado Avalanche",
              "link": "/api/v1/teams/21",
              "triCode": "COL"
            }
          },
          {
            "players": [
              {
                "player": {
                  "id": 8469608,
                  "fullName": "Mike Smith",
                  "link": "/api/v1/people/8469608"
                },
                "playerType": "PlayerID"
              }
            ],
            "result": {
              "event": "Takeaway",
              "eventCode": "EDM67",
              "eventTypeId": "TAKEAWAY",
              "description": "Takeaway by Mike Smith"
            },
            "about": {
              "eventIdx": 58,
              "eventId": 67,
              "period": 1,
              "periodType": "REGULAR",
              "ordinalNum": "1st",
              "periodTime": "10:37",
              "periodTimeRemaining": "09:23",
              "dateTime": "2022-06-05T00:36:51Z",
              "goals": {
                "away": 0,
                "home": 1
              }
            },
            "coordinates": {
              "x": -95.0,
              "y": 1.0
            },
            "team": {
              "id": 22,
              "name": "Edmonton Oilers",
              "link": "/api/v1/teams/22",
              "triCode": "EDM"
            }
          },
          {
            "players": [
              {
                "player": {
                  "id": 8476455,
                  "fullName": "Gabriel Landeskog",
                  "link": "/api/v1/people/8476455"
                },
                "playerType": "Shooter"
              },
              {
                "player": {
                  "id": 8469608,
                  "fullName": "Mike Smith",
                  "link": "/api/v1/people/8469608"
                },
                "playerType": "Goalie"
              }
            ],
            "result": {
              "event": "Shot",
              "eventCode": "EDM170",
              "eventTypeId": "SHOT",
              "description": "Gabriel Landeskog Wrist Shot saved by Mike Smith",
              "secondaryType": "Wrist Shot"
            },
            "about": {
              "eventIdx": 59,
              "eventId": 170,
              "period": 1,
              "periodType": "REGULAR",
              "ordinalNum": "1st",
              "periodTime": "10:39",
              "periodTimeRemaining": "09:21",
              "dateTime": "2022-06-05T00:36:53Z",
              "goals": {
                "away": 0,
                "home": 1
              }
            },
            "coordinates": {
              "x": -70.0,
              "y": -2.0
            },
            "team": {
              "id": 21,
              "name": "Colorado Avalanche",
              "link": "/api/v1/teams/21",
              "triCode": "COL"
            }
          },
          {
            "players": [
              {
                "player": {
                  "id": 8476879,
                  "fullName": "Cody Ceci",
                  "link": "/api/v1/people/8476879"
                },
                "playerType": "Shooter"
              },
              {
                "player": {
                  "id": 8480925,
                  "fullName": "Pavel Francouz",
                  "link": "/api/v1/people/8480925"
                },
                "playerType": "Goalie"
              }
            ],
            "result": {
              "event": "Shot",
              "eventCode": "EDM171",
              "eventTypeId": "SHOT",
              "description": "Cody Ceci Slap Shot saved by Pavel Francouz",
              "secondaryType": "Slap Shot"
            },
            "about": {
              "eventIdx": 60,
              "eventId": 171,
              "period": 1,
              "periodType": "REGULAR",
              "ordinalNum": "1st",
              "periodTime": "10:56",
              "periodTimeRemaining": "09:04",
              "dateTime": "2022-06-05T00:37:10Z",
              "goals": {
                "away": 0,
                "home": 1
              }
            },
            "coordinates": {
              "x": 28.0,
              "y": -25.0
            },
            "team": {
              "id": 22,
              "name": "Edmonton Oilers",
              "link": "/api/v1/teams/22",
              "triCode": "EDM"
            }
          },
          {
            "result": {
              "event": "Stoppage",
              "eventCode": "EDM30",
              "eventTypeId": "STOP",
              "description": "Goalie Stopped"
            },
            "about": {
              "eventIdx": 61,
              "eventId": 30,
              "period": 1,
              "periodType": "REGULAR",
              "ordinalNum": "1st",
              "periodTime": "10:58",
              "periodTimeRemaining": "09:02",
              "dateTime": "2022-06-05T00:37:12Z",
              "goals": {
                "away": 0,
                "home": 1
              }
            },
            "coordinates": {
              
            }
          },
          {
            "players": [
              {
                "player": {
                  "id": 8481618,
                  "fullName": "Alex Newhook",
                  "link": "/api/v1/people/8481618"
                },
                "playerType": "Winner"
              },
              {
                "player": {
                  "id": 8480802,
                  "fullName": "Ryan McLeod",
                  "link": "/api/v1/people/8480802"
                },
                "playerType": "Loser"
              }
            ],
            "result": {
              "event": "Faceoff",
              "eventCode": "EDM68",
              "eventTypeId": "FACEOFF",
              "description": "Alex Newhook faceoff won against Ryan McLeod"
            },
            "about": {
              "eventIdx": 62,
              "eventId": 68,
              "period": 1,
              "periodType": "REGULAR",
              "ordinalNum": "1st",
              "periodTime": "10:58",
              "periodTimeRemaining": "09:02",
              "dateTime": "2022-06-05T00:37:47Z",
              "goals": {
                "away": 0,
                "home": 1
              }
            },
            "coordinates": {
              "x": 69.0,
              "y": -22.0
            },
            "team": {
              "id": 21,
              "name": "Colorado Avalanche",
              "link": "/api/v1/teams/21",
              "triCode": "COL"
            }
          },
          {
            "players": [
              {
                "player": {
                  "id": 8475178,
                  "fullName": "Zack Kassian",
                  "link": "/api/v1/people/8475178"
                },
                "playerType": "PlayerID"
              }
            ],
            "result": {
              "event": "Giveaway",
              "eventCode": "EDM69",
              "eventTypeId": "GIVEAWAY",
              "description": "Giveaway by Zack Kassian"
            },
            "about": {
              "eventIdx": 63,
              "eventId": 69,
              "period": 1,
              "periodType": "REGULAR",
              "ordinalNum": "1st",
              "periodTime": "11:51",
              "periodTimeRemaining": "08:09",
              "dateTime": "2022-06-05T00:38:40Z",
              "goals": {
                "away": 0,
                "home": 1
              }
            },
            "coordinates": {
              "x": -20.0,
              "y": 38.0
            },
            "team": {
              "id": 22,
              "name": "Edmonton Oilers",
              "link": "/api/v1/teams/22",
              "triCode": "EDM"
            }
          },
          {
            "players": [
              {
                "player": {
                  "id": 8475169,
                  "fullName": "Evander Kane",
                  "link": "/api/v1/people/8475169"
                },
                "playerType": "Hitter"
              },
              {
                "player": {
                  "id": 8480069,
                  "fullName": "Cale Makar",
                  "link": "/api/v1/people/8480069"
                },
                "playerType": "Hittee"
              }
            ],
            "result": {
              "event": "Hit",
              "eventCode": "EDM31",
              "eventTypeId": "HIT",
              "description": "Evander Kane hit Cale Makar"
            },
            "about": {
              "eventIdx": 64,
              "eventId": 31,
              "period": 1,
              "periodType": "REGULAR",
              "ordinalNum": "1st",
              "periodTime": "12:01",
              "periodTimeRemaining": "07:59",
              "dateTime": "2022-06-05T00:38:50Z",
              "goals": {
                "away": 0,
                "home": 1
              }
            },
            "coordinates": {
              "x": 96.0,
              "y": 25.0
            },
            "team": {
              "id": 22,
              "name": "Edmonton Oilers",
              "link": "/api/v1/teams/22",
              "triCode": "EDM"
            }
          },
          {
            "players": [
              {
                "player": {
                  "id": 8481477,
                  "fullName": "Nico Sturm",
                  "link": "/api/v1/people/8481477"
                },
                "playerType": "Hitter"
              },
              {
                "player": {
                  "id": 8478402,
                  "fullName": "Connor McDavid",
                  "link": "/api/v1/people/8478402"
                },
                "playerType": "Hittee"
              }
            ],
            "result": {
              "event": "Hit",
              "eventCode": "EDM32",
              "eventTypeId": "HIT",
              "description": "Nico Sturm hit Connor McDavid"
            },
            "about": {
              "eventIdx": 65,
              "eventId": 32,
              "period": 1,
              "periodType": "REGULAR",
              "ordinalNum": "1st",
              "periodTime": "12:22",
              "periodTimeRemaining": "07:38",
              "dateTime": "2022-06-05T00:39:11Z",
              "goals": {
                "away": 0,
                "home": 1
              }
            },
            "coordinates": {
              "x": 89.0,
              "y": 35.0
            },
            "team": {
              "id": 21,
              "name": "Colorado Avalanche",
              "link": "/api/v1/teams/21",
              "triCode": "COL"
            }
          },
          {
            "players": [
              {
                "player": {
                  "id": 8475197,
                  "fullName": "Tyson Barrie",
                  "link": "/api/v1/people/8475197"
                },
                "playerType": "Shooter"
              },
              {
                "player": {
                  "id": 8480925,
                  "fullName": "Pavel Francouz",
                  "link": "/api/v1/people/8480925"
                },
                "playerType": "Goalie"
              }
            ],
            "result": {
              "event": "Shot",
              "eventCode": "EDM172",
              "eventTypeId": "SHOT",
              "description": "Tyson Barrie Wrist Shot saved by Pavel Francouz",
              "secondaryType": "Wrist Shot"
            },
            "about": {
              "eventIdx": 66,
              "eventId": 172,
              "period": 1,
              "periodType": "REGULAR",
              "ordinalNum": "1st",
              "periodTime": "12:38",
              "periodTimeRemaining": "07:22",
              "dateTime": "2022-06-05T00:39:27Z",
              "goals": {
                "away": 0,
                "home": 1
              }
            },
            "coordinates": {
              "x": 40.0,
              "y": -26.0
            },
            "team": {
              "id": 22,
              "name": "Edmonton Oilers",
              "link": "/api/v1/teams/22",
              "triCode": "EDM"
            }
          },
          {
            "players": [
              {
                "player": {
                  "id": 8471729,
                  "fullName": "Kris Russell",
                  "link": "/api/v1/people/8471729"
                },
                "playerType": "Hitter"
              },
              {
                "player": {
                  "id": 8481186,
                  "fullName": "Logan O'Connor",
                  "link": "/api/v1/people/8481186"
                },
                "playerType": "Hittee"
              }
            ],
            "result": {
              "event": "Hit",
              "eventCode": "EDM33",
              "eventTypeId": "HIT",
              "description": "Kris Russell hit Logan O'Connor"
            },
            "about": {
              "eventIdx": 68,
              "eventId": 33,
              "period": 1,
              "periodType": "REGULAR",
              "ordinalNum": "1st",
              "periodTime": "12:47",
              "periodTimeRemaining": "07:13",
              "dateTime": "2022-06-05T00:39:36Z",
              "goals": {
                "away": 0,
                "home": 1
              }
            },
            "coordinates": {
              "x": -37.0,
              "y": 41.0
            },
            "team": {
              "id": 22,
              "name": "Edmonton Oilers",
              "link": "/api/v1/teams/22",
              "triCode": "EDM"
            }
          },
          {
            "result": {
              "event": "Stoppage",
              "eventCode": "EDM34",
              "eventTypeId": "STOP",
              "description": "Offside"
            },
            "about": {
              "eventIdx": 67,
              "eventId": 34,
              "period": 1,
              "periodType": "REGULAR",
              "ordinalNum": "1st",
              "periodTime": "12:47",
              "periodTimeRemaining": "07:13",
              "dateTime": "2022-06-05T00:39:36Z",
              "goals": {
                "away": 0,
                "home": 1
              }
            },
            "coordinates": {
              
            }
          },
          {
            "players": [
              {
                "player": {
                  "id": 8477492,
                  "fullName": "Nathan MacKinnon",
                  "link": "/api/v1/people/8477492"
                },
                "playerType": "Winner"
              },
              {
                "player": {
                  "id": 8477934,
                  "fullName": "Leon Draisaitl",
                  "link": "/api/v1/people/8477934"
                },
                "playerType": "Loser"
              }
            ],
            "result": {
              "event": "Faceoff",
              "eventCode": "EDM70",
              "eventTypeId": "FACEOFF",
              "description": "Nathan MacKinnon faceoff won against Leon Draisaitl"
            },
            "about": {
              "eventIdx": 69,
              "eventId": 70,
              "period": 1,
              "periodType": "REGULAR",
              "ordinalNum": "1st",
              "periodTime": "12:47",
              "periodTimeRemaining": "07:13",
              "dateTime": "2022-06-05T00:41:53Z",
              "goals": {
                "away": 0,
                "home": 1
              }
            },
            "coordinates": {
              "x": -20.0,
              "y": 22.0
            },
            "team": {
              "id": 21,
              "name": "Colorado Avalanche",
              "link": "/api/v1/teams/21",
              "triCode": "COL"
            }
          },
          {
            "players": [
              {
                "player": {
                  "id": 8477501,
                  "fullName": "Valeri Nichushkin",
                  "link": "/api/v1/people/8477501"
                },
                "playerType": "Hitter"
              },
              {
                "player": {
                  "id": 8477498,
                  "fullName": "Darnell Nurse",
                  "link": "/api/v1/people/8477498"
                },
                "playerType": "Hittee"
              }
            ],
            "result": {
              "event": "Hit",
              "eventCode": "EDM35",
              "eventTypeId": "HIT",
              "description": "Valeri Nichushkin hit Darnell Nurse"
            },
            "about": {
              "eventIdx": 70,
              "eventId": 35,
              "period": 1,
              "periodType": "REGULAR",
              "ordinalNum": "1st",
              "periodTime": "13:08",
              "periodTimeRemaining": "06:52",
              "dateTime": "2022-06-05T00:42:14Z",
              "goals": {
                "away": 0,
                "home": 1
              }
            },
            "coordinates": {
              "x": -95.0,
              "y": 23.0
            },
            "team": {
              "id": 21,
              "name": "Colorado Avalanche",
              "link": "/api/v1/teams/21",
              "triCode": "COL"
            }
          },
          {
            "players": [
              {
                "player": {
                  "id": 8476454,
                  "fullName": "Ryan Nugent-Hopkins",
                  "link": "/api/v1/people/8476454"
                },
                "playerType": "Shooter"
              },
              {
                "player": {
                  "id": 8480925,
                  "fullName": "Pavel Francouz",
                  "link": "/api/v1/people/8480925"
                },
                "playerType": "Unknown"
              }
            ],
            "result": {
              "event": "Missed Shot",
              "eventCode": "EDM173",
              "eventTypeId": "MISSED_SHOT",
              "description": "Ryan Nugent-Hopkins Wide of Net Pavel  Francouz"
            },
            "about": {
              "eventIdx": 71,
              "eventId": 173,
              "period": 1,
              "periodType": "REGULAR",
              "ordinalNum": "1st",
              "periodTime": "13:27",
              "periodTimeRemaining": "06:33",
              "dateTime": "2022-06-05T00:42:33Z",
              "goals": {
                "away": 0,
                "home": 1
              }
            },
            "coordinates": {
              "x": 75.0,
              "y": 3.0
            },
            "team": {
              "id": 22,
              "name": "Edmonton Oilers",
              "link": "/api/v1/teams/22",
              "triCode": "EDM"
            }
          },
          {
            "players": [
              {
                "player": {
                  "id": 8479344,
                  "fullName": "Jesse Puljujarvi",
                  "link": "/api/v1/people/8479344"
                },
                "playerType": "Hitter"
              },
              {
                "player": {
                  "id": 8471677,
                  "fullName": "Jack Johnson",
                  "link": "/api/v1/people/8471677"
                },
                "playerType": "Hittee"
              }
            ],
            "result": {
              "event": "Hit",
              "eventCode": "EDM36",
              "eventTypeId": "HIT",
              "description": "Jesse Puljujarvi hit Jack Johnson"
            },
            "about": {
              "eventIdx": 72,
              "eventId": 36,
              "period": 1,
              "periodType": "REGULAR",
              "ordinalNum": "1st",
              "periodTime": "13:42",
              "periodTimeRemaining": "06:18",
              "dateTime": "2022-06-05T00:42:48Z",
              "goals": {
                "away": 0,
                "home": 1
              }
            },
            "coordinates": {
              "x": 90.0,
              "y": -30.0
            },
            "team": {
              "id": 22,
              "name": "Edmonton Oilers",
              "link": "/api/v1/teams/22",
              "triCode": "EDM"
            }
          },
          {
            "players": [
              {
                "player": {
                  "id": 8476312,
                  "fullName": "Josh Manson",
                  "link": "/api/v1/people/8476312"
                },
                "playerType": "Hitter"
              },
              {
                "player": {
                  "id": 8480802,
                  "fullName": "Ryan McLeod",
                  "link": "/api/v1/people/8480802"
                },
                "playerType": "Hittee"
              }
            ],
            "result": {
              "event": "Hit",
              "eventCode": "EDM37",
              "eventTypeId": "HIT",
              "description": "Josh Manson hit Ryan McLeod"
            },
            "about": {
              "eventIdx": 73,
              "eventId": 37,
              "period": 1,
              "periodType": "REGULAR",
              "ordinalNum": "1st",
              "periodTime": "14:01",
              "periodTimeRemaining": "05:59",
              "dateTime": "2022-06-05T00:43:07Z",
              "goals": {
                "away": 0,
                "home": 1
              }
            },
            "coordinates": {
              "x": 85.0,
              "y": 36.0
            },
            "team": {
              "id": 21,
              "name": "Colorado Avalanche",
              "link": "/api/v1/teams/21",
              "triCode": "COL"
            }
          },
          {
            "players": [
              {
                "player": {
                  "id": 8477998,
                  "fullName": "Warren Foegele",
                  "link": "/api/v1/people/8477998"
                },
                "playerType": "Hitter"
              },
              {
                "player": {
                  "id": 8478420,
                  "fullName": "Mikko Rantanen",
                  "link": "/api/v1/people/8478420"
                },
                "playerType": "Hittee"
              }
            ],
            "result": {
              "event": "Hit",
              "eventCode": "EDM39",
              "eventTypeId": "HIT",
              "description": "Warren Foegele hit Mikko Rantanen"
            },
            "about": {
              "eventIdx": 74,
              "eventId": 39,
              "period": 1,
              "periodType": "REGULAR",
              "ordinalNum": "1st",
              "periodTime": "14:08",
              "periodTimeRemaining": "05:52",
              "dateTime": "2022-06-05T00:43:14Z",
              "goals": {
                "away": 0,
                "home": 1
              }
            },
            "coordinates": {
              "x": 97.0,
              "y": 1.0
            },
            "team": {
              "id": 22,
              "name": "Edmonton Oilers",
              "link": "/api/v1/teams/22",
              "triCode": "EDM"
            }
          },
          {
            "players": [
              {
                "player": {
                  "id": 8476967,
                  "fullName": "Brett Kulak",
                  "link": "/api/v1/people/8476967"
                },
                "playerType": "Shooter"
              },
              {
                "player": {
                  "id": 8480925,
                  "fullName": "Pavel Francouz",
                  "link": "/api/v1/people/8480925"
                },
                "playerType": "Unknown"
              }
            ],
            "result": {
              "event": "Missed Shot",
              "eventCode": "EDM174",
              "eventTypeId": "MISSED_SHOT",
              "description": "Brett Kulak Wide of Net Pavel  Francouz"
            },
            "about": {
              "eventIdx": 75,
              "eventId": 174,
              "period": 1,
              "periodType": "REGULAR",
              "ordinalNum": "1st",
              "periodTime": "14:54",
              "periodTimeRemaining": "05:06",
              "dateTime": "2022-06-05T00:44:00Z",
              "goals": {
                "away": 0,
                "home": 1
              }
            },
            "coordinates": {
              "x": 41.0,
              "y": 33.0
            },
            "team": {
              "id": 22,
              "name": "Edmonton Oilers",
              "link": "/api/v1/teams/22",
              "triCode": "EDM"
            }
          },
          {
            "players": [
              {
                "player": {
                  "id": 8471794,
                  "fullName": "Darren Helm",
                  "link": "/api/v1/people/8471794"
                },
                "playerType": "Hitter"
              },
              {
                "player": {
                  "id": 8475197,
                  "fullName": "Tyson Barrie",
                  "link": "/api/v1/people/8475197"
                },
                "playerType": "Hittee"
              }
            ],
            "result": {
              "event": "Hit",
              "eventCode": "EDM40",
              "eventTypeId": "HIT",
              "description": "Darren Helm hit Tyson Barrie"
            },
            "about": {
              "eventIdx": 76,
              "eventId": 40,
              "period": 1,
              "periodType": "REGULAR",
              "ordinalNum": "1st",
              "periodTime": "14:57",
              "periodTimeRemaining": "05:03",
              "dateTime": "2022-06-05T00:44:03Z",
              "goals": {
                "away": 0,
                "home": 1
              }
            },
            "coordinates": {
              "x": 96.0,
              "y": -19.0
            },
            "team": {
              "id": 21,
              "name": "Colorado Avalanche",
              "link": "/api/v1/teams/21",
              "triCode": "COL"
            }
          },
          {
            "players": [
              {
                "player": {
                  "id": 8475197,
                  "fullName": "Tyson Barrie",
                  "link": "/api/v1/people/8475197"
                },
                "playerType": "Hitter"
              },
              {
                "player": {
                  "id": 8481186,
                  "fullName": "Logan O'Connor",
                  "link": "/api/v1/people/8481186"
                },
                "playerType": "Hittee"
              }
            ],
            "result": {
              "event": "Hit",
              "eventCode": "EDM41",
              "eventTypeId": "HIT",
              "description": "Tyson Barrie hit Logan O'Connor"
            },
            "about": {
              "eventIdx": 77,
              "eventId": 41,
              "period": 1,
              "periodType": "REGULAR",
              "ordinalNum": "1st",
              "periodTime": "15:21",
              "periodTimeRemaining": "04:39",
              "dateTime": "2022-06-05T00:44:27Z",
              "goals": {
                "away": 0,
                "home": 1
              }
            },
            "coordinates": {
              "x": -93.0,
              "y": 6.0
            },
            "team": {
              "id": 22,
              "name": "Edmonton Oilers",
              "link": "/api/v1/teams/22",
              "triCode": "EDM"
            }
          },
          {
            "players": [
              {
                "player": {
                  "id": 8471729,
                  "fullName": "Kris Russell",
                  "link": "/api/v1/people/8471729"
                },
                "playerType": "PlayerID"
              }
            ],
            "result": {
              "event": "Giveaway",
              "eventCode": "EDM71",
              "eventTypeId": "GIVEAWAY",
              "description": "Giveaway by Kris Russell"
            },
            "about": {
              "eventIdx": 78,
              "eventId": 71,
              "period": 1,
              "periodType": "REGULAR",
              "ordinalNum": "1st",
              "periodTime": "15:44",
              "periodTimeRemaining": "04:16",
              "dateTime": "2022-06-05T00:44:50Z",
              "goals": {
                "away": 0,
                "home": 1
              }
            },
            "coordinates": {
              "x": -94.0,
              "y": 21.0
            },
            "team": {
              "id": 22,
              "name": "Edmonton Oilers",
              "link": "/api/v1/teams/22",
              "triCode": "EDM"
            }
          },
          {
            "players": [
              {
                "player": {
                  "id": 8475178,
                  "fullName": "Zack Kassian",
                  "link": "/api/v1/people/8475178"
                },
                "playerType": "Hitter"
              },
              {
                "player": {
                  "id": 8481524,
                  "fullName": "Bowen Byram",
                  "link": "/api/v1/people/8481524"
                },
                "playerType": "Hittee"
              }
            ],
            "result": {
              "event": "Hit",
              "eventCode": "EDM42",
              "eventTypeId": "HIT",
              "description": "Zack Kassian hit Bowen Byram"
            },
            "about": {
              "eventIdx": 79,
              "eventId": 42,
              "period": 1,
              "periodType": "REGULAR",
              "ordinalNum": "1st",
              "periodTime": "16:05",
              "periodTimeRemaining": "03:55",
              "dateTime": "2022-06-05T00:45:11Z",
              "goals": {
                "away": 0,
                "home": 1
              }
            },
            "coordinates": {
              "x": -75.0,
              "y": -40.0
            },
            "team": {
              "id": 22,
              "name": "Edmonton Oilers",
              "link": "/api/v1/teams/22",
              "triCode": "EDM"
            }
          },
          {
            "players": [
              {
                "player": {
                  "id": 8477501,
                  "fullName": "Valeri Nichushkin",
                  "link": "/api/v1/people/8477501"
                },
                "playerType": "Scorer",
                "seasonTotal": 4
              },
              {
                "player": {
                  "id": 8469608,
                  "fullName": "Mike Smith",
                  "link": "/api/v1/people/8469608"
                },
                "playerType": "Goalie"
              }
            ],
            "result": {
              "event": "Goal",
              "eventCode": "EDM175",
              "eventTypeId": "GOAL",
              "description": "Valeri Nichushkin (4) Wrist Shot, assists: none",
              "secondaryType": "Wrist Shot",
              "strength": {
                "code": "EVEN",
                "name": "Even"
              },
              "emptyNet": false
            },
            "about": {
              "eventIdx": 80,
              "eventId": 175,
              "period": 1,
              "periodType": "REGULAR",
              "ordinalNum": "1st",
              "periodTime": "16:12",
              "periodTimeRemaining": "03:48",
              "dateTime": "2022-06-05T00:45:18Z",
              "goals": {
                "away": 1,
                "home": 1
              }
            },
            "coordinates": {
              "x": -90.0,
              "y": -19.0
            },
            "team": {
              "id": 21,
              "name": "Colorado Avalanche",
              "link": "/api/v1/teams/21",
              "triCode": "COL"
            }
          },
          {
            "players": [
              {
                "player": {
                  "id": 8481477,
                  "fullName": "Nico Sturm",
                  "link": "/api/v1/people/8481477"
                },
                "playerType": "Winner"
              },
              {
                "player": {
                  "id": 8477934,
                  "fullName": "Leon Draisaitl",
                  "link": "/api/v1/people/8477934"
                },
                "playerType": "Loser"
              }
            ],
            "result": {
              "event": "Faceoff",
              "eventCode": "EDM72",
              "eventTypeId": "FACEOFF",
              "description": "Nico Sturm faceoff won against Leon Draisaitl"
            },
            "about": {
              "eventIdx": 81,
              "eventId": 72,
              "period": 1,
              "periodType": "REGULAR",
              "ordinalNum": "1st",
              "periodTime": "16:12",
              "periodTimeRemaining": "03:48",
              "dateTime": "2022-06-05T00:46:06Z",
              "goals": {
                "away": 1,
                "home": 1
              }
            },
            "coordinates": {
              "x": 0.0,
              "y": 0.0
            },
            "team": {
              "id": 21,
              "name": "Colorado Avalanche",
              "link": "/api/v1/teams/21",
              "triCode": "COL"
            }
          },
          {
            "result": {
              "event": "Stoppage",
              "eventCode": "EDM43",
              "eventTypeId": "STOP",
              "description": "Offside"
            },
            "about": {
              "eventIdx": 82,
              "eventId": 43,
              "period": 1,
              "periodType": "REGULAR",
              "ordinalNum": "1st",
              "periodTime": "16:17",
              "periodTimeRemaining": "03:43",
              "dateTime": "2022-06-05T00:46:12Z",
              "goals": {
                "away": 1,
                "home": 1
              }
            },
            "coordinates": {
              
            }
          }
        ],
        "scoringPlays": [
          5,
          80
        ],
        "penaltyPlays": [
          10,
          53
        ],
        "playsByPeriod": [
          {
            "startIndex": 0,
            "plays": [
              0,
              1,
              2,
              3,
              4,
              5,
              6,
              7,
              8,
              9,
              10,
              11,
              12,
              13,
              14,
              15,
              16,
              17,
              18,
              19,
              20,
              21,
              22,
              23,
              24,
              25,
              26,
              27,
              28,
              29,
              30,
              31,
              32,
              33,
              34,
              35,
              36,
              37,
              38,
              39,
              40,
              41,
              42,
              43,
              44,
              45,
              46,
              47,
              48,
              49,
              50,
              51,
              52,
              53,
              54,
              55,
              56,
              57,
              58,
              59,
              60,
              61,
              62,
              63,
              64,
              65,
              66,
              67,
              68,
              69,
              70,
              71,
              72,
              73,
              74,
              75,
              76,
              77,
              78,
              79,
              80,
              81,
              82
            ],
            "endIndex": 82
          }
        ],
        "currentPlay": {
          "result": {
            "event": "Stoppage",
            "eventCode": "EDM43",
            "eventTypeId": "STOP",
            "description": "Offside"
          },
          "about": {
            "eventIdx": 82,
            "eventId": 43,
            "period": 1,
            "periodType": "REGULAR",
            "ordinalNum": "1st",
            "periodTime": "16:17",
            "periodTimeRemaining": "03:43",
            "dateTime": "2022-06-05T00:46:12Z",
            "goals": {
              "away": 1,
              "home": 1
            }
          },
          "coordinates": {
            
          }
        }
      },
      "linescore": {
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
              "link": "/api/v1/teams/22",
              "abbreviation": "EDM",
              "triCode": "EDM"
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
              "link": "/api/v1/teams/21",
              "abbreviation": "COL",
              "triCode": "COL"
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
                "goals": 1,
                "pim": 0,
                "shots": 11,
                "powerPlayPercentage": "0.0",
                "powerPlayGoals": 0.0,
                "powerPlayOpportunities": 2.0,
                "faceOffWinPercentage": "60.0",
                "blocked": 0,
                "takeaways": 0,
                "giveaways": 1,
                "hits": 7
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
                    "timeOnIce": "2:17",
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
                    "evenTimeOnIce": "2:17",
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
                    "timeOnIce": "2:03",
                    "assists": 0,
                    "goals": 0,
                    "shots": 0,
                    "hits": 1,
                    "powerPlayGoals": 0,
                    "powerPlayAssists": 0,
                    "penaltyMinutes": 0,
                    "faceOffPct": 50.0,
                    "faceOffWins": 1,
                    "faceoffTaken": 2,
                    "takeaways": 0,
                    "giveaways": 0,
                    "shortHandedGoals": 0,
                    "shortHandedAssists": 0,
                    "blocked": 0,
                    "plusMinus": 0,
                    "evenTimeOnIce": "1:50",
                    "powerPlayTimeOnIce": "0:13",
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
                    "timeOnIce": "1:36",
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
                    "evenTimeOnIce": "1:36",
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
                    "timeOnIce": "2:41",
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
                    "evenTimeOnIce": "2:21",
                    "powerPlayTimeOnIce": "0:20",
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
                    "timeOnIce": "6:43",
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
                    "giveaways": 1,
                    "shortHandedGoals": 0,
                    "shortHandedAssists": 0,
                    "blocked": 0,
                    "plusMinus": 0,
                    "evenTimeOnIce": "4:26",
                    "powerPlayTimeOnIce": "2:17",
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
                    "timeOnIce": "5:07",
                    "assists": 0,
                    "goals": 1,
                    "shots": 1,
                    "hits": 1,
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
                    "plusMinus": 1,
                    "evenTimeOnIce": "3:00",
                    "powerPlayTimeOnIce": "2:07",
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
                    "timeOnIce": "1:40",
                    "assists": 0,
                    "goals": 0,
                    "shots": 0,
                    "hits": 1,
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
                    "evenTimeOnIce": "1:40",
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
                    "timeOnIce": "7:22",
                    "assists": 0,
                    "goals": 0,
                    "shots": 2,
                    "hits": 1,
                    "powerPlayGoals": 0,
                    "powerPlayAssists": 0,
                    "penaltyMinutes": 0,
                    "faceOffPct": 75.0,
                    "faceOffWins": 3,
                    "faceoffTaken": 4,
                    "takeaways": 0,
                    "giveaways": 0,
                    "shortHandedGoals": 0,
                    "shortHandedAssists": 0,
                    "blocked": 0,
                    "plusMinus": 1,
                    "evenTimeOnIce": "2:29",
                    "powerPlayTimeOnIce": "4:53",
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
                    "timeOnIce": "3:57",
                    "assists": 0,
                    "goals": 0,
                    "shots": 0,
                    "hits": 0,
                    "powerPlayGoals": 0,
                    "powerPlayAssists": 0,
                    "penaltyMinutes": 0,
                    "faceOffPct": 100.0,
                    "faceOffWins": 1,
                    "faceoffTaken": 1,
                    "takeaways": 0,
                    "giveaways": 0,
                    "shortHandedGoals": 0,
                    "shortHandedAssists": 0,
                    "blocked": 0,
                    "plusMinus": 0,
                    "evenTimeOnIce": "1:40",
                    "powerPlayTimeOnIce": "2:17",
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
                    "timeOnIce": "16:12",
                    "assists": 0,
                    "goals": 0,
                    "pim": 0,
                    "shots": 6,
                    "saves": 5,
                    "powerPlaySaves": 0,
                    "shortHandedSaves": 2,
                    "evenSaves": 3,
                    "shortHandedShotsAgainst": 2,
                    "evenShotsAgainst": 4,
                    "powerPlayShotsAgainst": 0,
                    "savePercentage": 83.33333333333334,
                    "shortHandedSavePercentage": 100.0,
                    "evenStrengthSavePercentage": 75.0
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
                    "timeOnIce": "9:35",
                    "assists": 0,
                    "goals": 0,
                    "shots": 2,
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
                    "plusMinus": -1,
                    "evenTimeOnIce": "4:52",
                    "powerPlayTimeOnIce": "4:43",
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
                    "timeOnIce": "1:52",
                    "assists": 0,
                    "goals": 0,
                    "shots": 0,
                    "hits": 1,
                    "powerPlayGoals": 0,
                    "powerPlayAssists": 0,
                    "penaltyMinutes": 0,
                    "faceOffPct": 100.0,
                    "faceOffWins": 1,
                    "faceoffTaken": 1,
                    "takeaways": 0,
                    "giveaways": 0,
                    "shortHandedGoals": 0,
                    "shortHandedAssists": 0,
                    "blocked": 0,
                    "plusMinus": 0,
                    "evenTimeOnIce": "1:52",
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
                    "timeOnIce": "2:12",
                    "assists": 0,
                    "goals": 0,
                    "shots": 0,
                    "hits": 1,
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
                    "evenTimeOnIce": "2:12",
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
                    "timeOnIce": "6:31",
                    "assists": 0,
                    "goals": 0,
                    "shots": 1,
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
                    "plusMinus": -1,
                    "evenTimeOnIce": "2:04",
                    "powerPlayTimeOnIce": "4:27",
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
                    "timeOnIce": "4:36",
                    "assists": 0,
                    "goals": 0,
                    "shots": 0,
                    "hits": 0,
                    "powerPlayGoals": 0,
                    "powerPlayAssists": 0,
                    "penaltyMinutes": 0,
                    "faceOffPct": 0.0,
                    "faceOffWins": 0,
                    "faceoffTaken": 1,
                    "takeaways": 0,
                    "giveaways": 0,
                    "shortHandedGoals": 0,
                    "shortHandedAssists": 0,
                    "blocked": 0,
                    "plusMinus": 0,
                    "evenTimeOnIce": "2:16",
                    "powerPlayTimeOnIce": "2:20",
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
                    "timeOnIce": "7:29",
                    "assists": 0,
                    "goals": 0,
                    "shots": 2,
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
                    "plusMinus": -1,
                    "evenTimeOnIce": "2:35",
                    "powerPlayTimeOnIce": "4:54",
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
                    "timeOnIce": "7:05",
                    "assists": 0,
                    "goals": 0,
                    "shots": 2,
                    "hits": 1,
                    "powerPlayGoals": 0,
                    "powerPlayAssists": 0,
                    "penaltyMinutes": 0,
                    "faceOffPct": 60.0,
                    "faceOffWins": 3,
                    "faceoffTaken": 5,
                    "takeaways": 0,
                    "giveaways": 0,
                    "shortHandedGoals": 0,
                    "shortHandedAssists": 0,
                    "blocked": 0,
                    "plusMinus": 1,
                    "evenTimeOnIce": "2:42",
                    "powerPlayTimeOnIce": "4:23",
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
                    "timeOnIce": "0:37",
                    "assists": 0,
                    "goals": 0,
                    "shots": 0,
                    "hits": 0,
                    "powerPlayGoals": 0,
                    "powerPlayAssists": 0,
                    "penaltyMinutes": 0,
                    "faceOffPct": 0.0,
                    "faceOffWins": 0,
                    "faceoffTaken": 1,
                    "takeaways": 0,
                    "giveaways": 0,
                    "shortHandedGoals": 0,
                    "shortHandedAssists": 0,
                    "blocked": 0,
                    "plusMinus": -1,
                    "evenTimeOnIce": "0:37",
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
                    "timeOnIce": "4:37",
                    "assists": 0,
                    "goals": 0,
                    "shots": 1,
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
                    "plusMinus": 1,
                    "evenTimeOnIce": "2:31",
                    "powerPlayTimeOnIce": "2:06",
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
              8471677,
              8471699,
              8476312,
              8480925,
              8481186,
              8481477
            ],
            "onIcePlus": [
              {
                "playerId": 8471677,
                "shiftDuration": 5,
                "stamina": 100
              },
              {
                "playerId": 8471699,
                "shiftDuration": 5,
                "stamina": 100
              },
              {
                "playerId": 8476312,
                "shiftDuration": 5,
                "stamina": 100
              },
              {
                "playerId": 8480925,
                "shiftDuration": 265,
                "stamina": 33
              },
              {
                "playerId": 8481186,
                "shiftDuration": 5,
                "stamina": 100
              },
              {
                "playerId": 8481477,
                "shiftDuration": 5,
                "stamina": 100
              }
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
                "goals": 1,
                "pim": 7,
                "shots": 6,
                "powerPlayPercentage": "0.0",
                "powerPlayGoals": 0.0,
                "powerPlayOpportunities": 0.0,
                "faceOffWinPercentage": "40.0",
                "blocked": 2,
                "takeaways": 2,
                "giveaways": 3,
                "hits": 14
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
                    "timeOnIce": "4:18",
                    "assists": 0,
                    "goals": 0,
                    "shots": 1,
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
                    "evenTimeOnIce": "1:38",
                    "powerPlayTimeOnIce": "0:00",
                    "shortHandedTimeOnIce": "2:40"
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
                    "timeOnIce": "1:45",
                    "assists": 0,
                    "goals": 0,
                    "shots": 0,
                    "hits": 1,
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
                    "evenTimeOnIce": "1:45",
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
                    "timeOnIce": "3:41",
                    "assists": 0,
                    "goals": 0,
                    "shots": 0,
                    "hits": 0,
                    "powerPlayGoals": 0,
                    "powerPlayAssists": 0,
                    "penaltyMinutes": 0,
                    "faceOffPct": 40.0,
                    "faceOffWins": 2,
                    "faceoffTaken": 5,
                    "takeaways": 0,
                    "giveaways": 0,
                    "shortHandedGoals": 0,
                    "shortHandedAssists": 0,
                    "blocked": 0,
                    "plusMinus": 0,
                    "evenTimeOnIce": "2:09",
                    "powerPlayTimeOnIce": "0:00",
                    "shortHandedTimeOnIce": "1:32"
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
                    "timeOnIce": "5:01",
                    "assists": 0,
                    "goals": 0,
                    "shots": 0,
                    "hits": 1,
                    "powerPlayGoals": 0,
                    "powerPlayAssists": 0,
                    "penaltyMinutes": 0,
                    "faceOffPct": 0.0,
                    "faceOffWins": 0,
                    "faceoffTaken": 1,
                    "takeaways": 0,
                    "giveaways": 0,
                    "shortHandedGoals": 0,
                    "shortHandedAssists": 0,
                    "blocked": 0,
                    "plusMinus": 0,
                    "evenTimeOnIce": "2:58",
                    "powerPlayTimeOnIce": "0:00",
                    "shortHandedTimeOnIce": "2:03"
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
                    "timeOnIce": "5:11",
                    "assists": 0,
                    "goals": 0,
                    "shots": 0,
                    "hits": 0,
                    "powerPlayGoals": 0,
                    "powerPlayAssists": 0,
                    "penaltyMinutes": 0,
                    "faceOffPct": 50.0,
                    "faceOffWins": 1,
                    "faceoffTaken": 2,
                    "takeaways": 0,
                    "giveaways": 0,
                    "shortHandedGoals": 0,
                    "shortHandedAssists": 0,
                    "blocked": 0,
                    "plusMinus": 0,
                    "evenTimeOnIce": "1:53",
                    "powerPlayTimeOnIce": "0:00",
                    "shortHandedTimeOnIce": "3:18"
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
                    "timeOnIce": "4:01",
                    "assists": 0,
                    "goals": 0,
                    "shots": 1,
                    "hits": 2,
                    "powerPlayGoals": 0,
                    "powerPlayAssists": 0,
                    "penaltyMinutes": 5,
                    "faceOffWins": 0,
                    "faceoffTaken": 0,
                    "takeaways": 0,
                    "giveaways": 0,
                    "shortHandedGoals": 0,
                    "shortHandedAssists": 0,
                    "blocked": 0,
                    "plusMinus": 0,
                    "evenTimeOnIce": "3:54",
                    "powerPlayTimeOnIce": "0:00",
                    "shortHandedTimeOnIce": "0:07"
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
                    "timeOnIce": "1:49",
                    "assists": 0,
                    "goals": 0,
                    "shots": 0,
                    "hits": 1,
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
                    "evenTimeOnIce": "1:49",
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
                    "timeOnIce": "2:08",
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
                    "plusMinus": 1,
                    "evenTimeOnIce": "2:07",
                    "powerPlayTimeOnIce": "0:00",
                    "shortHandedTimeOnIce": "0:01"
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
                    "timeOnIce": "16:12",
                    "assists": 0,
                    "goals": 0,
                    "pim": 0,
                    "shots": 11,
                    "saves": 10,
                    "powerPlaySaves": 10,
                    "shortHandedSaves": 0,
                    "evenSaves": 0,
                    "shortHandedShotsAgainst": 0,
                    "evenShotsAgainst": 1,
                    "powerPlayShotsAgainst": 10,
                    "savePercentage": 90.9090909090909,
                    "powerPlaySavePercentage": 100.0,
                    "evenStrengthSavePercentage": 0.0
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
                    "timeOnIce": "3:54",
                    "assists": 0,
                    "goals": 0,
                    "shots": 0,
                    "hits": 1,
                    "powerPlayGoals": 0,
                    "powerPlayAssists": 0,
                    "penaltyMinutes": 0,
                    "faceOffWins": 0,
                    "faceoffTaken": 0,
                    "takeaways": 0,
                    "giveaways": 1,
                    "shortHandedGoals": 0,
                    "shortHandedAssists": 0,
                    "blocked": 2,
                    "plusMinus": -1,
                    "evenTimeOnIce": "1:28",
                    "powerPlayTimeOnIce": "0:00",
                    "shortHandedTimeOnIce": "2:26"
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
                    "timeOnIce": "6:13",
                    "assists": 0,
                    "goals": 0,
                    "shots": 1,
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
                    "evenTimeOnIce": "3:26",
                    "powerPlayTimeOnIce": "0:00",
                    "shortHandedTimeOnIce": "2:47"
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
                    "timeOnIce": "3:56",
                    "assists": 1,
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
                    "plusMinus": 1,
                    "evenTimeOnIce": "1:54",
                    "powerPlayTimeOnIce": "0:00",
                    "shortHandedTimeOnIce": "2:02"
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
                    "timeOnIce": "5:42",
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
                    "plusMinus": 1,
                    "evenTimeOnIce": "2:49",
                    "powerPlayTimeOnIce": "0:00",
                    "shortHandedTimeOnIce": "2:53"
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
                    "timeOnIce": "6:24",
                    "assists": 1,
                    "goals": 0,
                    "shots": 0,
                    "hits": 1,
                    "powerPlayGoals": 0,
                    "powerPlayAssists": 0,
                    "penaltyMinutes": 2,
                    "faceOffWins": 0,
                    "faceoffTaken": 0,
                    "takeaways": 0,
                    "giveaways": 0,
                    "shortHandedGoals": 0,
                    "shortHandedAssists": 0,
                    "blocked": 0,
                    "plusMinus": -1,
                    "evenTimeOnIce": "3:08",
                    "powerPlayTimeOnIce": "0:00",
                    "shortHandedTimeOnIce": "3:16"
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
                    "timeOnIce": "2:39",
                    "assists": 0,
                    "goals": 0,
                    "shots": 0,
                    "hits": 3,
                    "powerPlayGoals": 0,
                    "powerPlayAssists": 0,
                    "penaltyMinutes": 0,
                    "faceOffWins": 0,
                    "faceoffTaken": 0,
                    "takeaways": 0,
                    "giveaways": 1,
                    "shortHandedGoals": 0,
                    "shortHandedAssists": 0,
                    "blocked": 0,
                    "plusMinus": -1,
                    "evenTimeOnIce": "2:39",
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
                    "timeOnIce": "4:56",
                    "assists": 0,
                    "goals": 1,
                    "shots": 2,
                    "hits": 0,
                    "powerPlayGoals": 0,
                    "powerPlayAssists": 0,
                    "penaltyMinutes": 0,
                    "faceOffPct": 50.0,
                    "faceOffWins": 1,
                    "faceoffTaken": 2,
                    "takeaways": 1,
                    "giveaways": 1,
                    "shortHandedGoals": 0,
                    "shortHandedAssists": 0,
                    "blocked": 0,
                    "plusMinus": 0,
                    "evenTimeOnIce": "3:55",
                    "powerPlayTimeOnIce": "0:00",
                    "shortHandedTimeOnIce": "1:01"
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
                    "timeOnIce": "2:39",
                    "assists": 0,
                    "goals": 0,
                    "shots": 1,
                    "hits": 1,
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
                    "evenTimeOnIce": "2:39",
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
                    "timeOnIce": "2:28",
                    "assists": 0,
                    "goals": 0,
                    "shots": 0,
                    "hits": 3,
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
                    "evenTimeOnIce": "0:58",
                    "powerPlayTimeOnIce": "0:00",
                    "shortHandedTimeOnIce": "1:30"
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
                    "timeOnIce": "4:15",
                    "assists": 0,
                    "goals": 0,
                    "shots": 0,
                    "hits": 0,
                    "powerPlayGoals": 0,
                    "powerPlayAssists": 0,
                    "penaltyMinutes": 0,
                    "faceOffPct": 40.0,
                    "faceOffWins": 2,
                    "faceoffTaken": 5,
                    "takeaways": 0,
                    "giveaways": 0,
                    "shortHandedGoals": 0,
                    "shortHandedAssists": 0,
                    "blocked": 0,
                    "plusMinus": 0,
                    "evenTimeOnIce": "1:51",
                    "powerPlayTimeOnIce": "0:00",
                    "shortHandedTimeOnIce": "2:24"
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
              8469608,
              8470281,
              8475786,
              8476454,
              8477934,
              8480803
            ],
            "onIcePlus": [
              {
                "playerId": 8469608,
                "shiftDuration": 288,
                "stamina": 33
              },
              {
                "playerId": 8470281,
                "shiftDuration": 5,
                "stamina": 100
              },
              {
                "playerId": 8475786,
                "shiftDuration": 5,
                "stamina": 100
              },
              {
                "playerId": 8476454,
                "shiftDuration": 5,
                "stamina": 100
              },
              {
                "playerId": 8477934,
                "shiftDuration": 5,
                "stamina": 100
              },
              {
                "playerId": 8480803,
                "shiftDuration": 5,
                "stamina": 100
              }
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

  module.exports = {feedLiveGoal2};