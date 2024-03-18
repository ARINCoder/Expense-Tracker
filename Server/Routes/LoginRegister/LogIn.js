const { Router } = require('express');
const LoginSchema = require('../../Validators/LoginSchema');
const login = require('../../Controller/login');
const { checkSchema, validationResult } = require('express-validator')

const loginRouter = Router();
loginRouter.post('/login', checkSchema(LoginSchema), login)
module.exports = loginRouter;