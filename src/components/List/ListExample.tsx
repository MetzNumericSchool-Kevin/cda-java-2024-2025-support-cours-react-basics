type People = {
    id: number
    name: string
    profession: string
}

export function ListExample() {
    const peoples: People[] = [{
        id: 1,
        name: 'John Doe',
        profession: "developer"
    }, {
        id: 2,
        name: 'Lisa Heck',
        profession: "chimist"
    }, {
        id: 3,
        name: 'Richard Holmes',
        profession: "chimist"
    }]

    return (
        <ul>
            {
                peoples.map((person) => {
                    return (
                        <li key={person.id}>
                            <h2>{person.name}</h2>
                            <p>
                                {person.profession}

                            </p>
                            ---------
                        </li>
                    )
                })
            }
        </ul>
    )
}