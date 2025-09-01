"use strict";

const img = document.querySelector("#randomImage");
const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  // Get random number from 1 to 9
  const randomNum = Math.floor(Math.random() * 9) + 1;
  // Make the image by random
  img.setAttribute("src", `img/${randomNum}.jpg`);
});
