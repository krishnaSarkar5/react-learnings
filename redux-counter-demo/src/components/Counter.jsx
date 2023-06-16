import React, { useEffect } from 'react'
import { useSelector ,useDispatch} from 'react-redux'

const Counter = () => {

  const counter =   useSelector(state=>state.counter)
  const dispatch =  useDispatch();
  

  const decrementHandler = ()=>{
    console.log("decrementing")
        dispatch({type:"decrement",amount:3})
  }

  const increamentHandler = ()=>{
    console.log("incrementing")
        dispatch({type:"increment",amount:2})
  }


  return (
    <div style={{display:"flex",justifyContent:"center"}}>
        <div>
            <h1 >{counter}</h1>
                <div style={{display:"flex"}}>
            
                <button onClick={decrementHandler}>-</button>
                <button onClick={increamentHandler}>+</button>
            </div>
        </div>
    </div>
  )
}

export default Counter