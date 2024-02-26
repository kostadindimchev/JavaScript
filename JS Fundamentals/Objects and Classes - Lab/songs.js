function songs(array) {
    let songs = [];
    let count = array.shift();
    let lastEl = array.pop();

    class Song {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }
    
    for (let songInfo of array) {
        let tokens = songInfo.split('_')
        let type = tokens[0];
        let name = tokens[1];
        let time = tokens[2];

        let song = new Song(type, name, time);
        songs.push(song)
    }

    if(lastEl === 'all') {
        songs.forEach((x) => console.log(x.name))
    }else{
        let filtered = songs.filter((x) => x.type === lastEl);
        filtered.forEach((x) => console.log(x.name))
    }
}

songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']);
songs([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']);
songs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']);