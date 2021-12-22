import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
    persistStore,
    persistReducer,

} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// import authReducer from 'redux/authorization/authorization-slice';
import transactionReducer from 'redux/transaction/transaction-slice'
import { authReducer } from './auth';
// import transactionReducer from 'redux/transaction/transaction-slice'
const middleware = [
    ...getDefaultMiddleware({
        serializableCheck: false
    }),
];
const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
};

export const store = configureStore({
    reducer: {
        transaction: transactionReducer,
        auth: persistReducer(authPersistConfig, authReducer),
    },
    middleware,
    devTools: process.env.NODE_ENV !== 'production',
});
export const persistor = persistStore(store);