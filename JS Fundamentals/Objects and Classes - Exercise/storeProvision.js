function storeProvision(stock, ordered) {
    let store = {};

    for (let i = 0; i < stock.length; i += 2) {
        let curProduct = stock[i];
        store[curProduct] = Number(stock[i + 1]);
    }
    
    for (let j = 0; j < ordered.length; j += 2) {
        let curProduct = ordered[j];
        if(!store.hasOwnProperty(curProduct)) {
            store[curProduct] = 0;
        }
        store[curProduct] += Number(ordered[j + 1]);
    }
    
    for (let el in store) {
        console.log(`${el} -> ${store[el]}`);
    }
}

storeProvision([
'Chips', '5', 'CocaCola', '9', 'Bananas',
'14', 'Pasta', '4', 'Beer', '2'],
['Flour', '44', 'Oil', '12', 'Pasta', '7',
'Tomatoes', '70', 'Bananas', '30'
]);
storeProvision([
'Salt', '2', 'Fanta', '4', 'Apple', '14',
'Water', '4', 'Juice', '5'],
['Sugar', '44', 'Oil', '12', 'Apple', '7',
'Tomatoes', '7', 'Bananas', '30'
]);