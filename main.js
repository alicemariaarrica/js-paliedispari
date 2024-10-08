//Palidroma
//Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma
//Pari e Dispari
//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.
//Consigli del giorno
//Scriviamo sempre in italiano i passaggi che vogliamo fare
//Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.


let parola = prompt("Inserisci una parola:");

function Palindroma(parola) {
    for (let i = 0; i < parola.length / 2; i++) {
        if (parola[i] !== parola[parola.length - 1 - i]) {
            return false;
        }
    }
    return true; 
}

if  (Palindroma(parola)) {
    console.log("è un palindromo");
} else {
    console.log("non è un palindromo");
}

