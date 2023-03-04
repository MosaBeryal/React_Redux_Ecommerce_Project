import { createSlice } from "@reduxjs/toolkit";
const initialState=[];
const cartSlice=createSlice({
    name:'cart',
    initialState,
    // Reducers are pure function which is used to mutate the state.
    //Reducers are pure function which have no side effect, and don't change the data out of the function.
    reducers:{
        //Reducers have two paramater one is state and another is actions
        //state is the current state which we are using currently
        add(state,action)
        {
            // state is the state which is decleared obove 
            //we mutate the state directly 
            //Redux we don't have to mutate the function directly
            //Redux toolkit allow us to mutate the state 
            state.push(action.payload)
        }
    }
});
export const {add}=cartSlice.actions;
export default cartSlice.reducer;