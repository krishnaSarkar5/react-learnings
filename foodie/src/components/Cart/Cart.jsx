import {React,useContext} from 'react'
import classes from './Cart.module.css'
import Modal from '../UI/Modal';
import CartContext from '../../store/cart-store';
import CartItem from './CartItem';

const Cart = (props) => {

   const cartCtx = useContext(CartContext);

   const totalAmount =  `₹${cartCtx.totalAmount.toFixed(2)}`

   const hasItem = cartCtx.items.length > 0

   const cartItemRemoveHandler = (id)=>{cartCtx.removeItem(id)};

   const cartItemAddHandler = (item)=>{cartCtx.addItem(item)}

    const cartItems = <ul className={classes['cart-items']}>
        {cartCtx.items.map((item)=>{
           return <CartItem 
           key={item.id} 
           name={item.name} a
           amount={item.amount} 
           price={item.price}
           onRemove = {cartItemRemoveHandler.bind(null,item.id)}
           onAdd={cartItemAddHandler.bind(null,{...item,amount:1})}
           />
    })}
    </ul>;

  return (
    <Modal onClose={props.onClose}>
        {cartItems}
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>{totalAmount}</span>
        </div>
        <div className={classes.actions}>
          <button className={classes['button-alt']} onClick={props.onClose}>Close</button>
          {hasItem && <button className={classes.button} onClick={()=>{console.log("order placed ",{items:cartCtx.items,price:cartCtx.totalAmount})}}>Order</button>}
        </div>
    </Modal>
  )
}

export default Cart