const express = require('express');
const router = express.Router();
const Place = require('../models/place');

// CREATE
router.post('/', (req, res) => {
    Place.create(req.body)
        .then(() => {
            res.redirect('/places');
        })
        .catch(err => {
            if (err.name === 'ValidationError') {
                let message = 'Validation Error: ';
                for (field in err.errors) {
                    message += `${err.errors[field].message} `;
                }
                res.render('places/new', { message });
            } else {
                res.render('error404');
            }
        });
});

module.exports = router;
