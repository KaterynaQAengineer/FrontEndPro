const API_URL = "http://localhost:3003/api/todos";
const form = document.getElementById("todo-form");
const list = document.getElementById("todo-list");

async function loadTodos() {
  const res = await fetch(API_URL);
  const todos = await res.json();

  list.innerHTML = "";

  todos.forEach((todo) => {
    const li = document.createElement("li");
    li.classList.add("todo-item");

    li.innerHTML = `
      <div class="todo-text">
        <strong>${todo.title}</strong><br>
        ${todo.description}<br>
        <small>${todo.priority} | ${todo.status}</small>
      </div>
      <div class="todo-actions">
        <button class="done" data-id="${todo.id}">Done</button>
        <button class="delete" data-id="${todo.id}">Delete</button>
      </div>
    `;

    list.appendChild(li);
  });
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const title = form.title.value.trim();
  const description = form.description.value.trim();
  const priority = form.priority.value;
  const status = form.status.value;

  if (!title || !description) return;

  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, description, priority, status }),
  });

  form.reset();
  loadTodos();
});

list.addEventListener("click", async (e) => {
  const id = e.target.dataset.id;
  if (!id) return;

  if (e.target.classList.contains("delete")) {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    loadTodos();
  }

  if (e.target.classList.contains("done")) {
    await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: "Done ✅" }),
    });
    loadTodos();
  }
});

loadTodos();
