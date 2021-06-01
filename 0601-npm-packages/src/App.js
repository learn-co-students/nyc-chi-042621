import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'


class App extends React.Component{

  state = {
    display: false,
    toys: []
  }

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }

  componentDidMount(){
    fetch("http://localhost:3000/toys")
      .then(res => res.json())
      .then(toys => {
        this.setState({
          toys: toys
        })
      })
  }

  addToy = (newToy) => {
    let toysArr = [...this.state.toys, newToy]
    this.setState({
      toys: toysArr
    })
  }

  deleteToy = (toyID) => {
    let toysArr = this.state.toys.filter(toy => toy.id !== toyID)
    this.setState({
      toys: toysArr
    })
  }

  updateToy = (updatedToy) => {
    let toysArr = this.state.toys.map(toy => {
      if(toy.id === updatedToy.id){
        return updatedToy
      } else {
        return toy
      }
    })

    this.setState({
      toys: toysArr
    })
  }

  render(){
    return (
      <React.Fragment>
        <Header/>
        { this.state.display
            ?
          <ToyForm addToy={this.addToy}/>
            :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer toys={this.state.toys} updateToy={this.updateToy} deleteToy={this.deleteToy}/>
      </ React.Fragment >
    );
  }

}

export default App;

