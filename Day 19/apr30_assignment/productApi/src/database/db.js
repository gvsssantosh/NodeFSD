require('dotenv').config();
 
var Sequelize = require("sequelize");

var db = new Sequelize(
    process.env.DB_NAME,
    process.env.USER_ID,
    process.env.PASSWORD,
    {
        dialect: "mysql",
        host: process.env.HOST,
    }
);
module.exports = db;