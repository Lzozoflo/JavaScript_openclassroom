

function lancerJeu(){

    let choix = choisirPhrasesOuMots()

    if (choix === "mots") {
        // On parcourt le tableau des mots
        lancerBoucleDeJeu(listeMots, choix)
        afficherResultat(score, listeMots.length)
    } else {
        // On parcourt le tableau des mots
        lancerBoucleDeJeu(listePhrases, choix)
        afficherResultat(score, listePhrases.length)
    }

}

// Tant que l'utilisateur n'a pas saisi "mots" ou "phrases", on lui redemande de saisir un choix
function choisirPhrasesOuMots(){
    let choix
    do {
        choix = prompt("Avec quelle liste désirez-vous jouer : 'mots' ou 'phrases' ?")
    } while (choix !== "mots" && choix !== "phrases");
    return choix
}


// Affiche avec le bon format le resultat
function afficherResultat(score, listlength){
    console.log("Votre score est de " + score + " sur " + listePhrases.length)
}


function lancerBoucleDeJeu(list, idk){
    for (let i = 0; i < list.length; i++) {
        let input = prompt("Entrez la " + idk + " : " + list[i])
        if (input === list[i]) {
            score++
        }
    }    
}