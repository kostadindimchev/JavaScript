function listOfProducts(products) {
    let sorted = products.sort();

    for(let i = 1; i <= products.length; i++){ 
        console.log(`${i}.${sorted[i - 1]}`);
    }
}

listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);
listOfProducts(['Watermelon', 'Banana', 'Apples']);