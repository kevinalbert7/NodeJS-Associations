const express = require("express")
const app = express()

let usersMessages = require('../usersMessages.json')

app.use(express())

module.exports = app