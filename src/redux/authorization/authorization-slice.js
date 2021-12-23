const { createSlice } = require("@reduxjs/toolkit");
const { authOperations } = require('redux/authorization');


const initialState = {
    user: { email: null },
    token: null,
    isLoggedIn: false,
    isFetchingCurrentUser: false,
    error: null
}
const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [authOperations.loginUser.fulfilled](state, action) {
            state.user = action.payload.message;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },
        [authOperations.logoutUser.fulfilled](state) {
            state.user = { name: null, email: null };
            state.token = null;
            state.isLoggedIn = false;
        },
        [authOperations.registerUser.fulfilled](state, { payload }) {
            state.user = payload.user;
            state.token = payload.token;
            state.isLoggedIn = true;
        },
        [authOperations.refreshUser.fulfilled](state, action) {
            state.user = action.payload;
            state.isLoggedIn = true;
            state.isFetchingCurrUser = false;
        },
        [authOperations.refreshUser.pending](state) {
            state.isFetchingCurrUser = true;
        },
        [authOperations.loginUser.rejected](state, { payload }) {
            state.error = payload;
            state.isFetchingCurrUser = false;
        },
        [authOperations.registerUser.rejected](state, { payload }) {
            state.error = payload;
            state.isFetchingCurrUser = false;
        },
        [authOperations.refreshUser.rejected](state, { payload }) {
            state.error = payload;
            state.isFetchingCurrUser = false;
        },
        [authOperations.logoutUser.rejected](state, { payload }) {
            state.error = payload;
            state.isFetchingCurrUser = false;
        },

    }
})
export default authSlice.reducer;