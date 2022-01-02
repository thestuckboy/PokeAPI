import styled from "styled-components"

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #202020;
    border-radius: 1em;

    a {
        margin: 1em 0;
        border-radius: .5em;
        padding: 1em;
        background-color: #202020;
        color: #ffd100;
        transition: background-color .2s, color .2s;
        font-weight: 600;
    }

    a:hover {
        color: #202020;
        background-color: #ffd100;
    }
`

export const ImageContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;

    > img {
        width: 12em;
        height: 12em;
    }
`

export const DataDiv = styled.div`
    background-color: #ffd100;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 0 0 .5em .5em;

    h1 {
        margin-top: .5em;
    }
`

export const StatsDiv = styled.div`
    padding: 1em;
    margin-top: 1em;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1em;

    li {
       list-style: none;
    }
`