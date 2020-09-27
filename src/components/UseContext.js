// useContext hook is a simpler way to use regular Context
// useContext impacts more on the consumer side. Making it simpler
// creating and passing a value in the context remains the same

import React, { useContext} from 'react'
import {UserContext, ChannelContext} from '../App'

function UseContext(props){

    // useContext grabs the values passed
    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)
    
    return(
        <div>
            {user} - {channel}
        </div>
    )

}

export default UseContext