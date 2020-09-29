// mainly used to target DOM elements, used to focus on an element
// 

import React, {useEffect, useRef} from 'react'

function UseRef(props){

    const inputRef = useRef(null)

    useEffect(()=>{
        // focus on input element
        inputRef.current.focus()
    }, [])

    return(
        <div>
            <input ref={inputRef} type="text"/>
        </div>
    )
}

export default UseRef