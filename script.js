const panier = {
    pommes : 0,
    poires : 0,
    prunes : 0,
}
// déclarer mes constantes
let prix = 0;
let poids = 0;
let prixPoire = 0;
let poidsPoire = 0;
let prixPrune = 0;
let poidsPrune = 0;
let nouveauPricePomme = 13.50;
let nouveauWeightPomme = 10;
let nouveauPricePoire = 20;
let nouveauWeightPoire = 12;
let nouveauPricePrune = 22;
let nouveauWeightPrune = 15;
let nouveauQteTotal = 0;
let nouveauPrixTotal = 0;
let nouveauPoidsTotal = 0;


function ajouterPomme(){
    panier.pommes = panier.pommes + 1;
    prix = prix + nouveauPricePomme;
    poids = poids + nouveauWeightPomme;
    prix.innerText = +prix + " $";
    poids.innerText = +poids + " lbs";
    document.querySelector("#poidsPommes").textContent = poids;
    document.querySelector("#prixPommes").textContent = prix;
    document.querySelector("#qtePommes").textContent = panier.pommes;

    // faire le total
    nouveauQteTotal = nouveauQteTotal + 1;
    nouveauPrixTotal = nouveauPrixTotal + nouveauPricePomme;
    nouveauPoidsTotal = nouveauPoidsTotal +nouveauWeightPomme;
    document.querySelector("#qteTotal").textContent = nouveauQteTotal;
    document.querySelector("#prixTotal").textContent = nouveauPrixTotal;
    document.querySelector("#poidsTotal").textContent = nouveauPoidsTotal;

}
function ajouterPoire(){
    panier.poires = panier.poires + 1;
    prixPoire = prixPoire + nouveauPricePoire;
    poidsPoire = poidsPoire + nouveauWeightPoire;
    prixPoire.innerText = +prixPoire + " $";
    poidsPoire.innerText = +poidsPoire + " lbs";
    document.querySelector("#poidsPoires").textContent = poidsPoire;
    document.querySelector("#prixPoires").textContent = prixPoire;
    document.querySelector("#qtePoires").textContent = panier.poires;

    // faire le total
    nouveauQteTotal = nouveauQteTotal + 1;
    nouveauPrixTotal = nouveauPrixTotal + nouveauPricePoire;
    nouveauPoidsTotal = nouveauPoidsTotal +nouveauWeightPoire;
    document.querySelector("#qteTotal").textContent = nouveauQteTotal;
    document.querySelector("#prixTotal").textContent = nouveauPrixTotal;
    document.querySelector("#poidsTotal").textContent = nouveauPoidsTotal;
}
function ajouterPrune(){
    panier.prunes = panier.prunes + 1;
    prixPrune = prixPrune + nouveauPricePrune;
    poidsPrune = poidsPrune + nouveauWeightPrune;
    prixPrune.innerText = +prixPrune + " $";
    poidsPrune.innerText = +poidsPrune + " lbs";
    document.querySelector("#poidsPrunes").textContent = poidsPrune;
    document.querySelector("#prixPrunes").textContent = prixPrune;
    document.querySelector("#qtePrunes").textContent = panier.prunes;

    // faire le total
    nouveauQteTotal = nouveauQteTotal + 1;
    nouveauPrixTotal = nouveauPrixTotal + nouveauPricePrune;
    nouveauPoidsTotal = nouveauPoidsTotal +nouveauWeightPrune;
    document.querySelector("#qteTotal").textContent = nouveauQteTotal;
    document.querySelector("#prixTotal").textContent = nouveauPrixTotal;
    document.querySelector("#poidsTotal").textContent = nouveauPoidsTotal;
}




