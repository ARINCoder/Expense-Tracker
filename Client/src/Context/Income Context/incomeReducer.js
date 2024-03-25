//incomeReducer
//
const initialState = {
    IncomeList: [],
    totalIncome: 0,
};
const incomeReducer = (state, action) =>{
    switch(action.type){
        case 'ADD INCOME':
            if (!action.payload || !action.payload.amount) {
                throw new Error('Invalid Income payload: Missing amount property');
            }
        const newIncomeList = [ ...state.IncomeList, action.payload];
        const newTotalIncome = state.totalIncome + action.payload.amount;  
        return { ...state, IncomeList:newIncomeList, totalIncome:newTotalIncome}; 
        default:
            return state
    }
}
export default incomeReducer