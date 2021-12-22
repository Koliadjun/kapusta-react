import { createSlice } from "@reduxjs/toolkit";
import authOperations from "./auth-operations";

const initialState = {
  user: { name: null, email: null, avatarURL: null, initialBalance: null, balanceIsSet: null },
  error: null,
  token: null,
  isLoggedIn: false,
  isFetchingUser: false,
  isGoogled: false,
  isGooglingUser: false
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [authOperations.registration.pending]: (state, { payload }) => {
      state.isFetchingUser = true;
    },
    [authOperations.registration.fulfilled]: (state, { payload }) => {
      console.log(payload)
      state.user = payload;
      state.token = payload.token;
      state.isFetchingUser = false;
      state.isLoggedIn = true;
    },
    [authOperations.registration.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isFetchingUser = false;
    },
    [authOperations.logIn.pending]: (state, { payload }) => {
      state.isFetchingUser = true;
    },
    [authOperations.logIn.fulfilled]: (state, { payload }) => {
      state.user = payload;
      state.token = payload.token;
      state.isFetchingUser = false;
      state.isLoggedIn = true;
    },
    [authOperations.logIn.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isFetchingUser = false;
    },
    [authOperations.logOut.fulfilled]: (state, { payload }) => initialState,
    [authOperations.logOut.rejected]: (state, { payload }) =>
      (state.error = payload),
    [authOperations.fetchCurrentUser.pending]: (state, action) => {
      state.isFetchingUser = true;
    },
    [authOperations.fetchCurrentUser.fulfilled]: (state, { payload }) => {
      console.log(payload)
      if (!payload) {
        state.isFetchingUser = false;
        return
      } state.user = payload.userData;
      state.isLoggedIn = true;
      state.isFetchingUser = false;
    },
    [authOperations.fetchCurrentUser.rejected]: (state, action) => {
      state.isFetchingUser = false;
    },
    [authOperations.isGooglingUser.pending]: (state, { payload }) => {
      console.log(`authOperations.isGooglingUser.pending`, payload)
      state.isGooglingUser = true;
      state.isFetchingUser = false;
    },
    [authOperations.isGooglingUser.fulfilled]: (state, { payload }) => {
      console.log(`authOperations.isGooglingUser.fulfilled`, payload)

      state.user = payload.userData;
      state.token = payload.userData.token;
      state.isLoggedIn = true;
      state.isGoogled = true;
      state.isGooglingUser = false;
      state.isFetchingUser = false;
    },
    [authOperations.isGooglingUser.rejected]: (state, { payload }) => {
      console.log(`authOperations.isGooglingUser.rejected`, payload)
      state.error = payload;
      state.isGooglingUser = false;
      state.isFetchingUser = false;
    },
  },
});

export default authSlice.reducer;
