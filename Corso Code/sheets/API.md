Le API (Application Programming Interface) in JavaScript sono insiemi di funzioni, metodi, proprietà e oggetti che permettono agli sviluppatori di interagire con varie funzionalità del browser o del server. In JavaScript, le API possono essere classificate in API del browser (per eseguire operazioni all'interno del contesto del browser) e API del server (per operazioni lato server).

**API del Browser**

1. Document Object Model (DOM) API:
   La DOM API permette di manipolare il contenuto, la struttura e lo stile di una pagina web.

// Seleziona un elemento dal DOM
const heading = document.querySelector('h1');
// Modifica il testo dell'elemento
heading.textContent = 'Ciao, Mondo!';

2. Fetch API:
   La Fetch API fornisce un'interfaccia per effettuare richieste HTTP. È usata per fare richieste di rete, come ottenere dati da un server.

fetch('https://api.example.com/data')
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Errore:', error));

3. Local Storage API:
   La Local Storage API permette di memorizzare dati localmente nel browser senza una data di scadenza.

// Salvare un dato
localStorage.setItem('username', 'john_doe');
// Recuperare un dato
const username = localStorage.getItem('username');
console.log(username);

4. Geolocation API:
   La Geolocation API fornisce la posizione geografica del dispositivo.

navigator.geolocation.getCurrentPosition(
position => {
console.log('Latitudine:', position.coords.latitude);
console.log('Longitudine:', position.coords.longitude);
},
error => console.error('Errore:', error)
);

**API del server**

Per lavorare con le API lato server in JavaScript, si utilizza Node.js, un ambiente di runtime JavaScript. Ecco alcuni esempi di API del server.

1. File System (fs) API:
   La fs API permette di lavorare con il file system del server.

const fs = require('fs');

// Leggere un file
fs.readFile('path/to/file.txt', 'utf8', (err, data) => {
if (err) {
console.error(err);
return;
}
console.log(data);
});

// Scrivere su un file
fs.writeFile('path/to/file.txt', 'Hello, World!', (err) => {
if (err) {
console.error(err);
return;
}
console.log('File scritto con successo');
});

2. HTTP API:
   La http API permette di creare server HTTP.

const http = require('http');

const server = http.createServer((req, res) => {
res.statusCode = 200;
res.setHeader('Content-Type', 'text/plain');
res.end('Ciao, Mondo!\n');
});

server.listen(3000, '127.0.0.1', () => {
console.log('Server in ascolto su http://127.0.0.1:3000/');
});

3. Express:
   Express è un framework per applicazioni web che fornisce un set robusto di funzionalità per le applicazioni web e mobili.

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
res.send('Ciao, Mondo!');
});

app.listen(port, () => {
console.log(`Server in ascolto su http://localhost:${port}`);
});

Conclusione
Questi sono solo alcuni esempi di API in JavaScript. La potenza di JavaScript risiede nella sua capacità di interagire sia con il browser che con il server, rendendolo uno strumento versatile per lo sviluppo web completo (full-stack). Sfruttare queste API permette di costruire applicazioni ricche di funzionalità e interattive.
