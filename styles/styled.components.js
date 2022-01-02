import styled from "styled-components"
import colorByType from "./colorByType";

/*--- Main ---*/

export const MainContainer = styled.div`
  background-color: #333533;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* background-image: url('/img/main-background.jps');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover; */

  @media screen and (max-width: 820px){
    font-size: .9em;
  }

  @media screen and (max-width: 750px){
    font-size: .8em;
  }

  @media screen and (max-width: 540px){
    font-size: .6em;
  }

  @media screen and (max-width: 425px){
    font-size: .4em;
  }

  @media screen and (max-width: 320px){
    font-size: .3em;
  }
`

export const Error = styled.h2`
  color: #ffcc01;
  text-decoration: underline;
`

/*--- Header ---*/

export const Header = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const PokemonLogo = styled.img`
    width: 10em;
    height: auto;
    margin: 1em 0em;
`

/*--- Pokemons ---*/

export const PokemonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #E7ECEF;
`

export const Card = styled.div`
  border-radius: .5em;
  padding: 2em 1em;
  font-size: 1.6em;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${props => colorByType[props.hover].background};
  color: ${props => colorByType[props.hover].color};
`

export const PokemonImg = styled.img`
  height: 6em;
  width: 6em;
`

export const PokemonBaseStats = styled.ul`
  list-style-type: none;
`

export const StatDiv = styled.div`
  display: flex;
  margin: .5em 0;
`

export const GoBackButton = styled.a`
  margin-top: 1em;
`

/*--- SearchBar ---*/

export const Form = styled.form`
  display: flex;
  margin: 1em 1em;
  justify-content: center;
`

export const InputSearch = styled.input`
  width: 30em;
  border: 2px solid #202020;
  border-radius: .5em 0 0 .5em;
  font-size: 1.5em;
  padding: .5em;
  font-weight: 550;
  background-color: #ffd100;
  color: #202020;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #202020;
    font-weight: 550;
  }
`

export const SubmitButton = styled.button`
  background: #202020;
  border-radius: 0 .5em .5em 0;
  color: white;
  cursor: pointer;
  border: none;
  padding: 1em 1.4em;
`

/*--- Loader ---*/

export const LoaderDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  min-height: 100vh;
  width: 100%;
  background-color: rgb(0,0,0, .8);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

/*--- RandomPokemon ---*/

export const RandomPokemonDiv = styled.div`
  display: grid;
  width: 100%;
  margin: 1em;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
  gap: 1em;

  @media screen and (max-width: 768px){
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 600px){
    grid-template-columns: repeat(1, 1fr);
  }
`

export const PokemonCardMiniDiv = styled.div`
  background-color: red;
`