import React from 'react'

const TechnologiesSelectors = ({ metaFilterList, setSearchParams, type }) => {
  
  return (
    <div className='project-metafilter-container'>
      {metaFilterList.map((filter, index) => {
        return <button key={index} className={type == filter ? 'project-metafilter-item filter-active': 'project-metafilter-item'} onClick={(e)=> setSearchParams(prev => {
          prev.get('projectStatus') == e.target.textContent? prev.set('projectStatus', "all"):
          prev.set('projectStatus', e.target.textContent)
          return prev
        }) } >{filter}
      </button>
      })}
      
    </div>
  )
}

export default TechnologiesSelectors
