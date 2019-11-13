const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IngredientSchema = new Schema({
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
    },
    shoppingLists: [{
        type: Schema.Types.ObjectId,
        ref: 'shoppinglists'
    }]

})

module.exports = Ingredient = mongoose.model('ingredients', IngredientSchema);