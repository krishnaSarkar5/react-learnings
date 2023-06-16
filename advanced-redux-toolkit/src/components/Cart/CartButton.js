import { useDispatch } from 'react-redux';
import classes from './CartButton.module.css';
import { uiActions } from '../../store/ui-slice';
import { useSelector } from 'react-redux';


const CartButton = (props) => {

  const items = useSelector(state=>state.cart.items);

  const length = items.reduce((total,item)=>total+item.amount,0)

  const dispatch = useDispatch();

  const showCartHandler=()=>{
    dispatch(uiActions.toggleShowCart())
  }



  return (
    <button className={classes.button} onClick={showCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{length}</span>
    </button>
  );
};

export default CartButton;
