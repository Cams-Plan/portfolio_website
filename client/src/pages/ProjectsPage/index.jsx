import.meta.env.VITE_API_URL
import React, { useEffect, useState } from 'react'
import { ProjectCard, StackFilter } from '../../components'
import "../../assets/css/projectsStyles.css"
import { useSearchParams } from 'react-router-dom'

const ProjectsPage = () => {

  const [projectStacks, setProjectStacks] = useState([])
  const [searchBar, setSearchBar] = useState("")
  const [projectDetails, setProjectDetails] = useState([])

  const metaFilterList = ["Done", "In Progress", "On-Going"]

  const [searchParams, setSearchParams] = useSearchParams({technologies: "all", projectStatus: "all" });

  const stack = searchParams.get("technologies")
  const type = searchParams.get("projectStatus")

  //AXIOS REQUESTS
  const getAllTechStacks = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}projects/stacks`);
      
      if (response.status == 200) {
        const data = await response.json()
        setProjectStacks(data.response)
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
      const response = await fetch(`${import.meta.env.VITE_API_URL}projects/details`);
      
      if (response.status == 200) {
        const data = await response.json()
        setProjectDetails(data.response)
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
    //PROJECT_STATUS FILTER ENGAGED
    if (stack == "all" && type != "all") {
      
      filtered = projectDetails.filter((item)=> {
        return type.includes(item.progress_status)
      }).map((item, index) => {
        return <ProjectCard project={item} key={index}/>
      })

      return filtered.length == 0 ? <p>{'No projects yet for this filter...\n\n But I\'m working on it 👩🏾‍💻🛠'}</p> : filtered
      
    } // TECH STACK FILTER ENGAGED
    else if ( stack != "all" && type == "all") {
      
      filtered = projectDetails.filter((item)=> {
        let filteredStack = item.project_stack.filter((tech)=> stack.includes(tech))
        return filteredStack.length > 0 ? item : null
      }).map((item, index)=> {
        return <ProjectCard project={item} key={index}/>
      })

      return filtered.length == 0 ? <p>{'No projects yet for this filter...\n\n But I\'m working on it 👩🏾‍💻🛠'}</p> : filtered

    } // BOTH FILTERS ENGAGED
    else if (stack.length > 3 && type.length > 3 ) {
      
      filtered = projectDetails.filter((item)=> {
        let stackCheck = item.project_stack.filter((tech)=> stack.includes(tech))
        return stackCheck.length > 0 && type.includes(item.progress_status) ? item : null
      }).map((item, index)=> {
        return <ProjectCard project={item} key={index}/>
      })

      return filtered.length == 0 ? <p>{'No projects yet for this combination of filters'}</p> : filtered

    } 
    // If nothing is active/ no search params in URL
    else if (stack == type) {
      filtered = projectDetails.map((project, index) => {
        return <ProjectCard project={project} key={index}/>
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
    <div className='page-container'>
      <h1 className='page-title' >Project Portfolio</h1>
      <StackFilter projectStacks={projectStacks} 
        metaFilterList={metaFilterList} 
        setSearchParams={setSearchParams} stack={stack} type={type}
      />
      <div className='project-cards-container'>
        { filterResults(projectDetails, stack, type)
        }
      </div>
    </div>
    
    
    </>
  )
}

export default ProjectsPage
