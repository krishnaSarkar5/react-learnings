import React, { useContext, useState } from 'react'
import classes from './Checkout.module.css'
import TextField from '../UI/TextField';
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import useHttp from '../../hooks/use-http';
import { ORDER_POST_API } from '../../utility/ExternalApi';
import { Loader } from 'rsuite';
import CartContext from '../../store/cart-store';

const Checkout = (props) => {

    const [isSubmitted,setIsSubmitted] = useState(false)

   const cartCtx =  useContext(CartContext);

   const {data, loading, error, get, post} = useHttp();

    const confirmHandler = (values) => {
       
        setIsSubmitted(true);

        console.log(values)

        const orderDetails = {
            shippingAddress : values,
            order:{
                items: cartCtx.items,
                totalPrice:cartCtx.totalAmount
            }
        }

        cartCtx.items=[];
        cartCtx.totalAmount=0;

        post(ORDER_POST_API,orderDetails)
      };

      const validation = Yup.object({
        name:Yup.string().required("Name is required"),
        street:Yup.string().required("Street Name is required"),
        postal:Yup.string().required("Postal Code is required"),
        city:Yup.string().required("City is required")
    })


      const initialValues = {
        name:"",
        street:"",
        postal:"",
        city:""
    }

    let displayContent;

    


    const formContent =   <Formik
    initialValues={initialValues}
    validationSchema={validation}
    onSubmit={confirmHandler}
>
    {
        formik=>(
            <Form>
                <TextField label="Name" type="text" name="name" id="name" />

                <TextField label="Street" type="text" name="street" id="street" />

                <TextField label="Postal Code" type="text" name="postal" id="postal" />

                <TextField label="City" type="text" name="city" id="city" />
           
                <div className={classes.actions}>
                    <button type='button' onClick={props.onCancel}>
                        Cancel
                    </button>
                    <button className={classes.submit} type='submit' disabled={!formik.isValid || !formik.dirty}>Confirm</button>
                </div>
           
            </Form>
        )
    }

</Formik>



    if(loading){
        displayContent = <Loader size="lg" style={{display:"flex",justifyContent:"center",alignItems:"center"}}/>;
    }

    if(error){
        displayContent = <div>Error: {error.message}</div>;
    }

    if(!isSubmitted){
        displayContent = formContent;
    }

    if(data){
        displayContent = <div className={classes['order-placed']}>Order Placed Successfully !!!</div>;
    }

  return (

    <>
        {displayContent}
    </>

//     <form className={classes.form} onSubmit={confirmHandler}>
//     {/* <div className={classes.control}>
//       <label htmlFor='name'>Your Name</label>
//       <input type='text' id='name' />
//     </div> */}



//     {/* <div className={classes.control}>
//       <label htmlFor='street'>Street</label>
//       <input type='text' id='street' />
//     </div> */}
//     {/* <div className={classes.control}>
//       <label htmlFor='postal'>Postal Code</label>
//       <input type='text' id='postal' />
//     </div> */}
//     {/* <div className={classes.control}>
//       <label htmlFor='city'>City</label>
//       <input type='text' id='city' />
//     </div> */}

   

   
//   </form>
  )
}

export default Checkout