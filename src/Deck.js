"use strict";

class Deck {    

  constructor(cards, shuffleStrategy) {
    this.deck = [];

    for (let card of cards) {
      this.deck.push(card);
    }

    this.deck = shuffleStrategy.shuffle(this.deck);
  }

  isEmpty() {
    return (this.deck.length === 0);
  }

  pop() {        
    if (this.isEmpty()) 
      return null;

    return this.deck.pop();
  }

  /** 
   * Returns the last card, 
   * the card that would be returned by shift()
   */
  peek() {
    return this.deck[0];
  }
}

module.exports = Deck;
