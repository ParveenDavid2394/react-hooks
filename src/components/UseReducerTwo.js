/*
    useReducer example with complex state and action  
*/

// example of useReducer with simple state and simple action
import React, { useReducer } from 'react'

const initialState = {
    firstCounter : 0,
    secondCounter : 10
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return {...state, firstCounter : state.firstCounter + action.value}
        case 'decrement':
            return {...state, firstCounter: state.firstCounter - action.value }
        case 'increment2':
            return { ...state, secondCounter: state.secondCounter + action.value }
        case 'decrement2':
            return { ...state, secondCounter: state.secondCounter - action.value }
        case 'reset':
            return initialState
        default:
            return state;
    }
}

function UseReducerTwo(props) {

    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <h2>First Counter = {count.firstCounter}</h2>
            <h2>Second Counter = {count.secondCounter}</h2>
            <button onClick={() => dispatch({ type: 'increment', value: 1 })}>Increment First Counter</button>
            <button onClick={() => dispatch({ type: 'decrement', value: 1 })}>Decrement First Counter</button>
            <button onClick={() => dispatch({ type: 'increment', value: 5 })}>Increment First Counter 5</button>
            <button onClick={() => dispatch({ type: 'decrement', value: 5 })}>Decrement First Counter 5</button>
            <div>
                <button onClick={() => dispatch({ type: 'increment2', value: 1 })}>Increment Second Counter</button>
                <button onClick={() => dispatch({ type: 'decrement2', value: 1 })}>Decrement Second Counter</button>
            </div>
            <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
        </div>
    )
}

export default UseReducerTwo