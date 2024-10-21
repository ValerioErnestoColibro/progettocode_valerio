const elemento = document.getElementById("elemento"); //Seleziona l'elemento//
elemento.addEventListener("mouseenter", function () {
  //Aggiungi gestore di eventi//
  this.style.backgroundColor = "red"; //Cambia il colore dello sfondo quando il mouse entra nell'elemento//
});
elemento.addEventListener("mouseleave", function () {
  //Aggiungi un gestore di eventi//
  this.style.backgroundColor = "yellow"; //Cambia il colore di sfondo quando il mouse esce dall'elemento//
});
