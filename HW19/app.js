const urls = {
  people: "https://swapi.dev/api/people/",
  planets: "https://swapi.dev/api/planets/",
  vehicles: "https://swapi.dev/api/vehicles/",
};

const lists = {
  people: document.getElementById("people-list"),
  planets: document.getElementById("planets-list"),
  vehicles: document.getElementById("vehicles-list"),
};

const nextUrls = {
  people: urls.people,
  planets: urls.planets,
  vehicles: urls.vehicles,
};

function loadData(type) {
  if (!nextUrls[type]) return;

  fetch(nextUrls[type])
    .then((res) => res.json())
    .then((data) => {
      showData(type, data.results);
      nextUrls[type] = data.next;

      const btn = document.querySelector(`button[data-type="${type}"]`);
      if (data.next) {
        btn.classList.remove("hidden");
      } else {
        btn.classList.add("hidden");
      }
    })
    .catch((err) => console.error(err));
}

// Функція відображення даних
function showData(type, items) {
  items.forEach((item) => {
    const li = document.createElement("li");
    li.className = "list-group-item";
    if (type === "people") li.textContent = item.name;
    if (type === "planets") li.textContent = item.name;
    if (type === "vehicles") li.textContent = item.name;

    lists[type].appendChild(li);
  });
}

document.querySelectorAll(".load-more").forEach((button) => {
  button.addEventListener("click", () => {
    const type = button.dataset.type;
    loadData(type);
  });
});
