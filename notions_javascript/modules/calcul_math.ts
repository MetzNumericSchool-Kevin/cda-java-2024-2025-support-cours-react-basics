// C'est un fichier .ts juste pour m'aider à écrire le code sans erreur.
// Ce code est du code JavaScript valide.

// Imaginons que nous souhaitons créer une librairie de fonctions mathématiques simples
// Comme par exemple, l'addition, la soustraction, la multiplication de deux nombres, etc.
// Nous allons donc créer un module nous permettant de faire des calculs, et que l'on peut utiliser dans d'autres fichiers de modules.

// Le mot clé "export" nous permet d'indiquer que nous souhaitons rendre
// disponible la fonction d'addition en dehors de ce module
//
// L'export peut se faire directement lors de la définition
export function addition(a, b) {
  return a + b;
}

// Soit nous pouvons rassembler tous nos exports individuels en une seule fois
// Notez qu'ici nous pouvons renommer un export, par exemple pour l'addition en add
export { addition as add, soustraction, multiplication };

function soustraction(a, b) {
  return a - b;
}

function multiplication(a, b) {
  return a * b;
}

// Cette fonction n'étant jamais exportée, elle ne sera pas importable, et donc accessible depuis d'autres fichiers
function division(a, b) {
  return a / b;
}

// Nous pouvons exporter n'importe quel type
export const pi = 3.14;

// Ici nous exportons un objet contenant toutes nos fonctions
// Le mot clé default indique que c'est notre export par défaut lors d'un import
export default {
  addition,
  soustraction,
  multiplication,
};
