const expenseSchema = {
    category: {
      isString: {
        errorMessage: "Must be a string"
      },
      notEmpty: {
        errorMessage: "Cannot be Empty"
      },
    },
    amount: {
      isFloat: {  // Use isFloat for decimal numbers
        errorMessage: "Must be a number"
      },
      notEmpty: {
        errorMessage: "Cannot be Empty"
      },
      // positive: {  // Ensure expenses are non-negative
      //   errorMessage: "Must be greater than or equal to 0"
      // }
    },
    product: {
      isString: {
        errorMessage: "Must be a string"
      },
      notEmpty: {
        errorMessage: "Cannot be Empty"
      },
    },
    description: {  // Optional field
      isString: {
        errorMessage: "Must be a string"
      }
    }
  };
  
  module.exports = expenseSchema;
  