//Calcola la somma di tutti i numeri dell'array//

const numbers = [1, 2, 3, 4, 5];

const somma = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
//Costante perchè il valore non cambia, metodo "reduce()" per fare un'operazione con accumulatore//
//Dichiarare accumulatore e valore corrente, dunque (=>) sommare entrambi dando come valore 0 all'accumulatore//

console.log(somma); //Stampa il console.log della costante nella console//
