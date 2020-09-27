// will explain how useEffect plays a role similar to componentWillUnmount

import React, {useState} from 'react'
import HookMouse from './HookMouse'

function MouseContainer(props){

    const [display, setDisplay] = useState(true)

    return(
        <div>
            <button onClick={() => setDisplay(!display)}>Toggle Display</button>
            {
                display && <HookMouse />
            }
        </div>
    )
}