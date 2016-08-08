"use strict";

class GamePlayers extends Map {

  constructor() {
    super();

    this.queue = [];
    this.picker_idx = -1;
  }

  _next(idx) {
    return (idx + 1) % this.queue.length;
  }

  toJSON() {
    let players = this;
    let json = [];
    
    for (let player of players) {
      json.push(player);
    }

    return json;
  }

  getPlayer(player_id) {
    return this.get(player_id);
  }

  addPlayer(player) {
    let player_id = player.getId();
    let player_idx = this.queue.indexOf(player_id);
    
    if (player_idx == -1)
      this.queue.push(player_id); 
      this.set(player_id, player);
  }

  /*
  Q = require('./src/PlayersQueue'); m = new Map([[1,{id:1}],[2,{id:2}],[3,{id:3}]]); q = new Q(m); q.setPickerId(1); for(i of q) console.log(i);
  */

  // makes possible to iterate the map with the order the players are in the queue
  * [Symbol.iterator]() {

    let next = this._next.bind(this);

    let q = this.queue;
    let idx = this.picker_idx;

    if (idx >= 0) {
      do {   
          let player_id = q[idx];
          let player = this.getPlayer(player_id);

          yield player;
          idx = next(idx);
      } 
      while (idx != this.picker_idx);
    }
  }

  setPicker(player) {
    let player_id = player.getId();
    let player_idx = this.queue.indexOf(player_id);

    if (player_idx != -1)
      this.picker_idx = player_idx;
  }

  getPicker() {
    let player_id = this.queue[this.picker_idx];
    return this.getPlayer(player_id);
  }

  nextPicker() {
    let next_picker_idx = this._next(this.picker_idx);
    let player_id = this.queue[next_picker_idx];

    return this.getPlayer(player_id);
  }
}

module.exports = GamePlayers;
