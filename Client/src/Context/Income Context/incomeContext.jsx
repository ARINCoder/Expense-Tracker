import React, { useReducer } from 'react'
import { createContext } from 'react';
import incomeReducer from './incomeReducer';
//
const intialState = {
    incomeList: [],
    totalIncome: 0,
}
const IncomeContext = createContext(intialState)

const IncomeProvider = ({ children }) => {
    const [state, dispatch] = useReducer(incomeReducer, intialState);
    const addIncome = (income) => {
        dispatch({
            type: 'ADD EXPENSE',
            payload: income
        })
    }
    return (
        <IncomeContext.Provider value={[ state, addIncome, dispatch ]}>
            {children}
        </IncomeContext.Provider>
    )
}

export { IncomeContext, IncomeProvider };
