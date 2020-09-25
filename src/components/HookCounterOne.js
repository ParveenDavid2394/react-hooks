/*
    Here we will see the power of useEffect hooks
    - allows to perform side effects in functional components
    - close replacement for componentDidMount, componentDidUpdate and componentWillUnmount
    - takes in a function as an argument
    - executes the function after every time render method is executed
    - can add condition for executing the function only on certain conditions
*/

import React, {useState, useEffect} from 'react'

function HookCounterOne(props){

    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    // useEffect executes everytime after every single render method takes place
    // second argument works as an condition, only if the value of state or props in second argument changes between renders, only then the useEffect will execute
    useEffect(()=>{
        console.log("entering in input text")
        document.title = `Clicked ${count} times`
    }, [count])

    return(
        <div>
            <input type="text" value={name} onChange={e => setName(e.target.value)}/>
            <button onClick={()=> setCount(count +1)}>Clicked {count} times </button>
        </div>
    )
}

export default HookCounterOne