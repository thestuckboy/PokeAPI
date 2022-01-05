function TableDescription({ descriptions }) {

    const filterDescription = ()=>{
        const english_description = descriptions.filter(x => x.language.name === 'en');
        return english_description[0].flavor_text
            .replace('', ' ') // This is a empty character that does not occupy space, it's being replaced by " "
            .replace('é', 'É')
            .replace('POKÉMON', 'Pokémon')
    }

    return <p>{filterDescription()}</p>
}

export default TableDescription
