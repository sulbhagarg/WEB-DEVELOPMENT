import React, { Component } from 'react'

class Welcome extends Component {
    render() {
        return (
            <h1>
                Welcome {this.props.name}! Your love is {this.props.love}
            </h1>
        )
    }
}

export default Welcome