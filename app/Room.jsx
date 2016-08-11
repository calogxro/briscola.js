"use strict";

//const debug = require('../src/helper/debug');

const React = require('react');
const Player = require('./Player.jsx');
const CardSlot = require('./CardSlot.jsx');

//var ReactCSSTransitionGroup = require('react-addons-css-transition-group');


class Room extends React.Component {

  constructor(props) {
    super(props);

    this.playerId = props.playerId;
    this.game = props.game;

    this.game.on('stateChanged', this.updateState.bind(this));

    // timeout
    this.ms = 5000;

    this.state = {
      hand: {
        "cards": [
        ]
      },
      players: [
        {
          "id":"1",
          "score":0,
          "cards":[null,null,null]
        },
        {
          "id":"0",
          "score":0,
          "cards":[null,null,null]
        }
      ]
    }
  }
  
  updateState(state) {
    this.ms += 5000;

    let that = this;

    setTimeout(function() {
      that.setState(state);

      //debug('----------------------------------------------------------------');
      //debug(that.state);

    }, this.ms);    
  }

  render() {
    let playerId = this.playerId;
    let players = this.state.players;

    // "me": the player at the bottom/zero
    let p0 = players.find(function(player) {
      return player.id == playerId;
    });

    let p1 = players.find(function(player) {
      return player.id != playerId;
    });

    return (
      <div>
        <Player player={p1} />

        <div id="center_box">
          <CardSlot hand={this.state.hand} />

          <div id="deck_box">
            <div className="card empty_slot" id="briscola"></div>
            <div className="card" id="deck"></div>
          </div>
        </div>
            
        <Player player={p0} />
      </div>
    );
  }
}


module.exports = Room;
