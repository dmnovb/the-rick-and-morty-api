import {useEffect, useState, useRef} from 'react'
import { CSSTransition } from 'react-transition-group';

const DropdownMenu = (props:any) => {
    
    function Dropdown(props:any) {
        return (
            <div>
          <nav className="navbar">
            <ul className="navbar-nav">{props.children}</ul>
          </nav>
            </div>
        );
    }
    
    
    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(null);
    const dropdownRef = useRef(null);
    useEffect(() => {
        setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
    }, [])
    
    function calcHeight(el:any) {
        const height = el.offsetHeight;
        setMenuHeight(height);
    }
    
    
    
    function DropdownItem(props:any) {
        const [open, setOpen] = useState(false)
        
        function isOpen() {
            setOpen(!open)
        } 
        
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
      );
  }

export default DropdownMenu;