import React, {useEffect, useState } from 'react'

const Search = (props:any) => {

    const [keyword, setKeyword] = useState('')

    var char_url = `https://rickandmortyapi.com/api/character/?name=${keyword}`

    const getKeyword = async (e:any) => {
        e.preventDefault();
        const characterQuery = await fetch(char_url).then(res => res.json())
        props.onDataFromChild(characterQuery)
    }


  return (
    <div>
        <form onSubmit={getKeyword}>
            <input onChange={(e) => setKeyword(e.target.value)} type="text" placeholder="Search character..."/>
        </form> 
    </div>
  )
}

export default Search;
