// C'est un fichier .ts juste pour m'aider à écrire le code sans erreur.
// Ce code est du code JavaScript valide.

// Vous connaissez les conditions if, else if, else

const unNombre = 0;

if (unNombre > 0) {
  // a est supérieur à 0
} else if (unNombre < 0) {
  // a est inferieur à 0
} else {
  // a est égal à 0
}

// Il existe une version raccourcie d'une condition if avec l'opérateur ternaire

// Avant le ? c'est la condition (comme si on pose une question)
// Apres le ? c'est le bloc qui est exécuté si la condition est vraie
// Après le : c'est le bloc qui est exécuté si la condition est fausse
const typeOfNumber = unNombre > 0 ? "positif" : "negatif";

// On peut aussi chaîner les opérateurs ternaires
// Première ternaire unNombre < 0 ? "negatif" : "zero"
// Deuxième ternaire unNombre > 0 ? "positif" : "negatif" ou "zero" selon la première ternaire
const typeOfNumber2 =
  unNombre > 0 ? "positif" : unNombre < 0 ? "negatif" : "zero";

// Il est aussi possible de faire d'appliquer une opération de manière conditionnelle avec les opérateur logique &&
// Il faut savoir que dès qu'une expression avec un &&, si l'expression de gauche vaut false, il n'évaluera pas la deuxième expression
// (Pas la peine car l'expression complète est fausse à partir de la première expression falsy)

const isLoggedIn = true;
isLoggedIn && console.log("User is logged in"); // Affichera "User is logged in" si isLoggedIn vaut true, sinon il ne fera rien

// En React ça peut être utile, car il faut savoir que toute expression falsy (sauf 0) n'est pas affiché lorsque l'on utilise les {} dans un template JSX
// On peut donc avoir un affichage conditionnel en React comme ceci :
//
// Si Visible, React affichera <div id="myElement">This is a conditional element.</div>
// Sinon il affichera rien, car false n'est pas affiché

/*
function App() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        Toggle Visibility
      </button>
      {isVisible && <div id="myElement">This is a conditional element.</div>}
    </div>
  );
}
*/

// Dans le cas de l'opérateur logique ||, on peut l'utiliser pour par exemple avoir une valeur par défaut si l'expression de gauche est falsy
// A l'inverse de l'opérateur &&, avec ||, JavaScript arrête d'évaluer l'expression à partir de la première expression truthy

const username = "";
// Si username est falsy, il affectera "Anonymous" à displayName
const displayName = username || "Anonymous";

// Cela peut aussi être utile dans React pour afficher un composant par défaut si une variable contenant un composant est falsy
