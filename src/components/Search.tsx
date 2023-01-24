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
    const [showGDropdown, setGenderDropdown] = useState(true);
    

    
    var char_url = `https://rickandmortyapi.com/api/character/?name=${name}&status=${status}&species=${species}&gender=${gender}`

    const getName = async (e:any) => {
        if(status != 'Status' && species != 'Species' && gender != 'Gender'){
          e.preventDefault();
          const characterQuery = await fetch(char_url).then(res => res.json())
          props.onDataFromChild(characterQuery)
        }
    }
  
    const statusDropdown = () => {
      setStatusDropdown(!showStatusDropdown)
    }
    const speciesDropdown = () => {
      setSpeciesDropdown(!showSpeciesDropdown)
    }
    const genderDropdown = () => {
      setGenderDropdown(!showGDropdown)
    }

    console.log(status)
    console.log(gender)
    console.log(species)

  const speciesArray = ['Human','Humanoid','Animal','Alien','Robot','Mythological Creature','Poopybutthole','Unknown']
  const genderArray = ['Male', 'Female', 'Unknown']
  const statusArray = ['Alive', 'Dead', 'Unknown']

  return (
    <div>
      <div className='search-container'>
        <form  onSubmit={getName}>
            <input className='search-bar' onChange={(e) => setName(e.target.value)} type="text" placeholder="Search character..."/>
        </form> 
        <div className='filter-container'>
          <div className='dropdown'>
            <div className={showStatusDropdown === false ? 'status' : 'status-hidden'}>
              <span onClick={statusDropdown}>{status} <AiFillCaretDown className='caret'/></span>
              <ul>
              {statusArray.map((status, idx) => (
                  <li key={idx} onClick={() => setStatus(status)}>{status}</li>
                ))}
              </ul>
            </div>
            <div className={showSpeciesDropdown === false ? 'species' : 'species-hidden'}>
              <span onClick={speciesDropdown}>{species} <AiFillCaretDown/></span>
              <ul>
                {speciesArray.map((species, idx) => (
                  <li key={idx} onClick={() => setSpecies(species)}>{species}</li>
                ))}
              </ul>
            </div>
            <div className={showGDropdown === false ? 'gender' : 'gender-hidden'}>
              <span onClick={genderDropdown}>{gender} <AiFillCaretDown/></span>
              <ul>
              {genderArray.map((gender, idx) => (
                  <li key={idx} onClick={() =>setGender(gender)}>{gender}</li>
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
