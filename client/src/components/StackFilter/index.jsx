import React, { useState } from 'react'
import TechnologiesSelectors from '../TechnologiesSelectors'

import reactLogo from "../../assets/images/techLogos/react.svg"
import HTMLLogo from "../../assets/images/techLogos/HTMLLogo.svg"
import nodeJSLogo from "../../assets/images/techLogos/nodeJSLogo.svg"
import expressJSIcon from "../../assets/images/techLogos/expressJSIcon.svg"
import expressJSLogo from "../../assets/images/techLogos/expressJSLogo.svg"
import jestLogo from "../../assets/images/techLogos/jestLogo.svg"
import vitestLogo from "../../assets/images/techLogos/vitestLogo.svg"
import dockerLogo from "../../assets/images/techLogos/dockerLogo.svg"
import AWSLogo from "../../assets/images/techLogos/AWSLogo.svg"
import terraformLogo from "../../assets/images/techLogos/terraformLogo.svg"
import postgreSQLLogo from "../../assets/images/techLogos/postgreSQLLogo.svg"
import mongoDBLogo from "../../assets/images/techLogos/mongoDBLogo.svg"
import pythonIcon from "../../assets/images/techLogos/pythonIcon.svg"

const StackFilter = ({ projectStacks, searchBar, setSearchBar }) => {

    const [filteredResults, setFilteredResults] = useState([])

    const handleChange = (e) => {
        setSearchBar(e.target.value)
        const filteredItems = projectStacks.filter((stack)=> stack.technology_title.includes(e.target.value) == true
        )
        setFilteredResults(filteredItems)
        console.log(filteredItems)
    }

  return (

    // template for each icon on the filter
    <>
    <div >
        <img src={reactLogo} className="logo react" alt="React logo" />
        <img src={HTMLLogo} className="logo react" alt="React logo" />
        <img src={nodeJSLogo} className="logo react" alt="React logo" />
        <img src={expressJSIcon} className="logo react" alt="React logo" />
        <img src={jestLogo} className="logo react" alt="React logo" />
        <img src={vitestLogo} className="logo react" alt="React logo" />
        <img src={dockerLogo} className="logo react" alt="React logo" />
        <img src={AWSLogo} className="logo react" alt="React logo" />
        <img src={terraformLogo} className="logo react" alt="React logo" />
        <img src={postgreSQLLogo} className="logo react" alt="React logo" />
        <img src={mongoDBLogo} className="logo react" alt="React logo" />
        <img src={pythonIcon} className="logo react" alt="React logo" />
    </div>
    <TechnologiesSelectors/>
    {/* {filteredResults.map((result, index)=> {
        return (<h1 key={index}>hello</h1>)
    })} */}
    </>
  )
}

export default StackFilter
