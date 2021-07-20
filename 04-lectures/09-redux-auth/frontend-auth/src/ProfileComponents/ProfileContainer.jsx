import React, { Component } from 'react';
import Pantry from './Pantry'
import SnackContainer from './SnackContainer'
import NewPantryForm from './NewPantryForm'
import AddSnackToPantryForm from './AddSnackToPantryForm'

import {connect} from 'react-redux'


class ProfileContainer extends Component {

  render() {
  
    return (
      <div>
        <h2>{this.props.username}&apos;s Profile</h2>

        <SnackContainer/>

        <hr/>

        <AddSnackToPantryForm/>


        <hr/>
        {this.props.pantries.map(pantry => {
          return <Pantry key={pantry.id} pantry={pantry}/>
        })}
        <NewPantryForm />
      </div>
    );
  }

}

let mstp = ({userInfo}) => {
  return {
    username: userInfo.username,
    pantries: userInfo.pantries
  }
}


export default connect(mstp)(ProfileContainer);
