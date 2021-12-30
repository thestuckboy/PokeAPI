import { useState, useEffect } from 'react'
import { MainContainer, Error } from "../styles/styled.components"
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'

export default function Home() {
  const [pokemon, setPokemon] = useState(null)
  const [error, setError] = useState(null)

  const searchForPokemon = async ()=>{
    if (pokemon){
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
        const data = await response.json()
        location.href = `/pokemon/${data.id}`
      }catch(e){
        setError('Pokemon not found')
      }
    }
  }

  useEffect(()=>{
    searchForPokemon()
  }, [pokemon])

  return (
    <MainContainer>
      <Header />
      <SearchBar setPokemon={setPokemon}/>
      <Error>{error}</Error>
    </MainContainer>
  )
}