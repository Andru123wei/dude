import React, {useState} from 'react'
import {ReactComponent as CogIcon} from '../../icons/cog.svg';
import {ReactComponent as SalIcon} from '../../icons/singout.svg';
import {ReactComponent as CaretIcon} from '../../icons/caret.svg';
import {ReactComponent as home} from '../../images/iconHome.png';
import '../stylesHome/header.css';

const Header = () => {
  return (
    <header className='header'>
        <input type='text' className="input" placeholder="Buscar" />

        <div className='title'>
          <label>DUDE</label>
        </div>
        <Navbar>
          <NavItem icon={<CaretIcon />}>

          <Dropdownmenu/>

          </NavItem>
        </Navbar>

      </header>
    
  )
}

function Dropdownmenu(){

    function DropdownItem(props){
      return(
        <a href='#' className='menu-item'>
          <span className='icon-button'>{props.leftIcon}</span>
          {props.children}
          <span className='icon-right'>{props.rightIcon}</span>
        </a>
      );
    }

  return(
    <div className='dropdown'>
      <DropdownItem 
          leftIcon={<CogIcon />}
          rightIcon={'Ajustes'}>
      </DropdownItem>
      <DropdownItem  
          leftIcon={<SalIcon />}
          rightIcon={'Salir'}>
      </DropdownItem>
    </div>
  );
}

function Navbar(props){
  return(
    <nav className='navbar'>
        <ul className='navbar-bar'>{props.children}</ul>
        </nav>
  );
}

function NavItem(props){

  const[open,setOpen]=useState(false);

return(
  <li className='nav-item'>
    <a href='#' className='icon-button' onClick={() => setOpen(!open)}>
      {props.icon}
    </a>

    {open && props.children}
  </li>
);
}


export default Header