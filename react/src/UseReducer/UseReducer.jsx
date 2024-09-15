import React, { useReducer } from 'react'

const reducer = (state,action) => {
    console.log(state,action) ;
    if(action.type === 'incr'){
        return { count: state.count + 1};

    }else if (action.type === 'decr'){
        return { count: state.count - 1};
    }
    else{
        throw new Error('error')
    }

    }



const UseReducer = () => {

   const[state,dispatch] = useReducer(reducer,{count:0})

   //reducer (coffee maker )func
   //it is pure func
   //state(coffee powder) and action(water) 2argument 
   //new state (pure coffee)


   //pure func====>
    //10+10=20
   //no side effect


    const handleClickInc = ( ) => {
        dispatch({type:'incr'})
    };

    const handleClickDec = () => {
        dispatch({type:'decr'})
    }

  return (
    <div>
      
      <h1>Count: {state.count}</h1>
      <button onClick={handleClickInc}>+</button>
      <button onClick={handleClickDec}>-</button>

    </div>
  )
}

export default UseReducer
