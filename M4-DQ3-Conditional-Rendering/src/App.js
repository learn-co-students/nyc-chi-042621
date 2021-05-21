import React, { Component } from 'react';
import {Grid, Segment} from 'semantic-ui-react';
import './App.css';
import MainBox from './containers/MainBox.js'

class App extends Component {
  render() {
    return (
      <Grid centered column={1}>
      <Grid.Row></Grid.Row>
      <Grid.Row></Grid.Row>
      <Grid.Row></Grid.Row>
        <Grid.Row >
          <Grid.Column width={10}>
            <Segment>
              <MainBox />
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default App;
