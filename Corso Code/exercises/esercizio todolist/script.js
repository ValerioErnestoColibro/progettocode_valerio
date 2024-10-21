document.getElementById("login-button").addEventListener("click", function () {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Simple authentication (for demonstration purposes only)
  if (username === "user" && password === "password") {
    document.getElementById("login-container").style.display = "none";
    document.getElementById("todo-container").style.display = "block";
  } else {
    alert("Nome utente o Password invalidi");
  }
});

document.getElementById("add-button").addEventListener("click", function () {
  const newTodo = document.getElementById("new-todo").value;

  if (newTodo) {
    const li = document.createElement("li");
    li.textContent = newTodo;
    document.getElementById("todo-list").appendChild(li);
    document.getElementById("new-todo").value = "";
  } else {
    alert("Per favore, scrivi un elemento");
  }
});

document.getElementById("logout-button").addEventListener("click", function () {
  document.getElementById("todo-container").style.display = "none";
  document.getElementById("login-container").style.display = "block";
});
