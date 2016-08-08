"use strict";

const debug = require('../src/helper/debug');

const Cards = require('../src/Cards');
const ShuffleStrategy = require('../src/lib/shuffler/strategy/AStrategy');
const Deck = require('../src/Deck');
const AI = require('../src/AI');
const Player = require('../src/Player');
const GamePlayers = require('../src/GamePlayers');
const Game = require('../src/Game');

const EventEmitter = require('events').EventEmitter;


class Demo extends EventEmitter {

  constructor() {
    super();
    
    let cards = Cards.toJSON();
    let deck = new Deck(cards, ShuffleStrategy);

    let p1 = new AI(1);
    let p2 = new AI(2);

    let players = new GamePlayers();

    players.addPlayer(p1);
    players.addPlayer(p2);

    let game = new Game(deck, players, /*picker*/p1);

    //debug(game);

    game.on('stateChanged', this.updateState.bind(this));

    this.game = game;
  }

  updateState(state) {
    this.emit('stateChanged', state);

    // TODO: timeout
    if (state.picker_id) {
      let player_id = state.picker_id;
      let player = this.game.getPlayer(player_id);
      
      if (player instanceof AI) {
        let card_idx = player.pick();

        this.game.apply({
          'card_idx': card_idx,
          'player_id': player_id,
        });
      }
    }
  }

  start() {
    this.game.start();
  }
}


module.exports = Demo;
