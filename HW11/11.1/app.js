//Pythagoras table
"use strict";
const app = document.getElementById("app");
const table = document.createElement("table");

for (let i = 1; i <= 10; i++) {
  const tr = document.createElement("tr"); // create row
  for (let j = 1; j <= 10; j++) {
    const td = document.createElement("td"); // create cell
    td.textContent = i * j;
    tr.appendChild(td); // add cell to row
  }
  table.appendChild(tr); // add row to table
}

//add table to page
app.appendChild(table);

