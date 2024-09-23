SQL (Structured Query Language) è il linguaggio standard per la gestione e la manipolazione dei dati nei database relazionali. Utilizzato per eseguire operazioni come l'inserimento, l'aggiornamento, la cancellazione e la selezione di dati, SQL è fondamentale per interagire con sistemi di gestione di database come MySQL, PostgreSQL, Oracle, e Microsoft SQL Server.

### Comandi SQL di base

#### Selezionare dati

- **SELECT**: Utilizzato per recuperare dati da una tabella.

  ```sql
  SELECT colonne
  FROM nome_tabella
  WHERE condizioni;
  ```

  Esempio:

  ```sql
  SELECT nome, cognome
  FROM studenti
  WHERE età > 18;
  ```

#### Inserire dati

- **INSERT INTO**: Utilizzato per aggiungere nuovi record in una tabella.

  ```sql
  INSERT INTO nome_tabella (colonna1, colonna2, ...)
  VALUES (valore1, valore2, ...);
  ```

  Esempio:

  ```sql
  INSERT INTO studenti (nome, cognome, età)
  VALUES ('Mario', 'Rossi', 20);
  ```

#### Aggiornare dati

- **UPDATE**: Utilizzato per modificare dati esistenti in una tabella.

  ```sql
  UPDATE nome_tabella
  SET colonna1 = valore1, colonna2 = valore2, ...
  WHERE condizioni;
  ```

  Esempio:

  ```sql
  UPDATE studenti
  SET età = 21
  WHERE nome = 'Mario' AND cognome = 'Rossi';
  ```

#### Cancellare dati

- **DELETE FROM**: Utilizzato per rimuovere record da una tabella.

  ```sql
  DELETE FROM nome_tabella
  WHERE condizioni;
  ```

  Esempio:

  ```sql
  DELETE FROM studenti
  WHERE nome = 'Mario' AND cognome = 'Rossi';
  ```

### Creazione e gestione delle tabelle

#### Creare una tabella

- **CREATE TABLE**: Utilizzato per creare una nuova tabella.

  ```sql
  CREATE TABLE nome_tabella (
    colonna1 tipo_dato,
    colonna2 tipo_dato,
    ...
  );
  ```

  Esempio:

  ```sql
  CREATE TABLE studenti (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(50),
    cognome VARCHAR(50),
    età INT
  );
  ```

#### Modificare una tabella

- **ALTER TABLE**: Utilizzato per modificare la struttura di una tabella esistente.

  ```sql
  ALTER TABLE nome_tabella
  ADD colonna tipo_dato;
  ```

  Esempio:

  ```sql
  ALTER TABLE studenti
  ADD email VARCHAR(100);
  ```

#### Cancellare una tabella

- **DROP TABLE**: Utilizzato per rimuovere una tabella dal database.

  ```sql
  DROP TABLE nome_tabella;
  ```

  Esempio:

  ```sql
  DROP TABLE studenti;
  ```

### Comandi avanzati

#### Unire tabelle

- **JOIN**: Utilizzato per combinare righe da due o più tabelle, basandosi su una condizione correlata tra di esse.

  - **INNER JOIN**: Restituisce le righe quando c'è una corrispondenza in entrambe le tabelle.

    ```sql
    SELECT colonne
    FROM tabella1
    INNER JOIN tabella2
    ON tabella1.colonna = tabella2.colonna;
    ```

  - **LEFT JOIN** (o **LEFT OUTER JOIN**): Restituisce tutte le righe dalla tabella di sinistra, e le righe corrispondenti dalla tabella di destra.
    ```sql
    SELECT colonne
    FROM tabella1
    LEFT JOIN tabella2
    ON tabella1.colonna = tabella2.colonna;
    ```

  Esempio:

  ```sql
  SELECT studenti.nome, corsi.nome_corso
  FROM studenti
  INNER JOIN iscrizioni
  ON studenti.id = iscrizioni.studente_id
  INNER JOIN corsi
  ON iscrizioni.corso_id = corsi.id;
  ```

#### Funzioni di aggregazione

- **COUNT, SUM, AVG, MAX, MIN**: Utilizzati per eseguire calcoli sui dati.

  ```sql
  SELECT COUNT(*)
  FROM nome_tabella;
  ```

  Esempio:

  ```sql
  SELECT AVG(età)
  FROM studenti;
  ```

#### Raggruppare i dati

- **GROUP BY**: Utilizzato per raggruppare righe che hanno gli stessi valori in colonne specificate in aggregati.

  ```sql
  SELECT colonna, COUNT(*)
  FROM nome_tabella
  GROUP BY colonna;
  ```

  Esempio:

  ```sql
  SELECT età, COUNT(*)
  FROM studenti
  GROUP BY età;
  ```

#### Filtrare i gruppi

- **HAVING**: Utilizzato per filtrare i gruppi dopo l'applicazione di `GROUP BY`.

  ```sql
  SELECT colonna, COUNT(*)
  FROM nome_tabella
  GROUP BY colonna
  HAVING COUNT(*) > 1;
  ```

  Esempio:

  ```sql
  SELECT età, COUNT(*)
  FROM studenti
  GROUP BY età
  HAVING COUNT(*) > 2;
  ```

### Sicurezza e autorizzazioni

#### Creare utenti e concedere privilegi

- **CREATE USER**: Utilizzato per creare un nuovo utente.

  ```sql
  CREATE USER nome_utente WITH PASSWORD 'password';
  ```

- **GRANT**: Utilizzato per concedere privilegi a un utente.

  ```sql
  GRANT permessi
  ON nome_tabella
  TO nome_utente;
  ```

  Esempio:

  ```sql
  GRANT SELECT, INSERT ON studenti TO nome_utente;
  ```

### Conclusione

SQL è un linguaggio potente e versatile per la gestione dei database. Con una solida comprensione dei comandi di base e avanzati, è possibile eseguire una vasta gamma di operazioni sui dati, dalle semplici query di selezione ai complessi join e aggregazioni.
