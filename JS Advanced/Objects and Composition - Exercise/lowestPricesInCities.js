function lowestPricesInCities(array) {
  let products = {};
  for (let line of array) {
    let [town, product, price] = line.split(" | ");
    price = Number(price);
    let data = {
      town,
      price,
    };

    if (products.hasOwnProperty(product)) {
      if (price < products[product]["price"]) {
        products[product] = data;
      }
    } else {
      products[product] = data;
    }
  }

  for (let kvp of Object.entries(products)) {
    console.log(`${kvp[0]} -> ${kvp[1].price} (${kvp[1].town})`);
  }
}

lowestPricesInCities(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']);

lowestPricesInCities([
  "Sofia City | Audi | 100000",
  "Sofia City | BMW | 100000",
  "Sofia City | Mitsubishi | 10000",
  "Sofia City | Mercedes | 10000",
  "Sofia City | NoOffenseToCarLovers | 0",
  "Mexico City | Audi | 1000",
  "Mexico City | BMW | 99999",
  "Mexico City | Mitsubishi | 10000",
  "New York City | Mitsubishi | 1000",
  "Washington City | Mercedes | 1000",
]);
