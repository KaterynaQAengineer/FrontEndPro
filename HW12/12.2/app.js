// events
"use strict";

const container = document.getElementById("buttonContainer");
const message = document.getElementById("message");

container.addEventListener("click", function (event) {
  if (event.target.tagName === "BUTTON") {
    message.textContent = "Clicked on: " + event.target.textContent;
  }
});
