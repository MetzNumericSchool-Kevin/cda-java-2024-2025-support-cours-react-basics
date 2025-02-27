import { useState } from "react";

// Documentation sur les états
// https://fr.react.dev/learn/reacting-to-input-with-state
// https://fr.react.dev/learn/choosing-the-state-structure

// Gestion état simple
function Compteur() {
    // useState est un hook (crochet en français), il existe beaucoup de hooks dans le monde de React
    // useState permet de définir un état, qui, en étant modifié, indiquera à React que l'on souhaite un nouveau rendu de template
    //
    // Cette fonction useState prend en paramètre une valeur par défaut si souhaitée, par défaut ça sera le type undefined
    // Le paramètre peut prendre tout type de valeur (string, number, boolean, function, array, object, etc.)
    //
    // Ici nous avons deux constantes (avec des noms arbitraires)
    // count => valeur de l'état (lecture seule, sert à l'affichage)
    // setCount => fonction, pour mettre à jour l'état (donc la valeur de count) et qui préviendra React qu'un nouveau rendu doit être fait
    //
    const [count, setCount] = useState(0);

    function quandJaiClique() {
        // Quand on lance la fonction de mise à jour de l'état
        // React fera un nouveau rendu (appel à la fonction de votre composant)
        // Avec le nouvel état (ici 0 pasera à 1, à 2, 3, 4 à chaque clic du bouton)
        setCount(count + 1);
    }

    // A chaque clic, on incrémente la valeur de 1
    return (
        <button onClick={quandJaiClique} className="btn btn-primary">
            {count}
        </button>
    )
}

const listPokemon = [{
    id: 1,
    name: "Bulbizarre",
    type: "Plante"
}, {
    id: 2,
    name: "Carapuce",
    type: "Eau"
}, {
    id: 3,
    name: "Ronflex",
    type: "Normal"
}, {
    id: 4,
    name: "Dracaufeu",
    type: "Feu"
}];

export function AfficheMoiUnPokemon() {
    const [pokedex, updatePokedex] = useState([]);

    function ajouteUnPokemonAuHasard() {
        const randomNumber = Math.floor(Math.random() * listPokemon.length);
        const pokemon = listPokemon[randomNumber];
        const pokemonAlreadyExist = pokedex.find(p => p.id === pokemon.id);

        if (pokemonAlreadyExist) {
            console.log("Ce pokemon est deja dans le pokedex");
            return;
        }

        // Surtout, vous devez faire en sorte que votre tableau ou objet
        // Soit bien un nouveau tableau/objet
        // Ne faites pas de mutation de l'objet 

        // Un exemple de mise à jour d'un tableau avec concat
        // updatePokedex([pokemon].concat(pokedex))

        // Exemple de mise à jour d'un tableau avec le spread operator
        updatePokedex([
            pokemon,
            ...pokedex,
        ])
    }

    return (
        <>
            <ul>
                {pokedex.map((pokemon) => (
                    <li key={pokemon.id}>
                        {pokemon.name} : Type {pokemon.type}
                    </li>
                )
                )}
            </ul>
            <button onClick={ajouteUnPokemonAuHasard} style={{ margin: "10px", backgroundColor: "green", color: "white" }} >Ajouter un pokemon au Pokedex</button>
        </>
    );
}

const helloWord = ["Hello", "Bonjour", "Hallo", "Konichiwa"]

export function Person() {
    const [person, setPerson] = useState({
        name: 'Niki de Saint Phalle',
        say: ""
    });

    function updateSay() {
        const randomNumber = Math.floor(Math.random() * helloWord.length);
        const word = helloWord[randomNumber];

        setPerson({
            ...person,
            say: word,
        })
    }

    return (
        <>
            Person name : {person.name} <br />
            Say: {person.say}
            <br />
            <button onClick={updateSay} style={{ margin: "10px", backgroundColor: "green", color: "white" }} >
                Dit bonjour autrement
            </button>
        </>
    )
}


export default Compteur;