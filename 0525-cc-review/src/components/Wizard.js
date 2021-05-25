import React, { Component } from 'react';

class Wizard extends Component {

  render() {
    console.log(this.props, "WIZARD")
    let {house, name, image1, image2, wand} = this.props.wizard

    return (
        <li className={`card ${house}`}>
          <div className="decorative">
            <div className="top">
              <div className="name">
                <h3>{name}</h3>
              </div>
              <div className="border">
                <img src={image1} alt={this.props.wizard.name}/>
              </div>
            </div>
            <div className="card_bottom">
              <p className="house_name">{this.props.wizard.house}</p>
              <p className="description">Wand: {this.props.wizard.wand}</p>
              <button>
                Graduate
              </button>
            </div>
          </div>
        </li>

    );
  }

}

export default Wizard;
