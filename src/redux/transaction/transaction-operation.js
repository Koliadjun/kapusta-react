import { createAsyncThunk, createAction } from '@reduxjs/toolkit'
import * as transactionAPI from 'services/transactionAPI'

const getAllTransaction = createAsyncThunk(
    'transaction/getAll',
    async (payload, thunkAPI) => {
        try {
            const response = await transactionAPI.fetchAllTransaction()
            return response.data.transactions
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)
const setDate = createAction('Set_date');

const operations = {
    getAllTransaction,
    setDate

};
export default operations;