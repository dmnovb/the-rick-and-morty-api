import React, {useEffect, useState, useRef } from 'react'
import {CSSTransition} from 'react-transition-group'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';


const Search = (props:any) => {

    const [name, setName] = useState('')
    const [status, setStatus] = useState('')
    const [species, setSpecies] = useState('')
    const [gender, setGender] = useState('')
    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(null);
    const dropdownRef = useRef(null);
    const [open, setOpen] = useState(false)

    var char_url = `https://rickandmortyapi.com/api/character/?name=${name}&status=${status}&species=${species}&gender=${gender}`

    const getName = async (e:any) => {
        e.preventDefault();
        const characterQuery = await fetch(char_url).then(res => res.json())
        props.onDataFromChild(characterQuery)
    }
  
  useEffect(() => {
      setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
  }, [])
  
  const calcHeight = (el:any) => {
      const height = el.offsetHeight;
      setMenuHeight(height);
  }

  const hideFilter = () => {
    setOpen(!open)
  }    

  const DropdownItem = (props:any) =>  {
      
      
      return (
          <div>
              
              <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
                  <span className="icon-button">{props.leftIcon}</span>
                  {props.children}
                  <span className="icon-right">{props.rightIcon}</span>
              </a>
          </div>
      );
  }

  return (
    <div>
      <div className='search-container'>
        <form  onSubmit={getName}>
            <input className='search-bar' onChange={(e) => setName(e.target.value)} type="text" placeholder="Search character..."/>
        </form> 
        <div className='filter-container'>
        <button onClick={() => hideFilter()}>
          test
        </button>
        <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
          <CSSTransition
            in={activeMenu === 'main'}
            timeout={500}
            classNames="menu-primary"
            unmountOnExit
            onEnter={calcHeight}>
            <div className="menu">
              <DropdownItem goToMenu="gender">
                Gender
              </DropdownItem>
              <DropdownItem
                goToMenu="settings">
                Status
              </DropdownItem>
              <DropdownItem
                goToMenu="animals">
                Species
              </DropdownItem>
            </div>
          </CSSTransition>
    
    
          <CSSTransition
            in={activeMenu === 'settings'}
            timeout={500}
            classNames="menu-secondary"
            unmountOnExit
            onEnter={calcHeight}>
            <div className="menu">
              <DropdownItem goToMenu="main">
              <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
                <h2>Back</h2>
              </DropdownItem>
              <DropdownItem >Alive</DropdownItem>
              <DropdownItem >Dead</DropdownItem>
              <DropdownItem >Unknown</DropdownItem>
            </div>
          </CSSTransition>
          <CSSTransition
            in={activeMenu === 'gender'}
            timeout={500}
            classNames="menu-secondary"
            unmountOnExit
            onEnter={calcHeight}>
            <div className="menu">
              <DropdownItem goToMenu="main">
              <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
                <h2>Back</h2>
              </DropdownItem>
              <DropdownItem>Male</DropdownItem>
              <DropdownItem>Female</DropdownItem>
              <DropdownItem>Unknown</DropdownItem>
            </div>
          </CSSTransition>
    
          <CSSTransition
            in={activeMenu === 'animals'}
            timeout={500}
            classNames="menu-secondary"
            unmountOnExit
            onEnter={calcHeight}>
            <div className="menu">
              <DropdownItem goToMenu="main">
              <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
                <h2>Back</h2>
              </DropdownItem>
              <DropdownItem>Human</DropdownItem>
              <DropdownItem>Alien</DropdownItem>
              <DropdownItem>Robot</DropdownItem>
              <DropdownItem>Unknown</DropdownItem>
              <DropdownItem>Humanoid</DropdownItem>
              <DropdownItem>Mythological Creature </DropdownItem>
              <DropdownItem>Animal</DropdownItem>
            </div>
          </CSSTransition>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Search;
