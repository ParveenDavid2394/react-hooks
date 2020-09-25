/*
    Implementation of functionality of ClassCounter using hooks

    - to use state, need to utilise useState
    - useState allows to add state in a functional components
    - in classes, state is always an object, but with useState hook, the state does not have to be an object. It can be anything we initialise it to be
    - the useState hook returns an array with 2 elements
        1. current value of the state
        2. state setter function
        
    - when state setter function is called and state is changed, it will invoke the component to re-render
    - if new state value depends on the previous state value, then pass a function to a setter function with the previous state value as argument 
    - when dealing with objects and arrays, always make sure to spread state variable then call the setter function
*/

// need to import useState
import React, {useState} from 'react'

function HookCounter(props){

    // initialise count value in useState as argument
    const [count, setCount] = useState(0)

    return(
        <div>
            <h2>Count {count}</h2>
            <button onClick={ () => setCount(count + 1) }>Click</button>
        </div>
    )
}

export default HookCounter