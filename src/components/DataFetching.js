import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DataFetching(props){

    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const [idFromButton, setIdFromButton] = useState(1)

    const clickHandler = () =>{
        setIdFromButton(id)
    }

    useEffect(() =>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButton}`)
        .then( res =>{
            console.log(res)
            setPost(res.data)
        })
        .catch( err => {
            console.log(err)
        })
    }, [idFromButton])

    return(
        <div>
            <input type="text" value={id} onChange={e => setId(e.target.value)}/>
            <button onClick={clickHandler}>Fetch Post</button>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </div>
    )
}

export default DataFetching