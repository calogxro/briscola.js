
//const util = require('util');

function debug(data) {  
  //console.log(util.inspect(data, false, null));
  console.dir(data, {
  	'showHidden': false,
  	'depth': null,
  	'colors': true,
  });
}

module.exports = debug;