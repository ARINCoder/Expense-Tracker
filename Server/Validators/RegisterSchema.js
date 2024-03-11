const registerSchema = {
    username: {
        nonEmpty: {
            errrorMessage: 'Username cannot be empty',
        },
        isString: {
            errorMessage: 'Username must be a string'

        },
        isLength: {
            errorMessage: 'Username must be at least 3 characters long',
            options: { min: 7 }
        }

    },
    email: {
        nonEmpty: {
            errrorMessage: 'Email cannot be empty',
        },
        isString: {
            errorMessage: 'Email must be a string',


        },
        isLength: {
            errorMessage: 'Email must be at least 3 characters long',
            options: { min: 7 }
        },
        isLowercase: {
            errorMessage: 'Email must be lower case'
        },

    },
    password: {
        nonEmpty: {
            errrorMessage: 'Password cannot be empty',
        },
        isString: {
            errorMessage: 'Password must be a string'
        },
        isLength: {
            errorMessage: 'Password must be at least 3 characters long',
            options: { min: 7 }
        }
    }
}
module.exports = registerSchema