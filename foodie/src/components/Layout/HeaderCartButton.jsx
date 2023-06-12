import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import CartContext from '../../store/cart-store';
import { useContext } from 'react';

const HeaderCartButton = (props) => {

  const cartCtx = useContext(CartContext);

  const totalItems = cartCtx.items.reduce((currentValue,item)=>{
    return currentValue+item.amount;
  },0)


  return (
    <button className={classes.button} onClick={props.onShow}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{totalItems}</span>
    </button>
  );
};

export default HeaderCartButton;