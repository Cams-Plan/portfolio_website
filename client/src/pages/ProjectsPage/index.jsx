import React, { useEffect, useState } from 'react'
import { ProjectCard, StackFilter } from '../../components'
import "../../assets/css/projectsStyles.css"

const ProjectsPage = () => {

  const [projectStacks, setProjectStacks] = useState("")
  const [searchBar, setSearchBar] = useState("")
  const [projectDetails, setProjectDetails] = useState([])

  //AXIOS REQUESTS
  const getAllTechStacks = async () => {
    try {
      const response = await fetch("http://localhost:3000/stacks");
      
      if (response.status == 200) {
        const data = await response.json()
        console.log(data)
        setProjectStacks(data)

      }
      else {
        return "try error"
      }
    } catch (error) {
      console.error(error);
    }
  }
  const getAllProjects = async () => {
    try {
      const response = await fetch("http://localhost:3000/projects");
      
      if (response.status == 200) {
        const data = await response.json()
        console.log(data)
        setProjectDetails(data)

      }
      else {
        return "try error"
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getAllTechStacks()
    getAllProjects()
  },[])

  return (
    <>
    <div className='page-container'>ProjectsPage</div>
    <StackFilter projectStacks={projectStacks} searchBar={searchBar} setSearchBar={setSearchBar} />
    <div className='project-cards-container'>
      {
        projectDetails.map((project, index) => {
          return <ProjectCard project={project} />
        })
      }
    </div>
    
    
    </>
  )
}

export default ProjectsPage
