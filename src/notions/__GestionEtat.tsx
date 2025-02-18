import { useState } from "react";

function GestionEtat() {
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

    // A chaque clic, on incrémente la valeur de 1
    return (
        <button onClick={function () { setCount(count + 1) }} className="btn btn-primary">
            {count}
        </button>
    )
}

export default GestionEtat;