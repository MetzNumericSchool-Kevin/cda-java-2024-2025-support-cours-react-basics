// function Item({ name, isPacked }: { name: string, isPacked: boolean }) {

//     if (isPacked) {
//         return <li>{name} ✅</li>
//     }

//     return (
//         <li>{name} ❌</li>
//     )
// }

function Item({ name, isPacked }: { name: string, isPacked: boolean }) {
    return (
        <li>{name} {isPacked ? "✅" : "❌"}</li>
    )
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
