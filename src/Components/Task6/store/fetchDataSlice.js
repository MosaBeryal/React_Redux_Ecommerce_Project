import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
const STATUSES=Object.freeze({
    idle:'idle',
    Error:"error",
    loading:"loading"

})

const fetchDataSlice=createSlice({

    name:"productData",
    initialState:{
        data:[],
        status:STATUSES.idle
    },
    reducers:{
        
    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchProducts.pending,(state,action)=>{
            state.status=STATUSES.loading;
        })
        .addCase(fetchProducts.fulfilled,(state,action)=>{
            state.data=action.payload
            state.status=STATUSES.idle
        })
        .addCase(fetchProducts.rejected,(state,action)=>{
             state.status=STATUSES.error
        }
        )
    
        
    }
})
// export const {setProducts,setStatus} =fetchDataSlice.actions;
export default fetchDataSlice.reducer;

export const fetchProducts=createAsyncThunk('products/fetch' ,()=>{
    return axios.get("https://fakestoreapi.com/products").then((response)=>response.data)
   
})
//? Requesting Api data
/* we can't request data in reducer because reducers are pure functions, and it call
it synchronusly it can't be asynchronus  */ 