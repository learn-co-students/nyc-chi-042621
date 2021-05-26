import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    showingFront: true
  }

  toggleShowingFront = () => {
    let newBoolean = !this.state.showingFront

    this.setState({
      showingFront: newBoolean
    })
  }



  returnsName = () => {
    return this.props.pokemon.name
  }



  render() {
    // console.log(this.props)
    let {hp, id, name, sprites} = this.props.pokemon

    return (
      <Card onClick={this.toggleShowingFront}>
        <div>
          <div className="image">
            <img alt="oh no!" src={ this.state.showingFront ? sprites.front : sprites.back } />
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hp} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
