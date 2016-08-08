
//http://stackoverflow.com/questions/6089058/nodejs-how-to-clone-a-object
//this is a quick and dirty solution 

function clone(data) {
  return JSON.parse(JSON.stringify(data));
}

module.exports = clone;