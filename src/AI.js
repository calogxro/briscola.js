"use strict";

const Player = require('./Player');

class AI extends Player {

  constructor(id) {
    super(id);
  }

  // decisione casuale
  pick() {
    let cards = this.cards;
    let card_idx = 0;

    do {
      card_idx = Math.floor(Math.random()*cards.length);
    } while (cards[card_idx] == null);
    
    return card_idx;
  }
}

module.exports = AI;
