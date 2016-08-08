"use strict";

//const debug = require('../src/helper/debug');

const React = require('react');
const Player = require('./Player.jsx');
const CardSlot = require('./CardSlot.jsx');

//var ReactCSSTransitionGroup = require('react-addons-css-transition-group');


class Room extends React.Component {

  constructor(props) {
    super(props);

    this.game = props.game;

    this.game.on('stateChanged', this.updateState.bind(this));

    // timeout
    this.ms = 5000;

    this.state = {
      hand: {
        "cards":[]
      },
      "players":[
        {
          "id":"p0",
          "score":0,
          "cards":[null,null,null]
        },
        {
          "id":"p1",
          "score":0,
          "cards":[null,null,null]
        }
      ]
    }
  }
  
  updateState(state) {
    this.ms += 5000;

    let that = this;

    setTimeout(function(){ 
      that.setState(state);

      //debug('----------------------------------------------------------------');
      //debug(that.state);

    }, this.ms);    
  }

  render() {
    return (
      <div>
        <Player player={this.state.players[1]} />

        <div id="center_box">
          <CardSlot hand={this.state.hand} />

          <div id="deck_box">
            <div className="card empty_slot" id="briscola"></div>
            <div className="card" id="deck"></div>
          </div>
        </div>
            
        <Player player={this.state.players[0]} />
      </div>
    );
  }
}


module.exports = Room;
