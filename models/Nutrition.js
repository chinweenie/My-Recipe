const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NutritionSchema = new Schema({
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
    recipe: {
        type: Schema.Types.ObjectId,
        ref: 'recipes'
    }
})

module.exports = Nutrition = mongoose.model('nutritions', NutritionSchema);