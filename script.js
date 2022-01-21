// /////////////////INPUTS DE CHAQUE FORMULAIRE BY ID////////////////////////////////////////////////////////////////////////////////////////////
var subFr = document.getElementById("francais");
var subFr2 = document.getElementById("francais2");
var subFr3 = document.getElementById("francais3");
var subFr4 = document.getElementById("francais4");
var subEtr = document.getElementById("etranger");
var subEtr2 = document.getElementById("etranger2");
var subEtr3 = document.getElementById("etranger3");
var subEtr4 = document.getElementById("etranger4");
var subDoc = document.getElementById("docu");
var subDoc2 = document.getElementById("docu2");
var subDoc3 = document.getElementById("docu3");
var subDoc4 = document.getElementById("docu4");
var subBio = document.getElementById("bio");
var subBio2 = document.getElementById("bio2");
var subBio3 = document.getElementById("bio3");
var subBio4 = document.getElementById("bio4");
// /////////////////DIVS POUR AFFICHER GAGNANTS////////////////////////////////////////////////////////////////////////////////////////////
var style1 = document.getElementById("style1");
var style2 = document.getElementById("style2");
var style3 = document.getElementById("style3");
var style4 = document.getElementById("style4");

var illu1 = document.getElementById("illu1");
var illu2 = document.getElementById("illu2");
var illu3 = document.getElementById("illu3");
var illu4 = document.getElementById("illu4");

var mEp1 = document.getElementById("mEp1");
var mEp2 = document.getElementById("mEp2");
var mEp3 = document.getElementById("mEp3");
var mEp4 = document.getElementById("mEp4");

var emo1 = document.getElementById("emo1");
var emo2 = document.getElementById("emo2");
var emo3 = document.getElementById("emo3");
var emo4 = document.getElementById("emo4");
// /////////////////INPUTS NUMBER POUR NOTES DU JURY DE CHAQUE FORMULAIRE BY CLASS////////////////////////////////////////////////////////////////////////////////////////////
var inputs = document.querySelectorAll(".fr");
var inputs1 = document.querySelectorAll(".etr");
var inputs2 = document.querySelectorAll(".dc");
var inputs3 = document.querySelectorAll(".bi");
var inputs4 = document.querySelectorAll(".fr2");
var inputs5 = document.querySelectorAll(".etr2");
var inputs6 = document.querySelectorAll(".dc2");
var inputs7 = document.querySelectorAll(".bi2");
var inputs8 = document.querySelectorAll(".fr3");
var inputs9 = document.querySelectorAll(".etr3");
var inputs10 = document.querySelectorAll(".dc3");
var inputs11 = document.querySelectorAll(".bi3");
var inputs12 = document.querySelectorAll(".fr4");
var inputs13 = document.querySelectorAll(".etr4");
var inputs14 = document.querySelectorAll(".dc4");
var inputs15 = document.querySelectorAll(".bi4");
// /////////////////VARIABLES DES NOTES MAX POUR CHAQUE FORMULAIRE////////////////////////////////////////////////////////////////////////////////////////////
var noteMax = 0;
var noteMax2 = 0;
var noteMax3 = 0;
var noteMax4 = 0;
var noteMax5 = 0;
var noteMax6 = 0;
var noteMax7 = 0;
var noteMax8 = 0;
var noteMax9 = 0;
var noteMax10 = 0;
var noteMax11 = 0;
var noteMax12 = 0;
var noteMax13 = 0;
var noteMax14 = 0;
var noteMax15 = 0;
// /////////////////DIV POUR INSCRIRE LE NOM DU LIVRE VAINQUEUR////////////////////////////////////////////////////////////////////////////////////////////
var winner ="";
// /////////////////EVENTS DECLENCHEURS DES FONCTIONS////////////////////////////////////////////////////////////////////////////////////////////
subFr.addEventListener("click",update);
subEtr.addEventListener("click",update1);
subDoc.addEventListener("click",update2);
subBio.addEventListener("click",update3);
subFr2.addEventListener("click",update4);
subEtr2.addEventListener("click",update5);
subDoc2.addEventListener("click",update6);
subBio2.addEventListener("click",update7);
subFr3.addEventListener("click",update8);
subEtr3.addEventListener("click",update9);
subDoc3.addEventListener("click",update10);
subBio3.addEventListener("click",update11);
subFr4.addEventListener("click",update12);
subEtr4.addEventListener("click",update13);
subDoc4.addEventListener("click",update14);
subBio4.addEventListener("click",update15);

// /////////////////FONCTIONS////////////////////////////////////////////////////////////////////////////////////////////

function update()
{
    console.log(inputs);
    var notes = [inputs[0].value, inputs[1].value, inputs[2].value];
    console.log(notes);

    for (i = 0; i <= notes.length; i ++)
    {
        if (notes[i] > noteMax)
            {
                noteMax = notes[i];
                if (notes[i] == notes[0])
                {
                    winner = "l'art de l'ecriture";
                }
                else
                    if (notes[i] == notes[1])
                    {
                        winner = "l'ennui en lisant";
                    }
                    else
                    {
                        winner = "Les cris de la nuit";
                    }
            }
        
        
    }
    style1.innerHTML =  "Meilleur Style français " + winner + " avec une note de " + noteMax ;
}

function update1()
{
    console.log(inputs1);
    var notes = [inputs1[0].value, inputs1[1].value, inputs1[2].value];
    console.log(notes);

    for (i = 0; i <= notes.length; i ++)
    {
        if (notes[i] > noteMax2)
            {
                noteMax2 = notes[i];
                if (notes[i] == notes[0])
                {
                    winner = "Hello";
                }
                else
                    if (notes[i] == notes[1])
                    {
                        winner = "Goodbye";
                    }
                    else
                    {
                        winner = "Harry Dotter";
                    }
            }
        
        
    }
    style2.innerHTML = "Meilleur Style Etranger : "+ winner +" avec une note de "+ noteMax2;
}

function update2()
{
    console.log(inputs2);
    var notes = [inputs2[0].value, inputs2[1].value, inputs2[2].value];
    console.log(notes);

    for (i = 0; i <= notes.length; i ++)
    {
        if (notes[i] > noteMax3)
            {
                noteMax3 = notes[i];
                if (notes[i] == notes[0])
                {
                    winner = "La vie des vis";
                }
                else
                    if (notes[i] == notes[1])
                    {
                        winner = "Station BP";
                    }
                    else
                    {
                        winner = "Un cerf ça sert";
                    }
            }
        
        
    }
    style3.innerHTML = "Meilleur Documentaire : "+ winner +" avec une note de "+ noteMax3;
}

function update3()
{
    console.log(inputs3);
    var notes = [inputs3[0].value, inputs3[1].value, inputs3[2].value];
    console.log(notes);

    for (i = 0; i <= notes.length; i ++)
    {
        if (notes[i] > noteMax4)
            {
                noteMax4 = notes[i];
                if (notes[i] == notes[0])
                {
                    winner = "Une vie sans But";
                }
                else
                    if (notes[i] == notes[1])
                    {
                        winner = "Sans le singe vert";
                    }
                    else
                    {
                        winner = "Hasta la Pugnetas";
                    }
            }
        
        
    }
    style4.innerHTML = "Meilleure Biographie : "+ winner +" avec une note de "+ noteMax4;
}

function update4()
{
    console.log(inputs4);
    var notes = [inputs4[0].value, inputs4[1].value, inputs4[2].value];
    console.log(notes);

    for (i = 0; i <= notes.length; i ++)
    {
        if (notes[i] > noteMax5)
            {
                noteMax5 = notes[i];
                if (notes[i] == notes[0])
                {
                    winner = "L'art de l'ecriture";
                }
                else
                    if (notes[i] == notes[1])
                    {
                        winner = "L'ennui en lisant";
                    }
                    else
                    {
                        winner = "Les cris de la nuit";
                    }
            }
        
        
    }
    illu1.innerHTML = "Meilleure illustration française : "+ winner +" avec une note de "+ noteMax5;
}

function update5()
{
    console.log(inputs5);
    var notes = [inputs5[0].value, inputs5[1].value, inputs5[2].value];
    console.log(notes);

    for (i = 0; i <= notes.length; i ++)
    {
        if (notes[i] > noteMax6)
            {
                noteMax6 = notes[i];
                if (notes[i] == notes[0])
                {
                    winner = "Hello";
                }
                else
                    if (notes[i] == notes[1])
                    {
                        winner = "Goodbye";
                    }
                    else
                    {
                        winner = "Harry Dotter";
                    }
            }
        
        
    }
    illu2.innerHTML = "Meilleure illustration etrangere : "+ winner +" avec une note de "+ noteMax6;
}

function update6()
{
    console.log(inputs6);
    var notes = [inputs6[0].value, inputs6[1].value, inputs6[2].value];
    console.log(notes);

    for (i = 0; i <= notes.length; i ++)
    {
        if (notes[i] > noteMax7)
            {
                noteMax7 = notes[i];
                if (notes[i] == notes[0])
                {
                    winner = "La vie des vis";
                }
                else
                    if (notes[i] == notes[1])
                    {
                        winner = "Station BP";
                    }
                    else
                    {
                        winner = "Un cerf ça sert";
                    }
            }
        
        
    }
    illu3.innerHTML = "Meilleure Biographie : "+ winner +" avec une note de "+ noteMax7;
}

function update7()
{
    console.log(inputs7);
    var notes = [inputs7[0].value, inputs7[1].value, inputs7[2].value];
    console.log(notes);

    for (i = 0; i <= notes.length; i ++)
    {
        if (notes[i] > noteMax8)
            {
                noteMax8 = notes[i];
                if (notes[i] == notes[0])
                {
                    winner = "Une vie sans But";
                }
                else
                    if (notes[i] == notes[1])
                    {
                        winner = "Sans le singe vert";
                    }
                    else
                    {
                        winner = "Hasta la Pugnetas";
                    }
            }
        
        
    }
    illu4.innerHTML = "Meilleure Biographie : "+ winner +" avec une note de "+ noteMax8;
}

function update8()
{
    console.log(inputs8);
    var notes = [inputs8[0].value, inputs8[1].value, inputs8[2].value];
    console.log(notes);

    for (i = 0; i <= notes.length; i ++)
    {
        if (notes[i] > noteMax9)
            {
                noteMax9 = notes[i];
                if (notes[i] == notes[0])
                {
                    winner = "l'art de l'ecriture";
                }
                else
                    if (notes[i] == notes[1])
                    {
                        winner = "l'ennui en lisant";
                    }
                    else
                    {
                        winner = "Les cris de la nuit";
                    }
            }
        
        
    }
    mEp1.innerHTML = "Meilleure Biographie : "+ winner +" avec une note de "+ noteMax9;
}

function update9()
{
    console.log(inputs9);
    var notes = [inputs9[0].value, inputs9[1].value, inputs9[2].value];
    console.log(notes);

    for (i = 0; i <= notes.length; i ++)
    {
        if (notes[i] > noteMax10)
            {
                noteMax10 = notes[i];
                if (notes[i] == notes[0])
                {
                    winner = "Hello";
                }
                else
                    if (notes[i] == notes[1])
                    {
                        winner = "Goodbye";
                    }
                    else
                    {
                        winner = "Harry Dotter";
                    }
            }
        
        
    }
    mEp2.innerHTML = "Meilleure Mise en page d'ouvrage etranger : "+ winner +" avec une note de "+ noteMax10;
}

function update10()
{
    console.log(inputs10);
    var notes = [inputs10[0].value, inputs10[1].value, inputs10[2].value];
    console.log(notes);

    for (i = 0; i <= notes.length; i ++)
    {
        if (notes[i] > noteMax11)
            {
                noteMax11 = notes[i];
                if (notes[i] == notes[0])
                {
                    winner = "La vie des vis";
                }
                else
                    if (notes[i] == notes[1])
                    {
                        winner = "Station BP";
                    }
                    else
                    {
                        winner = "Un cerf ça sert";
                    }
            }
        
        
    }
    mEp3.innerHTML = "Meilleure Mise en page d'ouvrage Documentaire : "+ winner +" avec une note de "+ noteMax11;
}

function update11()
{
    console.log(inputs11);
    var notes = [inputs11[0].value, inputs11[1].value, inputs11[2].value];
    console.log(notes);

    for (i = 0; i <= notes.length; i ++)
    {
        if (notes[i] > noteMax12)
            {
                noteMax12 = notes[i];
                if (notes[i] == notes[0])
                {
                    winner = "Une vie sans But";
                }
                else
                    if (notes[i] == notes[1])
                    {
                        winner = "Sans le singe vert";
                    }
                    else
                    {
                        winner = "Hasta la Pugnetas";
                    }
            }
        
        
    }
    mEp4.innerHTML = "Meilleure Mise en page dans une Biographie : "+ winner +" avec une note de "+ noteMax12;
}

function update12()
{
    console.log(inputs12);
    var notes = [inputs12[0].value, inputs12[1].value, inputs12[2].value];
    console.log(notes);

    for (i = 0; i <= notes.length; i ++)
    {
        if (notes[i] > noteMax13)
            {
                noteMax13 = notes[i];
                if (notes[i] == notes[0])
                {
                    winner = "l'art de l'ecriture";
                }
                else
                    if (notes[i] == notes[1])
                    {
                        winner = "l'ennui en lisant";
                    }
                    else
                    {
                        winner = "Les cris de la nuit";
                    }
            }
        
        
    }
    emo1.innerHTML ="Plus grande emotion procurée par un ouvrage français : "+ winner +" avec une note de "+ noteMax13;
}

function update13()
{
    console.log(inputs13);
    var notes = [inputs13[0].value, inputs13[1].value, inputs13[2].value];
    console.log(notes);

    for (i = 0; i <= notes.length; i ++)
    {
        if (notes[i] > noteMax14)
            {
                noteMax14 = notes[i];
                if (notes[i] == notes[0])
                {
                    winner = "Hello";
                }
                else
                    if (notes[i] == notes[1])
                    {
                        winner = "Goodbye";
                    }
                    else
                    {
                        winner = "Harry Dotter";
                    }
            }
        
        
    }
    emo2.innerHTML = "Plus grande emotion procurée par un ouvrage Etranger : "+ winner +" avec une note de "+ noteMax14;
}

function update14()
{
    console.log(inputs14);
    var notes = [inputs14[0].value, inputs14[1].value, inputs14[2].value];
    console.log(notes);

    for (i = 0; i <= notes.length; i ++)
    {
        if (notes[i] > noteMax15)
            {
                noteMax15 = notes[i];
                if (notes[i] == notes[0])
                {
                    winner = "La vie des vis";
                }
                else
                    if (notes[i] == notes[1])
                    {
                        winner = "Station BP";
                    }
                    else
                    {
                        winner = "Un cerf ça sert";
                    }
            }
        
        
    }
    emo3.innerHTML = "Plus grande emotion procurée par un ouvrage Documentaire : "+ winner +" avec une note de "+ noteMax15;
}

function update15()
{
    console.log(inputs15);
    var notes = [inputs15[0].value, inputs15[1].value, inputs15[2].value];
    console.log(notes);

    for (i = 0; i <= notes.length; i ++)
    {
        if (notes[i] > noteMax15)
            {
                noteMax16 = notes[i];
                if (notes[i] == notes[0])
                {
                    winner = "Une vie sans But";
                }
                else
                    if (notes[i] == notes[1])
                    {
                        winner = "Sans le singe vert";
                    }
                    else
                    {
                        winner = "Hasta la Pugnetas";
                    }
            }
        
        
    }
    emo4.innerHTML = "Plus grande émotion procuré par une oeuvre Biographique : "+ winner +" avec une note de "+ noteMax16;
}


// function update()
// {
//     var urlJury = document.location.href;
//     var urlCoupe = urlJury.split("=");  
//     var morceau1 = urlCoupe[1];
//     var morceau2 = urlCoupe[2];
//     var morceau3 = urlCoupe[3];

//     console.log(morceau1);
//     console.log(morceau2);
//     console.log(morceau3);

//     var morceauRecoup1 = morceau1.split("&");
//     var morceauRecoup2 = morceau2.split("&");
//     var morceauRecoup3 = morceau3.split("&");

//     console.log(morceauRecoup1);
//     console.log(morceauRecoup2);
//     console.log(morceauRecoup3);

//     var noteCat1 = [parseInt(morceauRecoup1[0]),parseInt(morceauRecoup2[0]),parseInt(morceauRecoup3[0])];
//     console.log(noteCat1)

//     compare();

//     function compare()
//     {
//         var noteMax = 0;
//         var winner = "";
//         for (i = 0; i <= noteCat1[2]; i++)
//         {
//             if (noteCat1[i] > noteMax)
//             {
//                 noteMax = noteCat1[i];
//                 if (noteCat1[i] == noteCat1[0])
//                 {
//                     winner = "l'art de l'ecriture"
//                 }
//                 else
//                     if (noteCat1[i] == noteCat1[1])
//                     {
//                         winner = "l'ennui en lisant"
//                     }
//                     else
//                     {
//                         winner = "Les cris de la nuit"
//                     }
//             }
//         }
        
//     }
//     alert("français : "+ winner +"avec une note de "+ noteMax);
// }
