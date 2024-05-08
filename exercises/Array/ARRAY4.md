//Dato un array di numeri, calcola la somma di tutti i numeri dell'array//

const numbers = [1, 2, 3, 4, 5, 5, 200, 300];

function sommaNumeri(sum) {
numbers.reduce((accumulator, currentValue) {
return accumulator + currentValue;
}, 0) };

numbers.reduce(sommaNumeri)

//DA VERIFICARE//
