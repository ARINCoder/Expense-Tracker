const budgetSchema = {
    category: {
      isString: {
        errorMessage: "Must be a string"
      },
      notEmpty: {
        errorMessage: "Cannot be Empty"
      },
    },
    amount: {
      isFloat: {
        errorMessage: "Must be a number"
      },
      notEmpty: {
        errorMessage: "Cannot be Empty"
      },
      positive: {
        errorMessage: "Must be greater than or equal to 0"
      }
    },
    description: {
      isString: {
        errorMessage: "Must be a string"
      }
    }
  };
  
  module.exports = budgetSchema;
  