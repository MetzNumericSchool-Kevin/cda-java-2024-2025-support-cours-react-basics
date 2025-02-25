// C'est un fichier .ts juste pour m'aider à écrire le code sans erreur.
// Ce code est du code JavaScript valide.

// Les valeurs fausses (falsy) sont des valeurs évaluées comme fausses quand elles sont évaluées dans un contexte booléen.
// JavaScript utilise le type contrainte (conversion implicite) dans les contextes Booléens comme les conditions et les boucles.
//
// https://developer.mozilla.org/fr/docs/Glossary/Type_Conversion

// Exemples de valeurs fausses en Javascript (qui sont traduites par false (faux) et, par ce fait, court-circuitent le bloc if) :

if (false) {
  // Le code ici ne sera pas exécuté
}

if (null) {
  // Le code ici ne sera pas exécuté
}

if (undefined) {
  // Le code ici ne sera pas exécuté
}

if (0) {
  // Le code ici ne sera pas exécuté
}

if (-0) {
  // Le code ici ne sera pas exécuté
}

if (NaN) {
  // Le code ici ne sera pas exécuté
}

if ("") {
  // Le code ici ne sera pas exécuté
}

// Tips si l'on souhaite un type Boolean, on peut faire une double négation avec l'opérateur de négation !
//
// Car parfois nous préfèrerons travailler avec une variable de type boolean plutôt
// qu'une expression truthy/falsy
//
// Il se peut que dans certaines base de code vous voyez ceci :

!""; // type booleen de valeur true
!0; // type booleen de valeur true
!-0; // type booleen de valeur true
!NaN; // type booleen de valeur true
!undefined; // type booleen de valeur true
!null; // type booleen de valeur true

!!""; // type booleen de valeur false
!!0; // type booleen de valeur false
!!-0; // type booleen de valeur false
!!NaN; // type booleen de valeur false
!!undefined; // type booleen de valeur false
!!null; // type booleen de valeur false

// Pourquoi on parle de falsy values ?
// Car cela nous permet de tester si une valeur "existe" plutôt que de tester sur un test spécifique
//
// Exemple :

let a = null;

if (a === null) {
  // Le code ici sera exécuté
}

// Mais si dans un certain contexte, car on ne fait pas toujours attention
// aux types possibles de nos variables, il peut arriver une sitation ou a serait de type undefined
// ou alors il y a eu un soucis de conversion de nombre et on se retrouve avec le type NaN

a = undefined;

// Dans ce cas, if (a === null) n'est pas truthy
// Mais si nous faisons cette condition :
if (!a) {
  // Le code ici sera exécuté
  // Si a est considérée comme une variable falsy
  // On couvre plus de cas où a aurait plusieurs types possibles
  //
  // Faire juste attention au 0 :) Si on veut tester l'existence d'un nombre,
  // Si vous considerez 0 comme une condition truthy, vous devez le prendre en compte
  // ou le test ne passera pas
}
