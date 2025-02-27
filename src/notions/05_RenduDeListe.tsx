function Item({ name }) {
    return (
        <li className="item">
            {name}
        </li>
    );
}

// Documentation sur les listes
// https://fr.react.dev/learn/rendering-lists

export default function PackingListWithProps({ list }) {

    // Map est une méthode provenant de l'objet Array
    // Permettant de transformer un tableauA en un nouveau tableauB
    // à laquelle vous passez une fonction de transformation pour chaque élément de l'itération
    //
    // Et donc ici, nous transformons chaque objet item (qui contient name, et id)
    // En un template JSX
    const jsxItems = list.map(function (item) {
        return (
            <Item
                // key est nécéssaire lors des rendus de liste
                // pour que React puisse identifier les éléments de manière unique
                key={item.id}
                name={item.name}
            />
        )
    });

    return (
        <section>
            <h1>Liste d’affaires de Sally Ride</h1>
            <ul>
                {/* React est capable d'afficher un tableau d'éléments JSX */}
                {jsxItems}
            </ul>
        </section>
    );
}
