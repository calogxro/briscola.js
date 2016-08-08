"use strict";

const React = require('react');
const Card = require('./Card.jsx');

class Player extends React.Component {
  constructor(props) {
    super(props);
  }  

  render() {
    var player = this.props.player
    var PlayerCards = player.cards.filter(function (card) {
      return card !== null
    }).map(function (card, idx) {
      return (
        <Card onClick={this.props.onClick} key={card.value+'_'+card.suit} playerId={player.id} card={card} id={player.id+'_'+idx} />
      );
    }.bind(this));

    return (
      <div className="player" id={player.id}>
        <div className="player_cards">
          {PlayerCards}  
        </div>
        <div className="score"><span>{player.score}</span></div>
      </div>
    )
  }
}

module.exports = Player;
