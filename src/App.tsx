import "./App.css";
// Pour pouvoir utiliser un composant, il faut importer le composant
// import <NomComposant> from <chemin_du_fichier_du_composant>;
import PremierComposant from "./notions/01_PremierComposant";
import ComposantAvecPropriete from "./notions/02_ComposantAvecPropriete";
import ComposantAvecEnfant from "./notions/03_ComposantAvecEnfant";
import PackingList from "./notions/04_RenduConditionnel";
import PackingListWithProps from "./notions/05_RenduDeListe";
import EcouteurEvenement, { AddPokemonForm } from "./notions/07_EcouteurEvenement";
import Compteur, { AfficheMoiUnPokemon, Person } from "./notions/06_GestionEtat";

// Extension de fichier React .jsx
// Extension de fichier React + TypeScript .tsx
//
// Création d'un composant
// on déclare une fonction, que l'on nomme ici "App"
// Et qui retourne du HTML
//
// Ce mélange JavaScript + HTML est appelé JSX
// C'est la syntaxe de REACT
//
//
function App() {
  return (
    // On appelle cette balise vide un Fragment
    // Ce fragment, lors du rendu ne génere pas de balise HTML
    //
    // Quand on utilise plusieurs composants dans notre composant App,
    // Nous devons avoir qu'un seul élément racine
    <>
      {/* 
      J'utilise mon composant, comme une balise HTML
      Les balises des composants React doivent être systématiquement fermées
      */}
      {/* <PremierComposant /> */}

      {/* Un composant, est réutilisable autant de fois que vous le souhaitez */}
      {/* <PremierComposant /> */}

      {/* Un composant peut recevoir plusieurs propriétés pour changer le contenu html du composant */}
      {/* Pour donner une valeur à nos propriétés, nous devons ouvrir des accolades {} */}
      {/* Les accolades peuvent recevoir n'importe quelle expression JavaScript */}
      {/* <ComposantAvecPropriete
        text={"Mon Texte"}
        nombre={3}
        estCeVrai={true}
        tableau={[1, 2, 3]}
        voiture={{
          marque: "Renault",
          modele: "Clio",
          couleur: "Bleu",
          annee: 2000,
        }}
        // Ce type de fonction est appelé aussi fonction de rappel (callback)
        // C'est une mécanisme qui est très souvent utilisé dans le monde de JavaScript
        fonctionDeSalutation={function (name) {
          // + est un opérateur de concaténation sur les chaines de caractères
          // console.log("Salut " + name + " !");

          // On peut utiliser aussi la syntaxe des templates litérals avec les back ticks
          console.log(`Salut ${name} !`);
        }}
      /> */}

      {/* Je peux imbriquer plusieurs éléments enfant à un composant */}
      {/* Je pourrais afficher ça dans le composant avec la clé children de mes props */}
      {/* <ComposantAvecEnfant>
        <PremierComposant />
        <p>Mon contenu</p>
      </ComposantAvecEnfant> */}

      {/* Rendu conditionnel */}
      {/* <PackingList /> */}

      {/* Rendu de liste */}
      {/* <PackingListWithProps list={[{
        id: 0,
        name: "Combinaison spatiale",
      }, {
        id: 1,
        name: "Casque à pointe",
      }, {
        id: 2,
        name: "Chaussures de lune",
      }]} /> */}

      {/* Gestion de l'état */}
      {/* <Compteur /> */}
      {/* <AfficheMoiUnPokemon /> */}
      {/* <Person /> */}

      {/* Evenement et formulaire */}
      {/* <EcouteurEvenement /> */}

      <AddPokemonForm onPokemonAdded={function (pokemon) {
        console.log("Un pokemon a été envoyé du formulaire", pokemon)
      }} />
    </>
  );
}

export default App;
