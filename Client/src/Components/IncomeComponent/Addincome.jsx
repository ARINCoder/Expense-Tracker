import React, { useContext, useEffect, useState } from 'react';
import { IncomeContext } from '../../Context/Income Context/incomeContext';
import axios from 'axios';
import { AuthContext } from '../../Context/Auth Context/AuthContext';
import Login from '../../Routes/Login';
import { useNavigate } from 'react-router-dom';
import BASE_URL from '../constants';
import barGraph from '../barGraph';
import '../IncomeComponent/income.scss'
const Addincome = () => {
  const [category, setCategory] = useState('');
  const [source, setSource] = useState('');
  const [amount, setAmount] = useState(0); // Initialize amount to 0
  const [date, setDate] = useState(new Date());
  const [description, setDescription] = useState('');
  const [incomeList, setIncomeList] = useState([]);
  const [totalIncome, setTotalIncome] = useState(0);
  const navigate = useNavigate()
  //
  const [state, addIncome] = useContext(IncomeContext);
  //
  const { currentUser, isLoading } = useContext(AuthContext)


  const handleSubmit = async (event) => {
    event.preventDefault();
    //
    try {
      const response = await axios.post('http://localhost:3000/incomes',
        {
          category,
          source,
          amount,
          date,
          description,
        }
      );

      console.log('Income added successfully:', response); // Handle success (e.g., clear form, display message)
      //Adding Income list
      // setIncomeList([...incomeList, { category, source, amount, date, description }])
      //
      if (!Array.isArray(incomeList)) {
        setIncomeList([]);
      }
      const newIncome = { category, source, amount, date, description };
      setIncomeList([...incomeList, newIncome])
      addIncome({ category, source, amount, date, description })
      // Calculate total income
      setCategory('');
      setSource('');
      setAmount(0)
      setDate(new Date());
      setDescription('');
      localStorage.setItem('incomeList', JSON.stringify(incomeList))


    } catch (error) {
      console.log('Error adding income:', error); // Handle errors (e.g., display user-friendly error message)
    }
  };

  useEffect(() => {
    if (!incomeList) return;
    const amounts = incomeList.map(income => income.amount)
    const newTotalincome = amounts.reduce((total, amount) => {
      if (typeof amount === 'number') {
        return total + amount;
      } else {
        console.log("Encountered non-numeric amount in income list:", amount);
        return total;
      }
    }, 0);
    setTotalIncome(newTotalincome)
  }, [incomeList]);

  useEffect(() => {
    const storedIncomeList = localStorage.getItem('incomeList');
    if (storedIncomeList) {
      const parsedIncomeList = JSON.parse(storedIncomeList);
      setIncomeList(parsedIncomeList)
    }
  }, []);
  useEffect(() => {
    const fetchIncome = async () => {
      const incomes = await axios.get('http:localhost:3000/incomes', { withCredentials: true })
      setIncomeList(incomes.data)
    }
    fetchIncome()
  }, [])
  useEffect(() => {
    if (!currentUser && !isLoading) {
      return navigate('/login')

    }
  }, [currentUser, isLoading])

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target; // Destructure event object
    switch (name) {
      case 'category':
      case 'source':
        setCategory(value); // Update state directly
        setSource(value);
        break;
      case 'amount':
        setAmount(parseFloat(value)); // Ensure valid number for amount
        break;
      case 'date':
        setDate(new Date(value)); // Convert to Date object
        break;
      case 'description':
        setDescription(value);
        break;
      default:
        break;
    }
  };

  return (
    currentUser ?
      < div className="income">
        <form onSubmit={handleSubmit}>
          <h1>Incomes</h1>
          <label htmlFor="category">
            Category:
            <select id="category" value={category} onChange={(event) => setCategory(event.target.value)}>
              <option value="">Select Category</option>
              <option value="SALARY">SALARY</option>
              <option value="INVESTMENT">INVESTMENT</option>
              <option value="CRYPTO-CURRENCY"> CRYPTO-CURRENCY</option>
              <option value="GIFT"> GIFT</option>
              <option value="INTEREST"> INTEREST </option>
              <option value="FREELANCING"> FREELANCING</option>
            </select>
          </label>
          <label htmlFor="source">
            Source:
            <input type="text" id="source" value={source} onChange={handleChange} name="source" />
          </label>
          <label htmlFor="amount">
            Amount:
            <input type="number" id="amount" value={amount} onChange={handleChange} name="amount" min="0" />
          </label>
          <label htmlFor="date">
            Date:
            <input type="date" id="date" value={date.toISOString().slice(0, 10)} onChange={handleChange} name="date" />
          </label>
          <label htmlFor="description">
            Description:
            <textarea id="description" value={description} onChange={handleChange} name="description" />
          </label>

          <button type="submit">Add Income</button>
        </form>
        <div className="Incomelist">
          <h2> Your Incomes </h2>
          {/* <barGraph/> */}
          <form className='list'>
            {incomeList?.length > 0 ? (
              <ul>
                {incomeList.map((income) => (
                  <li key={income.id}>
                    Category: {income.category} <br />
                    Source: {income.source} <br />
                    Amount: {income.amount} <br />
                    Date: {income.date?.toLocaleString()} <br />
                    Description: {income.description} <br />
                  </li>
                ))}
              </ul>

            ) : (
              <p>No Income Added</p>
            )
            }
          </form>
          <p>Total Income: {totalIncome}</p>
        </div>
        <div>
          {/* <barGraph /> */}
        </div>
      </div>
      :
      <div>
        <Login />
      </div>
  );
};


export default Addincome;
