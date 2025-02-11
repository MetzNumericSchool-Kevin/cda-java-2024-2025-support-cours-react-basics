// function Item({ name, isPacked }: { name: string, isPacked: boolean }) {
//     if (isPacked) {
//         return <li className="item packed">{name} ✅</li>;
//     }

//     return <li className="item">{name}</li>;
// }

// Rendu conditionnel avec une condition ternaire
// function Item({ name, isPacked }: { name: string, isPacked: boolean }) {
//     return <li className="item">
//         {/* {isPacked ? name + '✅' : name} */}
//         {/* les `` permettent de faire l'interpolation de chaine de caractères */}
//         {isPacked ? `${name} ✅` : name}
//     </li>;
// }

function Item({ name, isPacked }: { name: string, isPacked: boolean }) {
    return <li className="item">
        {/* Si faux, n'affichera pas l'icone, car dans une operation boolean, l'évaluation false && true, l'execution du code n'ira pas chercher l'évaluation de l'opérand à droite du &&, car dès que c'est faux, tout le reste est faux également */}
        {name} {isPacked && '✅'}
    </li>;
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
