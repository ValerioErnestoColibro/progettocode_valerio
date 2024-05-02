document.getElementById("button").addEventListener("click", function () {
  // Prima identifica il bottone che svolgerà questa funzione, poi metti un listener in attesa di un evento //
  var elementToRemove = document.getElementById("target"); // La variabile identifica l'elemento da rimuovere dopo l'uso del bottone //
  if (elementToRemove) {
    //'if' qui è usato da solo senza 'else' //
    elementToRemove.parentNode.removeChild(elementToRemove);
  }
});
