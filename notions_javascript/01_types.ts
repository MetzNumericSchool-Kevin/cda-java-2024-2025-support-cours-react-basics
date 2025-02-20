// C'est un fichier .ts juste pour m'aider à écrire le code sans erreur.
// Ce code est du code JavaScript valide.

/**
 * Types primitifs
 * Une primitive (valeur primitive ou structure de donnée primitive) est une donnée qui n'est pas un objet et n'a pas de méthode. En JavaScript, il y a 7 types de données primitives: String, Number, Boolean, Null, undefined
 * (il y aussi Symbol et Bigint - nouveauté d'ECMAScript 2020).
 * La plupart du temps, une valeur primitive est représentée directement au plus bas niveau dans l'implémentation du langage.
 * Toutes les primitives sont non-mutables (ne peuvent pas être modifiées).
 */

// number : entiers (int), flottants (float)
3; // number
3.14; // number

// string : chaine de caractères
"coucou";

// boolean : vrai ou faux
true;
false;

// null : la valeur nulle, consistance, existe, exprime explicitement que notre variable est "vide" et ne possède pas de valeur
null;

// undefined : la valeur non définie, pas de consistance, n'existe pas, aucune valeur assignée
undefined;

// Exemple de déclaration
const existePas = undefined;
let existePas2; // === undefined par défaut, quand on assigne pas de valeur à une variable

// Cependant il existe un objet équivalent qui encapsule une primitive
// Sauf pour null et undefined 
String; // pour la primitive string;
Number; // pour la primitive number
Boolean; // pour la primitive boolean

// Ces objets encapsulent vos primitives
// Nous avons accès à des méthodes et propriétés utilitaires comme si c'était des objets

Boolean(true).valueOf();
Number(2).toFixed();
String("chaine").length; // Longueur de la chaine de caractère

// Surtout pour les chaines de caractères,
// L'encapsulation se fait de manière implicite et vous pouvez faire des manipulations complexes
// sur les chaines sans avoir besoin de l'encapsuler dans un objet

"chaine".length; // Similaire et implicite
"Coucou les amis".includes("amis"); // true
"coucou".toUpperCase(); // COUCOU
"COUCOU".toLowerCase(); // coucou

// Et beaucoup d'autres si vous essayez l'autocomplétion de votre IDE

/**
 * Les Objets
 * 
 * Structure complexe et mécanique principale de JavaScript
 * Lire sur les prototypes Objet pour aller en profondeur
 * 
 * Il existe pleins d'objets en JavaScript qui ont leur particularité que nous utilisons très souvent sans s'en rendre compte
 * document, window, console, Function, Object, Array, Date, FormData, Math, etc. 
 * 
 * Nous pouvons faire nos propres objets et étendre les objets existants si on le souhaite
 */

/**
 * Les Fonctions sont des objets
 * Et ont la particularité de pouvoir de réutiliser plusieurs instructions 
 */
function addition(a, b) {
    return a + b;
}

addition(1, 2) // retourne le résultat 3
addition(3, 6) // retourne le résultat 9

// Valeur par défaut d'un paramètre
function salutations(message = "Bonjour") {
    console.log(message);
}

salutations(); // affichera Bonjour
salutations("Coucou les amis"); // affichera Coucou les amis

/**
 * Les tableaux
 * 
 * Liste de données, avec des indices numériques
 * Sur lesquel on peut itérer
 */
// Déclaration de tableau
[]; // vide

// Déclaration de tableau avec des éléments par défaut
[1, 3, 6];
// Qui peuvent être de n'importe quel type
[1, "coucou", true, undefined, null, [], {}, function () { }];

// Accès à un élément du tableau
const tableau = [1, 2, 3];
tableau[0]; // valeur 1
tableau[1]; // valeur 2
tableau[2]; // valeur 3

// Accès dynamique avec une variable/constante
const indice = 0;
tableau[indice];

// On peut itérer sur un tableau pour le parcourir
for (let i = 0; i < tableau.length; i++) {
 console.log(tableau[i]) // affichera 1, puis 2 puis 3   
}

// Type Array est un Objet
// Il contient donc des propriétés et des méthodes pour les manipuler
tableau.length; // 3
tableau.forEach(function (element) {
    console.log(element) // affichera 1, puis 2 puis 3
});

/**
 * Objets
 * 
 * Mécanique coeur de JavaScript,
 * qui se repose sur le paradigme des Prototypes d'objets
 */

// Création d'un nouvel objet
const personneA = Object();

// On peut fournir des propriétés (variables associées à l'objet)
personneA.firstname = "John";
personneA.lastname = "Doe";

// Et des méthodes (fonctions associées à l'objet)
personneA.sayHi = function () {
    console.log('Hi!');
}

personneA.firstname; // John
personneA.lastname; // Doe
personneA.sayHi(); // affichera Hi!

// On peut créer un nouvel objet (unique) avec Object.create()
const personneB = Object.create(personneA);

personneB.firstname = "Jane";
personneB.firstname; // Toujours John

// Avec les fonctions, on peut faire un constructeur d'objets
function Personne(firstname, lastname) {
    // this est un opérateur spécial qui correspond à l'objet "lui-même" (Personne ici en l'occurence)
    // Voir dans la documentation l'opérateur this pour approfondir
    // Vous n'allez pas forcément souvent le voir
    this.firstname = firstname;
    this.lastname = lastname;
    this.sayHi = function () {
        console.log('Hi!');
    }
}

// Je peux ajouter des propriétés/méthodes à mon prototype Personne
Personne.prototype.sayBye = function () {
    console.log('Bye!');
};

const personneD = new Personne("Jane", "Doe");
personneD.firstname; // Jane
personneD.lastname; // Doe
personneD.sayHi(); // affichera Hi!
personneD.sayBye(); // affichera Bye!

// Nous pouvons créer des objets qui héritent des propriétés et des méthodes de leurs parents
// En copiant son prototype
function SuperSaiyan(firstname, lastname) {
    Personne.call(this, firstname, lastname);
    this.kamehameha = function () {
        console.log('Kamehamehaaaaaaaa!');
    }
}

SuperSaiyan.prototype = Object.create(Personne.prototype);

const goku = new SuperSaiyan("Goku", "Son");
goku.firstname; // Goku
goku.lastname; // Son
goku.sayHi(); // affichera Hi!
goku.kamehameha(); // affichera Kamehamehaaaaaaaa!

// Note, on peut aujourd'hui écrire un style proche de la POO
// Avec le mot clé class et faire de l'héritage avec extend
// C'est beaucoup plus simple, voir la syntaxe sur les classes

// En bref, les prototypes sont une mécanique complexe
// Mais extrêmement puissante et flexible 

// La création d'objets peut se faire plus facilement avec la syntaxe litérale
{}; // Déclaration d'un nouvel objet, c'est comme faire Object()

// De manière générale à ce jour,
// Il est très commun d'utiliser la syntaxe littéral pour créer des objets
// C'est ce que vous ferez 95% du temps en JavaScript
// Vous manipulerez des objets existants ou vous allez en créer de vous même
// Avec la syntaxe littéral
const personneC = {
    firstname: "John",
    lastname: "Doe",
    sayHi: function () {
        console.log('Hi!');
    }
}

// Les objets peuvent avoir des formes variées pour représenter des structures de données complexes
// Les clés peuvent accueillir n'importe quel type de données

const objetComplexe = {
    a: "Hey",
    b: 2,
    c: true,
    d: undefined,
    e: null,
    f: [],
    g: {
        a: "Hey!",
        b: 2,
        c: true,
        d: {
            a: "Bon on arrête les conneries",
        }
    },
    h: function () {},
}