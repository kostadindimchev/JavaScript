function sumPrimeNonPrime(input) { 
    index = 0
    let command = input[index]
    index++
    let primesSum = 0
    let nonPrimesSum = 0

    while(command !== 'stop') {
        let num = Number(command)

        if(num < 0) {
            console.log('Number is negative.');
            command = input[index++]
            continue;
        }

        let isPrime = true

        for(i = 2; i < num; i++) {
            if(num % i === 0) {
                nonPrimesSum += num
                isPrime = false
                break;
            }

        }

        if(isPrime) {
            primesSum += num
        }

        command = input[index++]
    }

    console.log(`Sum of all prime numbers is: ${primesSum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimesSum}`);
}
sumPrimeNonPrime(["30",

"83",

"33",

"-1",

"20",

"stop"])