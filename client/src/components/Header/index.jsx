import React, { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import styled from "styled-components"
import "../../assets/css/navBarStyles.css"

const NavBarContainer = styled.div

const Header = () => {

  const deviceSize = {
    mobile: 768,
    tablet: 992,
    laptop: 1324,
    desktop: 2024
  }

  const [sidebar, setSidebar] =useState()
  const showSidebar = () => setSidebar(!sidebar)
  
  return (
   
    <>
    <div>
      <img src={burgerBar} alt="" />
    </div>
    <nav className={sidebar ? 'nav-menu active': 'nav-menu'}>
      <ul className='nav-menu-items'>
        <li>
          <NavLink to="/camille">Home</NavLink>
        </li>
        <li>
          <NavLink to="/camille/projects">Projects</NavLink>
        </li>
        <li>
          <NavLink to="">Tech Blog</NavLink>
        </li>
      </ul>
    </nav>
    <Outlet/>
    </>
  )
}

export default Header
