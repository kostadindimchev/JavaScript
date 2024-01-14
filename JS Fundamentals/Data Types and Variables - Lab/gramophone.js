function gramophone(band, album, song) {
    let rotationInSec = 2.5
    let songDuration = (album.length * band.length) * song.length / 2
    let rotations = songDuration / rotationInSec

    console.log(`The plate was rotated ${Math.ceil(rotations)} times.`);

}

gramophone('Black Sabbath', 'Paranoid', 'War Pigs' );
gramophone('Rammstein', 'Sehnsucht', 'Engel');