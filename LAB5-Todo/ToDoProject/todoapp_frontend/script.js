const API_URL = "http://localhost:8080/api/todos";

const todoForm = document.getElementById("todo-form");
const todoTitle = document.getElementById("todo-title");
const todoList = document.getElementById("todo-list");

document.addEventListener("DOMContentLoaded", getTodos);

todoForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const newTodo = {
    title: todoTitle.value,
    completed: false,
  };

  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newTodo),
  });

  if (res.ok) {
    todoTitle.value = "";
    getTodos();
  } else {
    console.error("Failed to add task");
  }
});

// Fetch and display all todos
async function getTodos() {
  try {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error("Failed to fetch todos");

    const todos = await res.json();
    todoList.innerHTML = "";

    todos.forEach((todo) => {
      const li = document.createElement("li");
      li.classList.add("todo-item");

      // Checkbox to toggle completion
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = todo.completed;
      checkbox.addEventListener("change", () =>
        toggleComplete(todo.id, checkbox.checked)
      );

      // Title (editable visually)
      const span = document.createElement("span");
      span.textContent = todo.title;
      if (todo.completed) {
        span.style.textDecoration = "line-through";
        span.style.color = "gray";
      }

      // Edit button
      const editBtn = document.createElement("button");
      editBtn.textContent = "✏️";
      editBtn.classList.add("edit-btn");
      editBtn.addEventListener("click", () =>
        editTodoPrompt(todo.id, todo.title)
      );

      // Delete button
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "🗑️";
      deleteBtn.classList.add("delete-btn");
      deleteBtn.addEventListener("click", () => deleteTodo(todo.id));

      li.appendChild(checkbox);
      li.appendChild(span);
      li.appendChild(editBtn);
      li.appendChild(deleteBtn);

      todoList.appendChild(li);
    });
  } catch (err) {
    console.error("Error loading todos:", err);
  }
}

// Toggle completion state
async function toggleComplete(id, completed) {
  await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ completed }),
  });
  getTodos();
}

// Edit task title
async function editTodoPrompt(id, currentTitle) {
  const newTitle = prompt("Edit task:", currentTitle);
  if (newTitle && newTitle.trim() !== "") {
    await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: newTitle, completed: false }),
    });
    getTodos();
  }
}

// Delete task
async function deleteTodo(id) {
  if (confirm("Delete this task?")) {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    getTodos();
  }
}
