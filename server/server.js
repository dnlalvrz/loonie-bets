"use strict";
// import the needed node_modules.
const express = require("express");
const morgan = require("morgan");
const app = express();
const port = 8000;

// import handler functions 
const {
    getSchedule, getScoreBoard, getLineups
} = require("./handlers");

// This will log more info to the console. see https://www.npmjs.com/package/morgan
app.use(morgan("tiny"));
app.use(express.json());

// Any requests for static files will go into the public folder
app.use(express.static("public"));



app.get("/api/schedule", getSchedule);
app.get("/api/score-board/:gameId", getScoreBoard);
app.get("/api/lineups/:gameId", getLineups);



// this is our catch all endpoint.
app.get("*", (req, res) => {
    res.status(404).json({
    status: 404,
    message: "This is obviously not what you are looking for.",
    });
});

// Node spins up our server and sets it to listen on port 8000.
app.listen(port, () => console.log(`Listening on port 8000`));
