const express = require("express")
const app = express()
const { body, validationResult } = require('express-validator')


let associations = require("../associations.json")

app.get('/:slug', (req, res) => {
    const { slug } = req.params
    const association = associations.find(association => association.name === slug)
    res.json(association)
})

module.exports = app