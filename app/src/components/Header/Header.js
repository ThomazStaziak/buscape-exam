import React from 'react';
import { Link } from 'react-router-dom'

import './Header.css'

import ToggleButton from '../ToggleButton/ToggleButton'

import logo from '../../assets/img/logo.png'

const Header = () => {
    return (
      <header className="header">
          <div className="header-content">
              <Link to="/">
                <img src={logo} alt="Logo Buscapé" className="logo"/>
              </Link>
              <ToggleButton onClick="" />
          </div>
      </header>
    );
}

export default Header