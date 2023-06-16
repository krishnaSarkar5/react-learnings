import { createStore } from "redux";


const counterReducer = (state={counter:0},action)=>{

    if(action.type==='increment'){
      
        // state.counter=state.counter+1;
        const newState =  { ...state, counter: state.counter + action.amount }
        console.log("incrementing in store",state.counter)
        return newState;
    }

    else if(action.type==='decrement'){
       
        const newState =  { ...state, counter: state.counter - + action.amount }
        console.log("decrementing in store",state.counter)
        return newState;
    }

    return state;

}



const store = createStore(counterReducer)

export default store;