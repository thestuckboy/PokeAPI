import { useEffect, useState } from 'react'
import PokemonCardMiniData from './PokemonCardMiniData'

function PokemonCardMini({ id }) {

    const [loading, setLoading] = useState(false)
    const [pokemon, setPokemon] = useState(null)

    const searchForPokemon = async ()=>{
        setLoading(true)
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        const data = await response.json()
        setLoading(false)
        setPokemon(data)
    }

    useEffect(()=>{
        searchForPokemon()
    }, []);

    /* Conditional rendering */

    if (loading){
        return(
            <div>
                Loading...
            </div>
        )
    }

    if (pokemon){
        return(
            <PokemonCardMiniData data={pokemon} showLink={true}/>
        )
    } else return null
}

export default PokemonCardMini
