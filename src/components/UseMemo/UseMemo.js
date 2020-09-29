/*
    useCallback: Caches the provided function instance
    useMemo: Invokes the provided function & caches the result
*/

import React, {useState, useMemo} from 'react'

function UseMemo(){

    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, setCounterTwo] = useState(0)

    const incrementCounterOne = () =>{
        setCounterOne(prevCount => prevCount + 1)
    }

    const incrementCounterTwo = () => {
        setCounterTwo(prevCount => prevCount + 1)
    }

    const isEven = useMemo(() =>{
        let i = 0
        while ( i <2000000000) {
            i++
        }
        return counterOne % 2 === 0
    }, [counterOne])


    return(
        <div>
            <div>
                <button onClick={incrementCounterOne}>Increment Counter 1 - {counterOne}</button>
                <span>{ isEven ? 'Even' : 'Odd' }</span>
            </div>
            <div>
                <button onClick={incrementCounterTwo}>Increment Counter 2 - {counterTwo}</button>
            </div>
        </div>
    )
}

export default UseMemo