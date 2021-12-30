import { InputSearch, Form, SubmitButton } from '../styles/styled.components'
import { useState } from 'react'

function SearchBar({ setPokemon }) {

    const [state, setState] = useState('')

    const handleSubmit = (e)=>{
        e.preventDefault()
        setPokemon(state.toLowerCase())
        setState('')
    }

    const handleChange = (e) =>{
        setState(e.target.value)
    }

    return (
        <Form onSubmit={handleSubmit}>
            <InputSearch 
                value={state} 
                placeholder='You can look by name or ID'
                onChange={handleChange}
                name='searchbar'
            />
            <SubmitButton type='submit'>Search</SubmitButton>
        </Form>
    )
}

export default SearchBar
