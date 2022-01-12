import Navbar from '../../components/Navbar'
import PokemonTable from '../../components/PokemonTable'
import setDocumentTitleAs from '../../custom-functions/setDocumentTitleAs'

export default function Pokemon({ data }){
    setDocumentTitleAs('Pokemon')

    return(
        <div>
            <Navbar />
            <PokemonTable data={data}/>
        </div>
    )
}

export const getStaticProps = async({ params }) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
    const descriptionResponse = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${params.id}/`)

    try {
        const descriptionData = await descriptionResponse.json()
        let data = await response.json()
        data = { ...data, ...descriptionData }
        return { props: { data }}
    }catch(e){
        return { notFound: true }
    }
}

export const getStaticPaths = async () => {
    const paths = []

    return {
        paths,
        fallback: 'blocking'
    }
}