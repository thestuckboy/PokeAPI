import { StatDiv } from '../styles/styled.components'

function Stats({ data }) {
    return (
        <StatDiv>
            <p>
                <b>{data.stat.name.toUpperCase()}:</b> 
            </p>
            <p style={{ marginLeft: '.2em' }}>
                {data.base_stat}pts
            </p>
        </StatDiv>
    )
}

export default Stats
