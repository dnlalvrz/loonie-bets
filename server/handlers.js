"use strict";

// import API calling functions
const {fetchApiSchedule, fetchApiScoreBoard, fetchApiLineups} = require("./nhlApiCalls");

// MongoDB config
const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

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

    res.status(200).json({
        status: 200,
        message: "Ok",
        data: data,
    })
};

const getLineups = async (req, res) => {
    const gameId = req.params.gameId;

    const data = await fetchApiLineups(gameId);

    res.status(200).json({
        status: 200,
        message: "Ok",
        data: data,
    })
};



module.exports = {
    getSchedule,
    getScoreBoard,
    getLineups,
};