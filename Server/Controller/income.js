const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// Function to handle income creation
const createIncome = async (req, res) => {
    // Extract income data from the request body
    const { category, source, amount, userId, date, description } = req.body;

    try {
        // Create a new income 
        const newIncome = await prisma.Income.create({
            data: {
                category,
                amount,
                source,
                userId,
                date,
                description
            },
        });
        res.json({ message: "Income added Successfully", id: newIncome.id })
        console.log("newIncome", newIncome)
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

};
//
const updateIncome = async (req, res) => {
    const id = parseInt(req.params.id);
    const { amount, source, description } = req.body; // Assuming body contains update data
  
    try {
      const updatedIncome = await prisma.Income.update({
        where: { id },
        data: {
            category,
            amount,
            userId,
            source,
            date,
            description
        },
      });
  
      if (!updatedIncome) {
        return res.status(404).json({ message: "Income not Found" });
      }
  
      res.json(updatedIncome);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error updating Income" });
    }
  };
  //
  const deleteIncome = async (req, res) => {
    const id = parseInt(req.params.id);
  
    try {
      const deletedIncome = await prisma.Income.delete({
        where: { id },
      });
  
      if (!deletedIncome) {
        return res.status(404).json({ message: "Income not Found" });
      }
  
      res.json({ message: "Income deleted successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error deleting Income" });
    }
  };
  
  
module.exports = {createIncome, Incomes, incomeid, deleteIncome, updateIncome}
