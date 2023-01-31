import React, {useEffect, useState, useRef } from 'react'
import {CSSTransition} from 'react-transition-group'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import {AiFillCaretDown} from 'react-icons/ai'

const Search = (props:any) => {

    const [name, setName] = useState('')
    const [status, setStatus] = useState('Status')
    const [species, setSpecies] = useState('Species')
    const [gender, setGender] = useState('Gender')
    const [showStatusDropdown, setStatusDropdown] = useState(true);
    const [showSpeciesDropdown, setSpeciesDropdown] = useState(true);
    const [showGenderDropdown, setGenderDropdown] = useState(true);
    

    
    var char_url = `https://rickandmortyapi.com/api/character/?name=${name}&status=${status}&species=${species}&gender=${gender}`

    useEffect(() => {}, [])
    async function getName(e:any) {
      if(status != 'Status' && species != 'Species' && gender != 'Gender'){
        e.preventDefault();
        const characterQuery = await fetch(char_url).then(res => res.json())
        props.onDataFromChild(characterQuery)
      }
      getName()
    }

    const statusDropdown = (a:any) => {
      setStatusDropdown(!showStatusDropdown)
    }
    const speciesDropdown = (a:any) => {
      
      setSpeciesDropdown(!showSpeciesDropdown)
    }
    const genderDropdown = (a:any) => {
      setGenderDropdown(!showGenderDropdown)
    }

    const closeStatusDropdown = (a:string) => {
      setStatus(a)
      setStatusDropdown(!showStatusDropdown)
    }
    const closeSpeciesDropdown = (a:string) => {
      setSpecies(a)
      setSpeciesDropdown(!showSpeciesDropdown)
    }
    const closeGenderDropdown = (a:string) => {
      setGender(a)
      setGenderDropdown(!showGenderDropdown)
    }

    console.log(species)

  const speciesArray = ['Human','Humanoid','Animal','Alien','Robot','Mythological Creature','Poopybutthole','Unknown']
  const genderArray = ['Male', 'Female', 'Unknown']
  const statusArray = ['Alive', 'Dead', 'Unknown']

  return (
    <div className='container'>
      <div className='search-container'>
        <div className='form'>
        <form onSubmit={getName}>
            <input className='search-bar' onChange={(e) => setName(e.target.value)} type="text" placeholder="Search character..."/>
        </form>
        </div>
        <button onClick={(e) => getName(e)}>Submit</button> 
        <div className='filter-container'>
          <div className='dropdown'>
            <div className={showStatusDropdown === false ? 'status' : 'status-hidden'}>
              <h2>Status</h2>
              <span onClick={statusDropdown}> {status} <AiFillCaretDown className='caret'/></span>
              <ul>
              {statusArray.map((status, idx) => (
                <li key={idx} onClick={() => closeStatusDropdown(status)}>{status}</li>
                ))}
              </ul>
            </div>
            <div className={showSpeciesDropdown === false ? 'species' : 'species-hidden'}>
              <h2>Species</h2>
              <span onClick={speciesDropdown}>{species} <AiFillCaretDown/></span>
              <ul>
                {speciesArray.map((species, idx) => (
                  <li key={idx} onClick={() => closeSpeciesDropdown(species)}>{species}</li>
                  ))}
              </ul>
            </div>
            <div className={showGenderDropdown === false ? 'gender' : 'gender-hidden'}>
              <h2>Gender</h2>
              <span onClick={genderDropdown}>{gender} <AiFillCaretDown/></span>
              <ul>
              {genderArray.map((gender, idx) => (
                <li key={idx} onClick={() => closeGenderDropdown(gender)}>{gender}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search;
