var cognomi = ['Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'];

var cognUtente = prompt("Inserisci il tuo cognome.");
cognUtente = cognUtente.charAt(0).toUpperCase() + cognUtente.slice(1);
cognomi.push(cognUtente);
cognomi = cognomi.sort();

var i = 0;
while (cognUtente != cognomi[i]) {
    i++;
}

document.getElementById("text").innerHTML = cognomi + "</br> Il tuo cognome è il numero " + (i+1) + " nella lista.";
