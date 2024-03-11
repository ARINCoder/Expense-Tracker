const express = require ('express')
const Router = require('express');
const { checkSchema, validationResult } = require('express-validator');
const registerSchema = require('../Validators/RegisterSchema')
//Register
app.use(express.json());
const registerRouter = Router()
registerRouter.post('register', checkSchema(registerSchema), async(req,res) =>{
 const errors = validationResult(req) //The validationResult(req) function checks if the middleware 
 //(checkSchema) found any issues.
 if(!error.isEmpty()){
    return res.status(400).send({ status: 'Failed', errors}).end()
 }
 const data = matchedData(req) // is a function from the validator library, 
 //it extracts the validated data from the request 
 //body after successful validation.
 try {
    await registerUser(data)
    res.status(201).send({status: "success"}).end()
} catch (error) {
    res.status(400).send({status: "fail", message: error.message})
}

})
// const prisma = new PrismaClient()
// app.post('/register', async (req, res) => {
//     try {
//         const expenses = await prisma.Expense.create(req.body)
//     res.send(expenses)
        
//     } catch (error) { 
//         res.status(401).json({message:"The expense is not available"})
        
//     }
// })
// PORT = 3000
// app.listen(PORT, () =>{
//     console.log(`Successfully Connected to localhost:${PORT}`)
// })
module.exports = registerRouter
