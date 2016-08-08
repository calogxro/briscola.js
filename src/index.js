"use strict";

const Demo = require('./Demo');
const demo = new Demo();


// cfr. app/demo.jsx
const debug = require('../src/helper/debug');

demo.on('stateChanged', function(state) {
  debug('---------------------------------------------------------------------------------------------');
  debug(state);
});


demo.start();
