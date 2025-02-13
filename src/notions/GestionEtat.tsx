import { useState } from "react";

function GestionEtat() {
    // useState permet de définir un état
    // Prend en paramètre une valeur par défaut, si souhaitée, par défaut ça sera le type undefined
    // Le paramètre peut prendre tout type de valeur
    //
    // Ici nous avons deux constantes (avec des noms arbitraires)
    // count => valeur de l'état (lecture seule)
    // setCount => fonction, pour mettre à jour l'état et qui préviendra React qu'un nouveau rendu doit être fait
    //
    const [count, setCount] = useState(0);

    return (
        <button onClick={function () { setCount(count + 1) }} className="btn btn-primary">
            {count}
        </button>
    )
}

export default GestionEtat;