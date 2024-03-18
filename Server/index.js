const express = require ('express')
const registerRouter = require('./Routes/LoginRegister/Register');
const loginRouter = require('./Routes/LoginRegister/LogIn');
const incomeRouter = require('./Routes/Income/income');
const expenseRouter = require('./Routes/Expense/expense');
//Register
const app = express()
app.use(express.json());

app.use(registerRouter)
app.use(loginRouter)
app.use(incomeRouter)
app.use(expenseRouter)
app.use(budgetRouter)
// app.post('/register', async (req, res) => {
//     try {
//         const {Username, email, password  } = req.body
//         const expenses = await prisma.Expense.create(req.body)
//     res.send(expenses)
        
//     } catch (error) { 
//         res.status(401).json({message:"The expense is not available"})
        
//     }
// })
PORT = 3000
app.listen(PORT, () =>{
    console.log(`Successfully Connected to localhost:${PORT}`)
})