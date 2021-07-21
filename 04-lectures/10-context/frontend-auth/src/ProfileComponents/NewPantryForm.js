import React, { Component } from 'react'

export default class NewPantryForm extends Component {

    state = {
        name: ""
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }   

    handleSubmit = (e) => {
        e.preventDefault()

        fetch("http://localhost:3000/pantries", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "authorization": this.props.token
            },
            body: JSON.stringify({
                name: this.state.name
            })
        })
            .then(res => res.json())
            .then((pantry) => {
                if(pantry.id){
                    this.props.addPantry(pantry)
                }
            })
  
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" value={this.state.name} onChange={this.handleInput} />
                <input type="submit" value="Create new Pantry" />
            </form>
        )
    }
}
