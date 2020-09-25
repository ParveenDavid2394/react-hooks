/*
    Implementation of functionality of ClassCounter using hooks

    - to use state, need to utilise useState
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