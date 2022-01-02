import { NavbarDiv } from '../styles/NavbarStyles'
import { PokemonLogo } from '../styles/styled.components'
import { useRouter } from 'next/router'
import Link from 'next/link'

function Navbar() {

    const router = useRouter()

    return (
        <NavbarDiv>
            <div>
                <PokemonLogo src='/img/pkmlogo.png' alt='Pokemon Logo'/>
            </div>
            <div>
                <ul>
                    <li>
                        <Link href='/'>
                            <a className={(router.route === '/') ? 'active' : null}>Search</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/top100'>
                            <a className={(router.route === '/top100') ? 'active' : null}>Top 100</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </NavbarDiv>
    )
}

export default Navbar
