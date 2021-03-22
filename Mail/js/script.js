// Mail
// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.

// Creare una lista di email (array)
var eMail = ["gianni@email.com", "pedro@gmail.com", "giuseppa@gmail.com", "roberto@gmail.com", "ariel@gmail.com"]
// Chiedere all'utente la sua email (prompt)
var eMailUtente = prompt("La tua email: ")
var emailTrovata = false;
// Controllare che la email inserita dall'utente sia nella lista (for)
for ( var i = 0; i < eMail.length; i++ ) {
    var indirizzo = eMail[i];
    console.log(indirizzo)

    if (eMailUtente == indirizzo) {
        emailTrovata = true;
    }
}

// Stampare l'esito della ricerca
if ( emailTrovata == true ) {
    alert("La mail inserita è corretta");
} else {
    alert("La mail inserita non è corretta");
}