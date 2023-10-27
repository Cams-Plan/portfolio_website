import React from 'react'

import sample from "../../assets/images/projectThumbnails/studyBuddyThumbnail.png"
import sample1 from "../../assets/images/projectThumbnails/gameTheoryThumbnail.png"

import * as logos from "../../assets/images/techLogos"

import * as aiIcons from "react-icons/ai"
import * as bsIcons from "react-icons/bs"

const ProjectCard = ({ project }) => {

    const chooseIcon = (tech) => {
        switch (tech) {
            case "AWS":
                return logos.AWSLogo
                break;

            case "Docker":
                return logos.DockerLogo
                break;

            case "ExpressJS":
                return logos.ExpressJSLogo
                break;

            case "HTML":
                return logos.HTMLLogo
                break;

            case "Jest":
                return logos.JestLogo
                break;

            case "MongoDB":
                return logos.MongoDBLogo
                break;

            case "NodeJS":
                return logos.NodeJSLogo
                break;

            case "PostgreSQL":
                return logos.PostgreSQLLogo
                break;

            case "Python":
                return logos.PythonLogo
                break;

            case "React":
                return logos.ReactLogo
                break;

            case "Terraform":
                return logos.TerraformLogo
                break;

            case "Vitest":
                return logos.VitestLogo
                break;

            case "JavaScript":
                return logos.JavaScriptLogo
                break;

            case "CSS":
                return logos.CSSLogo
                break;
        
            default:
                console.log("not valid")
                break;
        }
    }

    const chooseMetadata = (data, key) => {
        if (key == "deployed") {
            switch (data) {
                case true:
                    return <aiIcons.AiFillCheckCircle/>
                    break;
                
                case false:
                    return <aiIcons.AiFillCloseCircle/>
                    break;

                default:
                    break;
            }
        } else if (key == "progress_status"){
            switch (data) {
                case "Done":
                    return <aiIcons.AiFillCheckCircle/>
                    break;

                case "In Progress":
                    return <aiIcons.AiFillClockCircle/>
                    break;
                case "Ongoing":
                    return <bsIcons.BsArrowRepeat/>
                    break;
            
                default:
                    break;
            }
        }
    }

  return (
    <div className='card'>
        <img 
        className='project-card-img'
        src={sample}
        alt={`project`} />
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
                <p>Ongoing</p>
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
