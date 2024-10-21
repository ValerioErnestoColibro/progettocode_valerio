"use strict";

// Stampa i numeri da 1 a -10 //

function stampa(numero) {
  //Dichiara una funzione di nome "stampa" con il parametro (numero)//
  for (let i = 1; i >= numero; i--) {
    //Nel ciclo "for" inizializziamo la variabile "i" col valore 1 per farle fare da contatore. Poi stabiliamo che il ciclo continuerà finchè "i" non sarà maggiore o uguale al parametro (numero). Infine, ad ogni iterazione, sottrarremo il valore 1 alla variabile "i"//
    console.log(i); //Ad ogni iterazione, il valore di "i" verrà stampato nella console//
  }
}

stampa(-10); //Per visualizzare l'output sulla console//
