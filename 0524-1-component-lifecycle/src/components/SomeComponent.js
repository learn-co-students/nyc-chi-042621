import React, { Component } from 'react'

export default class SomeComponent extends Component {

    componentDidMount(){
        console.log("Hello from SomeComponent")
    }

    componentWillUnmount(){
        console.log("Goodbye from SomeComponent")
    }

    render() {
        return (
            <h2>
                {this.props.thingy}            
            </h2>
        )
    }
    
}
