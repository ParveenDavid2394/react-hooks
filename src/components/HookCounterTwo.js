/*
    useState with previous state

    In the HookCounter we use the setCount to increase the count value
    e.g: setCount(count + 1) this is very dangerous.

    always use the previous state to alter the state
*/

import React, { useState, prevState} from 'react'

function HookCounterTwo(props){

    // set initial value
    const initialValue = 0
    
    // destructure useState with count and setCount
    const [count , setCount] = useState(initialValue)

    const incrementFive = () =>{
        for (let index = 0; index < 5; index++) {
            setCount( prevCount => prevCount + 1)
            
        }
    }

    return(
        <div>
            <h2>Count: {count} </h2>
            <button onClick={() => setCount(initialValue)} >Reset</button>
            <button onClick={() => setCount( prevCount => prevCount + 1)} >Increment</button>
            <button onClick={() => setCount( prevCount => prevCount - 1)} >Decrement</button>
            <button onClick={incrementFive}>Increment By Five</button>
        </div>
    )
}

export default HookCounterTwo