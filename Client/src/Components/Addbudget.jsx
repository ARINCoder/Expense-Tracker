import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Addbudget = () => {
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState(0);
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!category || isNaN(amount)) {
      console.log('Invalid Input');
      return;
    }
    try {
      const response = await axios.post('http://localhost:3000/budget', { category, amount });
      console.log(response.data);
      return(navigate('/'))
    } catch (error) {
      console.log(error)

    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1> Add Budget </h1>
        <label htmlFor="category">
          Category:
          <input type="text"
            value={category}
            onChange={(event) => setCategory(event.target.value)} />
        </label>
        <label htmlFor="amount">
          Amount:
          <input type="text"
            value={amount}
            onChange={(event) => setAmount(event.target.value)} />
          <button type='submit'> Add Budget </button>
        </label>

      </form>

    </>
  )
}

export default Addbudget