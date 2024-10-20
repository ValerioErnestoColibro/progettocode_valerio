document.addEventListener("DOMContentLoaded", () => {
  const loginSection = document.getElementById("login-section");
  const mainSection = document.getElementById("main-section");
  const loginButton = document.getElementById("login-button");
  const logoutButton = document.getElementById("logout-button");
  const clickButton = document.getElementById("click-button");
  const counterDisplay = document.getElementById("counter");
  let counter = 0;

  // Dummy login validation
  loginButton.addEventListener("click", () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "user" && password === "password") {
      loginSection.style.display = "none";
      mainSection.style.display = "block";
    } else {
      alert("Nome utente o password errati");
    }
  });

  // Click button logic
  clickButton.addEventListener("click", () => {
    counter++;
    counterDisplay.textContent = counter;
  });

  // Logout button logic
  logoutButton.addEventListener("click", () => {
    alert(`Hai cliccato il bottone ${counter} volte`);
    counter = 0;
    counterDisplay.textContent = counter;
    mainSection.style.display = "none";
    loginSection.style.display = "block";
  });
});
