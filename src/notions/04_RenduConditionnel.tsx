// Affichage conditionnel avec un instruction if classique
// function Item({ name, isPacked }) {
//     if (isPacked) {
//         return <li className="item">{name} ✅</li>;
//     }

//     return <li className="item">{name}</li>;
// }

// Affichage conditionnel avec un opérateur ternaire
// function Item({ name, isPacked }) {
//     return (
//         <li className="item">
//             {name}
//             {isPacked ? "✅" : ""}
//         </li>
//     );
// }

function Item({ name, isPacked }) {
    return (
        <li className="item">
            {name}
            {isPacked && "✅"}
        </li>
    );
}

export default function PackingList() {
    return (
        <section>
            <h1>Liste d’affaires de Sally Ride</h1>
            <ul>
                <Item
                    isPacked={true}
                    name="Combinaison spatiale"
                />
                <Item
                    isPacked={true}
                    name="Casque à feuille d’or"
                />
                <Item
                    isPacked={false}
                    name="Photo de Tam"
                />
            </ul>
        </section>
    );
}