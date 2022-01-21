///////////////////////////DECLARATION DES VARIABLES PORTEE GLOBALE//////////////////////////////////////////////////////////////////
var mail = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/; //AFFECTATION DU REGEXP EMAIL A LA VAR MAIL
var inputs = document.getElementById("subMail");                                //BOUTON D ENVOI


inputs.addEventListener('click', validate);                                     // EVENT CLICK SUR INPUTS DECLENCHE FCT VALIDATE()

function validate()
{
    ///////////////////////////DECLARATION DES VARIABLES PORTEE LOCALE//////////////////////////////////////////////////////////////////
    var zoneMail = document.getElementById("mail").value;                      
    var txtInput = document.getElementById("inscription");
    var txtInput2 = document.getElementById("inscription2");

    console.log(txtInput);
    console.log(txtInput2);

    //////////////////ENTREE CONDITION SI VALEUR MAIL RECONNUE ET SI VALEUR DES INPUTS TEXT DIFFERENTS DE RIEN ET DIFFERENTS DE "veuillez entrer une saisie"///////
    if (zoneMail.match(mail) && txtInput.value != "" && txtInput.value != "veuillez entrer une saisie" && txtInput2.value != "" && txtInput2.value != "veuillez entrer une saisie" )
    {
        window.location.replace("motDePasseA.html");  // REDIRECTION DE L URL SI CONDITION == TRUE
    }
    else
    {
    txtInput.value = "veuillez entrer une saisie";  // AFFICHER VEUILLEZ... SI CONDITION == FALSE
    txtInput2.value = "veuillez entrer une saisie";
    }

}