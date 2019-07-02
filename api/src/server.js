require('dotenv/config')
const { env } = process

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
const server = require('http').Server(app)

// connecting with mongodb
mongoose.connect(`mongodb+srv://${env.DB_USER}:${env.DB_PASSWORD}@cluster0-busfx.mongodb.net/buscape-exam?retryWrites=true&w=majority`, {
    useNewUrlParser: true
})

// setting http config
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())
app.use(require('./routes'))

// creating the server
server.listen(env.PORT, () => {
    console.log(`Server listening in ${env.HOST}${env.PORT}`)
})