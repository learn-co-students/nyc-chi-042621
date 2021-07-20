import React, { Component } from 'react'
import {connect} from 'react-redux'

class AddSnackToPantryForm extends Component {

    state = {
        snack_id: (this.props.snacks[0] && this.props.snacks[0].id) || 0 ,
        pantry_id: (this.props.pantries[0] && this.props.pantries[0].id) || 0,
    }


    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch("http://localhost:3000/snack_pantries", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(this.state)
        })
            .then(res => res.json())
            .then((sp) => {
                this.props.addSnackToParticularPantry(sp)
            })
    }


    render() {
        console.log(this.state)
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="snack">Snack</label>
                <select id="snack" name="snack_id" onChange={this.handleChange} value={this.state.snack_id}>
                    {this.props.snacks.map(snack => <option key={snack.id} value={snack.id}>{snack.name}</option>)}
                </select>
                <label htmlFor="pantry">Pantry</label>
                <select id="pantry" name="pantry_id" onChange={this.handleChange} value={this.state.pantry_id}>
                    {this.props.pantries.map(pantry => <option key={pantry.id} value={pantry.id}>{pantry.name}</option>)}
                </select>
                <input type="submit" value="Add Snack"/>
            </form>
        )
    }
}

let mstp = (globalState) => {
    return {
        snacks: globalState.snackInfo.snacks,
        pantries: globalState.userInfo.pantries
    }
}


let addSnackToParticularPantry = (snackPantry) => {
    return {
        type: "ADD_SNACK_TO_PANTRY",
        payload: snackPantry
    }
}


export default connect(mstp, {addSnackToParticularPantry})(AddSnackToPantryForm)
