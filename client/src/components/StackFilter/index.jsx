import React, { useState } from 'react'
import TechnologiesSelectors from '../TechnologiesSelectors'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import AliceCarousel from 'react-alice-carousel';
// import 'react-alice-carousel/lib/alice-carousel.css';

import * as logos from "../../assets/images/techLogos"
import { useSearchParams } from 'react-router-dom';

const StackFilter = ({ projectStacks, metaFilterList, setSearchParams, stack, type }) => { 

  const chooseStackIcon = (tech) =>{
    
    switch (tech) {
      case "AWS":
          return (<img src={logos.AWSLogo} className="logo gold-glow" alt={`${tech} logo`} />);

      case "Flask":
          return (<img src={logos.FlaskLogo} className="logo grey-glow" alt={`${tech} logo`} />);
          
      case "Docker":
          return (<img src={logos.DockerLogo} className="logo react" alt={`${tech} logo`} />);

      case "ExpressJS":
          return (<img src={logos.ExpressJSLogo} className="logo grey-glow" alt={`${tech} logo`} />);

      case "HTML":
          return (<img src={logos.HTMLLogo} className="logo orange-glow" alt={`${tech} logo`} />);

      case "Jest":
          return (<img src={logos.JestLogo} className="logo red-glow" alt={`${tech} logo`} />);

      case "MongoDB":
          return (<img src={logos.MongoDBLogo} className="logo green-glow" alt={`${tech} logo`} />);

      case "NodeJS":
          return (<img src={logos.NodeJSLogo} className="logo green-glow" alt={`${tech} logo`} />);

      case "SQL":
          return (<img src={logos.PostgreSQLLogo} className="logo react" alt={`${tech} logo`} />);

      case "Python":
          return (<img src={logos.PythonLogo} className="logo yellow-glow" alt={`${tech} logo`} />);

      case "React":
          return (<img src={logos.ReactLogo} className="logo react" alt={`${tech} logo`} />);

      case "React Native":
          return(<img src={logos.ReactNativeLogo} className="logo react" alt={`${tech} logo`} />);

      case "Terraform":
          return (<img src={logos.TerraformLogo} className="logo purple-glow" alt={`${tech} logo`} />);

      case "Vitest":
          return (<img src={logos.VitestLogo} className="logo gold-glow" alt={`${tech} logo`} />);

      case "JavaScript":
          return (<img src={logos.JavaScriptLogo} className="logo yellow-glow" alt={`${tech} logo`} />);

      default:
          // console.log(`${tech} is not valid`)
          break;
    }
  }

  const handleFilter = (tech) => {
    switch (tech) {
      case "AWS":
          return "gold-glow";

      case "Flask":
          return "grey-glow";

      case "Docker":
          return "react";

      case "ExpressJS":
          return "grey-glow";

      case "HTML":
          return "orange-glow";

      case "Jest":
          return "red-glow";

      case "MongoDB":
          return "green-glow";

      case "NodeJS":
          return "green-glow";

      case "SQL":
          return "react";

      case "Python":
          return "yellow-glow";

      case "React":
          return "react";

      case "React Native":
          return "react";

      case "Terraform":
          return "purple-glow";

      case "Vitest":
          return "gold-glow";

      case "JavaScript":
          return "yellow-glow";

      default:
          break;
    }
  }

    const responsive = {
        desktop: {
          breakpoint: { max: 2000, min: 1024 },
          items: 7,
          slidesToSlide: 2 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 5,
          slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 3,
          slidesToSlide: 1 // optional, default to 1.
        }
      };

  return (

    // template for each icon on the filter
    <>
    <div style={{width: '100%'}}>
      <Carousel responsive={responsive}>
        {projectStacks.map((item, index) => {
          return(
            <button 
            className={stack == item.technology_title ? `stack-item-container stack-button ${handleFilter(item.technology_title)}`: 'stack-item-container stack-button'} 
            key={index}
            onClick={(e)=> setSearchParams(prev => {
              prev.get('technologies') == e.currentTarget.children[1].textContent? prev.set('technologies', "all"):
              prev.set('technologies', e.currentTarget.children[1].textContent)
              return prev
            }) }
            // onClick={(e)=> console.log(e.currentTarget.children[1].textContent)}
            >
              {chooseStackIcon(item.technology_title)}
              <h3 className={stack == item.technology_title ? `tech-text ${handleFilter(item.technology_title)}`: ''} >{item.technology_title}</h3>
            </button>
          )
        })}
        
      </Carousel>
    </div>
    <div className='project-technologies-selector-container'>
        <TechnologiesSelectors metaFilterList={metaFilterList} setSearchParams={setSearchParams} type={type} />
    </div>
    </>
  )
}

export default StackFilter
