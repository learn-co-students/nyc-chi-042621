import React, {Component} from 'react'
import SnackContext from './snackContext'

// Provider -> Reducer
    // This is going to determine your Global State && How to change that global state
export default class SnackProvider extends Component {
    state = {
        snacks: [
            {id: 1, name: "Cheerios"},
            {id: 2, name: "Cocoa Puff"},
        ]
    }

    addSnack = (newSnack) => {
        this.setState({snacks: [...this.state.snacks, newSnack]})
    }

    render() {
        return (
            <SnackContext.Provider value={{
                snacks: this.state.snacks,
                addSnack: this.addSnack
            }}>
                {this.props.children}
            </SnackContext.Provider>
        )
    }
}
