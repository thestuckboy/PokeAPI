import { useState, useEffect } from 'react'
import { MainContainer, Error } from "../styles/styled.components"
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import Loader from '../components/Loader'

export default function Home() {
  const [pokemon, setPokemon] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const searchForPokemon = async ()=>{
    if (pokemon){
      try {
        setLoading(true)
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
        const data = await response.json()
        location.href = `/pokemon/${data.id}`
      }catch(e){
        setError('Pokemon not found')
      }finally {
        setLoading(false)
      }
    }
  }

  useEffect(()=>{
    searchForPokemon()
  }, [pokemon])

  return (
    <MainContainer>
      <Loader loading={loading}/>
      <Header />
      <SearchBar setPokemon={setPokemon} />
      <Error>{error}</Error>
    </MainContainer>
  )
}