const form = document.querySelector("form");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // не відправляємо форму на сервер

  // Дані з форми
  const name = document.getElementById("name").value;
  const lastName = document.getElementById("lastName").value;
  const gender = document.querySelector('input[name="gender"]:checked')?.value;
  const city = document.getElementById("city").value;
  const address = document.getElementById("message").value;

  // Мови (checkbox)
  const languages = Array.from(document.querySelectorAll('input[name="languages"]:checked'))
                         .map(input => input.value)
                         .join(", ");

  // Ховаємо форму
  form.style.display = "none";

  // Створюємо таблицю
  const table = document.createElement("table");
  table.style.border = "1px solid #333";
  table.style.borderCollapse = "collapse";
  table.style.marginTop = "20px";

  const data = {
    "First Name": name,
    "Last Name": lastName,
    "Gender": gender,
    "City": city,
    "Address": address,
    "Languages": languages
  };

  for (const key in data) {
    const row = document.createElement("tr");

    const cellKey = document.createElement("td");
    cellKey.textContent = key;
    cellKey.style.border = "1px solid #333";
    cellKey.style.padding = "5px";

    const cellValue = document.createElement("td");
    cellValue.textContent = data[key];
    cellValue.style.border = "1px solid #333";
    cellValue.style.padding = "5px";

    row.appendChild(cellKey);
    row.appendChild(cellValue);
    table.appendChild(row);
  }

  document.body.appendChild(table);
});
