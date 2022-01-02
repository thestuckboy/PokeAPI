import PokemonCard from "../../components/PokemonCard"
import setDocumentTitleAs from '../../custom-functions/setDocumentTitleAs'

export default function Pokemon({ data }){

    setDocumentTitleAs(`PokeApi - ${data.name}`)

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