//Event object, Event phases, Delegation. BOM.
"use strict";
// Variable to store the link
let userLink = "";
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");

btn1.addEventListener("click", function (event) {
  userLink = prompt("Enter the URL:", "https://");
});

btn2.addEventListener("click", function (event) {
  if (userLink) {
    window.location.href = userLink;
  } else {
    alert("Enter the URL by click ");
  }
});
