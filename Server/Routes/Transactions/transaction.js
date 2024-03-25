const { Router, application } = require('express');
const { checkSchema } = require('express-validator');
const transactionSchema = require('../../Validators/transactionSchema');
const { createTransaction, getTransactions } = require('../../Controller/Transaction');
//
const newTransactionRouter = new Router();
//
newTransactionRouter.post('/transactions', checkSchema(transactionSchema), createTransaction)
newTransactionRouter.get('/gettrasactions', checkSchema(transactionSchema), getTransactions)
///
module.exports = { newTransactionRouter }
