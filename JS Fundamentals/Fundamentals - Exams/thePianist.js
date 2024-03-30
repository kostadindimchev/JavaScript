function thePianist(input) {
    let n = Number(input.shift());
    let pieces = {};

    for(let i = 0; i < n; i++){
        let [piece, composer, key] = input.shift().split('|');
        pieces[piece] = [composer, key];
    }

    while(input[0] !== 'Stop'){
        let tokens = input.shift().split('|');

        if(tokens[0] === 'Add'){
            let piece = tokens[1];
            let composer = tokens[2];
            let key = tokens[3];
            if(!pieces.hasOwnProperty(piece)) {
                pieces[piece] = [composer, key];
                console.log(`${piece} by ${composer} in ${key} added to the collection!`);
            }else{
                console.log(`${piece} is already in the collection!`);
            }

        }else if(tokens[0] === 'Remove'){
            let piece = tokens[1];
            if(pieces.hasOwnProperty(piece)) {
                delete pieces[piece];
                console.log(`Successfully removed ${piece}!`);
            }else{
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }

        }else if(tokens[0] === 'ChangeKey'){
            let piece = tokens[1];
            let key = tokens[2]
            if(pieces.hasOwnProperty(piece)){
                pieces[piece][1] = [key]
                console.log(`Changed the key of ${piece} to ${key}!`);
            }else{
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        }
    }

    Object
    .entries(pieces)
    .forEach((piece) => console.log(`${piece[0]} -> Composer: ${piece[1][0]}, Key: ${piece[1][1]}`));
}

thePianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop' ]);

thePianist([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop']);