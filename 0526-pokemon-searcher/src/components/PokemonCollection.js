import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {


  returnsAnArrayOfComponents = () => {
    return this.props.pokemons.map(pokeObj => {
      return <PokemonCard />
    })
  }

  render() {
  
    let arrayOfComponents = this.props.pokemons.map(pokeObj => {
      return <PokemonCard key={pokeObj.id} pokemon={pokeObj}/>
    })
    // Whenever you invoke a function inside the `render`, you probably care about the return value

    // this.returnsAnArrayOfComponents()

    return (
      <Card.Group itemsPerRow={6}>
        {arrayOfComponents}
      </Card.Group>
    )
  }
}

export default PokemonCollection
