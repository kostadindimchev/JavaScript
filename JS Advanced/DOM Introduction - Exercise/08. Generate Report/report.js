function generateReport() {
  let output = document.getElementById("output");
  let colNames = document.querySelectorAll("thead tr th input");
  let rows = document.querySelectorAll("tbody tr");
  let checked = {};
  let result = [];

  for (let i = 0; i < colNames.length; i++) {
    if (colNames[i].checked === true) {
      checked[colNames[i].name] = i;
    }
  }

  for (let row of rows) {
    let obj = {};

    for (let [colName, index] of Object.entries(checked)) {
      obj[colName] = row.children[index].textContent;
    }

    result.push(obj);
  }

  output.value = JSON.stringify(result);
}
