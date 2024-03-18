const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// Function to handle income creation
const createIncome = async (req, res) => {
    // Extract income data from the request body
    const { category, source, amount, date, description } = req.body;

    try {
        // Create a new income 
        const newIncome = await prisma.Income.create({
            data: {
                category,
                amount,
                source,
                date,
                description
            },
        });
        res.json({ message: "Income added Successfully", id: newIncome.id })
    } catch (error) {
        console.error(error);
        res.status(400).json({message: "Error adding Income"});
    }
};
//
const Incomes = async (req, res) => {
    try {
        const allIncomes = await prisma.Income.findMany();
        res.json(allIncomes)
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error fetching income records" })
    }
};
//
const incomeid = async (req, res) => {
    const id = parseInt(req.params.id);
    try {
        const income = await prisma.Income.findUnque({
            where: { id }
        });
        if (!income) {
            return res.status(404).json({ message: "Income not Found" })
        };
        res.json(income);

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error fetching Income" })
    }
}
module.exports = {createIncome, Incomes, incomeid}
