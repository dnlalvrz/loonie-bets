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
    try {
        const response = await request(options);

        return response.dates;

    } catch (error) {
        console.log(error);
    }
};

const fetchApiScoreBoard = async (gameId) => {
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
        response = {isActive, period, timeRemaining, awayTeam, homeTeam, powerPlay, powerPlayInfo};
    }
    return response;
};

module.exports = {fetchApiSchedule, fetchApiLineups, fetchApiScoreBoard};