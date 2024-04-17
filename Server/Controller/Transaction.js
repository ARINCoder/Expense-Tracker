const { PrismaClient } = require('@prisma/client')
//
const prisma = new PrismaClient();
//

const createTransaction = async (req, res) => {
    // Extract income data from the request body
    const { amount, date, description, isIncome } = req.body;

    try {
        let transactionData = {
            amount,
            date,
            description,
            isIncome,
            date: new Date(),
        };
        if (isIncome) {
            const newIncome = await prisma.Income.create({ data: {} });
            transactionData.incomeId = newIncome.id;
        } else {
            const newExpense = await prisma.Expense.create({ data: {} });
            transactionData.expenseId = newExpense.id;
        }
        const newTransaction = await prisma.Transaction.create({
            data: transactionData,
        });
        res.json({ message: "Transaction created Successfully", transaction: newTransaction });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error in creating Transaction" })
    }
};
const getTransactions = async (req, res) => {
    try {
        const transactions = await prisma.Transaction.findMany({
            include: {
                income: true,
                expense: true,
            }
        });
        res.json(transactions)
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error fetching Transactiond" });

    }
};
module.exports = { createTransaction, getTransactions}