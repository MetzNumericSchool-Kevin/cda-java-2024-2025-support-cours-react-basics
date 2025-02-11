import { useEffect, useState } from "react"

export function Pokemon() {
    const [pokemonName, setPokemonName] = useState<string>()

    useEffect(() => {
        async function fetchPokemon() {
            console.log("fetch pokemon")
            const response = await fetch('https://pokeapi.co/api/v2/pokemon/1')
            const data = await response.json()
            setPokemonName(data.name)
        }

        fetchPokemon();
    }, [])

    return (
        <div>
            {pokemonName}
        </div>
    )
}