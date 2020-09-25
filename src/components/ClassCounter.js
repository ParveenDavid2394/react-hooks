/*
    So far we know if we need to use state we have to use a Class component. Now we dont have to do that. With hooks we can use state without a class component

    this example shows the code in class component then later we will have the same functionality using hooks 
*/

import React,{ Component } from 'react'

class ClassCounter extends Component{

    constructor(props){
        super()

        this.state = {
            count:0
        }
    }

    incrementCount = () =>{
        this.setState(prevState => {
            return {count: prevState.count + 1} 
        })
    }

    render(){
        
        return(
            <div>
                <h2>Count {this.state.count}</h2>
                <button onClick={this.incrementCount}>Click</button>
            </div>
        )
    }

}

export default ClassCounter
