/*
    useState with objects
        - problem is useState will not merge and update objects
        - thus when editing firstname, lastname will be hidden and vice versa
        - so have to merge to state manually
        - pass in ...rest operator when using setName
*/

import React, {useState} from 'react'

function HookCounterThree(props){

    // destructure name and setName from useState
    // instead of numeric, we use objects inside useState
    const [name, setName] = useState({firstName:'', lastName:''})

    return(
        <div>
            <input type="text" 
                value={name.firstName} 
                onChange={e => setName({
                    ...name,
                    firstName: e.target.value
                })} 
            />
            <input type="text"
                value={name.lastName}
                onChange={e => setName({
                    ...name,
                    lastName: e.target.value
                })}
            />
            <h2>Your first name is {name.firstName} and last name is {name.lastName}</h2>
        </div>
    )
}

export default HookCounterThree
