// C'est un fichier .ts juste pour m'aider à écrire le code sans erreur.
// Ce code est du code JavaScript valide.

// JavaScript évolue avec le temps
// Et de nouvelles fonctionnalités apparaissent avec le temps
// Et aussi des syntaxes alternatives pour écrire plus rapidement
//
// Je vous donne certains exemples utiles que vous utiliserez probablement souvent
// https://quickref.me/es6.html
//
// Mais il existe beaucoup d'autres fonctionnalités modernes
//
// Ici nous voyons des syntaxes modernes ES6 (ou ES2015)
// ES = EcmaScript, qui sont les spécifications de comment doit fonctionner JavaScript
// EcmaScript a donc plusieurs versions, que les navigateurs, ou l'écosystème NodeJS se met à jour pour respecter ces spécifications
//
// Les spécifications sont décrites par l'organisation ECMA International
//
// https://fr.wikipedia.org/wiki/ECMAScript

/**
 * Interpolation de chaîne de caractères
 */

const prenom = "John";
const nom = "Doe";

// Concaténation classique avec l'opérateur +
console.log("Bonjour " + prenom + " " + nom);
// Interpolation
// Fonctionne par l'utilisation des backticks `
console.log(`Bonjour ${prenom} ${nom}`);
// On peut faire aussi du multi-lignes
console.log(`
    Bonjour
        ${prenom} ${nom}
            L'indentation (tab, espace, etc.) sera respectée si affichée
`);

/**
 * Les objets promesses pour gérer les actions asynchrones
 */

function asyncOperationA() {
  // Exemple: appel HTTP avec la méthode fetch, qui retourne un objet promesse
  const response = fetch("https://quickref.me/es6.html");
  // Cette promesse a deux méthodes principales, then et catch
  // Then, pour transmettre une fonction de rappel à exécuter quand tout s'est bien passé
  // Catch, pour transmettre une fonction de rappel à exécuter quand il y a une erreur
  response
    // Le retour de votre fonction, sera encapsulée dans une nouvelle promesse,
    .then((res) => res.text())
    // ce qui fera qu'on pourra faire du chaînage
    .then((html) => console.log(html))
    .catch((err) => console.log(err));
}

// Syntaxe alternative avec le sucre syntaxique async/await
// Une fonction comportant une opération asynchrone, doit être annotée avec le mot clé async
async function asyncOperationB() {
  try {
    // Devant une opération asynchrone, nous pouvons indiquer que nous souhaitons attendre
    // que l'opération se finisse avec le mot clé await
    const response = await fetch("https://quickref.me/es6.html");
    // Le retour de votre fonction, sera encapsulée dans une nouvelle promesse,
    // ce qui fera qu'on pourra faire du chaînage
    const html = await response.text();
    console.log(html);
  } catch (error) {
    // On encapsule d'un try-catch pour gérer l'erreur dans le cas de la syntaxe async/await
    console.log(error);
  }
}

/**
 * Décomposition (destructuring)
 */

// Affectation par décomposition
const tuple = ["Nikola", "Tesla"];
const first = tuple[0];
const second = tuple[1];

// En syntaxe moderne
// Ce n'est pas un tableau, mais la déclaration d'autants de constantes/variables
// qu'il n'y a d'éléments dans le tableau
const [firstB, secondB] = tuple;

// Ceci marche aussi pour les objets
const person = {
  firstname: "John",
  name: "Doe",
  age: 30,
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  },
};

// Au lieu de faire
console.log(person.firstname, person.name);
person.greet();

// Quand vous décomposez un tableau, on utilise les []
// Dans le cas des objets, des {}
// On peut même donner d'autres noms à nos constantes/variables comme pour name que l'on transforme en anotherNameVar
const { firstname, age, greet, name: anotherNameVar } = person;

console.log(firstname, anotherNameVar);
greet();

// On peut faire cette décomposition pour les paramètres d'une fonctions

// Au lieu de
function affichePersonneA(person) {
  console.log(person.firstname, person.name);
  person.greet();
}

affichePersonneA(person);

// On peut aussi faire
function affichePersonneB({ firstname, name, greet }) {
  console.log(firstname, name);
  greet();
}

// On passe notre tableau, ou objet en tant qu'argument
// Il sera décomposé au niveau des paramètres lors de l'exécution
affichePersonneB(person);

/**
 * Opérateur de reste ...
 */

// Lorsque l'on décompose, on souhaite peut-être créer quelques constantes/variables, et récupérer le reste
// de ce que l'on a pas décomposé en utilisant l'opérateur ...

// Par exemple
const [firstC, secondC, ...rest] = [1, 2, 3, 4, 5];
// rest sera un nouveau tableau contenant les éléments que nous n'avons pas décomposés
console.log(rest); // Affichera [3, 4, 5]

// On peut aussi le faire sur des objets
const { fruit, ...restInObjectFruit } = {
  fruit: "apple",
  color: "green",
  calory: 24,
};
console.log(restInObjectFruit); // Affichera { color: "green", calory: 24 }

// On peut utiliser l'opérateur de reste avec un paramètre d'une fonction

// Ici le cas sur un paramètre de type objet
function affichePersonneC({ firstname, name, ...rest }) {
  console.log(firstname, name);
  console.log(rest); // Affichera { age: 30, greet: [Function: greet] }
}

affichePersonneC(person);

// Mais nous pouvons aussi le faire directement sur la définition des paramètres
function f(param1, param2, ...restOfParam) {
  console.log(param1, param2, restOfParam);
}

f(1, 2, 3, 4, 5); // Affichera 1, 2 et [3, 4, 5]
// restOfParam sera un tableau contenant le reste des paramètres passés en arguments lors de l'exécution

// Cela nous permet par exemple d'écrire des fonctions avec un nombre de paramètres dynamiques
function sommeDeNombres(...nombres) {
  return nombres.reduce((a, b) => a + b, 0);
}

sommeDeNombres(1, 2); // Résultat 3
sommeDeNombres(1, 2, 3, 4, 5); // Résultat 15

/**
 * Opérateur de dispersion (spread)
 */

// Il est possible de "diffuser" le contenu d'objets ou de tableaux avec l'opérateur de diffusion ... (oui le même que l'opérateur de reste)

// Par exemple, dans la manipulation des tableaux, je vous ai montré une façon pour faire une copie dans un nouveau tableau :
const users = ["userA", "userB", "userC"];
const nouveauUsersA = users.concat(["userD", "userE"]);

// Avec l'opérateur de dispersion, nous pouvons faire la même chose de la façon suivante :
// Nous allons disperser nos valeurs dans un nouveau tableau, ici au début du tableau
const nouveauUsersB = [...users, "userD", "userE"];

// Cela marche aussi pour les objets

// Avec Object.assign nous pouvons assigner des clés/valeurs dans un nouveau objet
const animal = {
  name: "Liyo",
  color: "brown",
  age: 5,
  type: "lion",
};

// On peut, dans notre nouvel objet, remplacer des clés, en ajouter de nouvelles...
const newAnimal = Object.assign({}, animal, {
  type: "cat",
  gender: "female",
});

console.log(newAnimal); // Affichera { name: "Yoli", color: "white", age: 5, type: "lion", gender: "female" }

// Avec l'opérateur de dispersion, nous pouvons faire la même chose de la façon suivante :
const newAnimal2 = { ...animal, name: "Yoli", color: "white" };

// Il peut aussi nous servir avec les fonctions

function sum(n1, n2) {
  return n1 + n2;
}

sum(...[2, 3]); // Résultat : 5
// C'est comme écrire sum(2, 3)

/**
 * Fonctions fléchées
 */

const multiplicationA = function (a, b) {
  return a * b;
};

// Version fléchée
const multiplicationB = (a, b) => {
  return a * b;
};

// Version fléchée avec return implicite
// Quand le corps de notre fonction ne fait qu'une seule instruction, nous pouvons ignorer les { } et le mot-clé return.
const multiplicationC = (a, b) => a * b;

// Néanmoins si nous souhaitons avoir un return implicite d'un objet, il faudra l'entourer de parenthèses dans ce cas particulier
// pour que nos {} ne soient pas considérées comme le corps de notre fonction mais bien la déclaration d'un objet
const getCoordinates = () => ({ x: 0, y: 0 });

// Même chose que d'écrire
const getCoordinates2 = () => {
  return { x: 0, y: 0 };
};

/**
 * Objets Shorthand syntax
 */

// Imaginons que je souhaites créer un objet à partir de variables, dont les noms sont les mêmes
// Par exemple les coordonnées x et y
function makeCoordinateObject(x, y) {
  return {
    x: x,
    y: y,
  };
}

// Dans ce cas de figure, nous pouvons écrire une syntaxe raccourcie d'assignement d'une valeur à une clé
// C'est complètement similaire à la fonction précédente
function makeCoordinateObject2(x, y) {
  return { x, y };
}

/**
 * Modules (import / export)
 */

// Les modules dans le monde de JavaScript a une longue histoire dans laquelle plusieurs propositions ont été faites et implémentées,
// Notamment dans le monde de NodeJS qui a implémenté la notion de modules avec plusieurs syntaxes
//
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Modules
// https://dev.to/iggredible/what-the-heck-are-cjs-amd-umd-and-esm-ikm
//
// Pour le moment dans le monde de JavaScript côté navigateur, retenez que vous utiliserez la syntaxe moderne d'ECMAScript import / export
// Donc ESM, pour EcmaScript Modules
//
// Les modules permet de découper notre code en plusieurs parties, chacune d'elle pouvant être importée et utilisée dans un autre contexte
// Sans cette mécanique, nous écrirerions tout dans un seul fichier.

// Pour activer les modules dans l'environnement d'un navigateur web, vous devez ajouter type="module" à l'import du script
// <script type="module" src="main.js"></script>

// à partir d'ici vous pouvez jeter un oeil au fichier modules/calcul_math.ts

// Pour utiliser un module, il faut l'importer avec le mot-clé import
// Le nom de votre constante
// Et le chemin vers le module
//
// calculMath contiendra votre module exporté par défaut (il faut avoir fait un export default dans le fichier du module)
// Le nom du module importé est arbitraire
import calculMath from "./modules/calcul_math.ts";

// On peut donc utiliser notre module
calculMath.addition(1, 2);
calculMath.soustraction(3, 4);
calculMath.multiplication(5, 6);

// Mais si nous le souhaitons, nous pouvons aussi importer qu'une petite partie de notre module
// Tous les éléments où l'on a utilisé le mot-clé export
//
// Par exemple, j'ai choisi d'importer la fonction add et la constante pi dans mon fichier
// Mais pas les autres fonctions
//
// Vous devez utiliser les { } pour indiquer ce que vous souhaitez importer,
// Vous pouvez voir { add, pi } comme une décomposition d'un objet contenant tous nos exports
// Voir la partie sur la décomposition plus haut :)
import { add, pi } from "./modules/calcul_math.ts";

add(1, pi);
