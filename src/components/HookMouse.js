/*
    Example against ClassMouse where useEffect runs only once
*/

import React, {useState, useEffect} from 'react'

function HookMouse(props){

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = e => {
        console.log('logMousePosition called')
        setX(e.clientX)
        setY(e.clientY)
    }

    // useEffect will run only once because of the empty array condition
    // function that useEffect returns will work like componentWillUnmount
    // it will clean up any event listeners or subscriptions that the component has
    useEffect(() =>{
        console.log('useEffect called')
        window.addEventListener('mousemove', logMousePosition)

        return () => {
            console.log('Component Unmounting..Cleaning up...')
            window.removeEventListener('mousemove', logMousePosition)
        }
    },[])

    return(
        <div>
            X : {x}     Y : {y}
        </div>
    )
}

export default HookMouse