import { Header , PokemonLogo } from "../styles/styled.components"

const Head = () => {
    return (
        <Header>
            <PokemonLogo src='/img/pkmlogo.png' />
            <h4 style={{ color: '#ffcc01' }} >Powered by PokeAPI.co</h4>
        </Header>        
    )
}

export default Head
