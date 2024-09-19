function printDeckOfCards(cards) {
    function playingCards(face, suit) {
        const obj = {
            face,
            suit,
            toString() {
                return this.face + validSuits[this.suit];
            }
        }
    
        const validFaces = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
        const validSuits = {
            S: '\u2660',
            H: '\u2665',
            D: '\u2666',
            C: '\u2663',
        };
    
        if (!validFaces.includes(face)) {
            throw new TypeError('Invalid face: ' + face);
          }
          if (!validSuits[suit]) {
            throw new Error('Invalid suit: ' + suit);
          }
    
        return obj;   
    }

    let [face, suit] = ['', ''];
    try{
    const deck = [];
    while(cards.length > 0){
        let card = cards.shift()    
        if(card.length === 2){
            [face, suit] = [card[0], card[1]]
        }else{
            [face, suit] = [card[0] + card[1], card[2]]
        }
        deck.push(playingCards(face, suit).toString())
    }
    console.log(deck.join(' '));
    }catch(err){
        console.log(`Invalid card: ${face}${suit}`);
    }
}
printDeckOfCards(['AS', '10D', 'KH', '2C'])
printDeckOfCards(['5S', '3D', 'QD', '1C'])
  