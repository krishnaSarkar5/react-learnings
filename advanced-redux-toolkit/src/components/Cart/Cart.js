import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';

const Cart = (props) => {

  const items = useSelector(state=>state.cart.items);
  const totalAmount = useSelector(state=>state.cart.totalAmount)



  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>

        {
          items.map(item=><CartItem key={item.id}
            item={item}  totalAmount={item.price*item.amount}
            // item={{ title: 'Test Item', quantity: 3, total: 18, price: 6 }}
          />)
        }

        
      </ul>
      
        <h3>Total Amount ${totalAmount}</h3>
     
    </Card>
  );
};

export default Cart;
