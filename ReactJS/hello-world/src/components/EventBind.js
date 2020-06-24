import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            message: 'Hello'
        }

        // Corresponds to approach 3 
        // this.clickHandler = this.clickHandler.bind(this)
    }

    // clickHandler() {
    //     this.setState({
    //         message: 'Goodbye'
    //     }) 
    // }
    
    // Corresponds to approach 4
    clickHandler = () => {
        this.setState({
            message: 'GoodBye'
        })
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* Approach 1 */}
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
                
                {/* Approach 2 */}
                {/* <button onClick={() => this.clickHandler()}>Click</button> */}
              
                {/* Approach 3 binding in constructor - More preferable*/}
                {/* <button onClick={this.clickHandler}>Click</button> */}
                
                {/* Approach 4 */}
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default EventBind
