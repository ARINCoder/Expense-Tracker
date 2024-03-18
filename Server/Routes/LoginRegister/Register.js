const {Router} = require('express');
const register = require('../../Controller/register')
const registerSchema = require('../../Validators/RegisterSchema')
const { checkSchema, validationResult } = require('express-validator')
 // 
 const registerRouter = Router();
 registerRouter.post('/register', checkSchema(registerSchema), register)
 module.exports = registerRouter