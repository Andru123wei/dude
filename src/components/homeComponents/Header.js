import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ReactComponent as CogIcon } from "../../icons/cog.svg";
import { ReactComponent as SalIcon } from "../../icons/singout.svg";
import { ReactComponent as CaretIcon } from "../../icons/caret.svg";
import { ReactComponent as ChatIcon } from "../../icons/chat.svg";
import "../stylesHome/header.css";

const Header = () => {
  const navigate = useNavigate();

  const goToChat = () => {
    navigate("/chat");
  };

  return (
    <header className="cabeza">
      <input type="text" placeholder="Buscar" />

      <div className="titledude">
        <label>DUDE</label>
      </div>
      <Navbar>
        <NavItem icon={<ChatIcon onClick={goToChat} />} />

        <NavItem icon={<CaretIcon />}>
          <Dropdownmenu />
        </NavItem>
      </Navbar>
    </header>
  );
};

function Dropdownmenu() {
  function DropdownItem(props) {
    return (
      <a className="menu-item">
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }

  const navigate2 = useNavigate();
  const goToLogin = () => {
    navigate2("/");
  };
  return (
    <div className="dropdown">
      <DropdownItem leftIcon={<CogIcon />} rightIcon={"Ajustes"}></DropdownItem>
      <DropdownItem leftIcon={<SalIcon onClick={goToLogin}/>} rightIcon={"Salir"}></DropdownItem>
    </div>
  );
}

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-bar">{props.children}</ul>
    </nav>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a  className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>

      {open && props.children}
    </li>
  );
}

export default Header;
