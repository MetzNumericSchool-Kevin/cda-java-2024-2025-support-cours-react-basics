// C'est un fichier .ts juste pour m'aider à écrire le code sans erreur.
// Ce code est du code JavaScript valide.

/**
 * Quelques manipulations de tableaux qui va faire muter le tableau original
 * C'est bien le connaître, mais aujourd'hui ce n'est plus vraiment souhaitable
 * (comme d'habitude, cela dépend)
 */

const unTableau = ["helo"];
// On peut modifier un élément du tableau par son indice
unTableau[0] = "hello";

// Attention, la modification d'un élément modifie l'objet original, même en étant dans une fonction
let unTableau2 = unTableau;
unTableau2[0] = "salut";

console.log(unTableau[0]); // affichera "salut", car partage la même référence mémoire

const fruits = ["pomme", "banane"]

// Ajout d'un élément

fruits.push("orange")
console.log(fruits) // affichera ["pomme", "banane", "orange"]

fruits.unshift("kiwi")
console.log(fruits) // affichera ["kiwi", "pomme", "banane", "orange"]

// Supprimer le dernier élément

fruits.pop()
console.log(fruits) // affichera ["kiwi", "pomme", "banane"]

fruits.shift()
console.log(fruits) // affichera ["pomme", "banane"]

// Trier un tableau

fruits.sort()
console.log(fruits) // affichera ["banane", "pomme"]

// Trier avec une fonction de comparaison
const nombres = [3, 1, 8]
nombres.sort(function (a, b) {
    return a - b // Si < 0, a va avant b dans le tableau, sinon b va avant a
})
console.log(nombres) // affichera [1, 3, 8]

// Inverser un tableau
nombres.reverse()
console.log(nombres) // affichera [8, 3, 1]

/**
 * Quelques manipulation de tableaux ne mutent pas / ne partagent pas la même référence mémoire que le tableau original
 * Notez que beaucoup de méthodes de tableaux ont besoin de fonctions de rappel (callback)
 */

// Copier un tableau
const fruitsCopies = Array.from(fruits)
console.log(fruitsCopies === fruits); // affichera false, car pas la même référence mémoire

// Concaténer un tableau
const autresFruits = fruits.concat(["cerise", "framboise"]);
console.log(fruits); // affichera ["pomme", "banane"]
console.log(autresFruits); // affichera ["pomme", "banane", "cerise", "framboise"]

// ATTENTION: Les méthodes de copie/concatenation créer un nouveau tableau avec les éléments de premiers niveaux
// Si vous avez des tableau ou des objets dans le tableau copié/concaténé, ils vont être copié par référence !

// Opérer une transformation sur un tableau et le transformer en un autre tableau
const xArray = ["X", "X", "X"]
const oArray = xArray.map(function () {
    return "O";
})
console.log(oArray); // affichera ["O", "O", "O"]

// Filtrer certains éléménets d'un tableau
const onlyX = ["X", "O", "X"].filter(function (value) {
    return value === "X";
})
console.log(onlyX); // affichera ["X", "X"]

// Savoir s'il existe certains éléments dans le tableau
const hasO = ["X", "O", "X"].some(function (value) {
    return value === "O";
})
console.log(hasO) // affichera true

// Savoir si tous les éléments respectent une condition
const allAreX = ["X", "O", "X"].every(function (value) {
    return value === "X";
})
console.log(allAreX); // affichera false

// Reduire un tableau
const somme = [2, 1, 8].reduce(function (currentTotal, number) {
    return currentTotal + number;
}, 0)
console.log(somme); // affichera 11

// Il existe bien d'autres fonctionnalités sur les tableaux...
// Voir la documentation pour appronfondir