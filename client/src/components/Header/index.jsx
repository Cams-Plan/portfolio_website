import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styled from "styled-components";
import "../../assets/css/navBarStyles.css";
import { SidebarData } from '../Sidebar';

import * as FaIcons from "react-icons/fa";
import * as AiIcons from 'react-icons/ai';

import { IconContext } from 'react-icons';

import cfLogo from "../../assets/images/cflogo.svg"

const Header = () => {

  const deviceSize = {
    mobile: 768,
    tablet: 992,
    laptop: 1324,
    desktop: 2024
  }

  const [sidebar, setSidebar] =useState(false)
  const showSidebar = () => setSidebar(!sidebar)
  
  return (
   
    <>
    <IconContext.Provider value={{color: "#dc143c"}}>
    <div className='navbar' id='navbar-id'>
        <FaIcons.FaBars className='nav-menu-bars' onClick={() => showSidebar()}/>
        <img src={cfLogo} className='nav-logo'></img>
        <img src={cfLogo} className='nav-logo'></img>
        
      <nav className={sidebar ? 'nav-menu active': 'nav-menu'}>
        <ul className='nav-menu-items'>
          <li className='navbar-toggle'>
            <AiIcons.AiOutlineClose onClick={() => showSidebar()} className='nav-menu-bars'/>
          </li>
          {SidebarData.map((item, index)=> {
            return (
              <li key={index} className={item.cName}>
                <NavLink to={item.path}>
                  {item.icon}
                  <span className='nav-span'>{item.title}</span>
                </NavLink>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
    </IconContext.Provider>
    <Outlet/>
    </>
  )
}

export default Header
