import React, { useState } from 'react'
import './Navbar.scss'
import Logo from '../../assets/shared/logo.svg'
import Hamburger from '../../assets/shared/icon-hamburger.svg'
import CloseIcon from '../../assets/shared/icon-close.svg'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false)

  const openMenu = ()=>{
    setShowMenu(true)
  }

  const closeMenu = ()=>{
    setShowMenu(false)
  }

  return (
    <div className='navbar'>
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>

      <div className="navLinksWrapper">
        <hr />

        <div className={`navLinks ${showMenu ? 'show' : ''}`}>
          <NavLink to='/' className='links' activeclassname='active' onClick={closeMenu}>
            <span>00</span><p>Home</p>
          </NavLink>

          <NavLink to='/destination' className='links' activeclassname='active' onClick={closeMenu}>
            <span>01</span><p>destination</p>
          </NavLink>

          <NavLink to='/crew' className='links' activeclassname='active' onClick={closeMenu}>
            <span>02</span><p>crew</p>
          </NavLink>

          <NavLink to='/technology' className='links' activeclassname='active' onClick={closeMenu}>
            <span>03</span><p>technology</p>
          </NavLink>

          <img src={CloseIcon} alt="close" className="closemMenu" onClick={closeMenu}/>
        </div>
      </div>

        <img src={Hamburger} alt="hamburger" className="hamburger"  onClick={openMenu}/>
    </div>
  )}

export default Navbar