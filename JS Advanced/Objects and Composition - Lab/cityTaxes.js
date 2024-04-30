function cityTaxes(name, population, treasury) {
  let city = {
    name: name,
    population: population,
    treasury: treasury,
    taxRate: 10,
    collectTaxes() {
      this.treasury += this.population * this.taxRate;
    },
    applyGrowth(percentage) {
      this.population += (percentage / 100) * this.population;
    },
    applyRecession(percentage) {
      this.treasury -= (percentage / 100) * this.treasury;
    },
  };

  return city;
}

const city = cityTaxes("Tortuga", 7000, 15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);
