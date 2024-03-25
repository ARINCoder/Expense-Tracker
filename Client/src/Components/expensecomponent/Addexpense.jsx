import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ExpenseContext } from '../../Context/Expense Context/expenseContext';
import { AuthContext } from '../../Context/Auth Context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Login from '../../Routes/Login';
import { useContext } from 'react';
import '../expensecomponent/expense.scss';

const Addexpense = () => {
    const [category, setCategory] = useState('');
    const [product, setProduct] = useState('');
    const [amount, setAmount] = useState([]);
    const [date, setDate] = useState(new Date());
    const [description, setDescription] = useState('');
    const [expenseList, setExpenseList] = useState([]);
    const [totalExpense, setTotalExpense] = useState(0);
    const [paymentOption, setPaymentOption] = useState('')
    const navigate = useNavigate()
    //
    const [state, addExpense] = useContext(ExpenseContext);
    //
    const { currentUser, isLoading } = useContext(AuthContext)

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/expense', {
                category,
                product,
                paymentOption,
                amount,
                date,
                description
            });
            console.log("Expense Added Successfully", response)
            setExpenseList([...expenseList, {
                category,
                product,
                amount,
                paymentOption,
                date,
                description
            }])
            //Try to clear the form
            setCategory('');
            setProduct('');
            setAmount();
            setDate(new Date());
            setDescription('');
            setPaymentOption()
            addExpense({ category, product, paymentOption, amount, date, description })
            //Calculating the expenses and getting the total
            // const newTotal = expenseList.reduce((total, expense) => total + expense.amount, 0)
            // setTotalExpense(newTotal)
            localStorage.setItem('expenseList', JSON.stringify(expenseList))

        } catch (error) {
            console.log(error)

        }
    };
    useEffect(() => {
        if (expenseList.length < 1) return;
        const amounts = expenseList.map(expense => expense.amount)
        const newTotalExpense = amounts.reduce((total, amount) => total + amount, 0);
        setTotalExpense(newTotalExpense)
    }, [expenseList]);

    useEffect(() => {
        if (!currentUser && !isLoading) {
            return navigate('/login')

        }
    }, [currentUser, isLoading])
    useEffect(() => {
        const storedExpenseList = localStorage.getItem('expenseList');
        if (storedExpenseList) {
            const parsedExpenseList = JSON.parse(storedExpenseList);
            setExpenseList(parsedExpenseList)
        }
    }, []);

    const handleChange = async (event) => {
        event.preventDefault();
        const { name, value } = event.target; // Destructure event object
        switch (name) {
            case 'category':
                setCategory(value);
                break;
            case 'product':
                setProduct(value);
                break;
            case 'paymentOption':
                setPaymentOption(value);
                break;
            case 'amount':
                // Ensure valid number and handle negative amount
                const parsedAmount = parseFloat(value);
                setAmount(parsedAmount < 0 ? parsedAmount : []); // Set to 0 for non-negative values
                break;
            case 'date':
                setDate(new date(value)); // Convert to Date object
                break;
            case 'description':
                setDescription(value);
                break;
            default:
                break;
        }


    }

    return (
        currentUser ?
            <div className='expense'>
                <form onSubmit={handleSubmit}>
                    <h1> Add Expense </h1>
                    <label htmlFor="category">
                        Category:
                        <select id="category" value={category}
                            onChange={(event) => setCategory(event.target.value)}>
                            <option value="">Select Category</option>
                            <option value="GROCERIES">Groceries</option>
                            <option value="RENT">Rent</option>
                            <option value="UTILITIES">Utilities</option>
                            <option value="TRANSPORTATION">Transportation</option>
                            <option value="ENTERTAIMENT">  Entertainment</option>
                        </select>
                    </label>
                    <label htmlFor="product">
                        Product:
                        <input type="text" id='product' value={product}
                            onChange={handleChange} name='product' />
                    </label>
                    <label htmlFor="amount">
                        Amount:
                        <input type="number" id="amount" value={amount}
                            onChange={handleChange} name="amount" max="0" />
                    </label>
                    <label htmlFor="paymentOption">
                        Paymentoption:
                        <select id="paymentOption"
                            value={paymentOption} onChange={(event) => setPaymentOption(event.target.value)}>
                            <option value="">Select PaymentOption</option>
                            <option value="CASH">CASH</option>
                            <option value="CHECK">CHECK</option>
                            <option value="CARD">  CARD </option>
                        </select>

                    </label>
                    <label htmlFor="date">
                        Date:
                        <input type="date" id="date" value={date.toISOString().slice(0, 10)}
                            onChange={handleChange} name="date" />
                    </label>
                    <label htmlFor="description">
                        Description:
                        <textarea id="description" value={description}
                            onChange={handleChange} name="description" />
                    </label>
                    <button type='submit'> Add Expense </button>


                </form>
                <div className="Expenselist">
                    <h2> Your Expenses </h2>
                    {expenseList.length > 0 ? (
                        <ul>
                            {expenseList.map((expense) => (
                                <li key={expense.date}>
                                    Category : {expense.category} <br />
                                    Product: {expense.product} <br />
                                    Payment: {expense.paymentOption} <br />
                                    Amount: {expense.amount} <br />
                                    Date: {expense.date.toLocaleString()} <br />
                                    Description: {expense.description} <br />

                                </li>
                            ))}

                        </ul>) : (<p> No Expense Added </p>)
                    }
                    <p> Total Expense : {totalExpense} </p>

                </div>
            </div>
            :
            <div>
                <span>
                    <Login> </Login>
                </span>
            </div>
    );
}

export default Addexpense