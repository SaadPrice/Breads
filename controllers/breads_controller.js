const express = require('express');
const breads = express.Router();
const Bread = require('../models/bread');
const Comment = require('../models/comment');

// SHOW
breads.get('/:id', (req, res) => {
    Bread.findById(req.params.id)
        .populate('comments')
        .then(foundBread => {
            res.render('show', {
                bread: foundBread
            });
        })
        .catch(err => {
            res.send('404');
        });
});

// ADD COMMENT
breads.post('/:id/comment', (req, res) => {
    const { author, content, stars, rant } = req.body;
    const newComment = {
        author,
        content,
        stars: parseFloat(stars),
        rant: rant === 'on'
    };

    Bread.findById(req.params.id)
        .then(bread => {
            Comment.create(newComment)
                .then(comment => {
                    bread.comments.push(comment);
                    return bread.save();
                })
                .then(() => {
                    res.redirect(`/breads/${req.params.id}`);
                })
                .catch(err => {
                    console.error('Error adding comment:', err);
                    res.send('404');
                });
        })
        .catch(err => {
            console.error('Error finding bread:', err);
            res.send('404');
        });
});

module.exports = breads;
