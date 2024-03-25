const { PrismaClient } = require('@prisma/client')

//
const prisma = new PrismaClient()
//
const dailySummary = async (req, res) => {
    const today = new Date();
    const yesterday = new Date(today.getTime() - (24 * 60 * 60 * 1000));  // Yesterday's date
    try {
        const [totalIncome, totalExpense] = await Promise.all([
            prisma.Income.aggregate({
                sum: {
                    amount: true,
                }, where: {
                    date: {
                        gte: yesterday, // greater than or equal to yesterday (gte) and less than today (lt).
                        lt: today,
                    },
                },
            }),
            prisma.Expense.aggregate({
                sum: {
                    amount: true,
                },
                where: {
                    date: {
                        gte: yesterday,
                        lt: today,
                    },
                },
            }),
        ]);
        res.json({
            income: totalIncome.sum.amount || 0,
            expense: totalExpense.sum.amount || 0,
        });

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Error fetching daily Summary" })

    }

}
//
module.exports = dailySummary