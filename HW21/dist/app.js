"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var tooltipTriggerList = document.querySelectorAll("[data-bs-title]");
  tooltipTriggerList.forEach(function (el) {
    new bootstrap.Tooltip(el);
  });
});
var alertPlaceholder = document.getElementById("liveAlertPlaceholder");
var alertBtn = document.getElementById("liveAlertBtn");

// alert
var alertBox = document.createElement("div");
alertBox.className = "alert alert-success alert-dismissible fade show d-none";
alertBox.setAttribute("role", "alert");
alertBox.innerHTML = "\n    <div>This is HW 20!</div>\n  ";
alertPlaceholder.append(alertBox);

// hidden alert
alertBtn.addEventListener("click", function () {
  alertBox.classList.toggle("d-none");
});

//momentjs
moment.locale("en");

// Show my date of birth
var myBirthday = moment("1986-06-07", "YYYY-MM-DD").format("l");
document.getElementById("myBirthday").textContent = myBirthday;

// User date of birth
document.getElementById("submitBtn").addEventListener("click", function () {
  var userInput = document.getElementById("userBirthday").value;
  var date = moment(userInput, "DD/MM/YYYY", true);
  var output = document.getElementById("output");
  if (date.isValid()) {
    output.textContent = "You date of birth: ".concat(date.format("LL"));
  } else {
    output.textContent = "Wrong format (expected DD/MM/YYYY)";
  }
});