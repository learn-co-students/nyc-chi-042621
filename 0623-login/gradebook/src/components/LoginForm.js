import React, { Component } from 'react'

export default class LoginForm extends Component {

    state = {
        username: "",
        password: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch("http://localhost:9393/login", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            })
        })
        .then(res => res.json())
        .then((potentialTeacher) => {
            if(potentialTeacher.error){
                alert(potentialTeacher.error)
            } else {
                this.props.setUser(potentialTeacher)
            }
        })

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" value={this.state.username} onChange={this.handleChange}/>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                <input type="submit" value="Login"/>
            </form>
        )
    }
}
