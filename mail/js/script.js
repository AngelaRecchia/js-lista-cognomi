var mails = ["mail1@email.com", "mail2@email.com", "mail3@email.com", "mail4@email.com", "mail5@email.com", "mail6@email.com"];

var checkMail = prompt("Inserisci la tua email per accedere");

var result = "Impossibile accedere: email non registrata."

for (i = 0; i < mails.length; i++) {
    if (checkMail == mails[i]) {
        result = "Accesso effettuato."
    }
}

document.getElementById("text").innerHTML = result;