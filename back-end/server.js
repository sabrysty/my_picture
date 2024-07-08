const express = require("express")
const mysql = require('mysql')


const app = express()
const optionBd = {
    host : 'localhost',
    user : 'root',
    password : '',
    port: 3306,
    database: 'picture'
}


app.listen(3001, "localhost", () => {
    console.log("hello 3001")
})