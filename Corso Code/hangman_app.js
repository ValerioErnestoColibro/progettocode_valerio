/** @format */

const keyword = 'testardi'; /** prima variabile: la parola da indovinare */
let numOfAttempts = 10; /** seconda variabile: i tentativi */
const characters = []; /** Array da riempire con le lettere indovinate */

function test(character) {
if (numbOfAttempts === 0) return "HAI PERSO!";

  if (keyword.includes(character)) {
    /** Se la parola chiave include gli elementi che vanno a riempire l'array di characters */
  if (charactersDiscovered.push = charactersDiscovered.push(character)) return "LETTERA GIA' INSERITA"; /** Mostra la lettera giusta */
  } else
    numOfAttempts = numOfAttempts - 1; /** Altrimenti diminuisci il numero di tentativi - 1 */

  const keywordArray = keyword.split('');
  const discoveredWord = keywordArray,map(function(ch){
if (charactersDiscovered.includes(ch)) return ch;
return '*';
  });  
return `${discoveredWord.join('');} TENTATIVI RIMASTI: ${numbOfAttempts}`;
}
