// Class -> Blueprint 

class PokemonPage extends React.Component {

    constructor(){
        super()
        this.state ={
            pokemons: [],
            searchTerm: ""
        }
    }

    componentDidMount(){
        // ...
    }

    addPokemonToEndOfState = (newPokemon) => {
        let arrOfPokemon = [...this.state.pokemons, newPokemon]
        this.setState({
            pokemons: arrOfPokemon
        })
    }


    returnsFilteredArray = () => {
        let {pokemons, searchTerm} = this.state

        return pokemons.filter((pokemonObj) => {
            return pokemonObj.name.toLowerCase().includes(searchTerm.toLowerCase())
        })
    }

    
    render() {
        let filteredPokemon = this.returnsFilteredArray()
        return (
            <Container>
                <PokemonCollection pokemons={filteredPokemon} />
            </Container>
        )
    }
}

// Instances -> Buildings constructed from that blueprint

<PokemonPage />
<PokemonPage /> 
<PokemonPage /> 
