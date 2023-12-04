function oldBooks(input) {
    let index = 0
    let counter = 0
    let isFound = false

    let searchedBook = input[index];
    index++
    let curBook = input[index];
    index++

    while(curBook !== "No More Books" ) {
        
        if(searchedBook === curBook) {
            console.log(`You checked ${counter} books and found it.`);
            isFound = true
            break;
        }else if(searchedBook !== curBook) {
            counter++
            curBook = input[index]
            index++
        }
    }

    if(isFound === false) {
        console.log("The book you search is not here!");
        console.log(`You checked ${counter} books.`);
    }

}

oldBooks(["The Spot",

"Hunger Games",

"Harry Potter",

"Torronto",

"Spotify",

"No More Books"])