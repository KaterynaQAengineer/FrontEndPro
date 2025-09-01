"use strict";
let btnClicks = 0;
document.querySelector("button").addEventListener("click", () => {
  btnClicks++;
  const text = document.querySelector("#text");
  if (btnClicks % 2 === 1) {
    text.style.color = "pink";
  } else {
    text.style.color = "black";
  }
});
