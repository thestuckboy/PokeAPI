import TableDescription from './TableDescription'
import TableStats from './TableStats'
import TablePhysiqueStats from './TablePhysiqueStats'
import TableTypes  from './TableTypes'
import TableNextPrevious from './TableNextPrevious'
import { capitalizeFirstLetter } from '../custom-functions/functions'
import { Div, Table, ImageAndStats, SecondaryData, Name} from '../styles/Table'
import { useEffect } from 'react'

const PokemonTable = ({ data }) => {

    useEffect(()=>{
        document.addEventListener('keydown', (e)=>{
            if (e.key === 'ArrowRight'){
                location.href = `/pokemon/${data.id + 1}`
            }

            if (e.key === 'ArrowLeft'){
                location.href = `/pokemon/${data.id - 1}`
            }
        })
    }, [])

    return (
        <Div>
            <Table>
                <ImageAndStats>
                    <img 
                        src={data.sprites.front_default} 
                        alt={data.name + 'thumbnail'} 
                        onMouseOver={({ target })=> target.src = data.sprites.back_default}
                        onMouseLeave={({ target })=> target.src = data.sprites.front_default}
                    />
                    <TableStats stats={data.stats}/>
                </ImageAndStats>
                <SecondaryData>
                    <Name>{capitalizeFirstLetter(data.name)}</Name>
                    <TableDescription descriptions={data.flavor_text_entries}/>
                    <TablePhysiqueStats PhysiqueStats={{height: data.height, weight: data.weight }}/>
                    <TableTypes types={data.types}/>
                    <TableNextPrevious id={data.id}/>
                </SecondaryData>
            </Table>
        </Div>
    )
}

export default PokemonTable
