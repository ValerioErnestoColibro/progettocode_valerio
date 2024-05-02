document.getElementById("button").addEventListener("click", function () {
  var newElement = document.createElement("div"); //Stai creando il nuovo elemento//
  newElement.textContent = "NUOVA SCRITTA";
  var oldElement = document.getElementById("target"); //Qui identifichi l'elemento da sostiuire in base al suo ID//
  var parentElement = oldElement.parentNode; //Chiedere a Riccardo//
  parentElement.replaceChild(newElement, oldElement); //Chiedere a Riccardo//
});
