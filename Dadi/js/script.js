// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. 
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// Generare numero random per il giocatore 
var numeroGiocatore = Math.floor(Math.random() * 6 ) + 1;
console.log('il numero del giocatore è: ', numeroGiocatore);

// Generare numero random per il computer
var numeroComputer = Math.floor(Math.random() * 6 ) + 1;
console.log('il numero del computer è:', numeroComputer);

// Operazioni logiche
if (numeroGiocatore > numeroComputer) {
    alert('Hai vinto!');
} else if (numeroComputer > numeroGiocatore) {
    alert('Hai Perso!');
} else {
    alert('Pari!')
}



