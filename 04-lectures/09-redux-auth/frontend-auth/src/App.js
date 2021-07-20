import React from 'react';
import Form from './components/Form'
import NavBar from './components/NavBar'
import Home from './components/Home'
import ProfileContainer from './ProfileComponents/ProfileContainer'

import {Switch, Route, withRouter, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

class App extends React.Component {

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

    fetch("http://localhost:3000/snacks")
      .then(res => res.json())
      .then((arrOfSnacks) => {
        this.props.setSnacks(arrOfSnacks)
      })  

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

  handleResponse = (resp) => {
    if(resp.token){
      localStorage.token = resp.token
      this.props.setUser(resp)
    } else {
      alert("You failed")
    }
  }


  logOut = () => {
    this.props.logout()
    localStorage.clear()
  }


  renderForm = (routerProps) => {
    if(this.props.token){
      return <button onClick={this.logOut}>Logged in as {this.props.username}</button>
    } else if(routerProps.location.pathname === "/login"){
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
    if(this.props.token){
      return <ProfileContainer />
    } else {
      return <Redirect to="/" />
    }
  }

  render(){
    console.log(this.props)
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



let mapStateToProps = (globalState) => {
  let booleanOfWhetherTheyAreLoggedIn = !!globalState.userInfo.token
  return {
    token: globalState.userInfo.token,
    username: globalState.userInfo.username
  }
}






// Action is a POJO that contains type and payload

// ActionCreator: Function that creates/returns actions

let setSnacks = (allSnacks) => {
 
  return {
    type: "SET_SNACKS_PLEASE",
    payload: allSnacks
  }

}

let setUser = (responseFromServer) => {
  return {
    type: "SET_USER",
    payload: responseFromServer
  }
}

let logout = () => {
  return {
    type: "LOGOUT_USER"
  }
}



// mapDispatchToProps is oftentimes a POJO of functions that'll be merged into
  // Turns the actionCreators (setSnacks) into functions that'll dispatch the action
let mapDispatchToProps = {
  setSnacks,
  setUser,
  logout,
}


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App))

