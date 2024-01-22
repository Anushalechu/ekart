import { configureStore } from "@reduxjs/toolkit";
import wishListSlice from "./slices/wishListSlice";
import cartslices from "./slices/cartslices";

const store = configureStore({
    reducer: {
        wishlistReducer: wishListSlice,
        cartReducer:cartslices
    }
})

export default store