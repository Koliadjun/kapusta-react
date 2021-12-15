import { createAsyncThunk } from '@reduxjs/toolkit'

import * as transactionAPI from 'services/transactionAPI'
const getAllTransaction = createAsyncThunk(
    'transaction/getAll',
    async (_, thunkAPI) => {
        try {
            const response = await transactionAPI.fetchAllTransaction()
            return response.data.transactions
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

const operations = {
    getAllTransaction,


};
export default operations;