var mail = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/;
var inputs = document.getElementById("subMail");


inputs.addEventListener('click', validate);

function validate()
{
    var zoneMail = document.getElementById("mail").value;
    var txtInput = document.getElementById("inscription");
    var txtInput2 = document.getElementById("inscription2");

    console.log(txtInput);
    console.log(txtInput2);
    if (zoneMail.match(mail) && txtInput.value != "" && txtInput.value != "veuillez entrer une saisie" && txtInput2.value != "" && txtInput2.value != "veuillez entrer une saisie" )
    {
        window.location.replace("motDePasse.html");
    }
    else
    {
    txtInput.value = "veuillez entrer une saisie";
    txtInput2.value = "veuillez entrer une saisie";
    }

}