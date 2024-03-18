const { Router } = require('express')
const expenseSchema = require('../../Validators/expenseSchema')
const Expense = require('../../Controller/expense')
const expenseRouter = Router()
//
expenseRouter.post('/expense', checkSchema(expenseSchema), Expense)

module.exports = expenseRouter