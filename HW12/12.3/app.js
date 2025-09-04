"use strict";

const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Add new item
addTaskBtn.addEventListener("click", function () {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    // create new item
    const li = document.createElement("li");
    li.textContent = taskText;

    //add delete button
    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    li.appendChild(delBtn);

    // add to to-do list
    taskList.appendChild(li);

    // Clearing the input field
    taskInput.value = "";
  }
});

// Delegating events to delete tasks
taskList.addEventListener("click", function (event) {
  if (event.target.tagName === "BUTTON") {
    const li = event.target.parentElement;
    taskList.removeChild(li);
  }
});
