import React, { Component } from 'react';

class MaraudersMap extends Component {

  helpChange = (e) => { 
    this.props.changeWhatIsChosen(e.target.value)
  }

  render() {
    return (
      <nav>
        <h2>Houses of Hogwarts</h2>
        <select id="map" value={this.props.whatIsChosen} onChange={this.helpChange}>
          <option value="All">All</option>
          <option value="Gryffindor">Gryffindor</option>
          <option value="Hufflepuff">Hufflepuff</option>
          <option value="Ravenclaw">Ravenclaw</option>
          <option value="Slytherin">Slytherin</option>
        </select>
      </nav>
    );
  }

}

export default MaraudersMap;
