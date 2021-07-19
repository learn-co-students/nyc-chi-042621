import React, { Component } from 'react';
import Pantry from './Pantry'
import SnackContainer from './SnackContainer'
import NewPantryForm from './NewPantryForm'


class ProfileContainer extends Component {

  render() {
  
    return (
      <div>
        <h2>{/* Username */}&apos;s Profile</h2>

        <SnackContainer/>
 
      </div>
    );
  }

}

export default ProfileContainer;
