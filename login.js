var input = document.getElementById("log")
var txtInput = document.getElementById("txt");
var zoneMail = document.getElementById("zoneMail");
var zoneMdp = document.getElementById("zoneMdp");


var mail = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/;
var jury = 'jury1970'; 
var auteur = 'auteur1991';
var mp = [jury,auteur];
console.log(mp);
console.log(jury);
console.log(txtInput);
console.log(input);

{

input.addEventListener('click', verif );

}

function verif()
{ 
    var txtMail = document.getElementById("mail").value;
    console.log(txtInput.value);
    console.log(mp.length);
    // if (txtInput.value == jury)


    if (txtMail.match(mail) && txtInput.value == jury)
    {
        window.location.replace("jury.html");
    }
    else 
        if (txtMail.match(mail) && txtInput.value == auteur)
        {
            window.location.replace("auteur.html");
        }
        else 
            if (!txtMail.match(mail))
            {
                zoneMail.innerHTML = "adresse mail incorrecte";
            }
                else
                {
                    zoneMail.innerHTML = "adresse mail reconnue";
                }
    for ( i = 0 ; i < mp.length ; i ++)
    {
        if (txtInput.value == mp[i])
        {
            zoneMdp.innerHTML = "mot de passe reconnu";
            i = 4;
        }
        else
        {
            zoneMdp.innerHTML = "mot de passe incorrect";
        }
    }

    
            // if (txtInput.value != jury || auteur)
            // {

            //     zoneMdp.innerHTML = "mot de passe incorrect";
            // }
            //     else
            //         {
            //             txtInput.value = "mot de passe reconnu";
            //         }

                 
            
}