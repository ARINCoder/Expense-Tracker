const { Router } = require('express')
const expenseSchema = require('../../Validators/expenseSchema')
const Expense = require('../../Controller/expense')
const { checkSchema } = require('express-validator')
const { requiredAuth } = require('../authUser/authuser')
const expenseRouter = Router()
//
expenseRouter.post('/expense', requiredAuth,  checkSchema(expenseSchema), Expense)

module.exports = expenseRouter