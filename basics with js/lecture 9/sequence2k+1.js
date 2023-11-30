function sequence2kPlus1(input) {
    let num = Number(input[0])
    let k = 1

    while(k <= num) {
        console.log(k);
        k = 2 * k + 1
    }
}
sequence2kPlus1(["31"])