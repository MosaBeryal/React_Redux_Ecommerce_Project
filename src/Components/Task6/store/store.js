import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice'
import productReducer from './fetchDataSlice'
const store = configureStore({
    reducer:{
        cart:cartReducer,
        productData : productReducer



    }
})
export default store;