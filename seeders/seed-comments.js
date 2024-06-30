const mongoose = require('mongoose');
const { Bread, Comment } = require('../models'); // Ensure the path is correct

require('dotenv').config();
mongoose.connect(process.env.MONGO_URI, {});

async function seed() {
    const bread = await Bread.findOne({ name: 'H-Thai-M' });

    if (!bread) {
        console.log('Place not found');
        return;
    }

    const comment1 = await Comment.create({
        author: 'Commenter 1',
        rant: false,
        stars: 4.5,
        content: 'Great place!'
    });

    const comment2 = await Comment.create({
        author: 'Commenter 2',
        rant: true,
        stars: 2,
        content: 'Not that great.'
    });

    bread.comments.push(comment1);
    bread.comments.push(comment2);
    await bread.save();
    console.log('Seeded comments successfully');
    mongoose.connection.close();
}

seed().catch(err => {
    console.error('Error seeding comments:', err);
    mongoose.connection.close();
});
