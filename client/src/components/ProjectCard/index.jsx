import React from 'react'

import sample from "../../assets/images/headshotCrop.jpg"

import * as logos from "../../assets/images/techLogos"

import * as aiIcons from "react-icons/ai"
import * as bsIcons from "react-icons/bs"

const ProjectCard = ({ projectStacks }) => {
  return (
    <div className='card'>
        <img 
        className='project-card-img'
        src={sample}
        alt={`project`} />
        <h3>Project Name</h3>
        
        <div className='project-stacks-container'>
            <div className='project-stack-item'>
                <img src={logos.reactLogo} alt="" />
                <p>React</p>
            </div>
            <div className='project-stack-item'>
                <img src={logos.pythonIcon} alt="" />
                <p>React</p>
            </div>
        </div>
        
        <div className='project-metadata-container'>
            <div className='project-metadata-item'>
                <p>Deployed</p>
                <aiIcons.AiFillCheckCircle/>
                {/* <aiIcons.AiFillCloseCircle/> */}
            </div>
            <div className='project-metadata-item'>
                <p>Ongoing</p>
                <bsIcons.BsArrowRepeat/>
                {/* <aiIcons.AiFillClockCircle/>
                <aiIcons.AiFillCheckCircle/> */}
                {/* <aiIcons.AiFillCloseCircle/> */}
            </div>
        </div>
    </div>
  )
}

export default ProjectCard
