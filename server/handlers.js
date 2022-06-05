"use strict";
//import TEST DATA FILES
const { testSchedule } = require("./DATA-FILES-FOR-TEST-MODE/schedule")

// import API calling functions
const {fetchApiSchedule} = require("./nhlApiCalls");

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

const getSchedule = async (res) => {
    // let data;
    // const gameId = req.query.gameId;
    // if (gameId === "test") data = testSchedule;
    // Declare variable data with a value equal to the return from the fetchApiSchedule func. 
    // See nhlApiCalls.js for more info about the format of the response
    const data = await fetchApiSchedule();

    res.status(200).json({
        status: 200,
        message: "Here is the NHL scredule for today",
        data: data,
    })

};

module.exports = {
    getSchedule
};