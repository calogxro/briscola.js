"use strict";


const Cards = require('../src/Cards');
const ShuffleStrategy = require('../src/lib/shuffler/strategy/AStrategy');
const Deck = require('../src/Deck');
const AI = require('../src/AI');
const Player = require('../src/Player');
const GamePlayers = require('../src/GamePlayers');
const Game = require('../src/Game');

const cards = Cards.toJSON();
const deck = new Deck(cards, ShuffleStrategy);

const p1 = new AI(1);
const p2 = new AI(2);

const players = new GamePlayers();

players.addPlayer(p1);
players.addPlayer(p2);

const game = new Game(deck, players, /*picker*/p1);

//const room = new Room(game);




var React = require('react');
var ReactDOM = require('react-dom');

const Room = require('./Room.jsx');

ReactDOM.render(<Room game={game} />, document.getElementById('content'));


// C'è un problema se si cambia l'ordine con cui vengono registrati i listener:
// se si mettono le 4 righe sopra dopo il blocco sotto [game.on('stateChanged')]
// I listener in questione sono: questo di sotto e quello che viene assegnato dentro Room.jsx
// In pratica, se si invertono, prima gioca e poi aggiorna lo stato 

game.on('stateChanged', function(state) {

  if (state.picker_id) {
    let player_id = state.picker_id;
    let player = game.players.getPlayer(player_id);
    
    if (player instanceof AI) {
      let card_idx = player.pick();

      game.apply({
        'card_idx': card_idx,
        'player_id': player_id,
      });
    }
  }

});

/*
client.on('play', function(card_idx) {
  let player_id = client.getId();

  game.apply({
    'card_idx': card_idx,
    'player_id': player_id,
  });
});
*/

const debug = require('../src/helper/debug');

//debug(game);

game.start();
