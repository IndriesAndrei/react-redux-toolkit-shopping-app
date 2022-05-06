import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './features/cart/cartSlice';
import modalReducer from './features/modal/modalSlice';

export const store = configureStore({
    // reducer will change our initial state with actions in the Slice (cartSlice)
    reducer: {
        cart: cartReducer,
        modal: modalReducer,
    },
});