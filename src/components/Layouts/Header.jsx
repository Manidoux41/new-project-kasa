import React from 'react'
import logoHeader from '../../assets/images/logo-header.png'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header>
      <div className="logo">
        <img src={logoHeader} alt="logo header" />
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to='/' className={({isActive}) => (isActive ? "active-link" : undefined)}>
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink to='/about' className={({isActive}) => (isActive ? "active-link" : undefined)}>
              A Propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header