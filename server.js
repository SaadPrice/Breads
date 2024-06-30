// DEPENDENCIES
const express = require('express')
 // ODM
 const mongoose = require('mongoose');

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

// MIDDLEWARE
app.use (express.static('public'))

// ROUTES
app.get('/', (req, res) => {
  res.send('Welcome to an Awesome App about Breads')
})

// Breads
const breadsController = require ('./controllers/breads_controller.js')
app.use ('/breads', breadsController)

// 404 Page
app.get('*', (req, res) => {
  res.send('404')
})

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('connected to mongo: ', process.env.MONGO_URI))

// LISTEN
app.listen(PORT, () => {
  console.log('listening on port', PORT);
})




