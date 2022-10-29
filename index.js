const express = require('express')
const app = express()
const morgan = require('morgan')
const port = 5000

const associationsRoutes = require('./routes/assiociations')
const messagesRoutes = require('./routes/messages')

app.use(morgan('tiny'))
app.use(express.json())

app.use('/associations', associationsRoutes)
app.use('/messages', messagesRoutes)

app.get('/', (req,res) => {
    res.json(associations)
})

app.listen(port, () =>{
    console.log(`server running on port ${port}`)
})