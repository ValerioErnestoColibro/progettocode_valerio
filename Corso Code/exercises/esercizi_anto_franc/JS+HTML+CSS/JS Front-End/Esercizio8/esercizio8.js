var elemento = document.getElementById("elementoDaCliccare"); // Seleziona l'elemento //
elemento.addEventListener("click", function () {
  // Aggiungi un gestore di eventi per il clic //
  this.style.color = "yellow"; // Modifica la proprietà CSS al clic //
});
