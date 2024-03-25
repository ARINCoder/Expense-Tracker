//
const initialState = {
    expenseList: [],
    totalExpense: 0,
};
const expenseReducer = (state, action) =>{
    switch(action.type){
        case 'ADD EXPENSE':
            if (!action.payload || !action.payload.amount) {
                throw new Error('Invalid expense payload: Missing amount property');
            }
        const newExpenseList = [ ...state.expenseList, action.payload];
        const newTotalExpense = state.totalExpense + action.payload.amount;  
        return { ...state, expenseList:newExpenseList, totalExpense:newTotalExpense}; 
        default:
            return state
    }
}
export default expenseReducer