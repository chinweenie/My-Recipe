const Validator = require('validator');

module.exports = function validateRecipeInput(data){
    let errors = {};
    if (Validator.isEmpty(data.name)) {
        errors.title = 'Name field is required';
    }

    if (Validator.isEmpty(data.steps)) {
        errors.body = 'Steps field is required';
    }

    if (Validator.isEmpty(data.serving)) {
        errors.body = 'Serving field is required';
    }

    if (Validator.isEmpty(data.time)) {
        errors.body = 'Time field is required';
    }

    if (data.ingredients){
        data.ingredients.forEach(ingredient => {
            if (Validator.isEmpty(ingredient.name)) {
                errors.title = 'Ingredient name field is required';
            };
            if (Validator.isEmpty(ingredient.quantity)) {
                errors.title = 'Ingredient quantity field is required';
            };
            if (Validator.isEmpty(ingredient.unit)) {
                errors.title = 'Ingredient unit field is required';
            };
            if (Validator.isEmpty(ingredient.category)) {
                errors.title = 'Ingredient Ccategory field is required';
            };
        });
    }

    if (data.nutritions){
        data.nutritions.forEach(nutrition => {
            if (Validator.isEmpty(nutrition.name)) {
                errors.title = 'Nutrition Name field is required';
            };
            if (Validator.isEmpty(nutrition.quantity)) {
                errors.title = 'Nutrition Quantity field is required';
            };
            if (Validator.isEmpty(nutrition.unit)) {
                errors.title = 'Nutrition Unit field is required';
            };
        })
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
}