"use strict";

// import API calling functions
const {fetchApiSchedule, fetchApiScoreBoard, fetchApiLineups, fetchApiGoals} = require("./nhlApiCalls");

// MongoDB config
const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
// global scope variable to hold our game data
// change this to locals object and/or database as needed
let gameData;

// use this package to generate unique ids: https://www.npmjs.com/package/uuid
const { v4: uuidv4 } = require("uuid");

const getSchedule = async (req, res) => {
    // Declare variable data with a value equal to the return from the fetchApiSchedule func. 
    // See nhlApiCalls.js for more info about the format of the response
    const data = await fetchApiSchedule();

    res.status(200).json({
        status: 200,
        message: "Here is the NHL schedule for today",
        data: data,
    })
};

const getScoreBoard = async (req, res) => {
    const gameId = req.params.gameId;
    // const gameId = "test1234";
    
    const data = await fetchApiScoreBoard(gameId);

    data.isActive
        ? 
        res.status(200).json({
            status: 200,
            message: "Ok",
            data: data,
        })
        : res.status(404).json({
            status: 404,
            message: "invalid request",
            gameId: gameId,
        })
};

const getLineups = async (req, res) => {
    const gameId = req.params.gameId;

    const data = await fetchApiLineups(gameId);
    // gameData = {gameId, data};

    data !== undefined
        ?
        res.status(200).json({
            status: 200,
            message: "Ok",
            data: data,
        })
        : res.status(404).json({
            status: 404,
            message: "invalid request",
            gameId: gameId,
        })
};

const selectPlayer = async (req, res) => {
    const player = req.body.id;
    const chosenBy = req.body.chosenBy;
    console.log(gameData)
    await gameData.data[0].away.awayLineup.forEach(element => {
        if (element.id === player) {
            element.isAvailable = false;
            element.chosenBy = chosenBy;
        }
    })

    res.status(200).json({
        status: 200,
        message: "Ok",
        data: gameData,
    })
}

const getGoals = async (req, res) => {
    const gameId = req.query.gameId;

    const data = await fetchApiGoals(gameId);
    console.log(data)

    data !== undefined
        ?
        res.status(200).json({
            status: 200,
            message: "Ok",
            data: data,
        })
        : res.status(404).json({
            status: 404,
            message: "invalid request",
            gameId: gameId,
        })
}

module.exports = {
    getSchedule,
    getScoreBoard,
    getLineups,
    selectPlayer,
    getGoals,
};