import React, { useState } from 'react'
import headshot from "../../assets/images/headshotCrop.jpg"
import homeIcon from "../../assets/images/houseIcon.png"
import "../../assets/css/welcomePage.css"

const WelcomePage = () => {

  const [icon, setIcon] = useState("")

  const handleFocus = (e) => {
    console.log(e.target.className)
    const nameClass = e.target.className
    const suffix = nameClass.slice(nameClass.length-2)
    setIcon(suffix)
  }

  const handleBlur = (e) => {
    console.log("hello")
    setIcon("")
  }

  return (
    <>
    <div style={{height: '100vh'}}>
      <div className='welcome-headshot-container'>
        <div className='welcome-outer-circle'>
          <button className='welcome-q1' onFocus={(e) => handleFocus(e)} onBlur={(e) => handleBlur(e)}>{icon == "q1" ? <img className='welcome-icon-img' src={homeIcon} alt='house icon from flaticon by Kiranshastry'></img>: null}</button>
          <button className='welcome-q2'></button>
          <button className='welcome-q3'></button>
          <button className='welcome-q4'></button>
        </div>
        <img src={headshot} alt="camille's headshot" className='welcome-headshot' />
      </div>
      <div >
        <h1 className='welcome-header-text'><p className='welcome-header-part-1'>Camille Francis</p> <p className='welcome-header-part-2'>Full-Stack Cloud Developer</p></h1>
      </div>
    </div>
    
    </>
  )
}

export default WelcomePage
