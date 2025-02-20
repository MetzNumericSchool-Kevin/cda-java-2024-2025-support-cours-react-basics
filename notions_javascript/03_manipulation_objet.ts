// C'est un fichier .ts juste pour m'aider à écrire le code sans erreur.
// Ce code est du code JavaScript valide.

/**
 * Quelques manipulations d'objets
 */

const voiture = {
    marque: "Ford",
    modele: "Fiesta",
    couleur: "rouge",
    klaxonner() {
        console.log("Tut tuditut!")
    },
    // Ici, fonction anonyme est affecté à la clé "allumer"
    // C'est sensiblement la même chose que la méthode klaxonner
    allumer: function () {
        console.log('Wroum!');
    },
    moteur: {
        type: "Diesel",
        puissance: 100        
    }
}

// Rappel accès aux objets

// Notation pointée (préférable)
voiture.marque; // "Ford"
voiture.moteur.type; // "Diesel"

// Notation crochet (comme les tableaux)
voiture["moteur"]["type"]; // "Diesel"

// On peut mélanger les deux notation
voiture.moteur["type"]; // "Diesel"

// L'intérêt du crochet est pour les accès dynamiques
let field = "marque"
voiture[field]; // "Ford"
field = "modele"
voiture[field]; // "Fiesta"

/**
 * Fonctions utilitaires sur les objets
 */

// Récupérer les clés d'un objet
Object.keys(voiture); // ["marque", "modele", "couleur", "klaxonner", "allumer", "moteur"]

// Récupérer les valeurs d'un objet
Object.values(voiture); // ["Ford", "Fiesta", "rouge", Function () {}, Function () {}, {type: "Diesel", puissance: 100}]

// Récupérer les entrées dans un tuple
// Rappel, un tuple N est un tableau comportant exactement N éléments fixes
// Ici, les entrées sont une liste de tuples
// Chaque élément est un tuple avec la clé de l'objet à l'indice 0 et la valeur associée à l'indice 1
Object.entries(voiture); // [["marque", "Ford"], ["modele", "Fiesta"], ["couleur", "rouge"], ["klaxonner", Function () {}], ["allumer", Function () {}], ["moteur", {type: "Diesel", puissance: 100}]]

// Beaucoup d'autres méthodes existent
// Voir la documentation sur Object pour appronfondir

/**
 * Modification d'un objet
 */

// On peut modifier une clé et lui affecter une nouvelle valeur
voiture.marque = "Toyota";

// Attention, la modification d'objet modifie l'objet original, même en étant dans une fonction
let voiture2 = voiture;
voiture2.marque = "Ford";

console.log(voiture.marque); // Affichera "Ford" alors que c'est voiture2 que l'on a modifié

/**
 * Copie d'un objet
 */

const objetSimple = {
    a: 1,
    b: 2,
    c: 3,
}

const nouvelObjet = Object.create(objetSimple);

nouvelObjet.a = 2;
console.log(objetSimple === nouvelObjet); // Affichera false, car pas la même référence mémoire

// Fusion d'objets
const nouvelObjet2 = Object.assign({}, objetSimple, { a: 2, d: 4})
console.log(nouvelObjet2) // Affichera {a: 2, b: 2, c: 3, d: 4}

// ATTENTION: Les méthodes de création/assignation créer un nouvel objet avec les éléments de premiers niveaux
// Si vous avez des tableau ou des objets dans les clés de vos objets, ils vont être copiés par référence !