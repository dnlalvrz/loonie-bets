const request = require('request-promise');

//import TEST DATA FILES
const { testSchedule } = require("./DATA-FILES-FOR-TEST-MODE/schedule");
const { linescoreStart,
    linescoreGoal,
    linescoreGoal2,
    linescorePowerPlay
 } = require("./DATA-FILES-FOR-TEST-MODE/linescore");
const { response } = require('express');

const testScoreBoardScript = () => {
    let period;
    let timeRemaining;
    let awayTeam;
    let homeTeam;
    let powerPlay;
    let powerPlayInfo;
    let isActive;
    let response;

    // if (gameId === "test1234") return response;
    if (gameId === "test1234") {
        isActive = true;
        period = linescoreStart.currentPeriodOrdinal;
        timeRemaining = linescoreStart.currentPeriodTimeRemaining;
        awayTeam = linescoreStart.teams.away;
        homeTeam = linescoreStart.teams.home;
        // if (linescoreStart.powerPlayStrength === "Even") return;
        if (linescoreStart.powerPlayStrength !== "Even") {
            powerPlay = linescoreStart.powerPlayStrength;
            powerPlayInfo = linescoreStart.powerPlayInfo;
        }
        response = [isActive, period, timeRemaining, awayTeam, homeTeam, powerPlay, powerPlayInfo];
    }
    return response;
}


const fetchApiSchedule = async () => {   
    const uri = 'https://statsapi.web.nhl.com/api/v1/schedule';
    // options template for every call
    const options = {
        uri: uri,
        headers: {
            "Accept": "application/json"
        },
        json: true // Automatically parses the JSON string in the response
    }
    try {
        const response = await request(options);

        return response;

    } catch (error) {
        console.log(error);
    }
};

const fetchApiLineups = async (gameId) => {
    const uri = `https://statsapi.web.nhl.com/api/v1/game/${gameId}/boxscore`;
    // options template for every call
    const options = {
        uri: uri,
        headers: {
            "Accept": "application/json"
        },
        json: true // Automatically parses the JSON string in the response
    }
    try {
        const response = await request(options);
        const teams = await response.teams;
        const lineups = [];
        // console.log(teams)
        const teamAway = teams.team;
        const skatersAway = teams.away.skaters;
        const scratchesAway = teams.away.scratches;
        const playersAway = teams.away.players;
        let lineupAway = [];
        for (const el of skatersAway) {
            if (!scratchesAway.includes(el)) {
                lineupAway.push(el);
            }
        }
        console.log(lineupAway)

            // lineups.push({team: skaters.filter(skater => scratches.includes(skater))}, players);


        return lineups;

    } catch (error) {
        console.log(error);
    }
};

const fetchApiScoreBoard = async (gameId) => {
    const uri = `https://statsapi.web.nhl.com/api/v1/game/${gameId}/linescore`;
    let period;
    let timeRemaining;
    let awayTeam;
    let homeTeam;
    let powerPlay;
    let powerPlayInfo;
    let isActive;
    let response;
    // all this test logic will have to be moved above to its own function then we can do
    // if (gameId === "test1234") return testScoreBoardScript;
    if (gameId === "test1234") {
        isActive = true;
        period = linescoreStart.currentPeriodOrdinal;
        timeRemaining = linescoreStart.currentPeriodTimeRemaining;
        awayTeam = linescoreStart.teams.away;
        homeTeam = linescoreStart.teams.home;
        // if (linescoreStart.powerPlayStrength === "Even") return;
        if (linescoreStart.powerPlayStrength !== "Even") {
            powerPlay = linescoreStart.powerPlayStrength;
            powerPlayInfo = linescoreStart.powerPlayInfo;
        }
        
    } else {
        // options template for every call
        const options = {
            uri: uri,
            headers: {
                "Accept": "application/json"
            },
            json: true // Automatically parses the JSON string in the response
        }
        try {
            const response = await request(options);

            isActive = true;
            period = response.currentPeriodOrdinal;
            timeRemaining = response.currentPeriodTimeRemaining;
            awayTeam = response.teams.away;
            homeTeam = response.teams.home;
            // if (linescoreStart.powerPlayStrength === "Even") return;
            if (linescoreStart.powerPlayStrength !== "Even") {
                powerPlay = linescoreStart.powerPlayStrength;
                powerPlayInfo = linescoreStart.powerPlayInfo;
            }

        } catch (error) {
            console.log(error);
        }

    }
    response = {isActive, period, timeRemaining, awayTeam, homeTeam, powerPlay, powerPlayInfo};
    return response;


};

module.exports = {fetchApiSchedule, fetchApiLineups, fetchApiScoreBoard};