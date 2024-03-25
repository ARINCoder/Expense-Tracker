const transactionSchema = {
    category: {
      isString: {
        errorMessage: "Must be a string"
      },
      notEmpty: {
        errorMessage: "Cannot be Empty"
      },
    },
    amount: {
      isFloat: { // Use isFloat for decimal numbers
        errorMessage: "Must be a number"
      },
      notEmpty: {
        errorMessage: "Cannot be Empty"
      },
    },
    // Optional depending on your implementation
    isIncome: {
      isBoolean: {
        errorMessage: "Must be true or false"
      },
    },
    description: {
      isString: {
        errorMessage: "Must be a string"
      },
    },
    date: { // Optional depending on your needs
      isDate: {
        errorMessage: "Invalid date format"
      },
    },
  };
  
  module.exports = transactionSchema;
  