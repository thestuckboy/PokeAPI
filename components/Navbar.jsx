import { NavbarDiv } from '../styles/NavbarStyles'
import { PokemonLogo } from '../styles/styled.components'
import { useRouter } from 'next/router'

function Navbar() {

    const router = useRouter()

    return (
        <NavbarDiv>
            <div>
                <PokemonLogo src='/img/pkmlogo.png' alt='Pokemon Logo'/>
            </div>
            <div>
                <ul>
                    <li><a href='/' className={(router.route == '/') ? 'active' : null}>Search</a></li>
                    <li><a href='/top100' className={(router.route == '/top100') ? 'active' : null }>Top 100 Pokemons</a></li>
                </ul>
            </div>
        </NavbarDiv>
    )
}

export default Navbar
