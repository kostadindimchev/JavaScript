function fromJSONToHTMLTable(input) {
  let parse = JSON.parse(input);
  let entries = `\n<tr>${Object.keys(parse[0])
    .map((x) => "<th>" + x + "</th>")
    .join("")}</tr>\n`;

  for (let obj of parse) {
    entries += `<tr>${Object.values(obj)
      .map((x) => "<td>" + x + "</td>")
      .join("")}</tr>\n`;
  }

  return `<table>${entries}</table>`;
}

fromJSONToHTMLTable(`[{"Name":"Stamat",
"Score":5.5},
{"Name":"Rumen",
"Score":6}]`);
fromJSONToHTMLTable(
  fromJSONToHTMLTable(`[{"Name":"Pesho",
"Score":4,
" Grade":8},
{"Name":"Gosho",
"Score":5,
" Grade":8},
{"Name":"Angel",
"Score":5.50,
" Grade":10}]`)
);
