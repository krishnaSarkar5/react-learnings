import { createSlice } from "@reduxjs/toolkit"

const intialState = {items:[],totalAmount:0}


const cartSlice = createSlice({
    name:"cartSlice",
    initialState:intialState,
    reducers:{
        addItem(state,action){

            const existedItems = [...state.items]

           const existedItemIndex = existedItems.findIndex((item)=>item.id===action.payload.id);

           const existedItem = existedItems[existedItemIndex];

           if(existedItem){
            let updatedItem = {...existedItem,amount:existedItem.amount+1};
            existedItems[existedItemIndex]=updatedItem;
            let updatedTotalAmount = state.totalAmount+ action.payload.price;
            state.totalAmount=updatedTotalAmount;
            state.items=existedItems;
            return;
           }else{

            let updatedTotalAmount = state.totalAmount+ action.payload.price;
            state.totalAmount=updatedTotalAmount;
            state.items=state.items.concat([action.payload])
            return;
           }

        //    console.log(action.payload)
        //     state.items=state.items.concat([action.payload])
        },

        removeItem(state,action){

            const existedItems = [...state.items];
            const existedItemIndex = existedItems.findIndex((item)=>item.id===action.payload)

            const exitedItem = existedItems[existedItemIndex];

            if(exitedItem && exitedItem.amount>1){
                let updatedItem = {...exitedItem,amount:exitedItem.amount-1};
                let updatedTotalAmount = state.totalAmount-exitedItem.price;
                existedItems[existedItemIndex]=updatedItem
                state.items=existedItems
                state.totalAmount=updatedTotalAmount;
                return
            }else if(exitedItem && exitedItem.amount===1){
               const updatedItems = state.items.filter(item=>item.id!==action.payload)
               let updatedTotalAmount = state.totalAmount-exitedItem.price;
               state.items = updatedItems;
               state.totalAmount=updatedTotalAmount;
                return
            }
            

        },
        test(state,action){
            console.log("test",action.payload)
            state.items=state.items.concat([action.payload])
        }
    }

})


export const cartActions = cartSlice.actions;

export default cartSlice;