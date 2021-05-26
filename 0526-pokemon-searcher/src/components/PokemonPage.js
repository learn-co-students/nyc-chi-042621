import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  
  state = {
    pokemons: [],
    searchTerm: ""
  }

  changeSearchTerm = (newTerm) => {
    this.setState({
      searchTerm: newTerm
    })
  }

  addPokemonToEndOfState = (newPokemon) => {
    let arrOfPokemon = [...this.state.pokemons, newPokemon]
    this.setState({
      pokemons: arrOfPokemon
    })
  }



  componentDidMount(){
    fetch("http://localhost:3000/pokemon")
      .then(res => res.json())
      .then(pokemonArr => {
        this.setState({
          pokemons: pokemonArr
        })
      })
  }


  render() {
    let {pokemons, searchTerm} = this.state
    // let pokemons = this.state.pokemons

    let filteredPokemons = pokemons.filter((pokemonObj, idx) => {
      return pokemonObj.name.toLowerCase().includes(searchTerm.toLowerCase())
    })

    console.log(pokemons, searchTerm)


    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemonToEndOfState={this.addPokemonToEndOfState}/>
        <br />
        <Search searchTerm={searchTerm} changeSearchTerm={this.changeSearchTerm}/>
        <br />
        <PokemonCollection pokemons={filteredPokemons} />
      </Container>
    )
  }
}

export default PokemonPage
