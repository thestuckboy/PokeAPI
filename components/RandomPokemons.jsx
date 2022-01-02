import PokemonCardMini from "./PokemonCardMini"
import { generateArrayWithRandomNumbers } from "../custom-functions/functions"
import { RandomPokemonDiv } from '../styles/styled.components'
import { Fragment } from 'react'

function RandomPokemons() {

    const randomPokemons = generateArrayWithRandomNumbers(6)

    return (
        <Fragment>
            <h2 style={{ color: '#ffcc01'}}>Random Pokemons</h2>
            <RandomPokemonDiv >
            {randomPokemons.map(x =>
                    <PokemonCardMini id={x} key={x} />
                )}
            </RandomPokemonDiv>
        </Fragment>
    )
}

export default RandomPokemons
