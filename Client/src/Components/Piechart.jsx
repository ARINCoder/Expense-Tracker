import React from 'react'
import { Pie } from "react-chartjs-2"
import { ExpenseContext } from '../Context/Expense Context/expenseContext';



const Piechart = ({ expenseList }) => {
    const chartData = {
        labels: expenseList.map((item) => item.category),
        datasets: [{
            lable: "Daily Summary",
            data: expenseList.map((item) => item.amount),
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 253, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132,1 )',
                'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1,
        },
        ],
    };
    const chartOptions = {
        maintainAspectRatio: false,
    };

    return (
        <div>
            <Pie data={chartData} options={chartOptions} />
        </div>
    )
}

export default Piechart