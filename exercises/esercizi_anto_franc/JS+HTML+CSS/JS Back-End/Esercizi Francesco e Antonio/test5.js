// Stampa i numeri dispari da 30 a 70, associa ad ogni numero la scritta "fizz" //

function stampa(numbers) {
  // Questa riga dichiara la funzione di nome "stampa" con il parametro (numbers)//
  for (let i = 30; i <= numbers; i++) {
    //Nel ciclo "for" dichiariamo che la variabile "i" ha valore 30. Poi che il ciclo si ripeterà finchè "i" non sarà minore o uguale al parametro "numbers". Infine, ad ogni ciclo, "i" verrà incrementato di 1//
    if (i % 2 === 1) {
      //"Se" il valore di "i" diviso per 2 restituisce un resto con modulo 1, allora ritorna il risultato (qui omesso perchè sottinteso)//
      console.log(i, "fixx"); //Stampa sulla console il risultato di "i" ed anche la scritta "fizz"//
    }
  }
}

stampa(70); //Stampa sulla console l'output finale//
