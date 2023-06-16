import { createSlice } from "@reduxjs/toolkit";

const initialValue = {showCart:false}


const uiSlice = createSlice({
    name:"uiSlice",
    initialState:initialValue,
    reducers:{
        toggleShowCart(state){
            console.log("toggling");
            state.showCart=!state.showCart;
        }
    }
})

export const uiActions = uiSlice.actions;

export default uiSlice;