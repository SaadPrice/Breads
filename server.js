// DEPENDENCIES
const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const placesController = require('./controllers/places_controller'); // Corrected path

// CONFIGURATION
require('dotenv').config();
const PORT = process.env.PORT || 3003;
const app = express();

// MIDDLEWARE
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

// ROUTES
app.get('/', (req, res) => {
    res.send('Welcome to an Awesome App about Places');
});

// Places
app.use('/places', placesController);

// 404 Page
app.get('*', (req, res) => {
    res.send('404');
});

// DATABASE CONNECTION
mongoose.connect(process.env.MONGO_URI, {})
    .then(() => console.log('connected to mongo:', process.env.MONGO_URI))
    .catch(err => console.error('Error connecting to mongo:', err));

// LISTEN
app.listen(PORT, () => {
    console.log('listening on port', PORT);
});
