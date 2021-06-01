import React, { Component } from 'react';

import { Card, Image, Button } from 'semantic-ui-react'
// import <Card />, <Icon />, <Image />


class ToyCard extends Component {

  handleLike = (e) => {

    fetch(`http://localhost:3000/toys/${this.props.toy.id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        likes: this.props.toy.likes + 1
      })
    })
      .then(res => res.json())
      .then(updatedToy => {
        this.props.updateToy(updatedToy)
      })

  }

  handleDelete = (e) => {
    fetch(`http://localhost:3000/toys/${this.props.toy.id}`, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(emptyObj => {
        this.props.deleteToy(this.props.toy.id)
      })
  }

  render() {
  
    let {name, image, likes} = this.props.toy
    return (
      <Card className="eric">
        <Image src={image} />
        <Card.Content>
          <Card.Header>
            <h2>{name}</h2>
          </Card.Header>  
          <Card.Description>
            <p>{likes} Likes </p>

          </Card.Description>
        </Card.Content>
        <Button color="green" onClick={this.handleLike}> Like {'<3'} </Button>
        <Button color="red" onClick={this.handleDelete}> Donate To Goodwill </Button>
      </Card>
    );
  }

}

export default ToyCard;
