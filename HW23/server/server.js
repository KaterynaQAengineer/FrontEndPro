import path from "path";
import { fileURLToPath } from "url";
import express from "express";
import cors from "cors";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3003;

app.use(cors());
app.use(express.json());


app.use(express.static(path.join(__dirname, "../client")));

let todos = [];

app.get("/api/todos", (req, res) => res.json(todos));

app.post("/api/todos", (req, res) => {
  const newTodo = { id: Date.now(), ...req.body };
  todos.push(newTodo);
  console.log("✅ Новий todo:", newTodo);
  res.status(201).json(newTodo);
});

app.delete("/api/todos/:id", (req, res) => {
  const { id } = req.params;
  const todoId = Number(id);
  const index = todos.findIndex((t) => t.id === todoId);

  if (index !== -1) {
    const deleted = todos.splice(index, 1);
    console.log("🗑️ Видалено todo:", deleted[0]);
    res.json({ message: "Todo deleted" });
  } else {
    res.status(404).json({ message: "Todo not found" });
  }
});

app.put("/api/todos/:id", (req, res) => {
  const { id } = req.params;
  const todoId = Number(id);
  const { title, description, priority, status } = req.body;

  const todo = todos.find((t) => t.id === todoId);

  if (todo) {
    if (title) todo.title = title;
    if (description) todo.description = description;
    if (priority) todo.priority = priority;
    if (status) todo.status = status;
    console.log("♻️ Оновлено todo:", todo);
    res.json(todo);
  } else {
    res.status(404).json({ message: "Todo not found" });
  }
});

app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);
