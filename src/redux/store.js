import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
    persistStore,
    persistReducer,
    // FLUSH,
    // REHYDRATE,
    // PAUSE,
    // PERSIST,
    // PURGE,
    // REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import transactionReducer from 'redux/transaction/transaction-reducer';
import authReducer from 'redux/authorization/authorization-slice';
// const middleware = [
//     ...getDefaultMiddleware({
//         serializableCheck: {
//             ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//         },
//     }),
// ];
const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
};

export const store = configureStore({
    reducer: {
        // transaction: transactionReducer,
        auth: persistReducer(authPersistConfig, authReducer),
    },
    // middleware,
    // devTools: process.env.NODE_ENV !== 'production',
});
export const persistor = persistStore(store);