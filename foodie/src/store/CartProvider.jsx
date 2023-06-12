import React from 'react'
import CartContext  from './cart-store'
import { useReducer } from 'react'

const defaultCartState = {
    items:[],
    totalAmount:0
}


const cartReducer = (state,action)=>{

    if(action.type==='ADD'){
       
        const updatedTotalAmounts = state.totalAmount+action.item.price * action.item.amount;  
        
        const existedCartItemIndex = state.items.findIndex(item=>item.id===action.item.id);


        const existedCartItem = state.items[existedCartItemIndex];
        let updatedItems;
        if(existedCartItem){
            let updatedItem = {...existedCartItem,amount:existedCartItem.amount+action.item.amount};
            updatedItems = [...state.items];
            updatedItems[existedCartItemIndex]=updatedItem;

        }else{
            updatedItems = [...state.items].concat(action.item)
        }


        return {items:updatedItems,totalAmount:updatedTotalAmounts}
    }
    else if(action.type==='REMOVE'){
        const existedItemIndex = state.items.findIndex(item=>item.id===action.id);
        const existedItem = state.items[existedItemIndex];
        const updatedTotalAmounts = state.totalAmount - existedItem.price * 1;  
        
        
        let updatedItems;
        if(existedItem.amount>1){
            let updatedItem = {...existedItem,amount:existedItem.amount-1}
             updatedItems = [...state.items]
             updatedItems[existedItemIndex]=updatedItem
        }else{
            updatedItems = state.items.filter(item=>item.id!==action.id);
        }

        return {items:updatedItems,totalAmount:updatedTotalAmounts}
    }


    return defaultCartState;

}


const CartProvider = (props) => {

    const [cartState,dispatchCartAction] = useReducer(cartReducer,defaultCartState);

    const addItemHandler = (item)=>{dispatchCartAction({type:'ADD',item:item})}
    const removeItemHandler = (id)=>{dispatchCartAction({type:'REMOVE',id:id})}

    const cartContext = {
        items:cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler
    }


  return (
    <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider