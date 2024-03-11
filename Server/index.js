const express = require ('express')
const {PrismaClient} = require('@prisma/client')
const {v4 : uuidv4} = require('uuid')
//Register
const app = express()
app.use(express.json());


const prisma = new PrismaClient()
app.post('/register', async (req, res) => {
    try {
        const {Catergory, Amount } = req.body
        const expenses = await prisma.Expense.create(req.body)
    res.send(expenses)
        
    } catch (error) { 
        res.status(401).json({message:"The expense is not available"})
        
    }
})
PORT = 3000
app.listen(PORT, () =>{
    console.log(`Successfully Connected to localhost:${PORT}`)
})