const express = require("express")
const mysql = require('mysql')
const dotenv = require('dotenv')


const { parsed: config } = dotenv.config();
const app = express()
const dbOptions = {
    host : config.DB_HOST,
    user : config.DB_USER,
    password : config.DB_PASSWORD,
    port: config.DB_PORT,
    database: config.DB_DATABASE,
}


app.listen(3001, "localhost", () => {
    console.log(dbOptions.database)
})