const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    ingredients: [
        {
            name: {
                type: String,
                required: true
            },
            quantity: {
                type: Number,
                required: true
            },
            unit: {
                type: String,
                required: true
            },
            category: {
                // condiment, dairy, meat, produce, seafood
                type: String,
                required: true
            }
        }
    ],
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
        type: String
    }],
    reviews: [
        {
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
        }
    ],
    images: [{
        type: String
    }],
    usersWhoFavoritedMe: {
        type: Map
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    nutritions: [
        {
            name: {
                type: String,
                required: true
            },
            quantity: {
                type: Number,
                required: true
            },
            unit: {
                type: String,
                required: true
            }
        }
    ]
})

module.exports = Recipe = mongoose.model('recipes', RecipeSchema);