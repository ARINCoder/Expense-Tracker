const { Router } = require('express')
const budget = require('../../Controller/budget')
const budgetSchema = require('../../Validators/budgetSchema')

const budgetRouter = Router()
budgetRouter.post('/budget', checkSchema(budgetSchema), budget)

//
module.exports = budgetRouter