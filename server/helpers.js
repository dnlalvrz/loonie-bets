
const lineupFormatter = (location, teams) => {
    const skaters = teams[`${location}`].skaters;
    const scratches = teams[`${location}`].scratches;
    const players = teams[`${location}`].players;
    let filteredSkaters = [];
    for (const el of skaters) {
        if (!scratches.includes(el)) {
            filteredSkaters.push({isAvailable: true, id: el, playerID: `ID${el}`, fullName: players[`ID${el}`].person.fullName});
        }
    }
    return filteredSkaters;
};

const goalFormatter = (scoringPlays, allPlays) => {
    const goals = [];
    allPlays.filter((item, index) => {
        scoringPlays.forEach(play => {
            if (play === index) {
                goals.push(item);
            }
        })
    })
    return goals;
}


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

module.exports = {
    lineupFormatter,
    goalFormatter,
}