window.addEventListener("load", solve);

function solve() {
  const publish = document.getElementById("publish");
  const tableBody = document.getElementById("table-body");
  const carsList = document.getElementById("cars-list");
  const profit = document.getElementById("profit");
  let sum = 0;

  const makeInput = document.getElementById("make");
  const modelInput = document.getElementById("model");
  const yearInput = document.getElementById("year");
  const fuelSelector = document.getElementById("fuel");
  const originalCost = document.getElementById("original-cost");
  const sellingPrice = document.getElementById("selling-price");

  publish.addEventListener("click", (e) => {
    e.preventDefault();
    if (
      !makeInput.value ||
      !modelInput.value ||
      !yearInput.value ||
      !fuelSelector.value ||
      !originalCost.value ||
      !sellingPrice.value
    ) {
      return;
    }

    if (Number(originalCost.value) > Number(sellingPrice.value)) {
      return;
    }

    const make = makeInput.value;
    const model = modelInput.value;
    const year = yearInput.value;
    const fuel = fuelSelector.value;
    const cost = originalCost.value;
    const price = sellingPrice.value;

    const tr = document.createElement("tr");
    tr.setAttribute("class", "row");

    const td1 = document.createElement("td");
    td1.textContent = make;
    const td2 = document.createElement("td");
    td2.textContent = model;
    const td3 = document.createElement("td");
    td3.textContent = year;
    const td4 = document.createElement("td");
    td4.textContent = fuel;
    const td5 = document.createElement("td");
    td5.textContent = cost;
    const td6 = document.createElement("td");
    td6.textContent = price;
    const td7 = document.createElement("td");

    const edit = document.createElement("button");
    edit.setAttribute("class", "action-btn edit");
    edit.textContent = "Edit";
    const sell = document.createElement("button");
    sell.setAttribute("class", "action-btn sell");
    sell.textContent = "Sell";

    tableBody.appendChild(tr);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);
    tr.appendChild(td7);
    td7.appendChild(edit);
    td7.appendChild(sell);

    makeInput.value = "";
    modelInput.value = "";
    yearInput.value = "";
    fuelSelector.value = "";
    originalCost.value = "";
    sellingPrice.value = "";

    edit.addEventListener("click", () => {
      makeInput.value = make;
      modelInput.value = model;
      yearInput.value = year;
      fuelSelector.value = fuel;
      originalCost.value = cost;
      sellingPrice.value = price;

      tr.remove();
    });

    sell.addEventListener("click", () => {
      sum += Number(price) - Number(cost);

      const li = document.createElement("li");
      li.setAttribute("class", "each-list");
      const span1 = document.createElement("span");
      span1.textContent = make + " " + model;
      const span2 = document.createElement("span");
      span2.textContent = year;
      const span3 = document.createElement("span");
      span3.textContent = Number(price) - Number(cost);

      carsList.appendChild(li);
      li.appendChild(span1);
      li.appendChild(span2);
      li.appendChild(span3);

      profit.textContent = sum.toFixed(2);
      tr.remove();
    });
  });
}
