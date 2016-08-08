"use strict";

class Player { 

  constructor(id) {
    this.id = id;
    this.score = 0;
    this.cards = [null,null,null];
  }

  getId() {
    return this.id;
  }

  getCard(card_idx) {
    return this.cards[card_idx];
  }

  setCard(card) {
    let cards = this.cards;
    let card_idx = cards.indexOf(null);

    if (card_idx != -1) {
      cards[card_idx] = card;
    }

    return card_idx; 
  }

  playCard(card_idx) {
    let card = this.cards[card_idx];
    this.cards[card_idx] = null;
    return card;
  }
}

module.exports = Player;
