import React, { useState } from 'react';
import headshot from "../../assets/images/headshotCrop.jpg";
import homeIcon from "../../assets/images/houseIcon.png";
import toolsIcon from "../../assets/images/toolsIcon.png";
import topSecretIcon from "../../assets/images/topSecretIcon.png";
import citLogo from "../../assets/images/citLogo.png"

import { Link, useNavigate } from 'react-router-dom';
import ReactCurvedText from "react-curved-text";
import {isMobile} from 'react-device-detect';

import "../../assets/css/welcomePage.css"


const WelcomePage = () => {
  const navigate = useNavigate()

  const [icon, setIcon] = useState("")
  const [quadText, setQuadText] = useState([0, 0, 0, 0, 0, "null", true, 0])

  const handleFocus = (e) => {
    if (!isMobile){
      //allows the text to still be visible for 
      setQuadText([0,0,0,0,0,"", false, "0"])
    }
   
    console.log(e.target.className)
    const nameClass = e.target.className
    const suffix = nameClass.slice(nameClass.length-2)
    setIcon(suffix);
  }

  const handleBlur = (e) => {
    setIcon("")
  }

  const handleClick = (e) => {
    const elAltText = e.target.alt
    const altArray = elAltText.split(" ")
    console.log(altArray)
    switch (altArray[0]) {
      case "home":
        setTimeout(() => {
          navigate("/camille")
        },300)
        
        break;

      case "projects":
        setTimeout(() => {
          navigate("/camille/projects")
        },300)
        
        break;
      
      case "secret":
        setTimeout(() => {
          navigate("/camille")
        },300)
        break;
      
      case "camintech":
        setTimeout(() => {
          window.open("https://camintech.co.uk", "_blank")
        },300)
        break;
        
      default:
        break;
    }
  }

  const handleHover = (e, activeIcon) => {
    //word state unchanged & not visible if icon state is truthy
    const nameClass = e.target.className
    const suffix = nameClass.slice(nameClass.length-2)
    if (suffix != activeIcon){
      switch (e.target.className) {
      case "welcome-q1":
        setQuadText([120, 125, 100, 100, 45, "HOME", true, "-20"])
        break;
    
      case "welcome-q2":
        setQuadText([205, 125, 90, 100, 175, "PROJECTS", true, "-20"])
        break;
    
      case "welcome-q3":
        setQuadText([160, 202, 150, 120, 300, "SECRET", false, "20"])
        break;
    
      case "welcome-q4":
        setQuadText([97, 170, 90, 130, 68, "TECH BLOG", false, "22"])
        break;
    
      default:
        break;
    }
    }    
  }
  const handleExit = (e) => {
    setQuadText([0,0,0,0,0,"", false, "0"])
  }

  const handleImageClick = () => {
    setIcon("all")
  }

  return (
    <>
    <div style={{height: '100vh'}}>
      <div className='welcome-headshot-container'>
        <ReactCurvedText
          width={321}
          height={327}
          cx={quadText[0]}
          cy={quadText[1]}
          rx={quadText[2]}
          ry={quadText[3]}
          startOffset={quadText[4]}
          text={quadText[5]}
          reversed={quadText[6]}
          textProps={{ style: { fontSize: 17, transition: 'opacity 2s', fontFamily: 'Poppins', fontWeight: 400} }}
          textPathProps={{fill: "#faebd7"}}
          tspanProps={{"dy": quadText[7]}}
          svgProps={{className: "welcome-curved-text"}}
        />
        <div className='welcome-outer-circle'>
          <button className='welcome-q1' 
            onMouseEnter={(e) => handleHover(e, icon)} 
            onMouseLeave={(e) => handleExit(e)} 
            onFocus={(e) => handleFocus(e)} 
            onBlur={(e) => handleBlur(e)} 
          >
            {icon == "q1" || icon == "all" ? <img 
            className='welcome-icon-img' 
            src={homeIcon} 
            onClick={(e) => handleClick(e)}
            alt='home icon from flaticon by Kiranshastry'></img>: null}
          </button>
          
          <button className='welcome-q2'
            onMouseEnter={(e) => handleHover(e, icon)} 
            onMouseLeave={(e) => handleExit(e)} 
            onFocus={(e) => handleFocus(e)} 
            onBlur={(e) => handleBlur(e)} 
          >
            {icon == "q2" || icon == "all" ? <img className='welcome-icon-img' src={toolsIcon} onClick={(e) => handleClick(e)} alt='projects icon from flaticon'></img>: null}
          </button>

          <button className='welcome-q3' 
            onMouseEnter={(e) => handleHover(e, icon)} 
            onMouseLeave={(e) => handleExit(e)} 
            onFocus={(e) => handleFocus(e)} 
            onBlur={(e) => handleBlur(e)} 
          >
            {icon == "q3" ? <img className='welcome-icon-img' src={topSecretIcon} onClick={(e) => handleClick(e)} alt='secret folder icon from flaticon by Good Ware'></img>: null}
          </button>
          <button className='welcome-q4' 
            onMouseEnter={(e) => handleHover(e, icon)} 
            onMouseLeave={(e) => handleExit(e)}
            onFocus={(e) => handleFocus(e)} 
            onBlur={(e) => handleBlur(e)} 
          >
            {icon == "q4" ? <img className='welcome-icon-img' src={citLogo} onClick={(e) => handleClick(e)} alt='camintech blog logo'></img>: null}
          </button>
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
