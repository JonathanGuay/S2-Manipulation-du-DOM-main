const panier = {
    pommes : 2,
    poires : 5,
    prunes : 0,
}

// Pour afficher le nombre de pommes dans la facture détaillée
document.querySelector("#qtePommes").textContent = panier.pommes;
document.querySelector("#qtePoires").textContent = panier.poires;
document.querySelector("#qtePrunes").textContent = panier.prunes;

function ajouterPomme(){

    let nouveauPrice = document.getElementById("PriceApple").value;

    let nouveauWeight = document.getElementById("WeightApple").value;

    let nouveauquantite = document.getElementById('qtePommes').value;

    nouveauquantite = nouveauquantite + 1;

    let prix = prix + nouveauPrice;

    let poids = poids + nouveauWeight;

    prix.innerText = nouveauPrice + " $";

    poids.innerText = +nouveauWeight + " lbs"

    document.getElementById("prixPommes").append(prix);

    document.getElementById("qtePommes").append(nouveauquantite);

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
varGlobale = "globale";

//Une fonction
function uneFonction() {
    var varLocale = "locale";
}

//Un bloc
{
    console.log(varBloc);
    let varBloc = "x";
    varBloc = "bloc";
}

console.log(uneChaine);
 var uneChaine = "var c'est mal";

//Appels à la console
console.log(varBloc);
console.log(varGlobale);
console.log(varLocale);