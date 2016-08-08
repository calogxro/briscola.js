"use strict";

const EventEmitter = require('events').EventEmitter;
const Hand = require('./Hand');
const Dealer = require('./Dealer');
const clone = require('./helper/clone');

// TODO: non puoi aggiungere un giocatore se la partita è gia cominciata -> vedi Room::isFull()

class Game extends EventEmitter {

  constructor(deck, players, picker) {
    super();

    this.deck = deck;
    this.trump = this.deck.peek();
    this.players = players;

    this.hand = new Hand(this.players.size);

    // before dealing
    this.setPicker(picker);
  }

  _getState() {
    let state = {
      'picker_id': this.getPickerId(),
      'trump': this.trump,
      'hand': this.hand,
      'players': this.players,
    };

    return clone(state);
  }

  _notifyChange() {
    this.emit('stateChanged', this._getState());
  }

  _gameIsOver() {
    let players = this.players;

    for (let player of players) {
      for (let card of player.cards) {
        if (card != null) {
          return false;
        }
      }
    }

    return true;
  }

  _getWinner() {
    let players = this.players.values();

    let winner_score = 0;
    for (let player of players) {
      if (player.score > winner_score) {
        winner_score = player.score;
      }
    }

    // it's array because the match can finish with a tie
    let winner = [];
    for (let player of players) {
      if (player.score == winner_score) {
        winner.push(player);
      }
    }

    return winner;
  }

  getPlayer(player_id) {
    return this.players.getPlayer(player_id); 
  }

  getPickerId() {
    let picker_id;

    if (this._gameIsOver() || this.hand.isFull())
      picker_id = null;
    else
      picker_id = this.players.getPicker().getId();

    return picker_id;
  }

  setPicker(player) {
    this.players.setPicker(player);
  }

  nextPicker() {
    return this.players.nextPicker();
  }

  isValidOperator(operator) {
    return true;
  }

  // It's not possible for this to live inside constructor()
  // because we need to assign the events on game after new Game()
  start() {
    // TODO: test ordine di consegna
    Dealer.dealOneCardEveryOne(this.deck, this.players);
    Dealer.dealOneCardEveryOne(this.deck, this.players);
    Dealer.dealOneCardEveryOne(this.deck, this.players);

    this._notifyChange();
  }

  gameLoop() {
    // all players have played
    if (this.hand.isFull()) {
      let hand_cards = this.hand.getCards();
      let winner_id = Game.winnerId(hand_cards, this.trump);
      let winner = this.getPlayer(winner_id);

      // set winner's score
      hand_cards.forEach(function(op) {
        winner.score += Game.scoreOf(op.card);
      });

      this.setPicker(winner);
      
      if ( ! this.deck.isEmpty()) {  
        Dealer.dealOneCardEveryOne(this.deck, this.players);
      } 
      else {
        // If the deck is empty, the game might not be over;
        // because from when it gets empty, there are 3 other hands to play.
        if (this._gameIsOver()) {}
        else {}
      }

      this._notifyChange();
    }
  }

  apply(operator) {
    let card_idx  = operator.card_idx;
    let player_id = operator.player_id;
    let player    = this.getPlayer(player_id);
    let card      = player.getCard(card_idx);

    if (this.isValidOperator(operator)) {
      player.playCard(card_idx);
      this.hand.take(card, player_id);
      
      if ( ! this.hand.isFull()) 
        this.setPicker(this.nextPicker());

      this._notifyChange();     
      this.gameLoop();
    }
  }

  static scoreOf(card) {
    let value = card.value;

    switch (value) {
      case 1: return 11;  // asso
      case 3: return 10;  // tre
      case 10: return 4;  // re
      case 9: return 3;   // cavallo
      case 8: return 2;   // donna
    }
    return 0;
  }
  
  /**
   * - if any briscola (trump) has been played, 
   *   the player who played the highest valued trump wins
   * - if no briscole (trumps) have been played, 
   *   the player who played the highest card of the lead suit wins
  */
  static winnerId(hand_cards, trump) {
    let lead_card = hand_cards[0].card;
    let lead_suit = lead_card.suit;
    let highest_trump = null;

    for (let op of hand_cards) {
      let card = op.card;

      if (card.suit == trump.suit && ( ! highest_trump || card.value > highest_trump.value))
        highest_trump = card;

      if (card.suit == lead_suit && card.value > lead_card.value)
        lead_card = card;
    }

    let winningCard = null;
    let winnerId = null;

    if (highest_trump)
      winningCard = highest_trump;
    else
      winningCard = lead_card;

    for (let op of hand_cards) {
      let card = op.card;
      let player_id = op.player_id;

      if (card.suit == winningCard.suit && card.value == winningCard.value)      
        winnerId = player_id;
    }

    return winnerId;
  }
}

module.exports = Game;
