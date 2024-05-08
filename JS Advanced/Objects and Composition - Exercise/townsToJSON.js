function townToJSON(array) {
  let result = [];
  let heading = array.shift();

  for (let line of array) {
    line = line.slice(2, -1);
    let [town, latitude, longitude] = line.split(" | ");
    latitude = Number(latitude).toFixed(2);
    longitude = Number(longitude).toFixed(2);

    let obj = {
      Town: town,
      Latitude: Number(latitude),
      Longitude: Number(longitude),
    };
    result.push(obj);
  }
  console.log(JSON.stringify(result));
}

townToJSON([
  "| Town | Latitude | Longitude |",
  "| Sofia | 42.696552 | 23.32601 |",
  "| Beijing | 39.913818 | 116.363625 |",
]);
townToJSON([
  "| Town | Latitude | Longitude |",
  "| Veliko Turnovo | 43.0757 | 25.6172 |",
  "| Monatevideo | 34.50 | 56.11 |",
]);
