import React, {useEffect, useState, useRef } from 'react'
import {CSSTransition} from 'react-transition-group'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import {AiFillCaretDown} from 'react-icons/ai'

const Search = (props:any) => {

    const [name, setName] = useState('')
    const [status, setStatus] = useState('Dead')
    const [species, setSpecies] = useState('Alien')
    const [gender, setGender] = useState('Male')
    
    var char_url = `https://rickandmortyapi.com/api/character/?name=${name}&status=${status}&species=${species}&gender=${gender}`

    const getName = async (e:any) => {
        e.preventDefault();
        const characterQuery = await fetch(char_url).then(res => res.json())
        props.onDataFromChild(characterQuery)
    }
  

  return (
    <div>
      <div className='search-container'>
        <form  onSubmit={getName}>
            <input className='search-bar' onChange={(e) => setName(e.target.value)} type="text" placeholder="Search character..."/>
        </form> 
        <div className='filter-container'>
          <div className='dropdown'>
            <div className='status'>
              <span>{status} <AiFillCaretDown/></span>
              <ul>
                <li>Dead</li>
                <li>Alive</li>
                <li>Unknown</li>
              </ul>
            </div>
            <div className='species'>
              <span>{species} <AiFillCaretDown/></span>
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
            <div className='gender'>
              <span>{gender} <AiFillCaretDown/></span>
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
