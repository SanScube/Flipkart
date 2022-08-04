import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import cartReducer from "./cartSlice"
import loginReducer from "./loginSlice"

const store = configureStore({
    reducer: {
        cart: cartReducer,
        user: loginReducer,
    }
})

export default store;