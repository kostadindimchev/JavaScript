function loadingBar(number) {
    let loading = 0
    let bar = new Array(10).fill('.');
    for(let i = 0; i < number; i += 10) {
        loading += 10
        bar.shift('')
        bar.push('%')
    }
    if(loading === 100) {
        console.log(`100% Complete!`);
    }
    console.log(`${loading}% [${bar.reverse().join('')}]`);
    if(loading < 100) {
        console.log('Still loading...');
    }
}

loadingBar(30);
loadingBar(50);
loadingBar(100);