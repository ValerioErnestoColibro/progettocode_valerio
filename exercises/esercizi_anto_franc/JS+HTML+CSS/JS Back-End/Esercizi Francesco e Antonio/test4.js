// Stampa i numeri pari dell'array //

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //Dichiariamo la variabile "let" di nome "array"

function onFilter(numero) {
  //Dichiariamo una funzione di nome "onFilter" col parametro (numero)//
  if (numero % 2 === 0) return true; //"Se" il parametro (numero) diviso per 2 restituisce un resto con modulo 0, allora torneremo "true"//
}

array.filter(onFilter); //Usando il metodo "filter()" sull'array e assegnandole come parametro il nome della funzione (onFilter), avremo l'output//
