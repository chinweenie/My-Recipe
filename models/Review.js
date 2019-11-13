const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
    rating: {
        type: Number,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    recipe: {
        type: Schema.Types.ObjectId,
        ref: 'recipes'
    }
});
module.exports = Review = mongoose.model('reviews', ReviewSchema);