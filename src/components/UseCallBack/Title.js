import React from 'react'

function Title(props){
    console.log('Title rendering')
    return(
        <div>
            <h2>useCallback Hook</h2>
        </div>
    )
}

export default React.memo(Title)