import './HeroImgStyles.css';
import '../index.css';
import DownloadResume from './DownloadResume';
import React from 'react';
import IntroImg from '../assets/hero-img.jpg';
import { Link } from 'react-router-dom';

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="intro-img" />
      </div>
      <div className="content">
        <p>
          HI, I'M KUNAL KUMAR <br /> & <br /> I'M A WEB DEVELOPER
        </p>
        <h1>Full-Stack Developer</h1>
        <div>
          <Link to="/project" className="btn">
            Projects
          </Link>
          <Link to="/contact" className="btn-light">
            Contact
          </Link>
        </div>
        <div className="download">
          <DownloadResume />
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
