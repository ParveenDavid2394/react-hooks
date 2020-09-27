import React, {Component} from 'react'

class IntervalClassCounter extends Component{

    constructor(props){
        super()

        this.state = {
            count:0
        }
    }

    componentDidMount(){
        // create timer
        this.interval = setInterval(this.tick, 1000)
    }

    componentWillUnmount(){
        clearInterval(this.interval)
    }

    tick = () =>{
        this.setState(prevState =>({
            count: prevState.count + 1
        }))
    }

    render(){
        return(
            <div>
                <h2>{this.state.count}</h2>
            </div>
        )
    }
}

export default IntervalClassCounter