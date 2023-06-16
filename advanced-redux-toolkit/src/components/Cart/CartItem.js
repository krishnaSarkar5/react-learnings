import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';

const CartItem = (props) => {
  // const { title, quantity, total, price } = props.item;

  const item = props.item;
  const totalAmount = props.totalAmount;

  const dispatch = useDispatch();


  const addItemHandler = ()=>{
    dispatch(cartActions.addItem({id:item.id,title:item.title,price:item.price,description:item.description,amount:1}))
  }

  const removeItemHandler = ()=>{
    dispatch(cartActions.removeItem(item.id))
  }


  return (  
     
       <li key = {item.id} className={classes.item}>
      <header>
        <h3>{item.title}</h3>
        <div className={classes.price}>
          ${totalAmount.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${item.price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{item.amount}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemHandler}>-</button>
          <button onClick={addItemHandler}>+</button>
        </div>
      </div>
    </li>
   
  );
};

export default CartItem;
