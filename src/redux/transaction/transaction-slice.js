const { createSlice } = require("@reduxjs/toolkit");
const { transactionOperations } = require('redux/transaction');


const initialState = {
    transaction: [],
    date: new Date(),
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
        [transactionOperations.addOneTransaction.fulfilled](state, { payload }) {
            state.transaction = [...state.transaction, payload]
            state.error = null
        },
        [transactionOperations.addOneTransaction.rejected](state, { payload }) {
            state.error = payload;
        },
        [transactionOperations.removeOneTransaction.fulfilled](state, { payload }) {
            state.transaction = state.transaction.filter(({ _id }) => _id !== payload)
            state.error = null
        },
        [transactionOperations.removeOneTransaction.rejected](state, { payload }) {
            state.error = payload;
        },

    }
})

export default transactionSlice.reducer;
export const { setDate } = transactionSlice.actions