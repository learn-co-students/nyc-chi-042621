import React from 'react';
import ToyCard from './ToyCard'

import {Card} from 'semantic-ui-react'

const ToyContainer = (props) => {

  let arrOfComponents = props.toys.map((toy) => {
    return <ToyCard key={toy.id} toy={toy} updateToy={props.updateToy} deleteToy={props.deleteToy}/>
  })

  return(
    <Card.Group itemsPerRow={4}>

      {arrOfComponents}
    
    </Card.Group>
  );
}

export default ToyContainer;
