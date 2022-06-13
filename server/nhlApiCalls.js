const request = require('request-promise');

//import TEST DATA FILES
const { testSchedule } = require("./DATA-FILES-FOR-TEST-MODE/schedule");
const { boxscore } = require("./DATA-FILES-FOR-TEST-MODE/boxscore");
const { feedLiveGoal2 } = require("./DATA-FILES-FOR-TEST-MODE/feed-live-goal-2");
const { feedLiveGoal } = require("./DATA-FILES-FOR-TEST-MODE/feed-live-goal");
const { linescoreStart,
    linescoreGoal,
    linescoreGoal2,
    linescorePowerPlay
 } = require("./DATA-FILES-FOR-TEST-MODE/linescore");
// const { response } = require('express');

// helpers and scripts
const { lineupFormatter, testScoreBoardScript, goalFormatter } = require("./helpers")



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
    if (gameId === "test1234") {
        const response = boxscore;
        const teams = response.teams;
        const lineups = [];
        const awayTeam = teams.away.team;
        const homeTeam = teams.home.team;
        // format data before returning the response for the handler
        // see helpers file for more info
        const awayLineup = lineupFormatter("away", teams);
        const homeLineup = lineupFormatter("home", teams);

        lineups.push({away: {awayTeam, awayLineup}}, {home: {homeTeam, homeLineup}});

        return lineups;
    }
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
        const awayTeam = teams.away.team;
        const homeTeam = teams.home.team;
        // format data before returning the response for the handler
        // see helpers file for more info
        const awayLineup = lineupFormatter("away", teams);
        const homeLineup = lineupFormatter("home", teams);

        lineups.push({away: {awayTeam, awayLineup}}, {home: {homeTeam, homeLineup}});

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
    let scoreBoard;
    // all this test logic will have to be moved above to its own function then we can do
    // if (gameId === "test1234") return testScoreBoardScript;
    if (gameId === "test1234") {
        isActive = true;
        const response = linescoreStart;
        period = response.currentPeriodOrdinal;
        timeRemaining = response.currentPeriodTimeRemaining;
        awayTeam = response.teams.away;
        homeTeam = response.teams.home;
        // if (linescoreStart.powerPlayStrength === "Even") return;
        if (response.powerPlayStrength !== "Even") {
            powerPlay = response.powerPlayStrength;
            powerPlayInfo = response.powerPlayInfo;
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
            if (response.powerPlayStrength !== "Even") {
                powerPlay = response.powerPlayStrength;
                powerPlayInfo = response.powerPlayInfo;
            }

        } catch (error) {
            console.log(error);
        }

    }
    scoreBoard = {isActive, period, timeRemaining, awayTeam, homeTeam, powerPlay, powerPlayInfo};
    return scoreBoard;
};

const fetchApiGoals = async (gameId) => {
    if (gameId === "test1234") {
        const response = feedLiveGoal;
        const scoringPlays = response.liveData.plays.scoringPlays;
        const allPlays = response.liveData.plays.allPlays;
        // format data before returning the response for the handler
        // see helpers file for more info
        const goals = goalFormatter(scoringPlays, allPlays);

        return goals;
    }

    const uri = `https://statsapi.web.nhl.com/api/v1/game/${gameId}/feed/live`;
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
        const scoringPlays = await response.liveData.plays.scoringPlays;
        const allPlays = await response.liveData.plays.allPlays;
        // format data before returning the response for the handler
        // see helpers file for more info
        const goals = goalFormatter(scoringPlays, allPlays);

        return goals;

    } catch (error) {
        console.log(error);
    }
}

module.exports = {fetchApiSchedule, fetchApiLineups, fetchApiScoreBoard, fetchApiGoals};