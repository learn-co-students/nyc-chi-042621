import React, { Component } from 'react'

export default class InputField extends Component {
    
    handleType = (evt) => {
        let whatUserTyped = evt.target.value
        this.props.changeWhatUserTyped(whatUserTyped)
        // How do you send the variable of `whatUserTyped` up to App?
        
    }
    
    render() {
        // console.log(this.props)
        return (
            <div>
                <label htmlFor="text">Type Here:</label>
                <input 
                    type="text" 
                    id="text" 
                    onChange={this.handleType}
                    value={this.props.whatUserTyped}
                />
            </div>
        )
    }
}
