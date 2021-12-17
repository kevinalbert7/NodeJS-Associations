const express = require("express")
const app = express()

let associations = require("../associations.json")

app.get('/', (req, res) => {
    res.json(associations)
})

app.get('/:slug', (req, res) => {
    const { slug } = req.params
    const association = associations.find(association => association.slug === slug)
    res.json(association)
})

app.post('/',
    body('associationName')
    .exists().withMessage("associationName is required")
    .withMessage("associationName doesn't exist"),
    (req,res) => {
        if (errors.length > 0) {
            res.status(400).json({ errors })
        } else {
            res.json(association)
        }
    }

)

module.exports = app