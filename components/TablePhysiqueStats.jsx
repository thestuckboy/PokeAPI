import { TablePhysiqueStatsDiv } from "../styles/Table"

const TablePhysiqueStats = ({ PhysiqueStats }) => {
    return (
        <TablePhysiqueStatsDiv>
            <p>Height: {PhysiqueStats.height / 10} <span style={{ color: '#ffd100'}}>m.</span></p>
            <p>Weight: {PhysiqueStats.weight / 10} <span style={{ color: '#ffd100'}}>kg.</span></p>
        </TablePhysiqueStatsDiv>
    )
}

export default TablePhysiqueStats