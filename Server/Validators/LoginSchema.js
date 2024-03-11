//Creating a schema
const loginSchema = {
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
    password: {
        nonEmpty: {
            errrorMessage: 'Password cannot be empty',
        },
        isString: {
            errorMessage: 'Password must be a string'
        },
        isLength: {
            errorMessage:'Password must be at least 3 characters long',
            options: { min:7}
        }
    } 
}
export default loginSchema