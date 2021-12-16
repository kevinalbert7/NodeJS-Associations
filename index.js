const express = require("express")
const app = express()
const port = 5000

const associationsRoutes = require('./routes/associations')

app.use(express.json())

app.use('/associations', associationsRoutes)

app.get('/', (req,res) => {
    res.json()
})



app.listen(port, () =>{
    console.log(`server running at port ${port}`)
})