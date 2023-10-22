import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <nav>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/camille/projects">Projects</NavLink>
    </nav>
    <Outlet/>
    </>
  )
}

export default Header
