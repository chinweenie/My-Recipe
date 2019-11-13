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
    favoritedUsers: [{
        type: Schema.Types.ObjectId,
        ref: 'users'
    }],
    favoritedRecipes: [{
        type: Schema.Types.ObjectId,
        ref: 'recipes'
    }],
    shoppingLists: [{
        type: Schema.Types.ObjectId,
        ref: 'shoppinglists'
    }],
    reviews: [{
        type: Schema.Types.ObjectId,
        ref: 'reviews'
    }]
})

module.exports = User = mongoose.model('users', UserSchema);