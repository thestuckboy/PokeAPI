import styled from "styled-components"
import colorByType from "./colorByType"

export const Div = styled.div`
    width: 100%;
    background-color: #333533;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2em 0;
    min-height: 100vh;
`

export const Table = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 40%;
    background-color: #ffee32;
`

export const ImageAndStats = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
        width: 100%;
        height: 100%;
        outline: 2px solid black;
        background-color: #202020;
    }
`

export const SecondaryData = styled.div`
    background-color: #333533;
    outline: 2px solid black;
    color: #d6d6d6;

    > p {
        padding: 1em;
        font-weight: 500;
    }
`

export const Name = styled.h2`
    color: #ffd100;
    font-size: 2em;
    margin: .5em;
`

export const StatContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
    gap: 1em;
    font-size: .89em;
    outline: 2px solid black;
    background-color: #202020;
`

export const Stat = styled.div`
    margin: .5em;
    color: #d6d6d6;
`

export const TablePhysiqueStatsDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 1em;

    > p {
        font-weight: 500;
    }
`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
    margin: 1em;
    justify-items: center;
`

export const Img = styled.img`
    width: 5em;
    padding: 1em;
    border: 2px black;
    background-color: ${props => colorByType[props.type].background};
    box-shadow: 0px 0px 20px ${props => colorByType[props.type].background};
    border-radius: 50%;
    margin-top: 1em;
`

export const DivType = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const H3 = styled.h3`
    margin: 1em;
    color: #ffd100;
`


export const NextPrevDiv = styled.div`
    display: flex;
    justify-content: center;
    margin-top: auto;

    a {
        padding: 1em 1.3em;
        color: #202020;
        background-color:#ffd100;
        border-radius: .5em;
        margin: 1em;
        font-weight: 500;
        transition: all .2s;
    }

    a:hover {
        background-color:#202020;
        color: #ffd100;
    }
`