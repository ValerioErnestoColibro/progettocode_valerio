// Stampa i numeri pari da 10 a 40 //

function stampa(numbers) {
  //Questa riga definisce una funzione di nome "stampa" col parametro (numbers)//
  for (let i = 10; i <= numbers; i++) {
    //Nel ciclo "for" inizializziamo la variabile "i" col valore 10 che useremo come contatore del ciclo. Poi faremo continuare il ciclo finchè "i" non sarà minore o uguale al parametro "numbers". Infine "i" verrà incrementato di 1 ad ogni iterazione//
    if (i & (2 === 0)) console.log(i); //"Se" il valore di "i" diviso per 2 restituisce il resto 0, allora stamperemo il valore di "i" nella console//
  }
}

stampa(40); //Per stampare l'output nella console//
