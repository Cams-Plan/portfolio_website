import React from 'react'

const TechnologiesSelectors = ({ metaFilterList }) => {
  
  return (
    <div className='project-metafilter-container'>
      {metaFilterList.map((filter, index) => {
        return <button className='project-metafilter-item '>{filter}
      </button>
      })}
      
    </div>
  )
}

export default TechnologiesSelectors
