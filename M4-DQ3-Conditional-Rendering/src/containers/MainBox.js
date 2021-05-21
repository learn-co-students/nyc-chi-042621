import React from 'react'
import { CommentText } from 'semantic-ui-react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {

  state = {
    whichComponentToDisplay: "profile"
  }

  changeWhichComponentToDisplay = (componentName) => {
    this.setState({
      whichComponentToDisplay: componentName
    })
  }

  render() {

    let componentMapper = {
      profile: <Profile/>,
      photo: <Photos />,
      cocktail: <Cocktails />,
      pokemon: <Pokemon />
    }

    const detailsToDisplay = componentMapper[this.state.whichComponentToDisplay]

    return (
      <div>
        <MenuBar 
          changeWhichComponentToDisplay={this.changeWhichComponentToDisplay}
          whichComponentToDisplay={this.state.whichComponentToDisplay}
        />
        {detailsToDisplay}
      </div>
    )
  }

}

export default MainBox
