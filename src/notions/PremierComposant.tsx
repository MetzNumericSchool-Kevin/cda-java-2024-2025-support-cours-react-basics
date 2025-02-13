function PremierComposant() {
    return (
        <h1>Premier composant</h1>
    )
}

// Je dois exporter le composant, avec le mot-clé export
// Pour pouvoir l'importer dans un autre fichier et l'utiliser
//
// La syntaxe import et export nous provient de la fonctionnalité des modules
// Voir JavaScript module ES6
//
// Dans un premier nous pouvons nous fixer la règle suivante :
// Un fichier de composant, un export par défaut de ce composant
export default PremierComposant;