/*
    This will be used against how useEffect hooks works
*/

import React, {Component} from 'react'

class ClassCounterOne extends Component{

    constructor(props){
        super()

        this.state = {
            count:0,
            name:''
        }
    }

    componentDidMount(){
        document.title = `Clicked ${this.state.count} times`
    }

    componentDidUpdate(prevProps, prevState){
        if (prevState.count !== this.state.count) {
            console.log('Updating document file')
        }
        document.title = `Clicked ${this.state.count} times`
    }

    render(){
        return(
            <div>
                <input type="text" 
                value={this.state.name} 
                onChange={e =>{
                    this.setState({name: e.target.value}) } }
                />

                <button onClick={()=> this.setState({count: this.state.count +1 })}>
                    Clicked {this.state.count} times 
                </button>
            </div>
        )
    }
}

export default ClassCounterOne