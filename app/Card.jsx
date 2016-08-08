"use strict";

const React = require('react');
const cardUrl = require('../src/helper/cardUrl');

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let playerId = this.props.playerId
    let card = this.props.card
    let id = this.props.id
    let imgUrl = (card === null) ? 'none' : 'url(' + cardUrl(card) + ')';
    let style = {
      backgroundImage: imgUrl,
    };
    
    return (
      <div onClick={this.props.onClick} className="card" style={style} id={id}>
      </div>
    );
  }
}

module.exports = Card;
