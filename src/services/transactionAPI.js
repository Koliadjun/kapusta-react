import axios from 'axios';

axios.defaults.baseURL = 'https://kapusta-api-iteam.herokuapp.com/api';

// axios.defaults.baseURL = 'http://localhost:5000/api';

export async function fetchAllTransaction() {
    const { data } = await axios.get(`/transactions`);
    return data;
}

export async function addTransaction(incomeData) {
    const { data } = await axios.post(`/transactions/income`, incomeData);
    return data;
}
export async function deleteTransactionById(transactionId) {
    await axios.delete(`/transaction/${transactionId}`);
}

export async function registerUser(formData) {
    const { data } = await axios.post(`/auth/registration`, formData);
    return data;
}

export async function logInUser(formData) {
    const { data } = await axios.post(`/auth/login`, formData);
    return data;
}

export async function logOutUser() {
    const { data } = await axios.get(`/auth/logout`);
    return data;
}

export async function refreshCurrUser() {
    const { data } = await axios.get(`/auth/current`);
    return data;
}
export const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    },
};