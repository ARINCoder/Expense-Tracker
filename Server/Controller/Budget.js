const { PrismaClient } = require('@prisma/client')
//
const prisma = new PrismaClient
//
const budget = async (req, res) => {
    const { category, amount } = req.body
    try {
        const newbudget = await prisma.Budget.create({
            data: {
                category,
                amount,
                remaining: amount
            }
        });
        res.json({
            message: "Budget added Successfully",
            budget: { category: newbudget.category }
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error Loading Budget" })

    }
};
module.exports = budget