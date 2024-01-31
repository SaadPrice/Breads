// DEPENDENCIES
const express = require('express')

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

// ROUTES
app.get('/', (req, res) => {
  res.send('Welcome to an Awesome App about Breads')
})

// Breads
const breadsController = require ('./controllers/breads_controllers.js')
app.use ('/breads', breadsController)

// LISTEN
app.listen(PORT, () => {
  console.log('listening on port', PORT);
})

// MIDDLEWARE
app.use (express.static('public'))

// 404 Page
app.get('*', (req, res) => {
    res.send('404')
})
 // ODM
 const mongoose = require('mongoose');
 mongoose.connect('mongodb://127.0.0.1:27017/test');

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => console.log('connected to mongo: ', process.env.MONGO_URI))