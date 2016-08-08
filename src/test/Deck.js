
Cards = require('../Cards');
cards = Cards.toJSON();
ShuffleStrategy = require('../lib/shuffler/strategy/AStrategy');
Deck = require('../Deck');

deck = new Deck(cards, ShuffleStrategy);

console.log(deck);
console.log(deck.pop());
console.log(deck);
