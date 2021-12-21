import { createAsyncThunk } from '@reduxjs/toolkit'
import { element } from 'prop-types'

import * as transactionAPI from 'services/transactionAPI'
const getAllTransaction = createAsyncThunk(
    'transaction/getAll',
    async (_, thunkAPI) => {
        try {
            const response = await transactionAPI.fetchAllTransaction()
            const resultFunc = (response) => {
                const result = {
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
                }
                const income = response.filter(element => !element.negative)
                const spend = response.filter(element => element.negative)
                const spendCategory = []
                const incomeCategory = []
                console.log('res', spendCategory, incomeCategory)
                for (let i = 0; i < 12; i++) {
                    result.summary.income[i] = income.filter(element => element.month === i + 1).reduce((previousValue, currentValue) => previousValue + parseInt(currentValue.sum), 0)
                }
                for (let i = 0; i < 12; i++) {
                    result.summary.spend[i] = spend.filter(element => element.month === i + 1).reduce((previousValue, currentValue) => previousValue + parseInt(currentValue.sum), 0)
                }
                for (let i = 0; i < 12; i++) {
                    spendCategory[i] = spend.filter(element => element.month === i + 1)
                }
                for (let i = 0; i < 12; i++) {
                    incomeCategory[i] = income.filter(element => element.month === i + 1)
                }
                spendCategory.forEach((element, index) => {
                    if (element.length !== 0) {
                        // result.reportData.income[element.month - 1]
                    }
                });
                console.log(result)
                result.transactions.income = [...income]
                result.transactions.spend = [...spend]
                return result
            }
            return resultFunc(response.data.transactions)
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)


const operations = {
    getAllTransaction,


};
export default operations;