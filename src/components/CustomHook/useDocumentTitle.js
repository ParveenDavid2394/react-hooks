// useDocumentTitle is a custom hook that has the logic of displaying in the document title
// contains only logic and no JSX

import {useEffect} from 'react'

function useDocumentTitle(count){
    
    useEffect(() => {
        document.title = `Count ${count}`
    }, [count])

}

export default useDocumentTitle