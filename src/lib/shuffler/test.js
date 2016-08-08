
Strategy = require('./strategy/AStrategy');
Shuffler = require('./Shuffler');

array = [1,2,3,4,5];

console.log(array);

array = Shuffler.shuffle(array, Strategy);

console.log(array);
