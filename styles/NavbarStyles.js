import styled from "styled-components";

export const NavbarDiv = styled.nav`
    /* position: absolute;
    top: 0;
    left: 0; */
    width: 100%;
    min-height: 8vh;
    display: flex;
    align-items: center;
    justify-content: space-between  ;
    background-color: #202020;

    > div:nth-child(1) {
        margin-left: 2em;
    }

    > div:nth-child(2) {
        margin-right: 2em;
    }

    ul {
        list-style: none;
        display: flex;
    }

    ul li a{
        padding: 1.5em 2em;
        color: white;
        font-size: 1.2em;
        cursor: pointer;
        font-weight: 600;
    }

    ul li a:hover {
        color: #202020;
        background-color: #ffd100;
    }

    ul li a.active {
        color: #202020;
        background-color: #ffd100;
    }
`