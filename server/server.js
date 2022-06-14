"use strict";
// import the needed node_modules.
const express = require("express");
const morgan = require("morgan");
const app = express();
const PORT = 8000;

// import handler functions 
const {
    getSchedule, getScoreBoard, getLineups, selectPlayer, getGoals
} = require("./handlers");

// This will log more info to the console. see https://www.npmjs.com/package/morgan
app.use(morgan("tiny"));
app.use(express.json());

// Any requests for static files will go into the public folder
app.use(express.static("public"));

// gets a schedule of NHL games for the current calendar day
app.get("/api/schedule", getSchedule);
// gets a game's score, period information and power play status
app.get("/api/score-board/:gameId", getScoreBoard);
// gets the away and home lineups for a chosen game
app.get("/api/lineups/:gameId", getLineups);
// player selection in the backend will be implemented for multiplayer and Discord bot functionality
app.put("/api/select-player", selectPlayer);
// endpoint that returns the latest goal
app.get("/api/goals", getGoals);

// this is our catch all endpoint.
app.get("*", (req, res) => {
    res.status(404).json({
    status: 404,
    message: "This is obviously not what you are looking for.",
    });
});

// Node spins up our server and sets it to listen on port 8000.
app.listen(PORT, () => console.log('🌍 Listening on port ' + PORT));
