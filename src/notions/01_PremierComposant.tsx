// Un composant est une fonction JavaScript
//
// Le nom du composant React doit commencer par une lettre Majuscule
//
function PremierComposant() {
  return <h1>Premier composant</h1>;
}

// Je dois exporter le composant, avec le mot-clé export
// Pour pouvoir l'importer dans un autre fichier et l'utiliser
//
// Tout ce qu'on déclare dans un module et qui n'est pas exporté
// n'est accessible qu'au sein du module
//
// La syntaxe import et export nous provient de la fonctionnalité des modules
// Voir JavaScript module import/export
//
// Dans un premier temps nous pouvons nous fixer la règle suivante :
// Un fichier de composant export un seul composant principal
export default PremierComposant;
