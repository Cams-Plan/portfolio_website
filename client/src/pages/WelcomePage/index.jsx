import React, { useState } from 'react';
import headshot from "../../assets/images/headshotCrop.jpg";
import homeIcon from "../../assets/images/houseIcon.png";
import toolsIcon from "../../assets/images/toolsIcon.png";
import topSecretIcon from "../../assets/images/topSecretIcon.png";

import ReactCurvedText from "react-curved-text";

import "../../assets/css/welcomePage.css"

const WelcomePage = () => {

  const [icon, setIcon] = useState("")
  const [quadText, setQuadText] = useState([0, 0, 0, 0, 0, "null", true, 0])

  const handleFocus = (e) => {
    console.log(e.target.className)
    const nameClass = e.target.className
    const suffix = nameClass.slice(nameClass.length-2)
    setIcon(suffix)
  }

  const handleBlur = (e) => {
    setIcon("")
  }

  const handleHover = (e, activeIcon) => {
    //word state unchanged & not visible if icon state is truthy
    if (!activeIcon){
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
        
        break;
    
      default:
        break;
    }
    }
    
  }
  const handleExit = (e) => {
    setQuadText([0,0,0,0,0,""])
  }

  return (
    <>
    <div style={{height: '100vh'}}>
      <div className='welcome-headshot-container'>
        <ReactCurvedText
          width={321}
          height={321}
          cx={quadText[0]}
          cy={quadText[1]}
          rx={quadText[2]}
          ry={quadText[3]}
          startOffset={quadText[4]}
          text={quadText[5]}
          reversed={quadText[6]}
          textProps={{ style: { fontSize: 17, transition: 'opacity 2s', fontFamily: 'Poppins', fontWeight: 400} }}
          tspanProps={{"dy": quadText[7]}}
        />
        <div className='welcome-outer-circle'>
          <button className='welcome-q1' onMouseEnter={(e) => handleHover(e, icon)} onMouseLeave={(e) => handleExit(e)} onFocus={(e) => handleFocus(e)} onBlur={(e) => handleBlur(e)} >
          
            {icon == "q1" ? <img className='welcome-icon-img' src={homeIcon} alt='house icon from flaticon by Kiranshastry'></img>: null}
          </button>
          
          <button className='welcome-q2' onFocus={(e) => handleFocus(e)} onBlur={(e) => handleBlur(e)} >
            {icon == "q2" ? <img className='welcome-icon-img' src={toolsIcon} alt='house icon from flaticon'></img>: null}
          </button>

          <button className='welcome-q3' onFocus={(e) => handleFocus(e)} onBlur={(e) => handleBlur(e)} >
            {icon == "q3" ? <img className='welcome-icon-img' src={topSecretIcon} alt='top-secret folder icon from flaticon by Good Ware'></img>: null}
          </button>
          <button className='welcome-q4' onFocus={(e) => handleFocus(e)} onBlur={(e) => handleBlur(e)} ></button>
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
