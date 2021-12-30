import PokemonCard from "../../components/PokemonCard"
import { capitalizeFirstLetter } from "../../custom-functions/functions"
import { useEffect } from "react"

export default function Pokemon({ data }){

    useEffect(()=>{
        document.title = `PokeAPI - ${capitalizeFirstLetter(data.name)}`
    }, [])

    return(
        <PokemonCard pokemon={data}></PokemonCard>
    )
}

export const getStaticProps = async({ params }) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
    const data = await response.json()

    return { props: { data }}
}

export const getStaticPaths = async () => {
    const paths = []

    return {
        paths,
        fallback: 'blocking'
    }
}