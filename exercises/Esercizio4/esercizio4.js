var elemento = document.getElementById("testoDaCambiare"); // Serve a selezionare l'elemento da modificare //
elemento.addEventListener("click", function () {
  //Bisogna mettere il listener per fare clic sull'elemento //
  elemento.textContent = "IL TESTO E' STATO CAMBIATO!"; // Serve a cambiare il testo dell'elemento //
});
