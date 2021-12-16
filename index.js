const express = require("express")
const app = express()
const morgan = require("morgan")
const cors = require ("cors")
const port = 5000

const associationsRoutes = require('./routes/assiociations')

app.use(express.json())
app.use(cors())
app.use(morgan('tiny'))

app.use('/associations', associationsRoutes)

app.get('/', (req,res) => {
    console.log(associations)
    res.json(associations)
})

app.listen(port, () =>{
    console.log(`server running at port ${port}`)
})