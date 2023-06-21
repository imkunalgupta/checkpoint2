import { Link } from 'react-router-dom';
import './AboutContentStyles.css';
import reactimg from '../assets/reactimg.jpg';
import nodeimg from '../assets/nodeimg.png';

import React from 'react';

function AboutContent() {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>
          I am a full stack web developer with expertise in the MERN stack,
          gained through extensive practice on hundreds of projects and
          assignments. I am seeking a company That supports ongoing professional
          development and provides a learning-conducive environment, where I can
          utilize and enhance my skills, in order to feel fulfilled and
          accomplished in my work.
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="im-stack top">
            <img src={reactimg} alt="reactimg" className="img" />
          </div>
          <div className="im-stack bottom">
            <img src={nodeimg} alt="reactimg2" className="img" />
          </div>
        </div>
      </div>
      ;
    </div>
  );
}

export default AboutContent;
