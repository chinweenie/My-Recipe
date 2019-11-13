const Validator = require('validator');

module.exports = function validateReviewInput(data) {
    let errors = {};
    if (Validator.isEmpty(data.rating)) {
        errors.title = 'rating field is required';
    }

    if (Validator.isEmpty(data.body)) {
        errors.body = 'Body field is required';
    }

    if (!Validator.isNumeric(data.rating)) {
        errors.body = 'Rating must be a number';
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
}