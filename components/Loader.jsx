import { LoaderDiv  } from '../styles/styled.components'
import LoaderIcon from 'react-spinners/BeatLoader'

function Loader({ loading }) {
    if(!loading){
        return null
    }

    return (
        <LoaderDiv>
            <LoaderIcon
                color={'#fcbf49'}
                loading={loading}
                size={30}
            />
            <h2 style={{ color: 'white' }}>Cargando...</h2>
        </LoaderDiv>
    )
}

export default Loader
