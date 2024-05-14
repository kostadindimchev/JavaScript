function colorize() {
    let rowElements = document.getElementsByTagName('tr')

    let arr = Array.from(rowElements);

    arr.forEach((x, i) => {
        if(i % 2 !== 0){
            x.style.backgroundColor = 'teal';
        }
    });
}