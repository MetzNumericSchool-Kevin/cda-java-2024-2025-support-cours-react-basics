import { useState } from "react";

function EcouteurEvenement() {
  // event est un objet (javascript) représentant l'évènement qui a été capturé
  function onButtonClicked(event) {
    // event a une clé "target" qui représente l'élément HTML cliqué
    // event.target est un noeud HTML
    // Pour aller plus en profondeur, voir la partie sur le DOM en JavaScript
    console.log("J'ai cliqué, élément HTML : ", event.target);
  }

  function onFormSubmitted(event) {
    // preventDefault (JavaScript) va empêcher le comportement par défaut du formulaire
    // et éviter de faire un envoi du formulaire vers un serveur
    // Pourquoi ? Car nous souhaitons y appliquer un traitement avec JavaScript
    // avant de l'envoyer plus tard en "background" sur un serveur et éviter un rechargement de la page
    event.preventDefault();
    console.log("le formulaire a été envoyé");
  }

  return (
    <form onSubmit={onFormSubmitted}>
      {/* on peut écouter différents évènements, en utilisant un attribut on<Nom_De_Levenement> */}
      {/* Ces attributs d'évènements souhaitent qu'on leur transmette une fonction qui sera éxécutée lorsque l'évènement sera capturé par le gestionnaire d'évènement du navigateur */}
      {/* Au moment du click, la fonction onButtonClicked est éxécutée */}
      {/* NB: en React on utilise className à la place de class qui est un mot clé réservé */}
      <button className="btn btn-primary" onClick={onButtonClicked}>
        Clique sur moi !
      </button>
    </form>
  );
}

export function AddPokemonForm({ onPokemonAdded }) {
  const [pokemon, setPokemon] = useState({
    name: "",
    type: "",
  });

  // Exemple de fonction permettant de mettre
  // Dynamiquement à jour une clé de l'objet
  function updateField(key, value) {
    setPokemon({
      ...pokemon,
      // Key ici est dynamique et dépendra du contexte,
      // Dans notre exemple, key sera soit name, type
      [key]: value,
    })
  }

  return (
    <>
      <form onSubmit={(event) => {
        event.preventDefault();
        onPokemonAdded(pokemon);
      }}>
        {/* event est l'objet qui représente un évènement */}
        {/* event.target représente le noeud HTML qui est responsable de l'évènement */}
        {/* event.target.value représante la valeur du noeud HTML dans le cas des éléments de formulaire */}
        <input onChange={(event) => updateField('name', event.target.value)} type="text" name="name" />
        <br />
        <br />
        <select onChange={(event) => updateField('type', event.target.value)}>
          <option value=""></option>
          <option value="electrique">Electrique</option>
          <option value="eau">Eau</option>
          <option value="vol">Vol</option>
          <option value="feu">Feu</option>
        </select>
        <br />
        <br />
        <button type="submit">Ajouter le Pokemon</button>
      </form>

      <br />

      Nom du Pokemon : {pokemon.name}
      <br />
      Type du Pokemon : {pokemon.type}
    </>
  )
}

export default EcouteurEvenement;
