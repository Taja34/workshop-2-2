import { configureStore } from '@reduxjs/toolkit';
import { burgerReducer } from '../reducers/receiptReducer'


const reducer = {
    recibo: burgerReducer
};
const store = configureStore({
    reducer,
});

export default store;