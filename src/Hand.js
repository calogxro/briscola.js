"use strict";

const clone = require('./helper/clone');

class Hand { 

  constructor(num_players) {
    this.trump;
    this.cards = [];
    this.num_players = num_players;
  }

  _empty() {
    this.cards.length = 0;
  }

  isFull() {
    return this.cards.length == this.num_players;
  }

  take(card, player_id) {
    this.cards.push({
      'card': card,
      'player_id': player_id,
    });
  }

  getCards() {
    let cards = clone(this.cards);
    this._empty();
    return cards;
  }
}

module.exports = Hand;
