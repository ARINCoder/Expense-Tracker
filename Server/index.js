const express = require('express')
const registerRouter = require('./Routes/LoginRegister/Register');
const loginRouter = require('./Routes/LoginRegister/LogIn');
const expenseRouter = require('./Routes/Expense/expense');
const incomeRouter = require('./Routes/Income/income')
const budgetRouter = require('./Routes/Budget/budget');
const cookieParser = require('cookie-parser')
const session = require('express-session')
const dotenv = require('dotenv')
const cors = require('cors')
//Register
dotenv.config();
const app = express()

app.use(express.json());
app.use(cookieParser)

app.use(cors(
    {
        origin: 'http://localhost:5173',
        credentials:true
    }
))

app.use(
    session({
        secret:process.env.SECRET_KEY,
        saveUninitialized:true,
        resave:false,
        cookie:{
            secure: true,
            maxAge:1000 * 60 * 60 * 24 * 7,
            httpOnly:true
        }
    })
)

app.use((req, res, next) => {
    console.log('body', req.body)
    next()
}) 

app.get("/", (req, res) => res.send("Hello world"))

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
const PORT = 3000

app.listen(PORT, () => {
    console.log(`Successfully Connected to localhost:${PORT}`)
})