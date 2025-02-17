function EcouteurEvenement() {

    // event est un objet représente l'évènement qui a été lancé
    function onButtonClicked(event) {
        // event a une clé "target" qui représente l'élément HTML cliqué
        // event.target est un noeud HTML
        // Pour aller plus en profondeur, voir la partie sur le DOM
        console.log("J'ai cliqué, élément HTML : ", event.target)
    }

    function onFormSubmitted(event) {
        // preventDefault va empêcher le comportement par défaut du formulaire
        // et éviter de faire une soumission du formulaire vers un serveur
        event.preventDefault();
        console.log("le formulaire a été envoyé")
    }

    return (
        <form onSubmit={onFormSubmitted}>
            {/* on peut écouter différents évènements, */}
            {/* en utilisant un attribut on<Nom_De_Levenement> */}
            {/* className à la place de class qui est un mot clé réservé */}
            {/* Au moment du click, la fonction onButtonClicked est appelé */}
            <button className="btn btn-primary" onClick={onButtonClicked}>
                Clique sur moi !
            </button>
        </form>
    )
}

export default EcouteurEvenement;