import React, {useEffect, useState, useRef } from 'react'
import {CSSTransition} from 'react-transition-group'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import {AiFillCaretDown} from 'react-icons/ai'

const Search = (props:any) => {

    const [name, setName] = useState('')
    const [status, setStatus] = useState('Alive')
    const [species, setSpecies] = useState('Human')
    const [gender, setGender] = useState('Male')
    const [showStatusDropdown, setStatusDropdown] = useState(false);
    const [showSpeciesDropdown, setSpeciesDropdown] = useState(false);
    const [showGDropdown, setGenderDropdown] = useState(false);
    

    
    var char_url = `https://rickandmortyapi.com/api/character/?name=${name}&status=${status}&species=${species}&gender=${gender}`

    const getName = async (e:any) => {
        e.preventDefault();
        const characterQuery = await fetch(char_url).then(res => res.json())
        props.onDataFromChild(characterQuery)
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
                <li>Dead</li>
                <li>Alive</li>
                <li>Unknown</li>
              </ul>
            </div>
            <div className={showSpeciesDropdown === false ? 'species' : 'species-hidden'}>
              <span onClick={speciesDropdown}>{species} <AiFillCaretDown/></span>
              <ul>
                <li>Human</li>
                <li>Humanoid</li>
                <li>Animal</li>
                <li>Alien</li>
                <li>Robot</li>
                <li>Poopybutthole</li>
                <li>Mythological Creature</li>
                <li>Unknown</li>
              </ul>
            </div>
            <div className={showGDropdown === false ? 'gender' : 'gender-hidden'}>
              <span onClick={genderDropdown}>{gender} <AiFillCaretDown/></span>
              <ul>
                <li>Dead</li>
                <li>Alive</li>
                <li>Unknown</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search;
