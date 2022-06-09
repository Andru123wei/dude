import React, {useState} from 'react'
import {ReactComponent as CogIcon} from '../../icons/cog.svg';
import {ReactComponent as SalIcon} from '../../icons/singout.svg';
import {ReactComponent as CaretIcon} from '../../icons/caret.svg';
<<<<<<< HEAD

=======
import {ReactComponent as ChatIcon} from '../../icons/chat.svg';
>>>>>>> 146721eb43ff3e97ecfa3c93983f4ffc20f33638
import '../stylesHome/header.css';

const Header = () => {
  return (
    <header className='cabeza'>
        <input type='text' className="inputa" placeholder="Buscar" />

        <div className='titledude'>
          <label>DUDE</label>
        </div>
          <Navbar>
            <NavItem icon={<ChatIcon />}/>
          
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
        <ul className='navbar-bar'>{ props.children }</ul>
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