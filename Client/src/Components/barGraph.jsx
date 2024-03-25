import React, { useContext } from 'react'
import { Bar } from 'react-chartjs-2';
import { IncomeContext } from '../Context/Income Context/incomeContext';
import { ExpenseContext } from '../Context/Expense Context/expenseContext';

const barGraph = ({ expenseData }) => {
    const { state: expenseState } = useContext(ExpenseContext)
    const { state: incomeState } = useContext(IncomeContext)
    const chartData = {
        labels: [...expenseState.expenseList.map((item) => item.category),
        ...incomeState.incomeList.map((item) => item.category),],
        datasets: [
            {
                label: 'Expenses',
                data: expenseState.expenseList.map((item) => item.amount),
                backgroundColor: 'rgba(255, 99, 132, 0.2)', // Adjust color for expenses
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
            },
            {
                label: 'Income',
                data: incomeState.incomeList.map((item) => item.amount),
                backgroundColor: 'rgba(54, 162, 235, 0.2)', // Adjust color for income
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
            },
        ],
    };
    const chartOptions = {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      };
    return (
        <div>
            <Bar data={chartData} options={chartOptions} />
        </div>
    )
}

export default barGraph