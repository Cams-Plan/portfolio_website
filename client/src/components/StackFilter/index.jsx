import React, { useState } from 'react'
import TechnologiesSelectors from '../TechnologiesSelectors'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import * as logos from "../../assets/images/techLogos"

const StackFilter = ({ projectStacks, searchBar, setSearchBar }) => {

    const [filteredResults, setFilteredResults] = useState([])

    const handleChange = (e) => {
        setSearchBar(e.target.value)
        const filteredItems = projectStacks.filter((stack)=> stack.technology_title.includes(e.target.value) == true
        )
        setFilteredResults(filteredItems)
        console.log(filteredItems)
    }

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };

  return (

    // template for each icon on the filter
    <>
    {/* <div className='stack-slider-container'>
        <img src={reactLogo} className="logo react" alt="React logo" />
        <img src={HTMLLogo} className="logo orange-glow" alt="React logo" />
        <img src={nodeJSLogo} className="logo green-glow" alt="React logo" />
        <img src={expressJSIcon} className="logo grey-glow" alt="React logo" />
        <img src={jestLogo} className="logo red-glow" alt="React logo" />
        <img src={vitestLogo} className="logo yellow-glow" alt="React logo" />
        <img src={dockerLogo} className="logo react" alt="React logo" />
        <img src={AWSLogo} className="logo gold-glow" alt="React logo" />
        <img src={terraformLogo} className="logo purple-glow" alt="React logo" />
        <img src={postgreSQLLogo} className="logo react" alt="React logo" />
        <img src={mongoDBLogo} className="logo green-glow" alt="React logo" />
        <img src={pythonIcon} className="logo react" alt="React logo" />
    </div> */}
    {/* <Carousel responsive={responsive}>
    <div className='.card'>
        <img src={reactLogo} className="logo react" alt="React logo" />
        <h3>React Projects</h3>
    </div>
    <div>
        <img src={HTMLLogo} className="logo orange-glow" alt="React logo" />
        <h3>HTML Projects</h3>
    </div>
    <div>
        <img src={dockerLogo} className="logo react" alt="React logo" />
        <h3>Docker Projects</h3>
    </div>
    <div>
        <img src={pythonIcon} className="logo react" alt="React logo" />
        <h3>Python Projects</h3>
    </div>
    </Carousel>; */}
    <TechnologiesSelectors/>
    {/* {filteredResults.map((result, index)=> {
        return (<h1 key={index}>hello</h1>)
    })} */}
    </>
  )
}

export default StackFilter
