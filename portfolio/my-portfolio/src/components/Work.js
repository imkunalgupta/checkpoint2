import './WorkCardStyles.css';
import React from 'react';
import WorkCardData from './WorkCardData';
import WorkCard from './WorkCard';

const Work = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        {WorkCardData.map((val, i) => {
          return (
            <WorkCard
              key={i}
              imgSrc={val.imgSrc}
              title={val.title}
              text={val.text}
              view={val.view}
              source={val.source}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Work;
