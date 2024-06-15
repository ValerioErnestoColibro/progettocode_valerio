//Trova l'indice della prima persona con l'età compresa tra 18 e 24 anni//

const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 20 },
];

const index = people.findIndex(
  (person) => person.age >= 18 && person.age <= 24
);
//Dichiariamo una nuova costante di nome "index", poi scriviamo nomeprimacostante.findnomesecondacostante per iterare l'array "people"//
//Infine stabiliamo che l'elemento (che noi chiamiamo "person") deve attaccarsi all'elemento "age" compreso tra 18 e 24//

console.log(index); //Poi stampi il console.log della NUOVA costante che darà come risultato 2 per la posizione del dato dentro l'array//
