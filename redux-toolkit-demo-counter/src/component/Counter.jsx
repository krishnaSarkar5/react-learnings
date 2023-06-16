import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { counterActions } from '../store/AppStore'


const Counter = () => {

    const dispatch = useDispatch()
   const counter = useSelector(state=>state.counter);
   const showCounter = useSelector(state=>state.showCounter);

   const incrementHandler = ()=>{
    dispatch(counterActions.increment());
   }

   const decrementHandler = ()=>{
    dispatch( counterActions.decrement());
   }

   const increaseHandler = ()=>{
    dispatch(counterActions.increse(5));
   }


   const toggleHandler = ()=>{
    dispatch(counterActions.toggleCounter());
   }


   const resetHandler = ()=>{
    dispatch(counterActions.resetCounter());
   }

  return (
    <div style={{margin:"0 auto",width:"50%" }}>
        {showCounter && <h1 style={{textAlign:"center"}}>{counter}</h1>}

        <div style={{textAlign:"center"}}>
            <button onClick={incrementHandler}>Increment</button>
            <button onClick={decrementHandler}>Decrement</button>
            <button onClick={toggleHandler}>Toggole Counter</button>
            <button onClick={increaseHandler}>Increase By 5</button>
            <button onClick={resetHandler}>Reset Counter</button>
        </div>

    </div>
  )
}

export default Counter