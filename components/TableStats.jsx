import { StatContainer, Stat } from '../styles/Table'

function TableStats({ stats }) {
    return (
        <StatContainer>
            {stats.map(x => 
                <Stat key={x.stat.name}>
                    <b>{x.stat.name.toUpperCase()}: </b>
                    {x.base_stat}
                </Stat>
            )}
        </StatContainer>
    )
}

export default TableStats
