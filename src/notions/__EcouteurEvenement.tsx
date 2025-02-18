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

export default EcouteurEvenement;
