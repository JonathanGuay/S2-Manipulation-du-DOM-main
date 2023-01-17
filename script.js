const panier = {
    pommes : 2,
    poires : 5,
    prunes : 0,



}

// Pour afficher le nombre de pommes dans la facture détaillée
document.querySelector("#qtePommes").textContent = panier.pommes;

function ajouterPomme(){

    var nouveauPrice = document.getElementById("PriceApple").value;

    var nouveauWeight = document.getElementById("WeightApple").value;

    let quantite = quantite + 1;

    quantite = document.createElement("qtePommes");

    let poids = document.createElement("poidsPommes");

    let prix = document.createElement("prixPommes");

    prix.innerText = nouveauPrice + " $";

    poids.innerText = nouveauWeight + " lbs"

    document.getElementById("prixPommes").append(prix);

    prix.append(poids);   // mettre le span a la fin

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