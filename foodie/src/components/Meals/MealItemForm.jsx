import {React,useContext,useRef,useState} from 'react'
import classes from './MealItemForm.module.css'
import Input from '../UI/Input'
import CartContext from '../../store/cart-store'

const MealItemForm = (props) => {

  const cartCtx = useContext(CartContext);

    const [isAmountValid,setIsAmountValid] = useState(true);


    const amountInputRef = useRef();


    const submitHandler = (event)=>{
        event.preventDefault();

        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        const exixtedIteIndex = cartCtx.items.findIndex(item=>item.id===props.itemId);

        const existedItem = cartCtx.items[exixtedIteIndex];

        let previousAmount = 0;

        console.log(existedItem)

        if(existedItem){
          previousAmount = existedItem.amount;
        }

        if(enteredAmount.trim().length === 0 ||
          enteredAmountNumber < 1 ||
          enteredAmountNumber > 5 || ((+previousAmount)+(+enteredAmount))>5){
            setIsAmountValid(false);
            return;
          }
          props.onAddToCart(enteredAmountNumber)
    }


  return (
    <form className={classes.form} onSubmit={submitHandler}>
        <Input 
        ref={amountInputRef}
         label="Amount" 
         input={{id:'amount',
                type:"number",
                // min:'1',
                // max:'5',
                step:'1',
                defaultValue:'1'}} />
        <button>+ Add</button>
        {!isAmountValid && <p>Amount of items should between 1 to 5</p>}
   </form>
  )
}

export default MealItemForm