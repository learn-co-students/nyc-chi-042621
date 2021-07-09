import React, { Component } from 'react';
import Snack from './Snack'
import Pantry from './Pantry'

import NewPantryForm from './NewPantryForm'


class ProfileContainer extends Component {

  render() {
  
    return (
      <div>
        <h2>{this.props.username}&apos;s Profile</h2>

        <ol>
          {this.props.pantries.map(pantry => <Pantry key={pantry.id} pantry={pantry} token={this.props.token}/>)}
        </ol>
        <NewPantryForm token={this.props.token} addPantry={this.props.addPantry}/>
      </div>
    );
  }

}

export default ProfileContainer;
