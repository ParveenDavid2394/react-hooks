/*
    useReducer
        - is a hook used for state management
        - alternative to useState
        - useState is built using useReducer
    syntax:
        useReducer(reducer, initialState)
        newState = reducer(currentState, action)
    
        - useReducer returns a pair of values. [newState, dispatch]

    useState vs useReducer
        1) useState
            - better option if need to manage primitive type of state like boolean, string or numbers
            - suitable for 1 or 2 state transitions
            - can use if the state transitions are not related
            - use if no business logic is involved
            - if need to keep local state, use useState

        2) useReducer
            - better option if need to manage objects or array types of state
            - better if there are more than 2 state transitions involved
            - if state transitions are related, then use useReducer
            - use when complex business logic needs to take place
            - if need to make state global, use useReducer
    
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