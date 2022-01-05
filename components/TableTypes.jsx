import typeIcon from '../styles/TypeIcon'
import { Fragment } from "react"
import { capitalizeFirstLetter } from '../custom-functions/functions'
import { Grid, Img, DivType, H3 } from '../styles/Table'

const TableTypes = ({ types }) => {
    return (
        <Fragment>
            <H3>Types:</H3>
            <Grid>
                {types.map(x => 
                    <DivType key={x.type.name}>
                        <h3>{capitalizeFirstLetter(x.type.name)}</h3>
                        <Img 
                            src={typeIcon[x.type.name]} 
                            alt={x.type.name}
                            type={x.type.name}
                            key={x.type.name}
                        />
                    </DivType>
                )}
            </Grid>
        </Fragment>
    )
}

export default TableTypes
