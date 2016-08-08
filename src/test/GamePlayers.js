
assert = require('assert');

Player = require('../Player');
GamePlayers = require('../GamePlayers');

p1 = new Player(1);
p2 = new Player(2);
p3 = new Player(3);

players = new GamePlayers();

console.log(players.size);
assert(players.size == 0);

players.addPlayer(p1);
console.log(players.size);
assert(players.size == 1);

players.addPlayer(p2);
console.log(players.size);
assert(players.size == 2);

players.addPlayer(p3);
console.log(players.size);
assert(players.size == 3);


log = function(msg) {
	console.log(msg);
	console.log(players);
	console.log('getPicker().getId()', players.getPicker() ? players.getPicker().getId() : players.getPicker());
	console.log('nextPicker().getId()', players.nextPicker().getId());
	console.log('-------------------------');
}

log('');
assert(players.queue.length == 3);
assert(players.getPicker() == undefined);
assert(players.nextPicker().getId() == 1);


players.setPicker(players.nextPicker());
log('players.setPicker(players.nextPicker())');
assert(players.queue.length == 3);
assert(players.getPicker().getId() == 1);
assert(players.nextPicker().getId() == 2);


players.setPicker(players.nextPicker());
log('players.setPicker(players.nextPicker())');
assert(players.queue.length == 3);
assert(players.getPicker().getId() == 2);
assert(players.nextPicker().getId() == 3);


players.setPicker(players.nextPicker());
log('players.setPicker(players.nextPicker())');
assert(players.queue.length == 3);
assert(players.getPicker().getId() == 3);
assert(players.nextPicker().getId() == 1);


players.setPicker(players.nextPicker());
log('players.setPicker(players.nextPicker())');
assert(players.queue.length == 3);
assert(players.getPicker().getId() == 1);
assert(players.nextPicker().getId() == 2);


