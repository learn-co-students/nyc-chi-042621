import React, { Component } from 'react'

export default class App extends Component {

  state = {
    cats: []
  }


  handleClick = () => {
    fetch("http://localhost:9393/cats")
      .then(res => res.json())
      .then((arrOfCats) => {
        this.setState({
          cats: arrOfCats
        })
      })
  }


  addCat = () => {

    fetch("http://localhost:9393/cats", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json"
      },
      body: JSON.stringify({
        name: "Olive Oil",
        weight: 400
      })
    })
      .then(res => res.json())
      .then(newCat => {
        this.setState({
          cats: [...this.state.cats, newCat]
        })
      })

  }



  render() {
    console.log(this.state.cats)
    return (
      <div>
        <button onClick={this.handleClick}>
          Click for Cats
        </button>
        <p>How Many Cats: {this.state.cats.length}</p>

        <button onClick={this.addCat}>
          Add A Cat
        </button>
      </div>
    )
  }
}
