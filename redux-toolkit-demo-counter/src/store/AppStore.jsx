import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialValue = {counter:0,showCounter:true}

const counterSlice = createSlice({
    name:"counterSlice",
    initialState:initialValue,
    reducers:{
        increment(state){
            state.counter++
        },
        decrement(state){
            state.counter--
        },

        increse(state,action){
            state.counter=state.counter+action.payload
        },

        toggleCounter(state){
            state.showCounter=!state.showCounter
        },
        resetCounter(state){
            state.counter=0
        }
    }
})



const store = configureStore({
    reducer:counterSlice.reducer
})

export const counterActions = counterSlice.actions;

export default store;