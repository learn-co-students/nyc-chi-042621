import React from 'react';
import Form from './components/Form'
import NavBar from './components/NavBar'
import Home from './components/Home'
import ProfileContainer from './ProfileComponents/ProfileContainer'

import {Switch, Route, withRouter, Redirect} from 'react-router-dom'


class App extends React.Component {

  state = {
    id: 0,
    username: "",
    pantries: [],
    token: "",
  }

  componentDidMount(){
    if(localStorage.token){

      fetch("http://localhost:3000/me", {
        headers: {
          "authorization": localStorage.token
        }
      })
        .then(res => res.json())
        .then(this.handleResponse)

    }
  }

  handleLoginSubmit = (userInfo) => {
    console.log("Login form has been submitted")

    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        username: userInfo.username,
        password: userInfo.password
      })
    })
    .then(res => res.json())
    .then(this.handleResponse)
  }


  handleRegisterSubmit = (userInfo) => {
    console.log("Register form has been submitted")

    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        username: userInfo.username,
        password: userInfo.password
      })
    })
      .then(res => res.json())
      .then(this.handleResponse)

  }


  addPantry = (pantry) => {
    this.setState({
      pantries: [...this.state.pantries, pantry]
    })
  }


  handleResponse = (resp) => {
    console.log(resp)
    if(resp.token){
      this.setState({
        username: resp.user.username,
        pantries: resp.user.pantries,
        token: resp.token
      })
      localStorage.token = resp.token

      this.props.history.push("/profile")
    } else {
      alert("Messed up")
    }
  }


  logOut = () => {
    this.setState({
      username: "",
      pantries: [],
      token: "",
      id: 0
    })
    localStorage.clear()

  }


  renderForm = (routerProps) => {
    if(routerProps.location.pathname === "/login"){
      return <Form
        formName="Login Form"
        handleSubmit={this.handleLoginSubmit}
      />
    } else if (routerProps.location.pathname === "/register") {
      return <Form
        formName="Register Form"
        handleSubmit={this.handleRegisterSubmit}
      />
    }
  }

  renderProfile = (routerProps) => {
    if(this.state.token){
      return <ProfileContainer 
        username={this.state.username} 
        pantries={this.state.pantries} 
        token={this.state.token}
        addPantry={this.addPantry}
      />
    } else {
      return <Redirect to="/login" />
    }
  }

  render(){
    console.log(this.state)
    return (
      <div className="App">
        <NavBar/>
        <Switch>
          <Route path="/login" render={ this.renderForm } />
          <Route path="/register" render={ this.renderForm } />
          <Route path="/profile" render={ this.renderProfile } />
          <Route path="/" exact component={Home} />
          <Route render={ () => <p>Page not Found</p> } />
        </Switch>
      </div>
    );
  }

}



export default withRouter(App)

