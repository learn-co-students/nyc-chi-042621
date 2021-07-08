import React, { Component } from 'react';
import Snack from './Snack'

class ProfileContainer extends Component {

  render() {
  
    return (
      <div>
        <h2>{this.props.username}&apos;s Profile</h2>

        <ol>
        </ol>

      </div>
    );
  }

}

export default ProfileContainer;
