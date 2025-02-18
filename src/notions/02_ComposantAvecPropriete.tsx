// Mon composant peut recevoir des propriétés,
// Permettant d'avoir un rendu en fonction de ce que me passe un composant parent
//
// Je peux accéder à text1 et text2, depuis mon composant,
// En utilisant le paramètre props
//
// Le nommage du paramètre "props" est arbitraire
function ComposantAvecPropriete(props) {
  // console.log(props);

  // props est un objet (correspont éventuellement aux dictionnaires en Java)
  // On accède à une propriété d'un objet avec la notation pointé (.)
  // console.log(props.text);

  // Dans le cas où une propriété de props contient une fonction
  // Je peux exécuter cette fonction
  //
  // Cette mécanique me permet nottament de transmettre des informations au composant parent qui l'utilise
  props.fonctionDeSalutation("Jean");

  return (
    <>
      <h1>Composant avec propriété</h1>
      <p>
        {/* Pour afficher une variable ou constante dans mon template JSX */}
        {/* J'utilise également ici des crochets {} */}
        {/* Les crochets permettent d'éxécuter n'importe quelle expression JavaScript valide */}
        {props.text}
      </p>
    </>
  );
}

export default ComposantAvecPropriete;
