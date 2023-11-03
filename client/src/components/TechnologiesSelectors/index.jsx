import React from 'react'

const TechnologiesSelectors = ({ metaFilterList, setSearchParams }) => {
  
  return (
    <div className='project-metafilter-container'>
      {metaFilterList.map((filter, index) => {
        return <button className='project-metafilter-item ' onClick={(e)=> setSearchParams(prev => {
          prev.get('projectType') == e.target.textContent? prev.set('projectType', "all"):
          prev.set('projectType', e.target.textContent)
          return prev
        }) } >{filter}
      </button>
      })}
      
    </div>
  )
}

export default TechnologiesSelectors
