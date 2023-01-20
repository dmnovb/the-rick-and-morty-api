import React, {useEffect, useState } from 'react'
import {CSSTransition} from 'react-transition-group'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Dropdown from './Dropdown'


const Search = (props:any) => {

    const [name, setName] = useState('')
    const [status, setStatus] = useState('')
    const [species, setSpecies] = useState('')
    const [gender, setGender] = useState('')

    var char_url = `https://rickandmortyapi.com/api/character/?name=${name}&status=${status}&species=${species}&gender=${gender}`

    const getName = async (e:any) => {
        e.preventDefault();
        const characterQuery = await fetch(char_url).then(res => res.json())
        props.onDataFromChild(characterQuery)
    }

    const setFilter = (data:any) => {

    }



  return (
    <div>
      <div className='search-container'>
        <form  onSubmit={getName}>
            <input className='search-bar' onChange={(e) => setName(e.target.value)} type="text" placeholder="Search character..."/>
        </form> 
        <div className='filter-container'>
        <button>
          test
        </button>
        <Dropdown dataFromChild={setFilter}/>
        </div>
      </div>
    </div>
  )
}

export default Search;
