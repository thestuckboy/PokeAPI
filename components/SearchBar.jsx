import { InputSearch, Form, SubmitButton } from '../styles/styled.components'
import { useState } from 'react'

function SearchBar({ setPokemon }) {

    const [state, setState] = useState('')

    const handleSubmit = (e)=>{
        e.preventDefault()
        setPokemon(state.toLowerCase())
    }

    const handleChange = (e) =>{
        setState(e.target.value)
    }

    return (
        <Form onSubmit={handleSubmit}>
            <InputSearch 
                value={state} 
                placeholder="You can look for name or ID" 
                onChange={handleChange}
                name='searchbar'
            />
            <SubmitButton type='submit'>Buscar</SubmitButton>
        </Form>
    )
}

export default SearchBar
