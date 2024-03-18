const registerSchema = {
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
    email: {
        notEmpty: {
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
    firstname: {
        notEmpty: {
            errrorMessage: 'Firstname cannot be empty',
        },
        isString: {
            errorMessage: 'Firstname must be a string',
        },
        isLength: {
            errorMessage: 'Firstname must be at least 3 characters long',
            options: { min: 7 }
        },
    },
    lastname: {
        notEmpty: {
            errorMessage: 'Lastname must be at least 3 characters long'
        },
        isString: {
            errorMessage: 'Lastname must be a string',
        },
        isLength: {
            errorMessage: 'Lastname must be at least 3 characters long',
            options: { min: 7 }
        }
    }
}
module.exports = registerSchema