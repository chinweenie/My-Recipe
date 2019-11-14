const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    recipes: [{
        type: Schema.Types.ObjectId,
        ref: 'recipes'
    }],
    favoritedRecipes: [
        {
            recipeId: {
                type: Schema.Types.ObjectId,
                ref: 'recipes'
            }
        }
    ],
    shoppingLists: [
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
    reviews: [{
        type: Schema.Types.ObjectId,
        ref: 'reviews'
    }]
})

module.exports = User = mongoose.model('users', UserSchema);