const { createSlice } = require("@reduxjs/toolkit");
const { transactionOperations } = require('redux/transaction');


const initialState = {
    transaction: {
        transactions: {
            income: [],
            spend: [],
        },
        summary: {
            income: [],
            spend: [],
        },
        reportData: {
            income: [],
            spend: []
        }
    },
    date: {
        day: new Date().getUTCDate(),
        month: new Date().getUTCMonth() + 1,
        year: new Date().getUTCFullYear(),
    },
    error: null
}
const transactionSlice = createSlice({
    name: 'transaction',
    initialState,
    extraReducers: {
        [transactionOperations.getAllTransaction.fulfilled](state, action) {
            state.transaction = action.payload;
            state.error = null
        },
        [transactionOperations.getAllTransaction.rejected](state, { payload }) {
            state.error = payload;
        },
        [transactionOperations.setDate](state, action) {
            state.date = action.payload;
        },
    }
})

export default transactionSlice.reducer;
export const { setDate } = transactionSlice.actions