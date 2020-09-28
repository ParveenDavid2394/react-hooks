/*
    useCallback Hook Example

        - we use memo in each of the child component to avoid any unnecessary re-renders unless the props of each child component has changed a.k.a perfomance optimization
        - memo is not related to useCallback hook

        problem:
            even with memo, the unaffected button still renders after every change in state.
            for example when age is incremented, the salary button is rendered though it is not affected.

            this is because the incrementSalary function is created each time this Parent component renders.

        to solve this, we use useCallback hook

        what is useCallback hook?
            - hook that will return a memoized version of the callback function that only changes if one of the dependencies has changed
            - the hook will cache the incrementSalary function and return it if the salary is not changed. if it does change then it will return a new function

        why use useCallback hook?
            - useful when passing callbacks to optimised child components that rely on reference equality to prevent unnecessary renders

        how does it work?
            - it will take the function as a parameter and dependency item in a list
            - when the dependency changes, then it will return a new function
*/


import React, {useState, useCallback} from 'react'
import Button from './Button'
import Count from './Count'
import Title from './Title'

function ParentComponent(props){

    const [age, setAge] = useState(25)
    const [salary, setSalary] = useState(50000)

    const incrementAge = useCallback(() =>{
        setAge(prevAge => prevAge + 1)
    },[age])

    const incrementSalary = useCallback(() =>{
        setSalary(prevSalary => prevSalary + 1000)
    }, [salary])

    return(
        <div>
            <Title/>
            <Count text='age' count={age} />
            <Button handleClick={incrementAge} >Increment Age</Button>
            <Count text='salary' count={salary} />
            <Button handleClick={incrementSalary} >Increment Salary</Button>
        </div>
    )
}

export default ParentComponent