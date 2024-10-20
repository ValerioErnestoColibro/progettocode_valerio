function login() {
  //Funzione di Log In
  const username = document.getElementById("username").value; //Salva in una costante il valore di "username"//
  const password = document.getElementById("password").value; //Salva in una costante il valore di "password"//

  if (username === "user" && password === "password") {
    //Condizione: se corrisponde a "user" e "password", mostra il form di descrizione nascondendo quello di login//
    document.getElementById("loginForm").classList.add("hidden");
    document.getElementById("descriptionForm").classList.remove("hidden");
  } else {
    //Altrimenti: restituisce un alert con testo "Nome utente o password errati"
    alert("Nome utente o password errati");
  }
}

function logout() {
  //Funzione di Log Out
  document.getElementById("loginForm").classList.remove("hidden"); //Identifica l'elemento HTML tramite l'ID e rimuove la classe "hidden", rendendo visibile il form di login
  document.getElementById("descriptionForm").classList.add("hidden"); //Identifica l'elemento HTML tramite l'ID e aggiunge la classe "hidden", nascondendo il form di descrizione
  document.getElementById("output").classList.add("hidden"); //Identifica l'elemento HTML con l'ID e aggiunge la classe "hidden", nascondendo l'output della descrizione
  document.getElementById("username").value = ""; //Dopo aver preso l'ID, assegna il valore vuoto a "username" e "password"
  document.getElementById("password").value = "";
  document.getElementById("personName").value = ""; //Dopo aver preso l'ID, cancella il testo pre-inserito
  document.getElementById("adjective1").value = "";
  document.getElementById("adjective2").value = "";
  document.getElementById("adjective3").value = "";
}

function submitDescription() {
  //Funzione per inviare la descrizione della persona
  const personName = document.getElementById("personName").value; //Recupera i valori di input della descrizione
  const adjective1 = document.getElementById("adjective1").value;
  const adjective2 = document.getElementById("adjective2").value;
  const adjective3 = document.getElementById("adjective3").value;

  const description = `${personName} è ${adjective1}, ${adjective2}, e ${adjective3}.`; //Costiuisce una stringa di descrizione nel tag p del documento HTML

  document.getElementById("risultatoDescrizione").innerText = description; //Seleziona l'elemento HTML tramite il suo ID. Assegna il contenuto della variabile "description" all'attributo "innerHTML" dell'elemento selezionato. Sostiuisce il valore dell'ID "description" con quello della costante "description"
  document.getElementById("descriptionForm").classList.add("hidden"); //Dopo la selezione dell'elemento HTML tramite l'ID, aggiunge la classe "hidden" definita come "display: none" dal documento CSS
  document.getElementById("output").classList.remove("hidden"); //Dopo la selezione dell'elemento HTML tramite l'ID, rimuove la classe "hidden" rimuovendo anche l'attributo "display: none" su CSS, rendendo l'elemento visibile
}
