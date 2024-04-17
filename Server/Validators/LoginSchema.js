//Creating a schema
const loginSchema = {
    username: {
        notEmpty: {
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
    password: {
        notEmpty: {
            errrorMessage: 'Password cannot be empty',
        },
        isString: {
            errorMessage: 'Password must be a string'
        },
        isLength: {
            errorMessage: 'Password must be at least 3 characters long',
            options: { min: 7 }
        }
    },
    email: {
        notEmpty: {
            errrorMessage: 'Email cannot be empty',
        },
        isString: {
            errorMessage: 'Email must be a string'
        },
        isLength: {
            errorMessage: 'Email must be at least 3 characters long',
            options: { min: 7 }
        }
    }
}
module.exports = loginSchema