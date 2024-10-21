// Stampa i numeri da 0 a 40 //

function stampa(numbers) {
  //Questa riga definisce una funzione di nome "stampa" con il parametro (numbers)//
  for (let i = 0; i <= numbers; i++) {
    //Nel ciclo "for", inizializziamo la variabile "i" con il valore 0 che servirà da contatore. Poi, la condizione del ciclo prevede l'iterazione di "i" finchè non sarà minore o uguale a (numbers). Infine, ad ogni iterazione, aggiungiamo il valore 1 scrivendo "i++"//
    console.log(i); //Durante ogni iterazione, stampiamo il risultato di "i" sulla console//
  }
}

stampa(40); // Per visualizzare l'output sulla console //
