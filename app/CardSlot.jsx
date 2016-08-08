"use strict";

const React = require('react');
const Card = require('./Card.jsx');

class CardSlot extends React.Component {
  constructor(props) {
    super(props);
  }  

  render() {
    let card_slot = this.props.hand.cards;
    let Cards = card_slot.map(function (obj, idx) {
      //console.log(obj, idx)
      let playerId = obj.player_id;
      let card = obj.card;
  
      return (
        <Card key={playerId+'_card'} playerId={playerId} card={card} id={playerId+'_card'} />
      );
    });
    
    return (
      <div id="card_slot">
        {Cards}  
      </div>
    )
  }
}

module.exports = CardSlot;
