function solve() {
  let input = document.getElementById("input");
  let output = document.getElementById("result");
  let select = document.getElementById("selectMenuTo");
  let button = document.querySelector("button");

  let binaryOption = document.createElement("option");
  binaryOption.value = "binary";
  binaryOption.textContent = "Binary";
  select.add(binaryOption);

  let hexadecimalOption = document.createElement("option");
  hexadecimalOption.value = "hexadecimal";
  hexadecimalOption.textContent = "Hexadecimal";
  select.add(hexadecimalOption);

  let options = {
    binary: (num) => num.toString(2),
    hexadecimal: (num) => num.toString(16).toUpperCase(),
    "": (num) => num,
  };

  button.addEventListener("click", () => {
    output.value = options[select.value](Number(input.value));
  });
}
