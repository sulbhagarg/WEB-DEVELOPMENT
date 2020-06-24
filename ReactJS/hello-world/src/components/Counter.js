import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            count: 0
        }
    }
    
    increment() {
        // Never modify the state directly
        // Use setState method!
        // Callback functions holds importance!
        // this.setState({
        //     count: this.state.count + 1
        // }, () => {
        //     console.log('Callback Value' + this.state.count);
        // })

        // Solves the issue of incresing it to 5 times in oneclick
        // When you want to chnage the value on the basis of previous state
        this.setState((prevState => ({
            count: prevState.count + 1
        })))
    }

    // Still increases it one times
    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    render() {
        return (
            <div>
                <div>Count - {this.state.count}</div>
                <button onClick={() => this.incrementFive()}>Increment</button>
            </div>
        )
    }
}

export default Counter