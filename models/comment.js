const mongoose = require('mongoose');
const { Schema } = mongoose;

const commentSchema = new Schema({
    author: { type: String, default: 'Anonymous' },
    rant: { type: Boolean, default: false },
    stars: { type: Number, required: true, min: 1, max: 5 },
    content: { type: String, default: '' }
});

const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;
