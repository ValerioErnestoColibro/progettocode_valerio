function replaceElement() {
  var newDiv = document.createElement("div"); //Creiamo un nuovo elemento div//
  newDiv.id = "newElement";
  newDiv.textContent = "Questa è la nuova scritta";
  var parent = document.getElementById("oldElement").parentNode; //Otteniamo il riferimento all'elemento padre//
  var oldElement = document.getElementById("oldElement"); //Otteniamo il riferimento all'elemento da sostituire//
  parent.replaceChild(newDiv, oldElement); //Sostituiamo l'elemento vecchio con quello nuovo//
}
