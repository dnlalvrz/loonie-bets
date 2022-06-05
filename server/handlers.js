"use strict";
//import TEST DATA FILES
const { testSchedule } = require("./DATA-FILES-FOR-TEST-MODE/schedule")
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

const getSchedule = (req, res) => {
    res.status(200).json({
        status: 200,
        message: "Here is the NHL scredule for today",
        data: testSchedule,
    })

};


module.exports = {
    getSchedule
};