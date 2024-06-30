const mongoose = require('mongoose');
const Bread = require('../models/bread'); // Ensure this matches your model filename

require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, {})
    .then(() => {
        console.log('MongoDB connected');

        const breads = [
            {
                name: 'H-Thai-M',
                hasGluten: true,
                image: 'http://placekitten.com/250/250',
                city: 'Seattle',
                state: 'WA',
                cuisines: 'Thai, Asian'
            },
            {
                name: 'Coding Cat Cafe',
                hasGluten: false,
                image: 'http://placekitten.com/250/250',
                city: 'Phoenix',
                state: 'AZ',
                cuisines: 'Coffee, Bakery'
            }
        ];

        return Bread.create(breads);
    })
    .then(() => {
        console.log('Success');
        mongoose.connection.close();
    })
    .catch(err => {
        console.error('Failed', err);
        mongoose.connection.close();
    });
