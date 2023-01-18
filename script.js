const panier = {
    pommes : 2,
    poires : 5,
    prunes : 0,
}

// Pour afficher le nombre de pommes dans la facture détaillée
document.querySelector("#qtePommes").textContent = panier.pommes;
document.querySelector("#qtePoires").textContent = panier.poires;
document.querySelector("#qtePrunes").textContent = panier.prunes;

if (onclick(ajouterPomme())){
    panier.pommes = panier.pommes + 1;
}
function ajouterPomme(){

    let nouveauPrice = document.getElementById("PriceApple").value;

    let nouveauWeight = document.getElementById("WeightApple").value;

    panier.pommes = panier.pommes + 1;

    let prix = prix + nouveauPrice;

    let poids = poids + nouveauWeight;

    prix.innerText = nouveauPrice + " $";

    poids.innerText = +nouveauWeight + " lbs";

    document.getElementById("prixPommes").append(prix);

    document.getElementById("qtePommes").append(panier.pommes);

    document.getElementById("poidsPommes").append(poids);

}
function ajouterPoire(){
    var item = document.getElementById("qtePoires").value;         // ajouter le texte

    var valeur = document.getElementById("valeur").value;     // ajouter le prix

    let nouveauP = document.createElement("td");              // créer une balise p

    let nouveauSpan = document.createElement("span");

    nouveauP.innerText = item + " : ";                // Écrire dans le paragraphe

    nouveauSpan.innerText = valeur + "$";

    document.getElementById("maListe").append(nouveauP);

    nouveauP.append(nouveauSpan);   // mettre le span a la fin
}
function ajouterPrune(){
    var item = document.getElementById("qtePrunes").value;         // ajouter le texte

    var valeur = document.getElementById("valeur").value;     // ajouter le prix

    let nouveauP = document.createElement("td");              // créer une balise p

    let nouveauSpan = document.createElement("span");

    nouveauP.innerText = item + " : ";                // Écrire dans le paragraphe

    nouveauSpan.innerText = valeur + "$";

    document.getElementById("maListe").append(nouveauP);

    nouveauP.append(nouveauSpan);   // mettre le span a la fin
}
function ajouterTotal(){
    var item = document.getElementById("qtePrunes").value;         // ajouter le texte

    var valeur = document.getElementById("valeur").value;     // ajouter le prix

    let nouveauP = document.createElement("td");              // créer une balise p

    let nouveauSpan = document.createElement("span");

    nouveauP.innerText = item + " : ";                // Écrire dans le paragraphe

    nouveauSpan.innerText = valeur + "$";

    document.getElementById("maListe").append(nouveauP);

    nouveauP.append(nouveauSpan);   // mettre le span a la fin
}
