import Link from 'next/link'
import { NextPrevDiv } from '../styles/Table'

const TableNextPrevious = ({ id }) => {
    return (
        <NextPrevDiv>
            <Link href={`/pokemon/${id - 1}`}>
                <a>Previous</a>
            </Link>
            <Link href={`/pokemon/${id + 1}`}>
                <a>Next</a>
            </Link>
        </NextPrevDiv>
    )
}

export default TableNextPrevious