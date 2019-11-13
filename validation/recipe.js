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

    if (!Validator.isNumeric(data.serving)){
        errors.body = 'Serving must be a number';
    }

    if (data.serving <= 0){
        errors.body = 'Serving must be more than zero';
    }

    if (Validator.isEmpty(data.time)) {
        errors.body = 'Time field is required';
    }

    if (!Validator.isNumeric(data.time)){
        errors.body = 'Time must be a number';
    }

    if (data.time <= 0) {
        errors.body = 'Time must be more than zero';
    }

    

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
}