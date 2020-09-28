/*
    can use useReducer and useContext when sharing state with nested components

    now we need to share state from App.js to use in component A, D and F

    we use useReducer where we create the context and use useContext where we need to receive the context

    A - B - C
        |   |
        D   E
            |
            F

*/

import React,{useContext} from 'react'
import { CountContext } from '../../App'

function ComponentA(props){

    const countContext = useContext(CountContext)

    return(
        <div>
            <h2>Component A</h2>
            <button onClick={() => countContext.countDispatch('increment')}>Increment</button>
            <button onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
            <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
        </div>
    )
}

export default ComponentA