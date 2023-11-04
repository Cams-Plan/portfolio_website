import React, { useEffect, useState } from 'react'
import { ProjectCard, StackFilter } from '../../components'
import "../../assets/css/projectsStyles.css"
import { useSearchParams } from 'react-router-dom'

const ProjectsPage = () => {

  const [projectStacks, setProjectStacks] = useState("")
  const [searchBar, setSearchBar] = useState("")
  const [projectDetails, setProjectDetails] = useState([])

  const metaFilterList = ["Full Stack", "Frontend", "Backend", "Cloud", "DevOps", "Testing"]

  const [searchParams, setSearchParams] = useSearchParams({technologies: "all", projectType: "all" });

  const stack = searchParams.get("technologies")
  const type = searchParams.get("projectType")

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

  const filterResults = (projectDetails, stack, type) => {

    let filtered;
    if (stack == "all" && type != "all") {
      filtered = projectDetails.filter((item)=> {
        return type.includes(item.project_type)
      }).map((item) => {
        return <ProjectCard project={item} key={item.id}/>
      })

      return filtered.length == 0 ? <p>{'No projects yet for this filter...\n\n But I\'m working on it 👩🏾‍💻🛠'}</p> : filtered
    } else {
      filtered = projectDetails.map((project) => {
        return <ProjectCard project={project} key={project.id}/>
      })
      return filtered
    }

  }
  useEffect(() => {
    getAllTechStacks()
    getAllProjects()
  },[])

  return (
    <>
    <div className='page-container'>ProjectsPage</div>
    <StackFilter projectStacks={projectStacks} 
      metaFilterList={metaFilterList} 
      setSearchParams={setSearchParams} 
     />
    <div className='project-cards-container'>
      { filterResults(projectDetails, stack, type)
      }
    </div>
    
    
    </>
  )
}

export default ProjectsPage
