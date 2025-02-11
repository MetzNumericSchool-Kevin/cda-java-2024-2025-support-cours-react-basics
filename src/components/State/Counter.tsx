import { useState } from "react"

export function Counter() {
    // useState est un Hook, ce hook particulier nous permet de gérer un état de données à notre composant
    const [count, setCount] = useState(0);

    /**
     * @description
     * Fonction qui incrémente le compteur de 1
     * Lorsque le bouton "+" est cliqué, cette fonction est appelée
     * et elle met à jour l'état du composant en incrémentant
     * la valeur actuelle du compteur.
     */
    function increment() {
        setCount(count + 1)
    }

    function decrement() {
        // // Ceci ne rafraichira pas le composant
        // count = count - 1
        setCount(count - 1)
    }

    return (
        <div>
            <button className="btn btn-primary" onClick={decrement}>-</button>
            <span className="px-10">{count}</span>
            <button className="btn btn-primary" onClick={increment}>+</button>
        </div>
    )
}