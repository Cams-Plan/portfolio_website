import React, { useState } from 'react'
import TechnologiesSelectors from '../TechnologiesSelectors'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import * as logos from "../../assets/images/techLogos"
import { useSearchParams } from 'react-router-dom';

const StackFilter = ({ projectStacks, searchBar, setSearchBar, metaFilterList }) => {

    const [filteredResults, setFilteredResults] = useState([])
    const [searchParams, setSearchParams] = useSearchParams({technologies: "all", projectType: "all" });

    const stack = searchParams.get("technologies")
    const type = searchParams.get("projectType")

    const handleChange = (e) => {
        const items = .filter()
        // setSearchBar(e.target.value)
        // const filteredItems = projectStacks.filter((stack)=> stack.technology_title.includes(e.target.value) == true
        // )
        // setFilteredResults(filteredItems)
        // console.log(filteredItems)
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
    </div> */}
    {/* <Carousel responsive={responsive}>
    <div className='.card'>
        <img src={reactLogo} className="logo react" alt="React logo" />
        <h3>React Projects</h3>
    </div>
    </Carousel>; */}
    <div className='project-technologies-selector-container'>
        <TechnologiesSelectors metaFilterList={metaFilterList} />
    </div>
    {/* {filteredResults.map((result, index)=> {
        return (<h1 key={index}>hello</h1>)
    })} */}

    </>
  )
}

export default StackFilter
