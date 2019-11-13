const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    ingredients: [{
        type: Schema.Types.ObjectId,
        ref: 'ingredients'
    }],
    steps: {
        type: String,
        required: true
    },
    serving: {
        type: Number,
        required: true
    },
    time: {
        type: Number,
        required: true
    },
    tags: [{
        type: String,
        required: true
    }],
    reviews: [{
        type: Schema.Types.ObjectId,
        ref: 'reviews'
    }],
    images: [{
        type: String
    }],
    usersWhoFavoritedMe: [{
        type: Schema.Types.ObjectId,
        ref: 'users'
    }],
    author: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    }
})

module.exports = Recipe = mongoose.model('recipes', RecipeSchema);