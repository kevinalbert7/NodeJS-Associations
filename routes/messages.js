const express = require('express')
const app = express()
const moment = require('moment')
const fs = require('fs')

const path = './messages.json'

app.get('/', (req, res) => {
    // pour être sûr d'avoir les messages à jour, je fais un readFile à chaque requête sur cette route  
    fs.readFile(path, (err, data) => {
        if (err) {
            res.status(500).send('Internal server error')
        }

        const messages = JSON.parse(data)

        res.send(messages)
    })
})

app.post('/', (req, res) => {
    const message = {
        ...req.body,
        date: moment().format()
    }

    // on utilise readFile pour avoir accès à tous nos messages de façon persistante
    // comme si on utilisait une base de données
    // ça veut dire que si j'éteins mon serveur, mon fichier json sera toujours à jour
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log("error", err)

            //l'erreur arrive côté serveur (typiquement => mauvais chemin de fichier)
            //On renvoie un statut 500
            res.status(500).send('Internal server error')
        }

        // je décode le contenu de mon fichier
        let messages = JSON.parse(data)

        // j'ajoute un messages à mon tableau de messages
        messages = [ ...messages, message]

        // j'écris dans mon fichier en utilisant JSON.stringify pour réencoder mes messages
        fs.writeFile(path, JSON.stringify(messages), (err) => {
            if (err) {
                res.status(500).send('Internal server error')
            }        
        })
    })

    res.json(message)
})

module.exports = app