import React, { Component } from 'react';
import GreatHall from './GreatHall'
import SortingHat from './SortingHat'
import MaraudersMap from './MaraudersMap'

class Hogwarts extends Component {

  state = {
    wizards: [],
    whatIsChosen: "Hufflepuff"
  }

  componentDidMount(){
    fetch("http://localhost:4000/wizards")
      .then(res => res.json())
      .then((wizardsArr) => {
        this.setState({
          wizards: wizardsArr
        })
      })
  }

  changeWhatIsChosen = (theNewChoice) => {
    this.setState({
      whatIsChosen: theNewChoice
    })
  }


  getInfoFromDownstairs = (newWizardObj) => {
    let newArr = [...this.state.wizards, newWizardObj]
    this.setState({
      wizards: newArr
    })
  }


    
  render() {
    console.log(this.state.whatIsChosen)

    let theArrayOfWizards = this.state.wizards.filter(wizard => {
      return wizard.house === this.state.whatIsChosen
    })

    if (this.state.whatIsChosen === "All"){
      theArrayOfWizards = this.state.wizards
    }

    return (
      <main>
        <MaraudersMap 
          whatIsChosen={this.state.whatIsChosen} 
          changeWhatIsChosen={this.changeWhatIsChosen}
        />
        <GreatHall wizards={theArrayOfWizards}/>
        <SortingHat getInfoFromDownstairs={this.getInfoFromDownstairs} />
      </main>
    )
  }

}

export default Hogwarts;
