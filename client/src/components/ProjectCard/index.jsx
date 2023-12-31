import React from 'react'

import * as thumbnails from "../../assets/images/projectThumbnails"

import * as logos from "../../assets/images/techLogos"

import * as aiIcons from "react-icons/ai"
import * as bsIcons from "react-icons/bs"
import * as io5Icons from "react-icons/io5"

const ProjectCard = ({ project }) => {

    const chooseIcon = (tech) => {
        switch (tech) {
            case "AWS":
                return logos.AWSLogo

            case "Docker":
                return logos.DockerLogo

            case "ExpressJS":
                return logos.ExpressJSLogo

            case "Flask":
                return logos.FlaskLogo

            case "0Auth":
                return logos.OAuthLogo

            case "HTML":
                return logos.HTMLLogo

            case "Jest":
                return logos.JestLogo

            case "MongoDB":
                return logos.MongoDBLogo

            case "NodeJS":
                return logos.NodeJSLogo

            case "SQL":
                return logos.PostgreSQLLogo

            case "Python":
                return logos.PythonLogo

            case "React":
                return logos.ReactLogo

            case "React Native":
                return logos.ReactNativeLogo

            case "Linux CLI":
                return logos.LinuxLogo

            case "Terraform":
                return logos.TerraformLogo

            case "Vitest":
                return logos.VitestLogo

            case "JavaScript":
                return logos.JavaScriptLogo

            case "CSS":
                return logos.CSSLogo

            case "WordPress":
                return logos.WordPressLogo
        
            default:
                // console.log(`${tech} is not valid`)
                break;
        }
    }

    const chooseMetadata = (data, key) => {
        if (key == "deployed") {
            switch (data) {
                case true:
                    return <aiIcons.AiFillCheckCircle/>
                
                case false:
                    return <aiIcons.AiFillCloseCircle/>

                default:
                    break;
            }
        } else if (key == "progress_status"){
            switch (data) {
                case "Done":
                    return <aiIcons.AiFillCheckCircle/>

                case "In Progress":
                    return < io5Icons.IoBuild/>
                case "On-Going":
                    return <bsIcons.BsArrowRepeat/>
            
                default:
                    break;
            }
        }
    }

    const chooseThumbnail = (project) => {
        switch (project) {
            case "Study App Project":
                return thumbnails.sample

            case "Educational Game Project":
                return thumbnails.gameTheoryThumbnail

            case "Basketball Training Mobile App":
                return thumbnails.basketNowThumbnail

            case "100 Days of Code Projects":
                return thumbnails.daysOfCodeThumbnail

            case "Connect 4 GUI Project":
                return thumbnails.connect4Thumbnail

            case "AWS Hosted Tech Blog":
                return thumbnails.camInTechThumbnail

            default:
                return thumbnails.florinCountyThumbnail

        }
    }
  return (
    <div className='card'>
        <a href={project.project_url} target='_blank'>
        <img 
        className='project-card-img'
        src={chooseThumbnail(project.project_title)}
        alt={`project`} />
        </a>
        <h3>{project.project_title}</h3>
        
        <div className='project-stacks-container'>
            {project.project_stack.map((technology, index) => {
                return (
                    <div className='project-stack-item' key={index}>
                        <img src={chooseIcon(technology)} alt={`${technology} logo icon representing a technology used in this project`} />
                        <p>{technology}</p>
                    </div>
                )
            })}
        </div>
        
        <div className='project-metadata-container'>
            <div className='project-metadata-item'>
                <p>Deployed</p>
                {chooseMetadata(project.deployed, "deployed")}
            </div>
            <div className='project-metadata-item'>
                <p>{project.progress_status}</p>
                {chooseMetadata(project.progress_status, "progress_status")}
            </div>
            <div className='project-metadata-item' >
                <p>{project.project_type}</p>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard
