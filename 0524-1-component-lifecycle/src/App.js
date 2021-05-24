import './App.css';
import React from 'react'

import SomeComponent from './components/SomeComponent'

class App extends React.Component{

  state={
    eric: true,
    paintings: []
  }

  componentDidMount(){
    // Most of the time, cdm only happens once in App
    console.log("Hello from App")

    // fetch the array of paintings from the backend here
      // Get the response and set that to be the state

    // Make sure you have in your initial state an empty array
      // Make sure that your state is a skeleton of what it potentially looks like

      // fetch("http://localhost:3001/paintings")
        // .then(res => res.json())
        // .then(arrayOfPaintings => {
          // this.setState({
            // paintings: arrayOfPaintings
          // })
        // })
  }

  toggleEric = (evt) => {
    
    this.setState({
      eric: !this.state.eric
    })



    // Any time that the new state is dependent on the old state, we want to use the functional setState
    // this.setState((previousStateObj) => {
    //   // Whatever object is returned from the functional setState is going to be updated
    //   return {
    //     eric: !!previousStateObj.eric
    //   }
    // })



  }
  
  
  
  render(){
    console.log(this.state)
    return (
      <div className="App">
        { this.state.eric ? <SomeComponent thingy="Eric" /> : <p>Eric has left the stage</p> }
        <button onClick={this.toggleEric}>Toggle</button>
      </div>
    )
  }

}

export default App;
