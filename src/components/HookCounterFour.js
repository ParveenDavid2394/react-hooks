/*
    useState with arrays

    very similar to the case with objects
    
*/

import React, {useState} from 'react'

function HookCounterFour(props){

    // destructure items from useState
    // since we're working with arrays, we initlize an empty array
    const [items, setItems] = useState([])

    const addItem = () =>{
        setItems([...items, {
            id: items.length,
            value: Math.floor(Math.random() * 10) + 1
        }])
    }

    return(
        <div>
            <button onClick={addItem}>Add Item</button>
            <ul>
                {
                    items.map(item => (
                        <li key={item.id}>{item.value}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default HookCounterFour