import React from 'react'

import sample from "../../assets/images/projectThumbnails/studyBuddyThumbnail.png"

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
        <h3>Study App Project</h3>
        
        <div className='project-stacks-container'>
            <div className='project-stack-item'>
                <img src={logos.reactLogo} alt="" />
                <p>React</p>
            </div>
            <div className='project-stack-item'>
                <img src={logos.mongoDBLogo} alt="" />
                <p>MongoDB</p>
            </div>
            <div className='project-stack-item'>
                <img src={logos.nodeJSLogo} alt="" />
                <p>NodeJS</p>
            </div>
            <div className='project-stack-item'>
                <img src={logos.expressJSIcon} alt="" />
                <p>ExpressJS</p>
            </div>
            <div className='project-stack-item'>
                <img src={logos.jestLogo} alt="" />
                <p>Jest</p>
            </div>
            <div className='project-stack-item'>
                <img src={logos.dockerLogo} alt="" />
                <p>Jest</p>
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
