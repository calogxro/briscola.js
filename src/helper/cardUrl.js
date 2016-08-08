let semi = {
  "coins": "oro", 
  "clubs": "bastoni", 
  "swords": "spade", 
  "cups": "coppe"
};

let figure = {
  1:"asso", 
  2:"due", 
  3:"tre", 
  4:"quattro", 
  5:"cinque", 
  6:"sei", 
  7:"sette", 
  8:"donna", 
  9:"cavallo", 
  10:"re"
};

const cardFlipSideUrl = '/img/carte/dalnegropiacentineback-60x90.jpg';

function cardUrl(card) {
  if (!card) 
    throw "Error: View - getImageUrl(card): baby, maybe card is null!";
    
  if (card.seed === null && card.figure === null) 
    return cardFlipSideUrl;

  let imageUrl = 'img/carte/semi/'+semi[card.suit]+'/'+figure[card.value]+'.jpg'; // || ../

  return imageUrl;
}


module.exports = cardUrl;
