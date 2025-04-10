require('dotenv').config()


const express = require('express')
const sampleRoutes = require('./routes/sampleroutes')
const mongoose = require('mongoose')



const app = express()


app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})


//routes
app.use('/api/sample', sampleRoutes)


mongoose.connect(process.env.MONGO_URI)
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log("listening on port", process.env.PORT)
    })
})
.catch((error) =>{
    console.log.error
})



