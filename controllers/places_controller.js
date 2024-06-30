const express = require('express');
const router = express.Router();
const Place = require('../models/place');
const Comment = require('../models/comment');

// INDEX
router.get('/', (req, res) => {
    Place.find()
        .then(foundPlaces => {
            res.render('places/index', {
                places: foundPlaces,
                title: 'Index Page'
            });
        })
        .catch(err => {
            res.status(404).send('404');
        });
});

// NEW
router.get('/new', (req, res) => {
    res.render('places/new');
});

// CREATE
router.post('/', (req, res) => {
    Place.create(req.body)
        .then(() => {
            res.redirect('/places');
        })
        .catch(err => {
            if (err.name === 'ValidationError') {
                let message = 'Validation Error: ';
                for (let field in err.errors) {
                    message += `${err.errors[field].message} `;
                }
                res.render('places/new', { message });
            } else {
                res.render('error404');
            }
        });
});

// SHOW
router.get('/:id', (req, res) => {
    Place.findById(req.params.id)
        .populate('comments')
        .then(foundPlace => {
            res.render('places/show', {
                place: foundPlace
            });
        })
        .catch(err => {
            res.status(404).send('404');
        });
});

// EDIT
router.get('/:id/edit', (req, res) => {
    Place.findById(req.params.id)
        .then(foundPlace => {
            res.render('places/edit', {
                place: foundPlace
            });
        })
        .catch(err => {
            res.status(404).send('404');
        });
});

// UPDATE
router.put('/:id', (req, res) => {
    Place.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(updatedPlace => {
            res.redirect(`/places/${updatedPlace.id}`);
        })
        .catch(err => {
            res.status(404).send('404');
        });
});

// DELETE
router.delete('/:id', (req, res) => {
    Place.findByIdAndDelete(req.params.id)
        .then(() => {
            res.redirect('/places');
        })
        .catch(err => {
            res.status(404).send('404');
        });
});

// ADD COMMENT
router.post('/:id/comment', (req, res) => {
    const { author, content, stars, rant } = req.body;
    const newComment = {
        author,
        content,
        stars: parseFloat(stars),
        rant: rant === 'on'
    };

    Place.findById(req.params.id)
        .then(place => {
            Comment.create(newComment)
                .then(comment => {
                    place.comments.push(comment);
                    return place.save();
                })
                .then(() => {
                    res.redirect(`/places/${req.params.id}`);
                })
                .catch(err => {
                    console.error('Error adding comment:', err);
                    res.send('404');
                });
        })
        .catch(err => {
            console.error('Error finding place:', err);
            res.send('404');
        });
});

module.exports = router;
