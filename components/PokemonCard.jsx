import { PokemonContainer, Card, PokemonImg, PokemonBaseStats } from '../styles/styled.components'
import { capitalizeFirstLetter } from '../custom-functions/functions'
import Stats from './Stats'
import { GoBackButton } from '../styles/styled.components'

function PokemonCard({ pokemon }) {
    const { sprites, types, stats } = pokemon

    return (
        <PokemonContainer>
            <Card hover={types[0].type.name}>
                <h1>{capitalizeFirstLetter(pokemon.name)}</h1>
                <PokemonImg 
                    src={sprites.front_default} 
                    alt={pokemon.name}
                    onMouseOver={e => e.target.src = sprites.back_default}
                    onMouseLeave={e => e.target.src = sprites.front_default}
                />
                <h4>Type: {capitalizeFirstLetter(types[0].type.name)}</h4>
                <PokemonBaseStats>
                    {stats.map(x => 

                        <Stats data={x}/>
                     
                    )}
                </PokemonBaseStats>
                <GoBackButton href='/'>Volver</GoBackButton>
            </Card>
        </PokemonContainer>
    )
}

export default PokemonCard