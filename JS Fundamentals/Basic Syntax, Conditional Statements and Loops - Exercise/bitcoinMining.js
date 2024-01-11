function bitcoinMining(input) {
    let bitcoinPrice = 11949.16
    let goldPrice = 67.51
    let leva = 0
    let day = 0
    let bitcoinsStored = 0
    let isBougth = false
    let firstBougthDay = NaN

    for(let i = 0; i <= input.length - 1; i++) {
        day++;
        let daily = Number(input[i]);

        if(day % 3 === 0) {
            daily -= 0.3 * daily;
        }
        leva += daily * goldPrice

        if(leva >= bitcoinPrice) {
            if(isBougth === false) {
                firstBougthDay = day
            }
            isBougth = true
            let left = leva % bitcoinPrice
            let bougthBitcoins = (leva - left) / bitcoinPrice
            bitcoinsStored += bougthBitcoins
            leva -= bougthBitcoins * bitcoinPrice
        }
    }

    console.log(`Bought bitcoins: ${bitcoinsStored}`);
    if(isBougth) {
        console.log(`Day of the first purchased bitcoin: ${firstBougthDay}`);
    }
    console.log(`Left money: ${leva.toFixed(2)} lv.`);

}

bitcoinMining([100, 200, 300]);
bitcoinMining([50, 100] );
bitcoinMining([3124.15, 504.212, 2511.124]);