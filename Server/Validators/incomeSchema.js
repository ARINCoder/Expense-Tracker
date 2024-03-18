const incomeSchema = {
    category: {
        isString: {
            errorMessage: "Must be a string"
        },
        notEmpty: {
            errorMessage: "Cannot be Empty"
        },
    },
    amount: {
        isInt: {
            errorMessage: "Must be a number"
        },
        notEmpty: {
            errorMessage: "Cannot be Empty"
        },
    },
    source: {
        isInt: {
            errorMessage: "Must be a number"
        },
        notEmpty: {
            errorMessage: "Cannot be Empty"
        },

    }
}
module.exports = incomeSchema