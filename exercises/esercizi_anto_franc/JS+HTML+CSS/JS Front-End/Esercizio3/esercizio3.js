document
  .getElementById("aggiungiParagrafo")
  .addEventListener("click", function () {
    // Aggiunge il gestore di eventi al bottone //
    var nuovoParagrafo = document.createElement("p"); // Aggiunge un nuovo elemento paragrafo //
    nuovoParagrafo.classList.add("new-paragraph");
    nuovoParagrafo.textContent = "Nuovo Paragrafo"; // Aggiunge testo al nuovo paragrafo //
    document.getElementById("container").appendChild(nuovoParagrafo);
  });
