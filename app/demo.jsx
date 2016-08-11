"use strict";

const Demo = require('../src/Demo');
const demo = new Demo();

const playerId = 1;


// cfr. src/index.js
const React = require('react');
const ReactDOM = require('react-dom');
const Room = require('./Room.jsx');

ReactDOM.render(<Room playerId={playerId} game={demo} />, document.getElementById('content'));



demo.start();
