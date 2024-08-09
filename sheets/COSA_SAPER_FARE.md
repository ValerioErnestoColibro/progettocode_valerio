**COSA SAPER FARE**

_GIT_
permette di versionare il codice con dei comandi (git init per inizializzare la repository, clone per clonare il file di git , checkout + nome branch per spostarsi su un altro branch/ -b nomebranch per creare un nuovo branch e andare lì/ + nomefile per scartare le modifiche, reset + codicefile per tornare indietro con le modifiche, pull per scaricare gli aggiornamenti della repository in locale, push origin nomebranch per quando avete settato il branch, add + nomefile per tracciare le modifiche; commit -m "nomefile" per confermare le modifiche/commit (e basta) per scrivere il commit su varie righe; status; log per vedere lo storico dei commit; merge + nomebranch per unire due branch/merge commit per mantenere la storia del commit intatta e crea un nuovo commit/sqash/rebase + nomebranch per prendere le modifiche da un branch e riapplica i commit; stash per aggiungere SOLO le modifiche aggiunte/stash apply per applicare le ultime modifiche; branch per visualizzare la lista dei branch; remote add + nomeURLremoto/remote remove nomeURLremoto; fetch per scaricare le modifiche ma non applicarle; restore + nomefile per scartare le modifiche al file (tipo checkout); diff + hashcommit per vedere le modifiche fatte sul commit/+ nomebranch per vedere le modifiche fatte sul branch)

_Markdown_

- Linguaggio di markup poichè si usano dei simboli;
- Il formato ".md" è usato per file con SOLO markdown;
- Il formato ".mdx" comprende sia markdown che codice HTML;

_HTML_

- Linguaggio di markup tramite tag inclusi tra simbolo maggiore e minore;
- Apribile tramite il browser che renderizza il codice in DOM;
- DOM (document object model) trasforma il codice html in un modello;
- Il DOM è anche una rappresentazione grafica (detto "a nodi") del codice HTML;
- In "head" mettiamo le metainformazioni ossia dati non visualizzabili nella pagina (lingua, ecc.) e i codici CSS per aiutare il rendering dall'alto verso il basso. Tutto ciò è bloccante per il tag "body";
- Dentro il "body" c'è il "div" con i suoi attributi. NON METTERE QUI IL CSS per difetti di visualizzazione dei codici. Qui mettiamo anche i codici javascript poichè ci sono operazioni da fare DOPO il rendering della pagina. Si può anche mettere dentro "head" per fare operazioni PRIMA del rendering (esempio: dom content loaded);
- In HTML per connettere Javascript usiamo sia "Document" per accedere direttamente al documento, e "Window" per accedere SOLO agli elementi e alla proprietà del browser;
- In "Document" si usa il metodo "addEventListener" con due parametri: una stringa che contiene il nome dell'evento (click, submit, ecc.) e poi il nome della funzione da eseguire; "getElementByID" è un metodo con un parametro: una stringa che contiene il nome dell'elemento;
-

_CSS_

-

_Javascript_

- La funzione ha un nome, dei parametri e restituisce un risultato (detto "nodo HTML" con proprietà come "textcontent=" che prende il testo schiaffandolo senza rendering, "innerHTML=" che passa il testo nel browser, "style=" è un oggetto che contiene al suo interno tutte le classi CS );
- Se la funzione restituisce qualcosa, si assegna ad una variabile;
- OOP, caratteristiche: Polimorfismo, Ereditarietà, Astrazione(cercare le caratteristiche di un oggetto reale definendo un modello e poi usando i metodi per parametrizzare l'oggetto nel coding), Incapsulamento (si nascondono proprietà e metodi con il cancelletto #);
- Client/Server (per javascript si usa nodejs);
- Classi/Oggetti (inteso come istanza di una classe);
- Classi: proprietà, metodi (un esempio è "super" che ci permette di ereditare gli elementi di un'altra classe già esistente), costruttore (inteso come funzione ed eseguito quando istanzi una classe)

_Business Logic vs UI_

- Qui si inserisce un terzo elemento che è la Connection, ossia una linea di mezzo tra i due elementi;
