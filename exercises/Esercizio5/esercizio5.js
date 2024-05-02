var elemento = document.getElementById("elementoDaCliccare"); //Identifica l'elemento da cambiare//
elemento.addEventListener("click", function () {
  //Si mette un listener per il clic sull'elemento//
  elemento.classList.add("testoModificato"); //Si aggiunge la classe al clic, NON il testo//
});
