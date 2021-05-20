import React, { Component } from 'react'
import ToyCardFunc from './ToyCardFunc'

export default class AppClass extends Component {
   
    state = {
        arrOfNames: ["Buzz", "Mr. Potato Head", "John"],
        owner: "Eric",
        alive: true,
        num: 19,
        balance: 10000000
    }

    handleDonation = () => {
        this.setState({
          arrOfNames: ["Paul", "Eric", "Nicholas", "Mo", "Sue"] 
        })
    }

    changeOwner = () => {
        this.setState({
            owner: "Louis"
        })
    }

    
    render() {
        
        console.log("NAME", this.state.name)
        // ["", ""] -> [<ToyCard/> , <ToyCard/>]
        let arrOfComponents = this.state.arrOfNames.map((name, idx) => {
            return <ToyCardFunc 
                key={name} 
                toyName={name} 
                likes={5+idx} 
                owner={this.state.owner}
                changeOwner={this.changeOwner}
            />
        })
        
        return (
            <div className="App">
                <h1>Toy Tales V2</h1>
                <button onClick={this.handleDonation}>
                    Donate Toys
                </button>
                <ul>
                    {arrOfComponents}
                </ul>
            </div>
        )
    }

}
