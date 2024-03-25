const { Router } = require('express');
const { checkSchema } = require('express-validator');
const incomeSchema = require('../../Validators/incomeSchema');
const { createIncome, Incomes, incomeid, updateIncome, deleteIncome } = require('../../Controller/income');
const { requiredAuth } = require('../authUser/authuser');




//
const incomeRouter = Router();
incomeRouter.post('/incomes', requiredAuth, checkSchema(incomeSchema), createIncome)
incomeRouter.get('/incomes', Incomes)
incomeRouter.get('/income/:id', incomeid)
incomeRouter.delete('/income/:id', deleteIncome)
incomeRouter.patch('/income/:id', updateIncome)
module.exports = incomeRouter;