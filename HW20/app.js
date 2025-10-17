document.addEventListener("DOMContentLoaded", function () {
  const tooltipTriggerList = document.querySelectorAll("[data-bs-title]");
  tooltipTriggerList.forEach((el) => {
    new bootstrap.Tooltip(el);
  });
});
const alertPlaceholder = document.getElementById("liveAlertPlaceholder");
const alertBtn = document.getElementById("liveAlertBtn");

// alert
const alertBox = document.createElement("div");
alertBox.className = "alert alert-success alert-dismissible fade show d-none";
alertBox.setAttribute("role", "alert");
alertBox.innerHTML = `
    <div>This is HW 20!</div>
  `;
alertPlaceholder.append(alertBox); 

// hidden alert
alertBtn.addEventListener("click", () => {
  alertBox.classList.toggle("d-none");
});

//momentjs
moment.locale("en");

// Show my date of birth
const myBirthday = moment("1986-06-07", "YYYY-MM-DD").format("l");
document.getElementById("myBirthday").textContent = myBirthday;

// User date of birth
document.getElementById("submitBtn").addEventListener("click", function () {
  const userInput = document.getElementById("userBirthday").value;
  const date = moment(userInput, "DD/MM/YYYY", true);
  const output = document.getElementById("output");

  if (date.isValid()) {
    output.textContent = `You date of birth: ${date.format("LL")}`;
  } else {
    output.textContent = "Wrong format (expected DD/MM/YYYY)";
  }
});
