//Dato un array di persone, trova la prima persona di età inferiore ai 18 anni//

const people = [
{ name: 'Alice', age: 25 },
{ name : 'Bob', age: 17 },
{ name: 'Charlie', age: 20}
];

function onFilter(minorenni) {
if (minorenni < 18) return true
else return false
}

people.filter(onFilter)

//Prendi una funzione, nominala e assegnale un parametro, apri graffe, se parametro.age minore di 18 ritorna vero, altrimenti ritorna falso, poi chiudi graffe. Infine scrivi Infine scrivi nomearray.proprietà(in questo caso .filter perchè agisce su TUTTI gli elementi dell'array)(nomefunzione)//
