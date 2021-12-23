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
const addOneTransaction = createAsyncThunk(
    'transaction/addOne',
    async (payload, thunkAPI) => {
        console.log(payload)
        try {
            const response = await transactionAPI.addTransaction(payload)

            return response.data.result
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)
const removeOneTransaction = createAsyncThunk(
    'transaction/removeOne',
    async (payload, thunkAPI) => {
        try {
            await transactionAPI.deleteTransactionById(payload)
            return payload
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)
const setDate = createAction('Set_date');

const operations = {
    getAllTransaction,
    addOneTransaction,
    removeOneTransaction,
    setDate

};
export default operations;