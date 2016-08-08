"use strict";

class Cards {

  // it's like it was returning cards[card_id]
  static makeCard(card_id) {   
    let suits = ['coins', 'swords', 'cups', 'clubs'];
    
    let suitOf = function(card_id) {
      return Math.floor( (card_id-1)/10 );  // x/10 = x*(4/40)
    }

    let valueOf = function(card_id) {
      return ((card_id-1)%10) + 1;
    }

    return {
      suit: suits[suitOf(card_id)],
      value: valueOf(card_id),
    }
  }

  static toJSON() {
    let cards = [];

    for (let card_id = 1; card_id <= 40; card_id++) {
      cards.push( Cards.makeCard(card_id) );
    }
    return cards;
  }
}    

module.exports = Cards;
