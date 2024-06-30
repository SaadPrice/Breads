const mongoose = require('mongoose');
const { Schema } = mongoose;

const breadSchema = new Schema({
    name: { type: String, required: true },
    hasGluten: { type: Boolean, required: true },
    image: { type: String, default: 'http://placekitten.com/250/250' },
    city: { type: String, required: true },
    state: { type: String, required: true },
    cuisines: { type: String, required: true },
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]
});

const Bread = mongoose.model('Bread', breadSchema);
module.exports = Bread;

