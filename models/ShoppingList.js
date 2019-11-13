const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ShoppingListSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    ingredients: [{
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
    }]
})

module.exports = ShoppingList = mongoose.model('shoppinglists', ShoppingListSchema);