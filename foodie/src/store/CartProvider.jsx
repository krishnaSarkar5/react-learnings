import React from 'react'
import CartContext  from './cart-store'
import { useReducer } from 'react'

const defaultCartState = {
    items:[],
    totalAmount:0
}


const cartReducer = (state,action)=>{

    if(action.type==='ADD'){
        const updatedItems = state.items.concat(action.item);
        const updatedTotalAmounts = state.totalAmount+action.item.price * state.totalAmount+action.amount;    
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