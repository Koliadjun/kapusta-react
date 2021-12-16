const { createSlice } = require("@reduxjs/toolkit");
const { transactionOperations } = require('redux/transaction');


const initialState = {
    transaction: [],
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
    }
})
export default transactionSlice.reducer;