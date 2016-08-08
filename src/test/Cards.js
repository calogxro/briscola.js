
Cards = require('../Cards');

console.log(Cards.makeCard(1));
console.log(Cards.makeCard(40));

console.log(Cards.toJSON());


/*
suits = ['coins', 'swords', 'cups', 'clubs'];

    cards = {};

    var z = 0;

    for (var i=0; i<4; i++) { 
        for (var j=0; j<10; j++) { 
            console.log(z,i,j); 
            cards[++z] = { 
                'suit': suits[i], 
                'value': j+1 
            } 
        } 
    }

Result

    cards = 
    { 
        '1': { suit: 'coins', value: 1 },
        '2': { suit: 'coins', value: 2 },
        '3': { suit: 'coins', value: 3 },
        '4': { suit: 'coins', value: 4 },
        '5': { suit: 'coins', value: 5 },
        '6': { suit: 'coins', value: 6 },
        '7': { suit: 'coins', value: 7 },
        '8': { suit: 'coins', value: 8 },
        '9': { suit: 'coins', value: 9 },
        '10': { suit: 'coins', value: 10 },
        '11': { suit: 'swords', value: 1 },
        '12': { suit: 'swords', value: 2 },
        '13': { suit: 'swords', value: 3 },
        '14': { suit: 'swords', value: 4 },
        '15': { suit: 'swords', value: 5 },
        '16': { suit: 'swords', value: 6 },
        '17': { suit: 'swords', value: 7 },
        '18': { suit: 'swords', value: 8 },
        '19': { suit: 'swords', value: 9 },
        '20': { suit: 'swords', value: 10 },
        '21': { suit: 'cups', value: 1 },
        '22': { suit: 'cups', value: 2 },
        '23': { suit: 'cups', value: 3 },
        '24': { suit: 'cups', value: 4 },
        '25': { suit: 'cups', value: 5 },
        '26': { suit: 'cups', value: 6 },
        '27': { suit: 'cups', value: 7 },
        '28': { suit: 'cups', value: 8 },
        '29': { suit: 'cups', value: 9 },
        '30': { suit: 'cups', value: 10 },
        '31': { suit: 'clubs', value: 1 },
        '32': { suit: 'clubs', value: 2 },
        '33': { suit: 'clubs', value: 3 },
        '34': { suit: 'clubs', value: 4 },
        '35': { suit: 'clubs', value: 5 },
        '36': { suit: 'clubs', value: 6 },
        '37': { suit: 'clubs', value: 7 },
        '38': { suit: 'clubs', value: 8 },
        '39': { suit: 'clubs', value: 9 },
        '40': { suit: 'clubs', value: 10 } 
    }




    //Math.floor((card_id/40)*4)

    function suit(card_id) {return Math.floor( (card_id-1)/10 )}

    > for (var i=1; i<=40; i++) console.log(i, suit(i))

    

    function value(card_id) {return ((i-1)%10) + 1}

    > for (var i=1; i<=40; i++) console.log(i, value(i))
*/
