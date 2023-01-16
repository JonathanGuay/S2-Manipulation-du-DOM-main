const panier = {
    pommes : 2,
    poires : 0,
    prunes : 0,



}

// Pour afficher le nombre de pommes dans la facture détaillée
document.querySelector("#qtePommes").textContent = panier.pommes;

function ajouterPomme(){
    var item = document.getElementById("row").value;         // ajouter le texte

    var valeur = document.getElementById("valeur").value;     // ajouter le prix

    let nouveauP = document.createElement("td");              // créer une balise p

    let nouveauSpan = document.createElement("span");

    nouveauP.innerText = item + " : ";                // Écrire dans le paragraphe

    nouveauSpan.innerText = valeur + "$";

    document.getElementById("maListe").append(nouveauP);

    nouveauP.append(nouveauSpan);   // mettre le span a la fin
}
function ajouterPoire(){
    var item = document.getElementById("row").value;         // ajouter le texte

    var valeur = document.getElementById("valeur").value;     // ajouter le prix

    let nouveauP = document.createElement("td");              // créer une balise p

    let nouveauSpan = document.createElement("span");

    nouveauP.innerText = item + " : ";                // Écrire dans le paragraphe

    nouveauSpan.innerText = valeur + "$";

    document.getElementById("maListe").append(nouveauP);

    nouveauP.append(nouveauSpan);   // mettre le span a la fin
}
function ajouterPrune(){
    var item = document.getElementById("row").value;         // ajouter le texte

    var valeur = document.getElementById("valeur").value;     // ajouter le prix

    let nouveauP = document.createElement("td");              // créer une balise p

    let nouveauSpan = document.createElement("span");

    nouveauP.innerText = item + " : ";                // Écrire dans le paragraphe

    nouveauSpan.innerText = valeur + "$";

    document.getElementById("maListe").append(nouveauP);

    nouveauP.append(nouveauSpan);   // mettre le span a la fin
}