"use strict";

class Dealer {

  static dealOneCardEveryOne(deck, players) {
    for (let player of players) {
      player.setCard(deck.pop());
    }
  }  
}

module.exports = Dealer;