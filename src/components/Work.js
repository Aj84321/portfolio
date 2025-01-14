import React from "react";
import "./WorkCardStyle.css";
import ProjectCardData from "./WorkCardData";
import WorkCard from "./WorkCard";

const Work = ({imgsrc,title,text,view}) => {
  return (
    <>
      <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
            {ProjectCardData.map((val, index)=>{
                return(
                    <WorkCard
                    key={index}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    text={val.text}
                    view={val.view}
                    />
                )
            })}
        </div>
      </div>
    </>
  );
};

export default Work;
