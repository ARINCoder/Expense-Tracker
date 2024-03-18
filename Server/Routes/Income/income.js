const { Router } = require('express');
const { checkSchema } = require('express-validator');
const incomeSchema = require('../../Validators/incomeSchema');
const createIncome = require('../../Controller/income');
const Incomes = require('../../Controller/Incomes');
const incomeid = require('../../Controller/incomesid');




//
const incomeRouter = Router();
incomeRouter.post('/income', checkSchema(incomeSchema), createIncome)
incomeRouter.get('/incomes', checkSchema(incomeSchema), Incomes)
incomeRouter.get('/income:id', checkSchema(incomeSchema), incomeid)

module.exports = incomeRouter;