const { Router } = require('express');
const { login, logout } = require('../../Controller/login');
const { checkSchema } = require('express-validator');
const loginSchema = require('../../Validators/LoginSchema');

const loginRouter = Router();
loginRouter.post('/login',checkSchema(loginSchema), login)
loginRouter.post('/logout', logout)
module.exports = loginRouter;