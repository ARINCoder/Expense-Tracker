import React, { useReducer } from 'react'
import { createContext } from 'react';
import expenseReducer from './expenseReducer';
//
const intialState = {
    expenseList: [],
    totalExpense: 0,
}
const ExpenseContext = createContext(intialState)

const ExpenseProvider = ({ children }) => {
    const [state, dispatch] = useReducer(expenseReducer, intialState);
    const addExpense = (expense) => {
        dispatch({
            type: 'ADD EXPENSE',
            payload: expense
        })
    }
    return (
        <ExpenseContext.Provider value={[ state, addExpense, dispatch ]}>
            {children}
        </ExpenseContext.Provider>
    )
}

export { ExpenseContext, ExpenseProvider }