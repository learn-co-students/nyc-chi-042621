import React, { Component } from 'react';
import Pantry from './Pantry'

import NewPantryForm from './NewPantryForm'
import SnackContainer from './SnackContainer'


class ProfileContainer extends Component {

  render() {
  
    return (
      <div>
        <h2>{this.props.username}&apos;s Profile</h2>

        <SnackContainer />
        <NewPantryForm token={this.props.token} addPantry={this.props.addPantry}/>
      </div>
    );
  }

}

export default ProfileContainer;
