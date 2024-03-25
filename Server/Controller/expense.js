const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const Expense = async (req, res) => {
    const { category, paymentOption, amount, product, description } = req.body
    try {
        const newExpense = await prisma.Expense.create({
            data: {
                category,
                paymentOption,
                amount,
                product,
                description
            }
        })
        res.json({ message: "Expense added Successfully", id: newExpense.id })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Error adding Expense" })
    }
}
module.exports = Expense