const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ShoppingListSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    ingredients: [{
        type: Schema.Types.ObjectId,
        ref: 'ingredients'
    }]
})

module.exports = ShoppingList = mongoose.model('shoppinglists', ShoppingListSchema);