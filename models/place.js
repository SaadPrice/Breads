const mongoose = require('mongoose');
const { Schema } = mongoose;

const placeSchema = new Schema({
    name: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    cuisines: { type: String, required: true },
    image: { type: String, default: 'http://placekitten.com/250/250' },
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]
});

const Place = mongoose.model('Place', placeSchema);
module.exports = Place;
