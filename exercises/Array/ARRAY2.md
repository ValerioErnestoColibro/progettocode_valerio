//Dato un array di numeri, filtra SOLO i numeri dispari maggiori di 3//

const numbers = [1, 2, 3, 4, 5, 6, 7, 23];

function onFilter(e) {
if (e >= 3 && e % 2 !== 0) return true
else return false
}

numeri.filter(onFilter)

//Prendi una funzione, la nomini e le assegni un parametro, apri graffe, se parametro maggiore o uguale a 3 & l'elemento dell'array restituisce modulo 0 allora vero, altrimenti falso, poi chiude graffe. Infine scrivi nomearray.proprietà(in questo caso .filter perchè agisci SOLO SU ALCUNI elementi dell'array)(nomefunzione)//
