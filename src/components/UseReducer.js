/*
    useReducer
        - is a hook used for state management
        - alternative to useState
        - useState is built using useReducer
    syntax:
        useReducer(reducer, initialState)
        newState = reducer(currentState, action)
    
        - useReducer returns a pair of values. [newState, dispatch]
    
*/

// example of useReducer with simple state and simple action
import React, {useReducer} from 'react'

const initialState = 0
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state;
    }
}

function UseReducer(props){

    const [count, dispatch] = useReducer(reducer, initialState)

    return(
        <div>
            <h2>{count}</h2>
            <button onClick={()=> dispatch('increment')}>Increment</button>
            <button onClick={() => dispatch('decrement')}>Decrement</button>
            <button onClick={() => dispatch('reset')}>Reset</button>
        </div>
    )
}

export default UseReducer