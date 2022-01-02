import { capitalizeFirstLetter } from "../custom-functions/functions"
import { Div, ImageContainer, DataDiv, StatsDiv } from '../styles/PokemonCardMini'

function PokemonCardMiniData({ data, showLink }) {
    return (
        <Div>
            <ImageContainer>
                <img src={data.sprites.front_default} alt={data.name} 
                    onMouseOver={(data.sprites.back_default) ? e => e.target.src = data.sprites.back_default : null}
                    onMouseLeave={e => e.target.src = data.sprites.front_default}
                />
            </ImageContainer>
            <DataDiv>
                <h1>{capitalizeFirstLetter(data.name)} #{data.id}</h1>
                <StatsDiv>
                    {data.stats.map(x =>
                        <li><b>{x.stat.name.toUpperCase()}</b>: {x.base_stat}</li>
                    )}
                </StatsDiv>
            </DataDiv>
            {(showLink) ? <a href={`/pokemon/${data.id}`}>Read more</a> : null }
        </Div>
    )
}

export default PokemonCardMiniData
